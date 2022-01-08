import * as C from './styles'
import { Theme } from '../../components/theme'
import { useNavigate,Link  } from 'react-router-dom'
import { useForm,FormActions  } from '../../context/formcontext'
import { ChangeEvent,useEffect } from 'react'

export const FormStep3 = () =>{
  

    const navigate = useNavigate()
    const {state,dispatch}= useForm()


    useEffect(()=>{
      

        if(state.name===''){
            navigate('/')
        }
        else {
            dispatch({
                type:FormActions.setCurrentStep,
                payload:3
            })

        }
    },[])

    const handleNextStep = () =>{
       if(state.email && state.github !== ''){
        alert('cadastro realizado com sucesso')
        navigate('/')
       } else {
           alert("preencha os dados")
       }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type:FormActions.setEmail,
            payload: e.target.value
        })

    }

    
    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type:FormActions.setGithub,
            payload: e.target.value
        })

    }

    return(
        <Theme>
            <C.Container>
           <p> Passo 3/3 </p>
           <h1>Legal, {state.name}, onde te achamos?</h1>
           <p> Preencha seus dados para conseguirmos entrar em contato.</p>
           <hr/>
           <label>
               Qual seu E-mail?
               <input 
               type="email"
               value={state.email}
               onChange={handleEmailChange}
               />

           </label>
           <label>
               Qual seu GitHub?
               <input 
               type="url"
               value={state.github}
               onChange={handleGitHubChange}
               />

           </label>
           <Link to="/step2" className='backButton'>Voltar</Link>
           <button onClick={handleNextStep}>Finlizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}