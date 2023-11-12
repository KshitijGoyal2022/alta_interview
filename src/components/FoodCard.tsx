import Image from 'next/image'

import styled from 'styled-components'

const CardContainer = styled.div`
   background-image: url('/agrumi.png');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;

   height: 300px;
   width: 250px;
   border-radius: 20px;

   margin : 20px;

`


const FoodCard = () => {
  
    return (
        <div>
            <CardContainer>

            </CardContainer>
            
        </div>
    );
};
export default FoodCard


// {apiData && apiData.map(item => (
//     <div key={item.id}>
//       {/* Replace 'item.property' with actual properties from your data */}
//       <h2>{item.property}</h2>
//     </div>
//   ))}