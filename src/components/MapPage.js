import React, {useState} from "react"
import Map from "./Map"
import Menu from "./Menu"

import styled from "styled-components"
import PropTypes from "prop-types";

const StyledMap = styled(Map)`
  width: 75%;
  height: 100%;
  float: right;
`

const SelectMessage = styled.div`
  width: 75%;
  height: 100%;
  float: right;
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
      <>
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
      </>
  )
}

export default MapPage

MapPage.propTypes = {
  src: PropTypes.string,
  data: PropTypes.object
}