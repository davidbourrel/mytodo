import { TodoProps } from '@/_types/todo';
import CompleteTodo from '../CompleteTodo';
import DeleteTodo from '../DeleteTodo';

const Todo = ({ completed, todo }: TodoProps) => {
  return (
    <li className='flex justify-between p-4 bg-neutral-200 dark:bg-neutral-700 shadow-md'>
      <div className='flex items-center gap-4'>
        <CompleteTodo completed={completed} />
        <p>{todo}</p>
      </div>
      <DeleteTodo />
    </li>
  );
};
export default Todo;
