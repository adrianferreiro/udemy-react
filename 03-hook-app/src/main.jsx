// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
// import { CallBackHook } from './06-memos/CallBackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { FormWithCustomForm } from './02-UseEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { SimpleForm } from './02-UseEffect/SimpleForm';
// import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook';
// import { CounterApp } from './01-UseState/CounterApp';
// import { HooksApp } from './HooksApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      {/* // <React.StrictMode> */}
      <MainApp/>
      {/* </React.StrictMode>, */}
 </BrowserRouter> 
 )
// https://api.breakingbadquotes.xyz/v1/quotes/