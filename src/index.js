import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp';
import './index.css';

const divRoot = document.getElementById('root');

ReactDOM.render(<FirstApp 
    greeting="Hola, Daniel Garcia"
    subtitle="Este es el subtitulo"
    />, divRoot);

