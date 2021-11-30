export interface Item {
  id: number;
}

export interface TodoItem extends Item {
  title?: string;
  completed?: boolean;
}
