import FoodCard from "./FoodCard"
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'



const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`;

const FoodSection = () => {
  // Retrieving data, status, and error from the Redux store
  const { data, status, error } = useSelector((state:any) => state.apiData);

  // Handling errors if the API call fails
  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // Retrieving food data from the Redux store
  const foodData = useSelector((state:any) => {
    return state.apiData
  })
  
  return (
      <div>
        <GridContainer>
          {/* Generating the foodcards */}
          {foodData && foodData.data.items.map((ele:any)=>(
                <FoodCard 
                  key={ele.id} 
                  title={ele.title} 
                  cardUrl={ele.image.original.url} 
                  mugshotUrl={ele.creator.mugshot} 
                  userName={ele.creator.name}
                  isVerified={ele.creator.verified}
                  bookmarkNo={ele.bookmarks_count} />
  
        ))}
        </GridContainer >
   
      </div> 

  )
}

export default FoodSection