export interface Persons {
  id: number;
  name: string;
  surname: string;
  checked: boolean;
  checkedInDate: number | null;
  children: Child[] | null;
}

export interface Child {
  name: string;
  age: number;
}
