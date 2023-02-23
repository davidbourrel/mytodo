import { TodoProps } from '@/_types/todo';

function CompleteTodo({ completed }: Pick<TodoProps, 'completed'>) {
  return (
    <div className='flex'>
      <input className='mr-2' type='checkbox' checked={completed} />
    </div>
  );
}

export default CompleteTodo;
