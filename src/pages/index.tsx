import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Todo list exercise</title>
        <meta name='description' content='Todo list exercise' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <h1 className='text-3xl text-center text-primary-900 dark:text-white'>
          TODO LIST
        </h1>
      </div>
    </>
  );
};
export default Home;
