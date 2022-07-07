export interface ArrayObjectsProps {
  id: number;
  title: string;
  description: string;
  priority: string;
}

export interface ObjectProps {
  id: number;
  title: string;
  description: string;
  gifts: string;
  priority: string;
  status?: string;
}
export interface ButtonListProps {
  id?: number;
  title: string;
  value: boolean;
  priority: string;
  type: string;
}
