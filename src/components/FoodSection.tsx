import FoodCard from "./FoodCard"
import styled from 'styled-components'

import {useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchApiData} from '../redux/store/actions/apiDataSlice'
import { fetchCreatorData } from "@/redux/store/actions/creatorInfoDataSlice"


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;


const FoodSection = () => {
  
  const foodData = useSelector((state) => {
    return state.apiData
  })
  
  return (
      <div>
        <GridContainer>
          {foodData && foodData.data.items.map((ele)=>(
                <FoodCard 
                  key={ele.id} 
                  title={ele.title} 
                  cardUrl={ele.image.original.url} 
                  mugshotUrl={ele.creator.mugshot} 
                  userName={ele.creator.name}
                  isVerified={ele.creator.verified} />
  
        ))}
        </GridContainer >
   
      </div> 

  )
}

export default FoodSection