import {useSelector,useDispatch} from 'react-redux'
import {fetchApiData} from '../redux/store/actions/apiDataSlice'
import Image from 'next/image'

const FoodCard = () => {
    const dispatch = useDispatch();
    return (
        <div>
            {/* Hello
            <button onClick={()=>dispatch(fetchApiData())}>Get Food info</button> */}
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