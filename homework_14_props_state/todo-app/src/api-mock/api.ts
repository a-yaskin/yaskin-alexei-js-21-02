import { TodoResponse } from '../types/responses';

export const apiResponse: TodoResponse = {
  status: 'Ok',
  result: [
    {
      id: 1,
      title: 'Todo Item 1',
      completed: false,
    },
    {
      id: 2,
      title: 'Todo Item 2',
      completed: false,
    },
    {
      id: 3,
    },
    {
      id: 4,
      title: '',
    },
  ],
};
