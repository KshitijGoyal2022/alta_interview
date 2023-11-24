import styled from 'styled-components'
import {BsBookmark} from 'react-icons/bs'
import { IoMdBookmark } from "react-icons/io";
import {MdVerified} from 'react-icons/md'


import {useState} from 'react'

// Interface defining the props for the FoodCard component
interface FoodCardProps{
    cardUrl: string,
    title: string,
    mugshotUrl: string,
    userName: string,
    isVerified : boolean;
    initialBookmarkNo : number;
}

// Interface defining additional style-related props for the styled components
interface StyleProps {
    cardUrl?: string;
    mugshotUrl?: string;

  }
// Styled component for a flex container with a row direction
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

// Styled component for the food card such that bookmark placed on top of the card
export const CardWrapper = styled.div`
  position: relative;
`;

// Styled component for the food card with dynamic background image
export const CardContainer = styled.div<StyleProps>`
  position: relative;
  background-image: url(${(props) => props.cardUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 290px;
  width: 230px;
  border-radius: 20px;

  margin: 25px 25px 10px 25px;

  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
    cursor: pointer;
  }
`;

// Styled component for the recipe title
export const RecipeTitle = styled.div`
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  margin-left: 25px;
  margin-bottom: 15px;
  max-width: 230px;
`;

// Styled component for the profile picture
export const ProfilePicture = styled.div<StyleProps>`
  background-image: url(${(props) => props.mugshotUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 30px;
  width: 30px;
  margin-left: 25px;

  border: 1px solid #a9a9a9;
  border-radius: 50%;
`;

// Styled component for the username
export const UserNameStyle = styled.div`
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: grey;
  margin-right: 10px;
  margin-left: 8px;
`;

// Styled component for the bookmark section
export const BookMarkStyle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 9px;
  left: 33px;

  background: rgba(0, 0, 0, 0.6);
  border-radius: 35px;
  padding: 10px;

  &:hover {
    background: rgba(0, 0, 0, 1);
    cursor: pointer;
  }
`;

// Styled component for the bookmark number
export const BookmarkNumberStyle = styled.div`
  color: white;
  margin-left: 5px;
`;

const FoodCard = ({cardUrl, title, mugshotUrl,userName, isVerified, initialBookmarkNo}:FoodCardProps) => {
  
  const [bookmark, setBookmark] = useState(false);
  const [bookmarkNo, setBookmarkNo] = useState(initialBookmarkNo);

  const handleBookmarkClick = () => {
    if (bookmark) {
      setBookmarkNo(bookmarkNo - 1);
    } else {
      setBookmarkNo(bookmarkNo + 1);
    }
    setBookmark(!bookmark);
  };
  
    return (
        <div>

            <CardWrapper>
                <CardContainer cardUrl={cardUrl} />
                <BookMarkStyle onClick={handleBookmarkClick}>
                    <div>
                        {bookmark? <IoMdBookmark color="white" size={15}/> : <BsBookmark color="white" size={12}/> }{/* Bookmark icon */}
                    </div>
                    <BookmarkNumberStyle>
                        {bookmarkNo}
                    </BookmarkNumberStyle>
                </BookMarkStyle>
            </CardWrapper>
            

            <RecipeTitle>
                {title}
            </RecipeTitle>

           <RowContainer>
                <ProfilePicture mugshotUrl ={mugshotUrl} />
                <UserNameStyle>{userName}</UserNameStyle>
                {isVerified && <MdVerified color="dodgerblue" size={14}/>}
           </RowContainer>  

        </div>
    );
};
export default FoodCard
