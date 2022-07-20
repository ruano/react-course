import React from 'react'
import RuanoFirst from './components/basics/Firts'
import RuanoComParmetro from './components/basics/ComponentReact'
import Fragmento from './components/basics/Fragmento'
import Random from './components/basics/Aleatorio'
import Card from './components/layout/Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default _ => 
        <div id="app">
            <h1>React Fundamentals</h1>
            <Card title="#05 - Randon">
                <Random min={10} max={90} />                
            </Card>

            <Card title="#04 - Fragment">
                <Fragmento/>
            </Card>

            <Card title="#03 - With params">
                <RuanoComParmetro 
                    titulo="Situação" 
                    nomeAluno="Ruano" 
                    nota={9.6} />
            </Card>
            
            <Card title="#02 - With params 2">
                <RuanoComParmetro 
                    titulo="Situação" 
                    nomeAluno="Teste" 
                    nota={2.6} />    
                </Card>

            <Card title="#01 - First compomnent">
                <RuanoFirst></RuanoFirst>
            </Card>
        </div>