import React from "react"

//import styled from "styled-components"
import PropTypes from "prop-types"

const Map = (props) => {
  const {src, hovers} = props

  let index = 1
  return (
      <>
        <img
            alt="FAA Map"
            src={src}
        />
        {hovers.map(() =>
          <div key={index++}>Map hover item</div>
        )}
      </>
  )
}

export default Map

Map.propTypes = {
  src: PropTypes.string,
  hovers: PropTypes.object
}