import React, { useEffect } from 'react';
import GlobalStyle from '../src/styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

const theme = {
  primaryColor: '#01baae',
  secondaryColor: '#000',
  TitleFont: 'TimesNewRomanPSMT',
};

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log(
      '%c⭐️ FRIDAY ⭐️',
      'color: #01B9AD; background: #000; font-size: 3rem; padding: 0.5rem 1rem; margin: 1rem 0; font-family: TimesNewRomanPSMT; border: 2px solid #01B9AD; border-radius: 0.5rem; text-shadow: 1px 1px 1px #C3EAE6;'
    );
    console.log('Copyright © 2020-2023 Friday. All rights reserved.');
  }, []);
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
      <Analytics />
    </React.StrictMode>
  );
}
