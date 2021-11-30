import { TodoItem } from './entities';

interface CommonResponse {
  status: 'Ok' | 'Error';
}

export interface TodoResponse extends CommonResponse {
  result: Array<TodoItem>;
}
