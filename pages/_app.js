import React from 'react';
import GlobalStyle from '../src/styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

const theme = {
  primaryColor: '#01baae',
  secondaryColor: '#000',
  TitleFont: 'TimesNewRomanPSMT',
};

export default function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <div className="App">
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AnimatePresence mode="wait">
              <Component {...pageProps} />
            </AnimatePresence>
          </ThemeProvider>
        </RecoilRoot>
      </div>
    </React.StrictMode>
  );
}
