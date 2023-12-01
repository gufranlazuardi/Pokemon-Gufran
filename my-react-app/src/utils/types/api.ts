export type Response = {
  count: number;
  next: string | null;
  previous: string | null;
  results: [];
};

export type PayloadPagination<T = any> = {
  totalItems: number;
  datas: T;
  totalPages: number;
  currentPages: number;
};
