export interface ISortValue {
  label: string;
  value: {
    name: string;
    order: 'asc' | 'desc';
  };
}
