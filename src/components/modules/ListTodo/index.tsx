import Spinner from '@/components/images/icons/Spinner';
import { useAllTodos } from '@/api/todo';
import { TodoProps } from '@/_types/todo';
import Todo from '../../elements/Todo';

const ListTodo = () => {
  const { data, isLoading, isError } = useAllTodos();

  if (isLoading) return <Spinner />;
  if (isError) return <p>Error !</p>;

  return (
    <ul className='flex flex-col gap-4'>
      {data?.todos &&
        data.todos.map((todo: TodoProps) => <Todo key={todo.id} {...todo} />)}
    </ul>
  );
};
export default ListTodo;
