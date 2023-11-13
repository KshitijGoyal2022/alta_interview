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
    imgUrl: string,
    title: string,
}

const CardContainer = styled.div`
   background-image: url(${props => props.imgUrl});
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

`

const FoodCard = ({imgUrl, title}:FoodCardProps) => {
  
    return (
        <div>
            <CardContainer imgUrl={imgUrl} />

            <TitleContainer>
                {title}
            </TitleContainer>

        </div>
    );
};
export default FoodCard
