import { BrowserRouter,Route,Routes } from "react-router-dom";
import { FormStep1 } from "./pages/formstep1";
import { FormStep2 } from "./pages/formstep2";
import { FormStep3 } from "./pages/formstep3";


export const Router = () =>{

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<FormStep1/>}/>
                <Route path="/step2"  element={<FormStep2/>}/>
                <Route path="/step3"  element={<FormStep3/>}/>
            </Routes>
        </BrowserRouter>
    )

}