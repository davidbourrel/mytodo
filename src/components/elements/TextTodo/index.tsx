import { TextTodoProps } from './types';

const TextTodo = ({ completed, todo }: TextTodoProps) => {
  const textClassName = completed
    ? 'line-through text-neutral-600 dark:text-neutral-300'
    : '';
  return <p className={textClassName}>{todo}</p>;
};
export default TextTodo;
