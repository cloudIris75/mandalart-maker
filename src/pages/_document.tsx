import { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          rel="icon"
          href="https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/favicon/2023mandalart.PNG"
        />
        <link
          rel="apple-touch-icon"
          href="https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/favicon/2023mandalart.PNG"
        />
        <link
          rel="shortcut icon"
          href="https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/favicon/2023mandalart.PNG"
        />
        <meta name="description" content="쉽고 빠른 새해 목표 세우기 🥕" />
        <meta
          name="keywords"
          content="만다라트,계획,계획표,실천,목표,새해,신년,계묘년,Mandalart"
        />
        <meta name="og:site_name" content="2023 Mandalart Maker" />
        <meta name="og:title" content="2023 Mandalart Maker" />
        <meta name="og:description" content="쉽고 빠른 새해 목표 세우기 🥕" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://www.2023mandalart.swygbro.com" />
        <meta
          name="og:image"
          content="https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/thumbnail.PNG"
        ></meta>
        <meta name="twitter:title" content="2023 Mandalart Maker" />
        <meta
          name="twitter:description"
          content="쉽고 빠른 새해 목표 세우기 🥕"
        />
        <meta name="twitter:type" content="website" />
        <meta
          name="twitter:url"
          content="https://www.2023mandalart.swygbro.com"
        />
        <meta
          name="twitter:image"
          content="https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/thumbnail.PNG"
        ></meta>
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
