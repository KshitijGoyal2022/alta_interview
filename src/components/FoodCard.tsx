import Image from 'next/image'

import styled from 'styled-components'
import {BsBookmark} from 'react-icons/bs'
import {MdVerified} from 'react-icons/md'

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`

interface FoodCardProps{
    cardUrl: string,
    title: string,
    mugshotUrl: string,
    userName: string,
    isVerified : boolean;
    bookmarkNo : number;
}

const CardWrapper = styled.div`
  position: relative;
`;

const CardContainer = styled.div`
   position: relative;
   background-image: url(${props => props.cardUrl});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;

   height: 230px;
   width: 200px;
   border-radius: 20px;

   margin : 25px 25px 10px 25px; 

   transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

   &:hover {
     transform: scale(1.1);
     opacity: 0.8;
     cursor: pointer;
   }
    
`

const TitleContainer = styled.div`
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin-left: 25px; 
    margin-bottom: 15px;
    max-width: 200px;
    
`

export const ProfilePicture = styled.div`
   background-image: url(${props => props.mugshotUrl});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;

   height: 30px;
   width: 30px;
   margin-left: 25px;

   border: 1px solid #A9A9A9;
   border-radius: 50%;


`
const UserNameStyle = styled.div`

    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: grey;
    margin-right: 10px;
    margin-left: 8px;
`
const BookMarkStyle = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    bottom: 10px;
    left: 30px;

    background: rgba(0, 0, 0, 0.6);
    border-radius: 35px;
    padding: 10px;

    &:hover {
        background: rgba(0, 0, 0, 1);
        cursor: pointer;
      }

`
const BookmarkNumberStyle = styled.div`
    color: white;
    margin-left: 5px;
`

const FoodCard = ({cardUrl, title, mugshotUrl,userName, isVerified, bookmarkNo}:FoodCardProps) => {
  
    return (
        <div>
            <CardWrapper>
                <CardContainer cardUrl={cardUrl} />
                <BookMarkStyle>
                    <div>
                        <BsBookmark color="white" size={12}/>
                    </div>
                    <BookmarkNumberStyle>
                        {bookmarkNo}
                    </BookmarkNumberStyle>
                </BookMarkStyle>
            </CardWrapper>
            

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
