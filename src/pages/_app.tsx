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
  const { status, data } = useSelector((state) => state.apiData);

  useEffect(() => {
    try {
      dispatch(fetchApiData());
    } catch (error) {
      console.error(error);
    }
  }, []);

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
