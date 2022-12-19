import html2canvas from 'html2canvas';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

const Home: NextPage = () => {
  const captureArea = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onCaptureButtonClick = () => {
    if (captureArea.current) {
      html2canvas(captureArea.current).then(function (canvas) {
        const element = document.createElement('a');
        element.href = canvas.toDataURL('image/jpeg');
        element.download = '2023_Mandalart.jpg';
        element.click();
      });
    }
  };

  return (
    <main className="px-4 py-6 flex flex-col items-center space-y-6">
      <h1 className="py-4 text-3xl text-vivaMegenta">
        2023 만다라트 메이커 🥕
      </h1>
      <div ref={captureArea} className="relative border-4 border-border">
        <Image
          src="https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/background.png"
          alt="2023 Mandalart"
          width={390}
          height={693}
          className="z-0"
        ></Image>
        <table className="absolute top-1/4 left-0 z-1 w-full">
          <tbody>
            <tr>
              <td>
                <Button setIsVisible={setIsVisible} />
              </td>
              <td>
                <Button setIsVisible={setIsVisible} />
              </td>
              <td>
                <Button setIsVisible={setIsVisible} />
              </td>
            </tr>
            <tr>
              <td>
                <Button setIsVisible={setIsVisible} />
              </td>
              <td>
                <Button setIsVisible={setIsVisible} />
              </td>
              <td>
                <Button setIsVisible={setIsVisible} />
              </td>
            </tr>
            <tr>
              <td>
                <Button setIsVisible={setIsVisible} />
              </td>
              <td>
                <Button setIsVisible={setIsVisible} />
              </td>
              <td>
                <Button setIsVisible={setIsVisible} />
              </td>
            </tr>
          </tbody>
        </table>
        <Modal isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>
      <button
        onClick={onCaptureButtonClick}
        className="rounded-xl px-20 py-2 bg-vivaMegenta hover:bg-hover text-white text-xl"
      >
        이미지 저장 🍀
      </button>
    </main>
  );
};

export default Home;
