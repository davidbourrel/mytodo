import TrashIcon from '@/components/images/icons/TrashIcon';

const DeleteTodo = () => {
  return (
    <span className='ml-4 p-2 h-max border-2 border-red-700 rounded select-none transition hover:cursor-pointer hover:bg-red-700'>
      <TrashIcon />
    </span>
  );
};
export default DeleteTodo;
