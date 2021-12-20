import React from 'react';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold, useFonts
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Register } from './src/screens/Register';
import { Dashboard } from './src/screens/Dashboard';





export default function App() {
  const [FontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!FontsLoaded){
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
   );
}

