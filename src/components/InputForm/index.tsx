import React from "react";


import { Input } from "../Forms/Input";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";
import { Container, ErrorInput } from "./styles";

interface Props extends TextInputProps {
  control: Control;
  name: string;
  errorInput: Object;  
}

export function InputForm({ control, name, errorInput, ...rest }: Props) {
  return(
    <Container>
      <Controller 
        control={control}
        render={({ field: { onChange, value }}) => (
          <Input 
            onChangeText={onChange}
            value={value}
          {...rest} 
        />
        )}
        name={name} 
      />
      {errorInput && <ErrorInput>{errorInput}</ErrorInput>}
  </Container>
  );
}
