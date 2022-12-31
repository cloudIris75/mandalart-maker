import { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          rel="icon"
          href="https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/favicon/2023mandalart.PNG"
        />
        <meta property="og:site_name" content="2023 Mandalart Maker" />
        <meta property="og:title" content="2023 Mandalart Maker" />
        <meta
          property="og:description"
          content="쉽고 빠른 새해 목표 세우기 🥕"
        />
        <meta
          property="og:image"
          content="https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/thumbnail.PNG"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.2023mandalart.swygbro.com"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="keywords"
          content="만다라트, 계획표, 새해, 신년, 계획, 실천, 목표, 2023, Maldalart"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
