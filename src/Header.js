// Todos os componentes precisam estar em letra maiúscula

import React from 'react';

export default function Header({children}){
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

// Podemos colocar o 'export default' antes da nossa function
// Utilizamos chaves para inserir algo javascript na função html
// 'children' é uma propriedade que retorna todo o conteúdo pra dentro de onde formos utilizá-la