import TrashIcon from '@/components/images/icons/TrashIcon';

const DeleteTodo = () => {
  return (
    <span className='ml-4 p-2 h-max border border-red-900 rounded select-none transition hover:cursor-pointer hover:bg-red-900'>
      <TrashIcon />
    </span>
  );
};
export default DeleteTodo;
