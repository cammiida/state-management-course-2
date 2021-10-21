export type Task = {
  id: number;
  text: string;
};

export type CardContent = {
  text: string;
  tasks: Task[];
  storageKey: string;
};

export type Post = {
  userId: number;
  id: string;
  title: string;
  body: string;
};
