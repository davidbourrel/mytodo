export interface TodoListData {
  limit: number;
  skip: number;
  todos: TodoProps[];
  total: number;
}

export interface TodoProps {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
