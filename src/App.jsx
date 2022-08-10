import React from 'react'
import RuanoFirst from './components/basics/Firts'
import RuanoComParmetro from './components/basics/ComponentReact'
import Fragmento from './components/basics/Fragmento'
import Random from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import './App.css'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import StudentsList from './components/repetition/StudentsList'
import TabelaProdutos from './components/repetition/TabelaProdutos'
import ParOuImpar from './components/conditional/ParOuImpar'
import UserInfo from './components/conditional/UserInfo'

// eslint-disable-next-line import/no-anonymous-default-export
export default _ => 
        <div className="App">
            <h1>React Fundamentals</h1>

            <div className="Cards">

                <Card title="#09 - Renderização condicional" color="#32A615">
                    <ParOuImpar number={21} />
                    <UserInfo user={{ name: 'Ruano' }} />
                    <UserInfo user={{ emails: 'ruano.martinez@gmail.com' }} />
                </Card>

                <Card title="#08 - Desafio Repetição" color="#9C7534">
                    <TabelaProdutos />                    
                </Card>

                
                <Card title="#07 - Repetição" color="#DF9418">
                    <StudentsList />                    
                </Card>

                <Card title="#06 - Component with children" color="#BF65B2">
                    <Family lastName="Silva">
                        <FamilyMember name="Pedro"/>
                        <FamilyMember name="Ana"/>
                        <FamilyMember name="Gustavo"/>
                    </Family>
                </Card>

                
                <Card title="#05 - Randon" color="#BD796B">
                    <Random min={10} max={90} />                
                </Card>

                <Card title="#04 - Fragment" color="#4A8C10">
                    <Fragmento/>
                </Card>

                <Card title="#03 - With params" color="#10708C">
                    <RuanoComParmetro 
                        titulo="Situação" 
                        nomeAluno="Ruano" 
                        nota={9.6} />
                </Card>
                
                <Card title="#02 - With params 2" color="#39108C">
                    <RuanoComParmetro 
                        titulo="Situação" 
                        nomeAluno="Teste" 
                        nota={2.6} />    
                    </Card>

                <Card title="#01 - First compomnent" color="#8C107B">
                    <RuanoFirst></RuanoFirst>
                </Card>
            </div>
        </div>