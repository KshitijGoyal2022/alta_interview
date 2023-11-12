import styled from 'styled-components';
import Image from 'next/image'
import {BiFork} from 'react-icons/bi'
import {AiOutlineLock} from 'react-icons/ai'

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px; 
`;

const AcrumiContainer = styled.div`
    margin: 0 auto;
    border-radius: 10px;
`
const CollectionTitle = styled.div`
    font-size: 10px;
    color: #A9A9A9;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
`
const RecipeSubtitle = styled.div`
    font-size: 10px;
    color: #808080;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
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



const Header = () => {
  return (
    <GridContainer> 
        <AcrumiContainer>
            <Image src="/agrumi.png" width={600} height={600} alt="acrumi logo" />
        </AcrumiContainer >
        <div>
            <RowContainer>
                <CollectionTitle>
                    RACCOLTE 
                </CollectionTitle>
                <RecipeSubtitle>
                    / RICETTE CON GLI AGRUMI
                </RecipeSubtitle>
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