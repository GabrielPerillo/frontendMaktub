 import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png'
import tomJerryImg from '../../assets/tomJerry.png';    // Importação de imagem

export default function Logon(){
    const history = useHistory();

    function handleLogin() {
        history.push('/profile');
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo" />

                <form>
                    <h1>Bem vindo(a)!! <br /><br /> 
                        Navegue pelo site para conhecer mais sobre os personagens de Tom & Jerry!
                    </h1>

                    <button className="button" onClick={handleLogin} type="submit">Logar</button>

                </form>
            </section>

            <img src={tomJerryImg} alt="Tom e Jerry" /> 
        </div>
    );
}