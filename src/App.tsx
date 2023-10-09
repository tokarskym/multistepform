// import Navbar from './Components/Navbar/Navbar'; 
// import PersonalInfo from './Components/PersonalInfo/PersonalInfo'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { StepProvider } from './Context/StepContext';
import { FormProvider } from './Context/FormContext';


function App() {
  return (
    <Router>
      <StepProvider>
        <FormProvider>
       <div className="App">
       </div>
        </FormProvider>
      </StepProvider>
    </Router>
  );
}

export default App;
