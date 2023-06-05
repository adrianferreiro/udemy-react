//NOTAS:
//*TEST: 
//  - configurar archivos: babel.config.cjs - jest.config.cjs - jest.setup.js
//  - jest: https://jestjs.io/docs/getting-started                                          //para testear codig js 
//  - react testin library: https://testing-library.com/docs/react-testing-library/intro    //para testear los componentes de react, es muy bueno para el dom
//  npm install --save-dev @testing-library/react

import React from 'react'
import ReactDOM from 'react-dom/client'
//import {HelloWorldApp} from './HelloWorldApp'
import { FirstApp } from './FirstApp'
FirstApp

import './styles.css'
import { CounterApp } from './CounterApp'


//randerizamos
//tomamos el root del index.html
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title='Hola, soy Goku' subtitle={123}/> */}
        <CounterApp value={0} />
        
    </React.StrictMode>
)