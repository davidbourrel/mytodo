import { completeTodoType, deleteTodoType, TodoProps } from '@/_types/todo';

export interface TodoContext {
  todos: TodoProps[];
  isLoading: boolean;
  isError: boolean;
  completeTodo: completeTodoType;
  deleteTodo: deleteTodoType;
}
