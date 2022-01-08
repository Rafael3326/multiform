import { ReactNode } from 'react'
import * as C from './style'
import {Header} from '../header'
import  {SidebarItem} from    '../sidebarItem'
import  {useForm} from '../../context/formcontext'

type Props ={

    children:ReactNode
}


export const Theme = ({children}:Props) =>{

    const {state} =useForm()

    return (
        <C.Container>
            <C.Area>
                <Header/>

                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem
                        title="Pessoal"
                        description="Se identifique "
                        icon="profile"
                        path="/"
                        active={state.currentStep ===1}
                        />
                    
                        <SidebarItem
                        title="Profissional"
                        description="Seu nivel "
                        icon="book"
                        path="/step2"
                        active={state.currentStep === 2}
                        />
                
                        <SidebarItem
                        title="Contatos"
                        description="como te achar "
                        icon="mail"
                        path="/step3"
                        active={state.currentStep === 3}
                        />
                    </C.Sidebar>

                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
               
            </C.Area>
        </C.Container>
    )
}