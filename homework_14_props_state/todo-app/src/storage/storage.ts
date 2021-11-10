import { apiResponse } from '../api-mock/api';

export const storage: any = {};

localStorage.setItem('ToDo List', JSON.stringify(apiResponse));
