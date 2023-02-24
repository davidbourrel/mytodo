import { completeTodoType, TodoProps } from '@/_types/todo';

export interface ListTodoProps {
  todos: TodoProps[];
  completeTodo: completeTodoType;
}
