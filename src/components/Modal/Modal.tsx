import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

const backgroundImages = [
  {
    id: 1,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/1.PNG',
  },
  {
    id: 2,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/2.PNG',
  },
  {
    id: 3,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/3.PNG',
  },
  {
    id: 4,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/4.PNG',
  },
  {
    id: 5,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/main.PNG',
  },
  {
    id: 6,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/6.PNG',
  },
  {
    id: 7,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/7.PNG',
  },
  {
    id: 8,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/8.PNG',
  },
  {
    id: 9,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/9.PNG',
  },
];

interface ModalProps {
  number: number;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ number, isVisible, setIsVisible }) => {
  const background = useRef<HTMLDivElement>(null);
  const modal = useRef<HTMLDivElement>(null);
  const [goals, setGoals] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  });
  const [backgroundURL, SetBackgroundURL] = useState('');
  const imageURL = backgroundImages.filter((image) => image.id === number)[0]
    .image;

  useEffect(() => {
    SetBackgroundURL(imageURL);
  }, [imageURL]);

  const onTextareaChange = (e: any) => {
    const { name, value } = e.target;
    setGoals((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      {isVisible ? (
        <div
          ref={background}
          onClick={(e) => {
            if (e.target !== modal.current && e.target === background.current) {
              setIsVisible(false);
            }
          }}
          className="absolute top-0 left-0 w-full h-full z-20"
        >
          <div ref={modal} className="relative top-1/4 left-0 w-full z-30">
            <Image
              src={backgroundURL}
              alt="Mandalart Table"
              width={390}
              height={693}
              className="bg-white border border-border"
            ></Image>
            <table className="table-lg absolute top-0 left-0 w-full text-center">
              <tbody>
                <tr>
                  <td>
                    <textarea
                      name="1"
                      value={goals[1]}
                      onChange={onTextareaChange}
                      rows={2}
                    />
                  </td>
                  <td>
                    <textarea
                      name="2"
                      value={goals[2]}
                      onChange={onTextareaChange}
                      rows={2}
                    />
                  </td>
                  <td>
                    <textarea
                      name="3"
                      value={goals[3]}
                      onChange={onTextareaChange}
                      rows={2}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <textarea
                      name="4"
                      value={goals[4]}
                      onChange={onTextareaChange}
                      rows={2}
                    />
                  </td>
                  <td>
                    <textarea
                      name="5"
                      value={goals[5]}
                      onChange={onTextareaChange}
                      rows={2}
                    />
                  </td>
                  <td>
                    <textarea
                      name="6"
                      value={goals[6]}
                      onChange={onTextareaChange}
                      rows={2}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <textarea
                      name="7"
                      value={goals[7]}
                      onChange={onTextareaChange}
                      rows={2}
                    />
                  </td>
                  <td>
                    <textarea
                      name="8"
                      value={goals[8]}
                      onChange={onTextareaChange}
                      rows={2}
                    />
                  </td>
                  <td>
                    <textarea
                      name="9"
                      value={goals[9]}
                      onChange={onTextareaChange}
                      rows={2}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
