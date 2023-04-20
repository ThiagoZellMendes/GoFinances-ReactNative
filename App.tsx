// import 'react-native-gesture-handler';

//import o intl porque no android não funciona sem essa importação
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React from "react";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";
import { AuthProvider } from "./src/hooks/Auth/Auth";

import { SignIn } from "./src/screens/signIn";

export default function App() {
  const [FontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!FontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <AuthProvider>
          <SignIn />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
