import Spinner from '@/components/images/icons/Spinner';
import { TodoProps } from '@/_types/todo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const TodoId = () => {
  const [todo, setTodo] = useState<TodoProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getTodo = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const res = await fetch(`${process.env.TODO_BASE_URL}/${id}`);
        const data = await res.json();

        setTodo(data);
      } catch (err) {
        console.error(err);

        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getTodo();
  }, [id]);

  return (
    <>
      <Head>
        <title>{`Todo N°${id}`}</title>
      </Head>
      <h1 className='main-title'>TODO DETAILS</h1>
      {isLoading && <Spinner />}
      {!isLoading && isError && <p>Error!</p>}
      {!!todo?.todo && (
        <div className='flex flex-col gap-2'>
          <p>#{todo?.id}</p>
          <p className={todo?.completed ? 'line-through' : ''}>{todo?.todo}</p>
          <p>{todo?.completed ? 'Completed' : 'Not completed yet'}</p>
          <p>User ID: {todo?.userId}</p>
        </div>
      )}
    </>
  );
};
export default TodoId;
