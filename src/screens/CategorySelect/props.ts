 export interface CategoryProps {
  key: string;
  name: string;
}

export interface Props {
  category: CategoryProps;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
}