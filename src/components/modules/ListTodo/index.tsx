import { TodoProps } from '@/_types/todo';
import Todo from '../../elements/Todo';
import { ListTodoProps } from './types';

const ListTodo = ({ todos, completeTodo }: ListTodoProps) => {
  const nonCompletedTodoFirst = [...todos].sort(
    // Convert the 2 boolean values to numbers and subtract the first number from the second
    (a, b) => Number(a.completed) - Number(b.completed)
  );

  return (
    <ul className='flex flex-col gap-4'>
      {nonCompletedTodoFirst.map((todo: TodoProps) => (
        <Todo key={todo.id} todo={todo} completeTodo={completeTodo} />
      ))}
    </ul>
  );
};
export default ListTodo;
