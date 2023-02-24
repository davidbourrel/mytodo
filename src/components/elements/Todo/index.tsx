import { TodoComponentProps } from './types';
import CompleteTodo from '../CompleteTodo';
import DeleteTodo from '../DeleteTodo';
import TextTodo from '../TextTodo';

const Todo = ({ todo, completeTodo }: TodoComponentProps) => {
  return (
    <li className='flex justify-between p-4 bg-neutral-200 dark:bg-neutral-700 shadow-md'>
      <div className='flex items-center gap-4'>
        <CompleteTodo
          id={todo.id}
          completed={todo.completed}
          completeTodo={completeTodo}
        />
        <TextTodo completed={todo.completed} todo={todo.todo} />
      </div>
      <DeleteTodo />
    </li>
  );
};
export default Todo;
