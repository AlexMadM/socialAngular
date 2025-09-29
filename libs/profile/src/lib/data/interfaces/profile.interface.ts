export interface Profile {
  id: number;
  username: string;
  description: string;
  avatarUrl: string | null;
  subscriptionsAmount: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  stack: string[];
  city: string;
}
export interface Pageble<T> {
  items: T[];
  total: number;
  page: number;
  size: number;
  pages: number;
}
