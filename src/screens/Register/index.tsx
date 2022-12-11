import React,{ useState }from "react";
import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { Container, Header, Title, Form, Fields, TransationTypes } from "./styles";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { CategorySelect } from "../CategorySelect";
import { Modal } from "react-native";

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categorias',
  })

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }
  
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }
  
  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
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
          <CategorySelectButton 
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
            />
        </Fields>
        <Button title="Enviar" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
