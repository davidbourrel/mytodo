import { completeTodoType, TodoProps } from '@/_types/todo';

export interface CompleteTodoProps extends Pick<TodoProps, 'completed' | 'id'> {
  completeTodo: completeTodoType;
}
