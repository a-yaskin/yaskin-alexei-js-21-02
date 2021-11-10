import { ToDoResponse } from '../types/responses';

export const apiResponse: ToDoResponse = {
  status: 'ok',
  result: [
    {
      id: 1,
      description: 'Todo Item 1',
      completed: true,
    },
    {
      id: 2,
      description: 'Todo Item 2',
      completed: false,
    },
    {
      id: 3,
    },
    {
      id: 4,
      description: '',
    },
  ],
};
