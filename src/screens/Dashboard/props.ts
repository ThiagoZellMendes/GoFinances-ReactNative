import { TransactionCardProps } from "../../components/TransationCard";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export interface HighlightProps {
  amount: string;
  lastTransaction: string;
}

export interface HighlightData {
  entries: HighlightProps;
  expensives: HighlightProps;
  total: HighlightProps
  
}