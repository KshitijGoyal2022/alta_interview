import { useSelector } from "react-redux"
import styled from "styled-components"

import { ProfilePicture } from "./FoodCard"

//Styled component for a flex container with a row direction
const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    margin-right: 30px;

    margin-top: 10px;
    margin-bottom: 10px;
`
// Styled component for the creator's name
const CreatorNameStyle = styled.div`
  color: grey;
  font-weight: bold;
  font-size: 17px;
  font-family: 'Roboto', sans-serif;
  margin-left: 10px;
`
//Draws the line that divides the middle section from the food section. 
const MiddleBarContainer = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 27px;  
    right: 27px; 
    bottom: 0;
    border-bottom: 1px solid #A9A9A9;
  }
`;
const MiddleBar = () => {

  // Retrieving data, status, and error from the Redux store
  const { data, status, error } = useSelector((state:any) => state.apiData);

  // Handling errors if the API call fails
  if (status === 'failed') {
    return <div>Error:  {error}</div>;
  }
  
  // Retrieving food data from the Redux store
  const foodData = useSelector((state:any) => {
    return state.apiData
  })


  return (

      <div>
        {/* Container for the creator's information */}
        <RowContainer>
          
          <CreatorNameStyle>
            di
          </CreatorNameStyle>
      
          {/* Displaying the profile picture of the creator */}
          <ProfilePicture mugshotUrl = {foodData.data.creator.mugshot} /> 

          {/* Displaying the name of the creator */}
          <CreatorNameStyle>
            {foodData.data.creator.name}
          </CreatorNameStyle>

        </RowContainer>
      
        {/* Container for the middle bar that visually divides sections */}
        <MiddleBarContainer /> 

    </div>
  )
}

export default MiddleBar