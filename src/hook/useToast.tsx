import { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IToastProps {
  title: string;
  type: "success" | "error" | "warn" | "info";
  toastOption?: {
    autoClose: number;
    toastId?: string | number;
  };
}

export interface IToastContext {
  addToast: (props: IToastProps) => void;
}

const toastContext = createContext<IToastContext>({} as IToastContext);

export const ToastProvider = ({ children }: React.PropsWithChildren) => {
  const addToast = ({ title, type, toastOption }: IToastProps) => {
    toast[type](title, toastOption);
  };
  return (
    <toastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer />
    </toastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(toastContext);
};
