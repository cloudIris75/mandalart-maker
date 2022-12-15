import { Html, Head, Main, NextScript } from 'next/document';

function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          rel="icon"
          href="https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/favicon/blackRabbit.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
