import { useState, useEffect } from 'react';
import Head from 'next/head';
import { TodoProps } from '@/_types/todo';
import ListTodo from '@/components/modules/ListTodo';
import Spinner from '@/components/images/icons/Spinner';

const Home = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  const getAllTodos = async () => {
    showLoading();
    setIsError(false);

    try {
      const res = await fetch(`${process.env.TODO_BASE_URL}`);
      const data = await res.json();
      setTodos(data?.todos);
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      hideLoading();
    }
  };

  const completeTodo = async (id: number, completed: boolean) => {
    showLoading();
    setIsError(false);

    try {
      await fetch(`${process.env.TODO_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          completed: completed,
        }),
      });
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
      );
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      hideLoading();
    }
  };

  useEffect(() => {
    getAllTodos();
    // eslint-disable-next-line
  }, []);

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
        {isLoading && <Spinner />}
        {!isLoading && todos?.length > 0 && (
          <ListTodo todos={todos} completeTodo={completeTodo} />
        )}
        {!isLoading && isError && <p>Error !</p>}
      </div>
    </>
  );
};
export default Home;
