import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" herf="/favicon.ico" />
          <title>FRIDAY</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="title" property="og:title" content="Friday" />
          <meta
            name="description"
            property="og:description"
            content="가치 있는 서비스를 만드는 연합 SW 서비스 기획/개발 동아리"
          />
          <meta name="image" property="og:image" content="/logo.png" />
          <meta name="url" property="og:url" content="https://fridayproject.co.kr/" />
          <meta name="google-site-verification" content="HsQjCKlILJdk_Fs46eQ2gL-ZigF2KFLI1YPvp41bFIE" />
          <meta name="naver-site-verification" content="b1c10fead980fdee32eb9165baf945de21ece37b" />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
