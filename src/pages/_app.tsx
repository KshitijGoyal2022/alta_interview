import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import  store  from '../redux/store'; // Import your Redux store
import type { AppProps } from "next/app";

const GlobalStyle = createGlobalStyle`

`;

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;