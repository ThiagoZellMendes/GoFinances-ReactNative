import React from "react";
import { 
  Container,
  Header,
  TitleWrapper,
  Title,
  SignTitle,
  Footer, 
} from "./styles";

import LogoSvg from '../../assets/logo.svg'
import AppleSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google.svg'
import { RFValue } from "react-native-responsive-fontsize";

export function SignIn(){
  return(
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg 
            width={RFValue(120)}
            height={RFValue(68)}
          />
          <Title>
            COntrole Suas{'\n'}
            finanças de forma{'\n'}
            muito simples
          </Title>
        </TitleWrapper>
        <SignTitle>
          Faça seu login com{'\n'} 
          uma das contas abaixo
        </SignTitle>
      </Header>
      <Footer></Footer>
    </Container>
  )
} 