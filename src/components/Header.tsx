import styled from 'styled-components';
import Image from 'next/image'
import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchApiData} from '../redux/store/actions/apiDataSlice'

import {BiFork} from 'react-icons/bi'
import {AiOutlineLock} from 'react-icons/ai'
import {AiOutlineEllipsis}  from 'react-icons/ai'

//Splits the header into 2 columns (2 grids - image and info)
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px; 
  position: relative; 

  &:after { 
    content: '';
    position: absolute;
    left: 2%; 
    right: 2%; 
    bottom: 0;
    border-bottom: 2px solid #A9A9A9;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    &:after {
        left: 3%; 
        right: 3%; 
    }
`;

//Contains the Blue Acrumi Image
const AcrumiImageContainer = styled.div`
    margin-left: 10px; 
    border-radius: 10px;

`
//Contains the info on the right side of the header
const ElipsisIcon = styled.div`
    margin-top: 25px;
    height: 10px;
    width: 10px;
    
`
//Contains the title of an entire abstract food collection - in this case (Raccolte - Harvested)
const FoodCollectionTitle = styled.div`
    font-size: 15px;
    color: #A9A9A9;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin-top: 10px;
`
//Contains the title of a recipe in the small path after the food collection title - in this case (Ricette con gli agrumi - Recipes with citrus fruits)
const RecipeSubtitle = styled.div`
    font-size: 15px;
    color: #808080;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
    margin-top: 10px;
`
//Contains the title of a recipe as a header - in this case (Ricette con gli agrumi - Recipes with citrus fruits)
const RecipeTitle = styled.div`
    font-size: 40px;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
`
//Centers the content of a container both horizontally and vertically
const CenteredContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

//Updates Image Size as screen size changes
const ResponsiveImage = styled(Image)`
    width: 100%;
    height: auto;
`;

//Arranves the elements in a row
const RowContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`


const Header = () => {
    const dispatch = useDispatch();
    const { status, data } = useSelector((state) => state.apiData);

    try{
        useEffect(()=>{
            dispatch(fetchApiData())
          },[dispatch])
    }catch(e){
        return <div>e</div>
    }
    

      if (status === 'loading' || status === 'idle') {
        return <div>Loading...</div>;
      }

  return (
    <GridContainer> 
        <AcrumiImageContainer>
            <ResponsiveImage src="/agrumi.png" width={650} height={650} alt="acrumi logo" />
        </AcrumiImageContainer >

        <div>

            <RowContainer>
                <div>
                    <div>
                        <FoodCollectionTitle>
                            <p>RACCOLTE</p> 
                        </FoodCollectionTitle>
                        <RecipeSubtitle>
                            <p>/ RICETTE CON GLI AGRUMI</p>
                        </RecipeSubtitle>
                    </div>
                    <div>
                        <ElipsisIcon>
                            <AiOutlineEllipsis />
                        </ElipsisIcon>
                    </div>
                </div>
            </RowContainer>

            <CenteredContentContainer>
                <RecipeTitle>
                    Ricette con gli agrumi
                </RecipeTitle>
                <RowContainer>
                    <div>
                        <BiFork />
                        12 Ricette
                    </div>
                    <div>
                        <AiOutlineLock />
                        Privata
                    </div>
                </RowContainer>
            </CenteredContentContainer>

        </div>
    </GridContainer>
  ) 
}

export default Header