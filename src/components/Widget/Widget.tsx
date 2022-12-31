import Image from 'next/image';
import { useEffect, useState } from 'react';

const Widget: React.FC = () => {
  const [source, setSource] = useState('');

  useEffect(() => {
    if (document) {
      const link = document.location.host.split('.');
      setSource(link[0]);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      setGAScripts();
      setAdsenseScripts();
    });
  }, []);

  const setGAScripts = () => {
    const asyncScriptElement = document.createElement('script');
    const functionScriptElement = document.createElement('script');
    const functionScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-M6R8GGRBN6');
  `;

    asyncScriptElement.async = true;
    asyncScriptElement.src =
      'https://www.googletagmanager.com/gtag/js?id=G-M6R8GGRBN6';
    functionScriptElement.innerHTML = functionScript;

    document.head.appendChild(asyncScriptElement);
    document.head.appendChild(functionScriptElement);
  };

  const setAdsenseScripts = () => {
    const scriptElement = document.createElement('script');

    scriptElement.async = true;
    scriptElement.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1919598055512436';
    scriptElement.crossOrigin = 'anonymous';

    document.head.appendChild(scriptElement);
  };

  return (
    <a
      id="swyg-widget"
      className="box-border absolute flex justify-center justify-items-center items-center rounded-full bg-white cursor-pointer z-50 top-16 right-5 w-10 h-10 p-1"
      target="_blank"
      rel="noreferrer"
      href={`https://www.swygbro.com?utm_source=${source}&utm_medium=widget&utm_campaign=all_time`}
    >
      <Image
        alt="widget logo"
        src="https://assets.swygbro.com/img/logo/single/logo_7.png"
        width="32"
        height="32"
      />
    </a>
  );
};

export default Widget;
