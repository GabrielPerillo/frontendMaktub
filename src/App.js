// JSX (JavaScript XML)

// Como Header não precisa ter nenhum conteúdo obrigatório dentro dele, podemos fechar a tag dentro dele mesmo '<Header />'
// Utilziar chaves para usar uma variável dentro do HTML

// Toda vez que o 'estado' for montado, o componente irá renderizar novamente as informações em tela

// Por motivos de performance, não é possível manipular o valor de uma variável de 'estado' de forma direta. Então precisamos sobrepor seu valor

// Toda vez que o meu componente precisar armazenar uma informação dentro dele, não criamos uma variável comum e sim um 'estado'
// Porque assim conseguimos atualizar essa informação e ela reflete as alterações dentro da interface

// useState nos retorna um array com duas posições
// useState = valor, [FuncaoDeAtualizacaoDoValor]

// import Header from './Header';
// import React, { useState } from 'react'   // Importando o componente de 'estado'

// Quando a gente importa um pasta, o react procura automaticamente o index lá dentro

import Routes from './routes';
import './global.css'

import api from './services/api';

function App() {

  return (
    
    <Routes />
  );
}

export default App;
