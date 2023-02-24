import { TodoProps } from '@/_types/todo';

export interface DeleteTodoProps extends Pick<TodoProps, 'id'> {}
