import html2canvas from 'html2canvas';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Widget from '../components/Widget';

const Home: NextPage = () => {
  const captureArea = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [number, setNumber] = useState(0);
  const [goals, setGoals] = useState<string[][]>([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  useEffect(() => {
    const prevGoals = localStorage.getItem('key');
    if (prevGoals) {
      const prevGoalsArray = JSON.parse(prevGoals);
      setGoals(prevGoalsArray);
    }
  }, []);

  const onCaptureButtonClick = () => {
    if (captureArea.current) {
      html2canvas(captureArea.current).then((canvas) => {
        const element = document.createElement('a');
        element.href = canvas.toDataURL('image/png');
        element.download = '2023_Mandalart.png';
        element.click();
      });
    }
  };

  const onResetButtonClick = () => {
    const confirm = window.confirm('Are you sure you want to reset Mandalart?');
    if (confirm) {
      const resetArray = [[], [], [], [], [], [], [], [], []];
      setGoals(resetArray);
      localStorage.setItem('key', JSON.stringify(resetArray));
    }
  };

  return (
    <main className="relative px-4 py-6 flex flex-col items-center space-y-6">
      <h1 className="text-3xl text-vivaMegenta">2023 Mandalart Maker 🥕</h1>
      <Widget />
      <div
        ref={captureArea}
        className="relative outline outline-4 outline-border w-350 h-630"
      >
        <Image
          src="https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/background.PNG"
          alt="2023 Mandalart"
          fill
          quality={100}
        ></Image>
        <table className="table-lg z-10 absolute top-32 left-0 w-full border-separate border-spacing-y-2">
          <tbody>
            <tr>
              <td>
                <Button
                  number={0}
                  setNumber={setNumber}
                  setIsVisible={setIsVisible}
                  goals={goals}
                />
              </td>
              <td>
                <Button
                  number={1}
                  setNumber={setNumber}
                  setIsVisible={setIsVisible}
                  goals={goals}
                />
              </td>
              <td>
                <Button
                  number={2}
                  setNumber={setNumber}
                  setIsVisible={setIsVisible}
                  goals={goals}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  number={3}
                  setNumber={setNumber}
                  setIsVisible={setIsVisible}
                  goals={goals}
                />
              </td>
              <td>
                <Button
                  number={4}
                  setNumber={setNumber}
                  setIsVisible={setIsVisible}
                  goals={goals}
                />
              </td>
              <td>
                <Button
                  number={5}
                  setNumber={setNumber}
                  setIsVisible={setIsVisible}
                  goals={goals}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  number={6}
                  setNumber={setNumber}
                  setIsVisible={setIsVisible}
                  goals={goals}
                />
              </td>
              <td>
                <Button
                  number={7}
                  setNumber={setNumber}
                  setIsVisible={setIsVisible}
                  goals={goals}
                />
              </td>
              <td>
                <Button
                  number={8}
                  setNumber={setNumber}
                  setIsVisible={setIsVisible}
                  goals={goals}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Modal
          number={number}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          goals={goals}
          setGoals={setGoals}
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <button
          onClick={onCaptureButtonClick}
          className="button bg-vivaMegenta text-white"
        >
          📦 DOWNLOAD
        </button>
        <button
          onClick={onResetButtonClick}
          className="button border-2 border-vivaMegenta text-border"
        >
          🚨 RESET
        </button>
        <span className="text-border pt-2">
          ⓒ 2022. Iris All rights reserved.
        </span>
      </div>
    </main>
  );
};

export default Home;
