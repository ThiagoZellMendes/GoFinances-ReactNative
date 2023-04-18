import React from "react";
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignTitle,
  Footer,
  FooterWrapper,
} from "./styles";

import LogoSvg from "../../assets/logo.svg";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { SingInSocialButton } from "../../components/SignInSocialButton";

export function SignIn() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle Suas{"\n"}
            finanças de forma{"\n"}
            muito simples
          </Title>
        </TitleWrapper>
        <SignTitle>
          Faça seu login com{"\n"}
          uma das contas abaixo
        </SignTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SingInSocialButton title="Entrar com Google" svg={GoogleSvg}  />
          <SingInSocialButton title="Entrar com Apple" svg={AppleSvg}/>
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
