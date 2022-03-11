import React from "react"
import jsonData from "../data.json"
import PropTypes from "prop-types";
import styled from "styled-components"

const MenuItem = styled.li`
  cursor: pointer;
  
  :hover {
    background-color: lightskyblue;
    font-style: oblique;
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
                  onClick={() => {
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