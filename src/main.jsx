import React from 'react';
import ReactDOM from 'react-dom/client';


import { TodoApp } from './todoList/TodoApp';

import './index.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
    <TodoApp />
)
