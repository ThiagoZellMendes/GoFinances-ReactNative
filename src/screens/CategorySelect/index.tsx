import React from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/Forms/Button";

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from "./styles";
import { CategoryProps, Props } from "./props";
import { categories } from "../../utils/categories";

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {

  function handleCategorySelect(category: CategoryProps) {
    setCategory(category);
  }
  return (
    <Container>
      <Header>
        <Title>Categorias</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category 
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
            >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
}
