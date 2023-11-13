import FoodCard from "./FoodCard"
import styled from 'styled-components'

import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchApiData} from '../redux/store/actions/apiDataSlice'

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;


const FoodSection = () => {
  const dispatch = useDispatch();

  const { status, data } = useSelector((state) => state.apiData);

    try{
      useEffect(()=>{
          dispatch(fetchApiData())
        },[dispatch])
    }catch(e){
      return <div>e</div>
    }

  const foodData = useSelector((state) => {
    console.log("state..." , state.apiData)
    return state.apiData
  })

  
  if (status === 'loading' || status === 'idle') {
    return <div>Loading...</div>;
  }

  return (
      <div>

        <GridContainer>
          {foodData && foodData.data.items.map((ele)=>(
                <FoodCard title={ele.title} cardUrl={ele.image.original.url} mugshotUrl={foodData.data.creator.mugshot} userName={foodData.data.creator.name} />
                    // <p>{ele.image.original.url}</p>
        ))}
        </GridContainer >
   


      </div> 

  )
}

export default FoodSection