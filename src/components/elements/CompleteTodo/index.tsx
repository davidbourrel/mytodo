import { ChangeEvent } from 'react';
import useCompleteTodo from '@/contexts/todoContext/useCompleteTodo';
import { CompleteTodoProps } from './types';

function CompleteTodo({ id, completed }: CompleteTodoProps) {
  const { completeTodo } = useCompleteTodo();

  const handleComplete = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    completeTodo(id, !completed);
  };

  return (
    <div className='flex'>
      <input
        className='mr-2'
        type='checkbox'
        checked={completed}
        onChange={handleComplete}
        title={`Change todo to ${!completed ? 'completed' : 'in progress'}`}
      />
    </div>
  );
}

export default CompleteTodo;
