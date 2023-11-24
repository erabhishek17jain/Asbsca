declare interface Repository<T> {
  get: (_id: string) => Promise<T | null>;
  list: (query: ListQuery) => Promise<T[]>;
  create: (data: T) => Promise<T>;
  update: (data: T) => Promise<T | null>;
  delete: (id: string) => Promise<T | null>;
}
