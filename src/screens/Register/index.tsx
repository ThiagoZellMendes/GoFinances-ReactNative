import React,{ useState }from "react";
import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { Container, Header, Title, Form, Fields, TransationTypes } from "./styles";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

export function Register() {
  const [transactionType, setTransactionType] = useState('')

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransationTypes>
            <TransactionTypeButton 
            type="up"
            title="Income"
            onPress={() => handleTransactionTypeSelect('up')}
            isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
            type="down" 
            title="Outcome"
            onPress={() => handleTransactionTypeSelect('down')}
            isActive={transactionType === 'down'}
            />
          </TransationTypes>
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
