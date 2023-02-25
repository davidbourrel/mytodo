import { MouseEvent } from 'react';
import useDeleteTodo from '@/contexts/todoContext/useDeleteTodo';
import { DeleteTodoProps } from './types';
import TrashIcon from '@/components/images/icons/TrashIcon';

const DeleteTodo = ({ id }: DeleteTodoProps) => {
  const { deleteTodo } = useDeleteTodo();

  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    deleteTodo(id);
  };

  return (
    <span
      onClick={handleDelete}
      className='p-2 h-max border-2 border-red-700 rounded select-none transition hover:cursor-pointer hover:bg-red-700'
      title='Delete todo'
    >
      <TrashIcon />
    </span>
  );
};
export default DeleteTodo;
