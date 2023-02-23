import { TodoListData } from '@/_types/todo';
import useSWR from 'swr';

const TODOS_API = 'https://dummyjson.com/todos';

export const useAllTodos = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(TODOS_API, fetcher);

  return {
    data: data as TodoListData,
    isLoading,
    isError: error,
  };
};
