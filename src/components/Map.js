import React from "react"

import styled from "styled-components"
import PropTypes from "prop-types"
import HoverRegion from "./HoverRegion";

const Image = styled.img`
  position: absolute;
`

const Region = styled(HoverRegion)`
  position: absolute;
`
const Map = (props) => {
  const {src, hovers} = props

  let index = 1
  return (
      <>
        <Image
            alt="FAA Map"
            src={src}
        />
        {hovers.map((hover) =>
            <Region
                key={index++}
                top={hover.top}
                left={hover.left}
                width={hover.width}
                height={hover.height}
                label={hover.label}
                label2={hover.label2}
                debug={hover.debug}
            >
              {hover.label}
              (hover.label2 && (<br/>hover.label2))
            </Region>
        )}
      </>
  )
}

export default Map

Map.propTypes = {
  src: PropTypes.string.isRequired,
  hovers: PropTypes.arrayOf(
      PropTypes.shape(
          {
            top: PropTypes.number.isRequired,
            left: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            label2: PropTypes.string,
            height: PropTypes.number,
            width: PropTypes.number,
            debug: PropTypes.bool
          }
      )
  ).isRequired
}