import React from 'react'
import RuanoFirst from './components/basics/Firts'
import RuanoComParmetro from './components/basics/ComponentReact'
import Fragmento from './components/basics/Fragmento'
import Random from './components/basics/Aleatorio'

// eslint-disable-next-line import/no-anonymous-default-export
export default _ => 
        <div id="app">
            <h1>React Fundamentals</h1>
            <Random min={10} max={90} />
            <Fragmento/>
            <RuanoComParmetro 
                titulo="Situação" 
                nomeAluno="Ruano" 
                nota={9.6} />
            <RuanoComParmetro 
                titulo="Situação" 
                nomeAluno="Teste" 
                nota={2.6} />    
            <RuanoFirst></RuanoFirst>   
        </div>