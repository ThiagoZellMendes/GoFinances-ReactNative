import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransationCard'

import { 
  Container,
  Header,
  UserInfo, 
  UserWrapper, 
  Photo,  
  User, 
  UserGreetings, 
  UserName, 
  Icon, 
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data : DataListProps[] = [
    {
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de Sites',
    amount:'R$ 12.000,00',
    category:{
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '13/04/2020'
  },
  {
    id: '2',
    type: 'negative',
    title: 'Hamburgueria Pizzy',
    amount:'R$ 59,00',
    category:{
      name: 'Alimentação',
      icon: 'coffee'
    },
    date: '13/04/2020'
  }, 
  {
    id: '3',
    type: 'negative',
    title: 'Aluguel do apartamento',
    amount:'R$ 1.500,00',
    category:{
      name: 'Estadia',
      icon: 'home'
    },
    date: '13/04/2020'
  },

];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/64324862?v=4",
              }}
            />
            <User>
              <UserGreetings>Olá, </UserGreetings>
              <UserName>Thiago Mendes</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard 
          type="up" 
          title="Entradas" 
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          />
        <HighlightCard 
          type="down" 
          title="Saídas" 
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
          />
        <HighlightCard 
          type="total" 
          title="Total" 
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
          />
      </HighlightCards>

       <Transactions>
        <Title>Listagem</Title>

        <TransactionList 
          data={data}
          keyExtractor={ item => item.id}
          renderItem={({ item })=> <TransactionCard data={item}/>}
        /> 

      </Transactions>
    </Container>
  );
}

