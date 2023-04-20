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
import { useAuth } from "../../hooks/Auth/Auth";
import { Alert } from "react-native";

export function SignIn() {
  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta Google");
    }
  }
  async function handleSignInWithApple() {
    try {
      await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta Apple");
    }
  }

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
          <SingInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          <SingInSocialButton
            title="Entrar com Apple"
            svg={AppleSvg}
            onPress={handleSignInWithApple}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
