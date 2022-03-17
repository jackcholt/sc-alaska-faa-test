import React from "react"
import jsonData from "../data.json"
import PropTypes from "prop-types";
import styled from "styled-components"

const MenuItem = styled.li`
  cursor: pointer;
  color: ${({disabled}) => disabled ? "grey" : "black"};
  
  :hover {
    background-color: ${({disabled}) => disabled ? null : "lightskyblue"};
    font-weight: ${({disabled}) => !disabled && "bold"};
  }
`

const Container = styled.div`
  height: 100%;
  border-right: 1px;
  border-right-style: solid;
  width: 172px;
  float: left;
  margin-left: 0;
`
const Menu = (props) => {
  const {setSource, setMapData} = props

  return (
      <Container>
        <ul>
          {jsonData.map((item) =>
              <MenuItem
                  key={item.src}
                  disabled={item.disabled}
                  onClick={() => {
                    if (item.disabled) {
                      return
                    }
                    setSource(item.src)
                    setMapData(item.hovers)
                  }}>
                {item.name}
              </MenuItem>
          )}
        </ul>
      </Container>
  )
}

export default Menu

Menu.propTypes = {
  setSource: PropTypes.func,
  setMapData: PropTypes.func
}