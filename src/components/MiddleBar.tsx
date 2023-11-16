import { useSelector } from "react-redux"
import styled from "styled-components"

import { ProfilePicture } from "./FoodCard"

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    margin-right: 30px;

    margin-top: 10px;
    margin-bottom: 10px;
    

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

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

const CreatorNameStyle = styled.div`
  color: grey;
  font-weight: bold;
  font-size: 17px;
  font-family: 'Roboto', sans-serif;
  margin-left: 10px;

`
const MiddleBar = () => {
  
  const foodData = useSelector((state:any) => {
    return state.apiData
  })


  return (

      <div>
        <RowContainer>
          <CreatorNameStyle>
            di
          </CreatorNameStyle>
          
          <ProfilePicture mugshotUrl = {foodData.data.creator.mugshot} />
          <CreatorNameStyle>
            {foodData.data.creator.name}
          </CreatorNameStyle>
        </RowContainer>
      
        <MiddleBarContainer />
    </div>
  )
}

export default MiddleBar