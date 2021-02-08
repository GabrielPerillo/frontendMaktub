import React, { useState, useEffect } from 'react'
import { Link ,useHistory } from 'react-router-dom'
import { FiPlusCircle, FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.png';

import api from '../../services/api';

import './styles.css';


import tomImg from '../../assets/tom.png';
import jerryImg from '../../assets/jerry.png';
import spikeImg from '../../assets/spike.png';
import quackerImg from '../../assets/quacker.jpg';
import nibblesImg from '../../assets/nibbles.jpg';


export default function Profile() {
  const [personagens, setPersonagens] = useState ([]); // fazer a troca dos valores , arrary

  const history = useHistory();

  useEffect(()=> { // uma funcao que chama a api
    api.get('personagens',{ // chamar api com rota
      
    }).then(response => {
      setPersonagens(response.data.personagens) // guardar no incident os dados do banco
      console.log(response.data.personagens);
    })
  },[]);

  async function handleDeletePersonagem(id){ // deletar incidentes com base no id (key)
    try {
      await api.delete(`personagens/${id}`,{ // chamar api com rota
        
      });
      setPersonagens(personagens.filter(personagens => personagens.id !== id )) // vai mostrar todos incidente ao qual nao foram deletados
    } catch (err) {
      alert ('Erro ao deletar caso, tente novamente');
    }
  }

  function handlelogout(){
    
    history.push('/');
  }

  

  return (
    <div className="profile-container">
      <header>
      <img src={logoImg} alt="logo"/>

        <Link className="button" to="/incidents/new"> Cadastrar novo caso </Link>

        <button onClick={handlelogout} type="button">
          <FiArrowLeft size={20} color="#e02041" />
        </button>
         

      </header>
      <h1> Personagens cadastrados </h1>
      <ul>
          {personagens.map(personagens =>(
            
            
            <li key={personagens.id}>
              
              <strong> NOME: </strong>
              <p> {personagens.nome} </p>
      
              <strong> DESCRIÇÃO CURTA: </strong>
              <p> {personagens.descricao_curta} </p>

              <strong> URL DA IMAGEM: </strong>
              <p> {personagens.url_imagem} </p>

              
              <Link to="/Details">
                <button type="button">
                  <FiPlusCircle size={20} color="#e02041" />
                </button>
              </Link>

            </li>
            
          ))}
      </ul>
            
    </div>

  )
}