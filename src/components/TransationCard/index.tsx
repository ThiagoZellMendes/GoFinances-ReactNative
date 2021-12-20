import React from 'react';

import {
  Container,
  Title,
  Amount,
  Category,
  Icon,
  CategoryName,
  Date,
  Footer,
} from './styles';

interface CategoryProps {
  name: string;
  icon: string;
}

interface Props {
  data: TransactionCardProps
}

export interface TransactionCardProps {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: CategoryProps;
    date: string;
}



export function TransactionCard({ data } : Props) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name= {data.category.icon}/>
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>

    </Container>
  )
}