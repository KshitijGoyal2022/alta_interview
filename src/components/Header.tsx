import styled from 'styled-components';
import Image from 'next/image'

import {BiFork} from 'react-icons/bi'
import {AiOutlineLock} from 'react-icons/ai'
import {AiOutlineEllipsis}  from 'react-icons/ai'
import {FaCircle} from 'react-icons/fa'

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
    border-bottom: 1px solid #A9A9A9;
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

   &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

`
//Contains the info on the right side of the header
const EllipsisIcon = styled.div`
    margin-top: 25px;
    margin-right: 25px;
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
    margin-right: 10px;
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

//Arranges the elements in a row
const RowContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const RecipePathContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 10px;
`

const PrivataLockContainer = styled.div`
    color: grey;
    margin-right: 20px;
    margin-left: 20px;
`
//Header component
const Header = () => {
  return (
    <GridContainer> 

        {/* Left Hand Size - Blue Acrumi Image */}
        <AcrumiImageContainer>
            <ResponsiveImage src="/agrumi.png" width={650} height={650} alt="acrumi logo" />
        </AcrumiImageContainer >
            
        
        {/* Right Hand Size - Recipe Info */}
        <div>

            {/* Recipe Path - Raccolte / Ricette con gli agrumi */}
            <RecipePathContainer>
                <div>
                    <RowContainer>
                        <FoodCollectionTitle>
                            <p>RACCOLTE</p> 
                        </FoodCollectionTitle>
                        <RecipeSubtitle>
                            <p>/  RICETTE CON GLI AGRUMI</p>
                        </RecipeSubtitle>
                    </RowContainer>
                </div>
                <div>
                    <EllipsisIcon >
                        <AiOutlineEllipsis size={25} color="grey"/>
                    </EllipsisIcon>
                </div>
            </RecipePathContainer>
        
            {/* Recipe Title - Ricette con gli agrumi */}
            <CenteredContentContainer>
                <RecipeTitle>
                    Ricette con gli agrumi
                </RecipeTitle>
                <RowContainer>
                    <PrivataLockContainer>
                        <BiFork color="grey" />
                        12 Ricette
                    </PrivataLockContainer>
                    <div>
                        <FaCircle size={4} color="grey" />
                    </div>
                    <PrivataLockContainer>
                        <AiOutlineLock color="grey" />
                        Privata
                    </PrivataLockContainer>
                </RowContainer>
            </CenteredContentContainer>
        </div>

    </GridContainer>
  ) 
}

export default Header