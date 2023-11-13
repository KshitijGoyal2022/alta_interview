import Image from 'next/image'

import styled from 'styled-components'
import {BsBookmark} from 'react-icons/bs'

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`


interface FoodCardProps{
    cardUrl: string,
    title: string,
    mugshotUrl: string,
}

const CardContainer = styled.div`
   background-image: url(${props => props.cardUrl});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;

   height: 230px;
   width: 200px;
   border-radius: 20px;

   margin : 25px 25px 10px 25px;   

`

const TitleContainer = styled.div`
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin-left: 25px; 
    min-height: 70px;
`

const ProfilePicture = styled.div`
   background-image: url(${props => props.mugshotUrl});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;

   height: 40px;
   width: 40px;
   border-radius: 50%;

   margin-left: 15px;

`

const FoodCard = ({cardUrl, title, mugshotUrl}:FoodCardProps) => {
  
    return (
        <div>
            <CardContainer cardUrl={cardUrl} />

            <TitleContainer>
                {title}
            </TitleContainer>

            <ProfilePicture mugshotUrl ={mugshotUrl} />

        </div>
    );
};
export default FoodCard
