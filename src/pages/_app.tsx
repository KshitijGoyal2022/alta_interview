import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../redux/store'; // Import your Redux store
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApiData } from '../redux/store/actions/apiDataSlice';
import { AppDispatch } from '../redux/store';

const GlobalStyle = createGlobalStyle``;

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch<AppDispatch>();
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
