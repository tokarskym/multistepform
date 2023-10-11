import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react'; 

interface StepAction {
    type: string; 
    payload: number; 
}

interface StepContextProps {
    currentStep: number; 
    dispatch: Dispatch<StepAction>
}

interface StepProviderProps {
    children: ReactNode; 
}

const StepContext = createContext<StepContextProps>({
    currentStep: 1, 
    dispatch: () => null
}); 


export const useStepContext = () => {
    return useContext(StepContext)
}

const stepReducer = (state: number, action: StepAction): number => {
    switch (action.type) {
        case 'SET_STEP':
            return action.payload; 
        default:
            return state; 
            
    }
}

export const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
    const [currentStep, dispatch] = useReducer(stepReducer, 1);

    return (
        <StepContext.Provider value={{ currentStep, dispatch }}>
            {children}
        </StepContext.Provider>
    );
}; 