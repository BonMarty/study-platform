export interface IFilter {
  name: string;
  content: string[] | number[];
}

export interface IFilters {
  filters: IFilter[];
}
