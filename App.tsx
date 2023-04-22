// import 'react-native-gesture-handler';

//import o intl porque no android não funciona sem essa importação
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

import { AuthProvider, useAuth } from "./src/hooks/Auth/Auth";

import { Routes } from "./src/routes";

export default function App() {
  const [FontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const { userStorageLoading } = useAuth();

  if (!FontsLoaded || userStorageLoading) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
