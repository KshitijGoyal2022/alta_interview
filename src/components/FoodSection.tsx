import FoodCard from "./FoodCard"
import styled from 'styled-components'

import {useSelector} from 'react-redux'

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;


const FoodSection = () => {

  const foodData = useSelector((state) => {
    console.log("state..." , state.apiData)
    return state.apiData
  })

  return (

      <GridContainer>

        {foodData.data.items.map((ele)=>(
                <FoodCard title={ele.title} imgUrl={ele.image.original.url} />
                  // <p>{ele.image.original.url}</p>
      ))}
      </GridContainer >

  )
}

export default FoodSection