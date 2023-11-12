import styled from 'styled-components';
import Image from 'next/image'
import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchApiData} from '../redux/store/actions/apiDataSlice'

import {BiFork} from 'react-icons/bi'
import {AiOutlineLock} from 'react-icons/ai'
import {AiOutlineEllipsis}  from 'react-icons/ai'

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px; 
  position: relative; 

  &:after { 
    content: '';
    position: absolute;
    left: 7%; 
    right: 7%; 
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

const AcrumiContainer = styled.div`
    
    margin-left: 90px; 
    border-radius: 10px;

`
const InfoContainer = styled.div`
    margin-right: 100px;
`
const CollectionTitle = styled.div`
    font-size: 10px;
    color: #A9A9A9;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin-top: 10px;
`
const RecipeSubtitle = styled.div`
    font-size: 10px;
    color: #808080;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
    margin-top: 10px;
`

const RecipeTitle = styled.div`
    font-size: 30px;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
`

const CenteredContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ResponsiveImage = styled(Image)`
    width: 100%;
    height: auto;
`;


const Header = () => {
    const dispatch = useDispatch();
    useEffect(()=>{

        dispatch(fetchApiData())
    
      },[])

  return (
    <GridContainer> 
        <AcrumiContainer>
            <ResponsiveImage src="/agrumi.png" layout="responsive" width={650} height={650} alt="acrumi logo" />
        </AcrumiContainer >
        <InfoContainer>
            <RowContainer>
                <CollectionTitle>
                    RACCOLTE 
                </CollectionTitle>
                <RecipeSubtitle>
                    / RICETTE CON GLI AGRUMI
                </RecipeSubtitle>
                <AiOutlineEllipsis />
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
        </InfoContainer>
    </GridContainer>
  ) 
}

export default Header