import Image from 'next/image'

import styled from 'styled-components'
import {BsBookmark} from 'react-icons/bs'
import {MdVerified} from 'react-icons/md'

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

interface FoodCardProps{
    cardUrl: string,
    title: string,
    mugshotUrl: string,
    userName: string,
    isVerified : boolean;
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
    min-height: 80px;
`

const ProfilePicture = styled.div`
   background-image: url(${props => props.mugshotUrl});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;

   height: 30px;
   width: 30px;
   border-radius: 50%;

   margin-left: 25px;
`
const UserNameStyle = styled.div`

    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: grey;
    margin-right: 10px;
    margin-left: 8px;
    
`

const FoodCard = ({cardUrl, title, mugshotUrl,userName, isVerified}:FoodCardProps) => {
  
    return (
        <div>
            <CardContainer cardUrl={cardUrl} />

            <TitleContainer>
                {title}
            </TitleContainer>

           <RowContainer>
                <ProfilePicture mugshotUrl ={mugshotUrl} />
                <UserNameStyle>{userName}</UserNameStyle>
                {isVerified && <MdVerified color="dodgerblue" size={14}/>}
                
           </RowContainer>
            
        </div>
    );
};
export default FoodCard
