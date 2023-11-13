import Image from 'next/image'

import styled from 'styled-components'
import Bookmark from './Bookmark';


interface FoodCardProps{
    imgUrl: string,
    title: string,
}

const CardContainer = styled.div`
   background-image: url(${props => props.imgUrl});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;

   height: 300px;
   width: 200px;
   border-radius: 20px;

   margin : 25px;   

`

const FoodCard = ({imgUrl, title}:FoodCardProps) => {
  
    return (
        <div>
            <CardContainer imgUrl={imgUrl}>
                <Bookmark />
            </CardContainer>
            <p>{title}</p>

        </div>
    );
};
export default FoodCard
