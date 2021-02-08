import React, { useEffect, useState } from 'react'; /* 'useEffect chamará uma função assim que ele for disponibilizado em tela */ 

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';


export default function Profile() {
    const [personagens, setPersonagens] = useState ([]); // fazer a troca dos valores , array

    const history = useHistory();
    
    async function handleDeletePersonagem(id) {
        try{
            await api.delete('personagens', personagens.data);
            alert('Personagem deletado com sucesso!!');
        } catch (err) {
            alert('Erro ao deletar o personagem.');
        }
    }
    
    return (
        <div className="details-container">
            <header>
                <img src={logoImg} alt="logo"/>
                <span>Tela de detalhamento do personagem</span>  

                <Link to="/profile">
                    <button type="button">
                        <FiArrowLeft size={18} color="#E02041" />
                    </button>
                </Link>
                
            </header>

            <h1>Informações detalhadas do personagem</h1>

            <ul>

                
                    <li key={personagens.id}>
                        <strong>NOME:</strong>
                        <p>{personagens.nome}</p>

                        <strong>DESCRIÇÃO CURTA:</strong>
                        <p>{personagens.descricao_curta}</p>

                        <strong>DESCRIÇÃO COMPLETA:</strong>
                        <p>{personagens.descricao_completa}</p>

                        <strong>URL:</strong> 
                            <p>
                                <img src={personagens.url_imagem} />
                            </p>

                        <button onClick={() => handleDeletePersonagem(personagens.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />  
                        </button>
                    </li>
                
            </ul>
        </div>
    );
}