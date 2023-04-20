import { ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  photo?: string; 
}

export interface IAuthContextData {
  user: UserProps;
  signInWithGoogle(): Promise<void>
  signInWithApple(): Promise<void>
}

export interface AuthorizationResponseProps {
  params: {
    access_token: string;
  };
  type: string;
}