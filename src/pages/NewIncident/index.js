import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png'

export default function NewIncident() {
    const [nome, setNome] = useState('');
    const [descricao_curta, setDescricaoCurta] = useState('');
    const [descricao_completa, setDescricaoCompleta] = useState('');
    const [url_imagem, setUrlImagem] = useState('');

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();     // Prevenir o comportamento padrão da página(atualizar depois de enviar dados)

        const data = {
            nome,
            descricao_curta,
            descricao_completa,
            url_imagem,
        };

        try{
            await api.post('personagens', data);

            alert('Personagem cadastrado com sucesso!!');
            history.push('/profile');
        } catch(err) {
            alert('Erro ao cadastrar o personagem, tente novamente.' + err);
        }
    }

    return ( <div className="new-incident-container">
    <div className="content">
        <section>
            <img src={logoImg} alt="logo"/>

            <h1>Cadastrar novo personagem</h1>
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
            
            <button className="button" type="submit">Cadastrar</button>
        </form>
    </div>
</div>)
}