import { TodoContext } from './todo.types';

export const INITIAL_TODO_CONTEXT: TodoContext = {
  todos: null as unknown as TodoContext['todos'],
  isLoading: null as unknown as TodoContext['isLoading'],
  isError: null as unknown as TodoContext['isError'],
  completeTodo: null as unknown as TodoContext['completeTodo'],
  deleteTodo: null as unknown as TodoContext['deleteTodo'],
};
