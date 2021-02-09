import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png'

export default function NewIncident(props) {
    const [nome, setNome] = useState('');
    const [descricao_curta, setDescricaoCurta] = useState('');
    const [descricao_completa, setDescricaoCompleta] = useState('');
    const [url_imagem, setUrlImagem] = useState('');

    var search = props.location.search;
    var params = new URLSearchParams(search);
    var action = params.get('action');
    var id = props.match.params.id;

    useEffect(() => {
        if (action === 'edit' && id !== '') {
            api.get(`personagens/${id}`)
            .then(response => {    
                console.log(response.data);
                setNome(response.data.personagem.nome);
                setDescricaoCurta(response.data.personagem.descricao_curta);
                setDescricaoCompleta(response.data.personagem.descricao_completa);
                setUrlImagem(response.data.personagem.url_imagem);
            });
        } else {
            return;
        }
    }, []);

    const history = useHistory();


    async function handleNewIncident(e){
        e.preventDefault();
      
        
        const data = {
          nome,
          descricao_curta,
          descricao_completa,
          url_imagem
        };
        if (action === 'edit') {
          try {
              const response = await api.put(`/personagens/${id}`, data, {
              });
              history.push('/profile');
          } catch (err) {
            alert(err+ "Ocorreu um erro. Favor contatar o administrador do sistema.");
          }
        } else {
          
          try {
              const response = await api.post('personagens', data, {
              });
              history.push('/profile');
          } catch (err) {
              alert(err+  "Ocorreu um erro. Favor contatar o administrador do sistema.");
          }  
        }
      
      }

    return ( <div className="new-incident-container">
    <div className="content">
        <section>
            <img src={logoImg} alt="logo"/>
            
            { action != "edit" ?
          <h1>Cadastrar personagem</h1>
          :
          <h1>Editar personagem</h1>
        }
            <p>Descreva o personagem detalhadamente para as pessoas o conhecerem melhor.</p>

            <Link className="back-link" to="/profile">
                <FiArrowLeft size={16} color="#E02041" />
                Voltar para a tela de personagens cadastrados
            </Link>
        </section>
        

        <form onSubmit={handleNewIncident}>
            <input 
                placeholder="Nome do personagem" 
                value={nome}
                onChange={e => setNome(e.target.value)}
            />

            <input 
                placeholder="Descrição curta" 
                value={descricao_curta}
                onChange={e => setDescricaoCurta(e.target.value)}
            />

            <textarea 
                placeholder="Descrição completa" 
                value={descricao_completa}
                onChange={e => setDescricaoCompleta(e.target.value)}
            />

            <input 
                placeholder="url da imagem" 
                value={url_imagem}
                onChange={e => setUrlImagem(e.target.value)}
            />
            
            {
            action != 'edit' ?
                <button className="button" type="submit">Cadastrar</button>
                :
                <button className="button" type="submit">Editar</button>
            }

        </form>
    </div>
</div>)
}