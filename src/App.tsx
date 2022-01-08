import React from "react";
import { Router } from "./Router";

import { FormProvider } from "./context/formcontext";

const App = () =>{


  return (
    
    <FormProvider>
      <Router/>
    </FormProvider> 
    
  )

}
export default App;
