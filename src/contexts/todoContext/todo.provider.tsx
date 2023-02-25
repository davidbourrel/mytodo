import { TodoProps } from '@/_types/todo';
import { useEffect, useState, PropsWithChildren } from 'react';
import todoContext from './todo.context';
import { TodoContext } from './todo.types';

const { Provider } = todoContext;

type TodoProviderProps = PropsWithChildren;

export default function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getAllTodos = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const res = await fetch(`${process.env.TODO_BASE_URL}?limit=8`);
        const data = await res.json();
        setTodos(data?.todos);
      } catch (err) {
        console.error(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getAllTodos();
  }, []);

  const completeTodo = async (id: number, completed: boolean) => {
    setIsLoading(true);
    setIsError(false);

    try {
      await fetch(`${process.env.TODO_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          completed: completed,
        }),
      });
      setTodos((c) =>
        c.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
      );
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTodo = async (id: number) => {
    setIsLoading(true);
    setIsError(false);

    try {
      await fetch(`${process.env.TODO_BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      setTodos((c) => c.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const contextValue: TodoContext = {
    todos,
    isLoading,
    isError,
    completeTodo,
    deleteTodo,
  };

  return <Provider value={contextValue}>{children}</Provider>;
}
