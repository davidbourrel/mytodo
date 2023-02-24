import useCompleteTodo from '@/contexts/todoContext/useCompleteTodo';
import { CompleteTodoProps } from './types';

function CompleteTodo({ id, completed }: CompleteTodoProps) {
  const { completeTodo } = useCompleteTodo();

  const handleComplete = () => completeTodo(id, !completed);

  return (
    <div className='flex'>
      <input
        className='mr-2'
        type='checkbox'
        checked={completed}
        onChange={handleComplete}
      />
    </div>
  );
}

export default CompleteTodo;
