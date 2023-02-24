import { useContext, useMemo } from 'react';
import todoContext from '.';
import { TodoContext } from './todo.types';

type UseHandleSetTodoResult = Pick<
  TodoContext,
  'todos' | 'isLoading' | 'isError'
>;

const useListTodo = (): UseHandleSetTodoResult => {
  const { todos, isLoading, isError } = useContext(todoContext);

  return useMemo(
    () => ({ todos, isLoading, isError }),
    [todos, isLoading, isError]
  );
};

export default useListTodo;
