declare interface Repository<T> {
  get: (_id: string) => Promise<T | null>;
  list: () => Promise<T[]>;
  create: (data: T) => Promise<T>;
  update: (data: T) => Promise<T>;
  delete: (id: string) => Promise<T>;
}
