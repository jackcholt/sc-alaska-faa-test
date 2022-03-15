import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Region = styled.div`
  position: absolute;
  top: ${({top}) => top}px;
  left: ${({left}) => left}px;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  border: 1px solid;
  border-radius: 5px;
  opacity: ${({debug}) => debug ? 1 : 0};
  font-family: sans-serif;
  padding: .5rem;
  background: white;
  color: black;
  
  :hover {
    opacity: 1;
  }
`
const HoverRegion = (props) => {
  const {left, top, width, height, label, label2, debug} = props

  return (
      <Region
          left={left}
          top={top}
          width={width}
          height={height}
          debug={debug}
      >
        {label}
        {label2 && (<p>{label2}</p>)}
      </Region>
  )
}

export default HoverRegion

HoverRegion.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  label: PropTypes.string,
  label2: PropTypes.string,
  debug: PropTypes.bool
}

HoverRegion.defaultProps = {
  debug: false,
  width: 40,
  height: 20
}
