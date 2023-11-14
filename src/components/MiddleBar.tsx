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
const MiddleBar = () => {
  
  const foodData = useSelector((state) => {
    return state.apiData
  })


  return (

      <div>
        <RowContainer>
          <ProfilePicture mugshotUrl = {foodData.data.creator.mugshot} />
          {foodData.data.creator.username}
        </RowContainer>
      
        <MiddleBarContainer />
    </div>
  )
}

export default MiddleBar