import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react'; 

interface FormState {
    [key: string]: any; // example of the interface for now // 
}

interface FormAction {   
    type: string; 
    payload?: any;      
}

interface FormProviderProps {
    children: ReactNode; 
}

interface FormContextProps { 
  formState: FormState; // wartości które przechowuje context, 
  dispatch: Dispatch<FormAction>; // -||- 
}

const FormContext = createContext<FormContextProps>
    ({ formState: {}, dispatch: () => null }) // wartości poczatkowe 
    

export const useFormContext = () => {
    return useContext(FormContext); 
}                                                                            // own hook that use useContext to see value of cntext, that we can use in the components 

const formReducer = (state: FormState,  action: FormAction): FormState => {   // aktualizacja stanu formularza przez calenie stanu z danymi przekazanymi jako payload 
    switch (action.type) {
        case 'UPDATE_FORM': 
            return {
                ...state,
                ...action.payload,
            }; 
        default:
            return state; 
    }
} 

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const [formState, dispatch] = useReducer(formReducer, {}); 
    
    return (
        <FormContext.Provider value={{ formState, dispatch }}>
            {children}
        </FormContext.Provider>
    )
}