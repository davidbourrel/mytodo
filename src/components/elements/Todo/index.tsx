import CompleteTodo from '../CompleteTodo';
import DeleteTodo from '../DeleteTodo';
import TextTodo from '../TextTodo';
import { TodoComponentProps } from './types';

const Todo = ({ todoItem }: TodoComponentProps) => {
  const { id, completed, todo } = todoItem;

  return (
    <li className='flex justify-between p-4 bg-neutral-200 dark:bg-neutral-700 shadow-md'>
      <div className='flex items-center gap-4'>
        <CompleteTodo id={id} completed={completed} />
        <TextTodo completed={completed} todo={todo} />
      </div>
      <DeleteTodo id={id} />
    </li>
  );
};
export default Todo;
