import Head from 'next/head';
import ListTodo from '@/components/modules/ListTodo';

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
        <h1 className='text-3xl text-center my-5 mb-10 text-primary-900 dark:text-white'>
          Todo List
        </h1>
        <ListTodo />
      </div>
    </>
  );
};
export default Home;
