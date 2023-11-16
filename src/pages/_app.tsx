import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Import your Redux store
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiData } from '../redux/store/actions/apiDataSlice';

const GlobalStyle = createGlobalStyle``;

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state:any) => state.apiData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchApiData());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  if (status === 'loading' || status === 'idle') {
    return <div>Loading...</div>;
  }

  //const dispatch = useDispatch();
  // const { status, data } = useSelector((state) => state.apiData);
  // const { recipeStatus, recipeData } = useSelector((recipeState) => recipeState.creatorInfoData);

  // const foodData = useSelector((foodstate) => foodstate.apiData);

  // const fetchAllData = () => {
  //   dispatch(fetchApiData());
  // };

  // useEffect(() => {
  //   fetchAllData();

  //   // Use optional chaining to avoid errors if any part of the path is null or undefined
  //   foodData?.data?.items?.forEach((ele) => {
  //     dispatch(fetchCreatorData(ele.creator));
  //   });
  // }, []); // Add foodData as a dependency

  // if (status === 'loading' || status === 'idle') {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default function AppWrapper(props: AppProps) {
  return (
    <Provider store={store}>
      <MyApp {...props} />
    </Provider>
  );
}
