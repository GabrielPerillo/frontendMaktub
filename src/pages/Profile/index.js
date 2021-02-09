import React, { useState, useEffect } from 'react'
import { Link ,useHistory } from 'react-router-dom'
import { FiTrash2, FiArrowLeft, FiEdit } from 'react-icons/fi'

import logoImg from '../../assets/logo.png';

import api from '../../services/api';

import './styles.css';


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
      await api.delete(`personagens/${id}`, {});
      alert('Personagem excluído com sucesso!!');
      
      setPersonagens(personagens.filter(personagens => personagens.id !== id )) // vai mostrar todos incidente ao qual nao foram deletados
    } catch (err) {
      alert ('Erro ao deletar o personagem, tente novamente.');
    }
  }

  function handlelogout(){
    
    history.push('/');
  }

  

  return (
    <div className="profile-container">
      <header>
      <img src={logoImg} alt="logo"/>

        <Link className="button" to="/personagens/new"> Cadastrar personagem </Link>

        <button onClick={handlelogout} type="button">
          <FiArrowLeft size={20} color="#e02041" />
        </button>
         
      </header>

      <h1> Personagens cadastrados </h1>

      <ul>
          {personagens.map(personagens =>(
            <li key={personagens.id}>
              <div className="profile-container-infor">
                <strong> NOME: </strong>
                <p> {personagens.nome} </p>
        
                <strong> DESCRIÇÃO CURTA: </strong>
                <p> {personagens.descricao_curta} </p>

                <strong> URL DA IMAGEM: </strong>
                <p>
                  <img src={personagens.url_imagem} />
                </p>
              </div>

              <div className="profile-container-action">

                <li>
                  {/* <Link to={`/details/${personagens.id}`} className="btn-sm btn-primary">
                  
                    <button type="button">
                      <FiEdit size={20} color="#e02041" />
                    </button>
                  </Link> */}

                  <Link to={`personagens/${personagens.id}?action=edit`} className="btn-sm btn-primary">
                    <button type="button">
                      <FiEdit size={20} color="#e02041" />
                    </button>
                  </Link>
                </li>

                <li>

                  <button  onClick={ () => handleDeletePersonagem (personagens.id) } type="button">
                  <FiTrash2 size={20} color="#e02041" />
                  </button>
                </li>

                

                
              </div>

            </li>
          ))}
      </ul>

    </div>

  )
} 