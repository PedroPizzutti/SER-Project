import { login } from "@/services/api/login";
import { PropsWithChildren, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hook/useToast";
import { IErrorResponse } from "@/interfaces/api";
import { useMutation } from "react-query";
import { AxiosError } from "axios";

export interface ISignInProps {
  email: string;
  password: string;
}

interface IAuthContextProps {
  signIn(body: ISignInProps): Promise<void>;
  signOut(): void;
  isLoading: boolean;
}

const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { addToast } = useToast();
  const navigate = useNavigate();

  const successSignIn = (token: string) => {
    localStorage.setItem("TOKEN", token);
    addToast({
      title: "Welcome",
      type: "success",
      toastOption: {
        autoClose: 5000
      }
    })
    navigate('/home');
  }

  const { mutate, isLoading } = useMutation({
    mutationFn: (body: ISignInProps) => login(body),
  })

  const signIn = async (body: ISignInProps) => {
    mutate(body, {
      onSuccess: ({ data }) => successSignIn(data.token),
      onError: (err) => {
        const { response } = err as AxiosError<IErrorResponse>;
        addToast({
          title: response?.data.error ?? "",
          type: "error",
        });
      },
    });
  };
  const signOut = () => {
    localStorage.clear();
    navigate('/auth/sign-in');
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
