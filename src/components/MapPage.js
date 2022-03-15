import React, {useState} from "react"
import Map from "./Map"
import Menu from "./Menu"

import styled from "styled-components"
import PropTypes from "prop-types";

const Container = styled.div`
  position: relative;
`
const StyledMap = styled(Map)`
  width: 75%;
  height: 100%;
  float: right;
  position: absolute;
`

const SelectMessage = styled.div`
  width: 75%;
  height: 100%;
  float: right;
  padding: 2rem;
  font-weight: bold;
  font-size: 2em;
`

const StyledMenu = styled(Menu)`
  width: 25%;
  float: left;
`
const MapPage = () => {

  console.log("In MapPage")
  const [source, setSource] = useState("")
  const [mapData, setMapData] = useState(null)

  return (
      <Container>
        <StyledMenu
            setSource={setSource}
            setMapData={setMapData}
        >
          Menu
        </StyledMenu>
        {!source ?
            <SelectMessage>
              Please select a map
            </SelectMessage>
            :
            <StyledMap
                src={source}
                hovers={mapData}
            />
        }
      </Container>
  )
}

export default MapPage

MapPage.propTypes = {
  src: PropTypes.string,
  data: PropTypes.object
}