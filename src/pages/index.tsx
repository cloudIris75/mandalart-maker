import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="p-4 h-screen flex flex-col items-center space-y-4">
      <h1 className="text-3xl">2023 만다라트 메이커</h1>
      <div className="border border-black h-693 w-390 bg-background bg-cover"></div>
    </main>
  );
};

export default Home;
