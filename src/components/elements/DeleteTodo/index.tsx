import { DeleteTodoProps } from './types';
import TrashIcon from '@/components/images/icons/TrashIcon';
import useDeleteTodo from '@/contexts/todoContext/useDeleteTodo';

const DeleteTodo = ({ id }: DeleteTodoProps) => {
  const { deleteTodo } = useDeleteTodo();

  const handleDelete = () => deleteTodo(id);

  return (
    <span
      onClick={handleDelete}
      className='ml-4 p-2 h-max border-2 border-red-700 rounded select-none transition hover:cursor-pointer hover:bg-red-700'
    >
      <TrashIcon />
    </span>
  );
};
export default DeleteTodo;
