import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
// import ButtonLink from './componentes/ButtonLink';
import { Button } from '../Button';


function Menu(){
    return (
        <nav className = 'Menu'>
            <a href ='/'>
             <img className="Logo" src = {Logo} alt = 'TFLIX logo' />
            </a>
            <Button as ='a' className = 'ButtonLink' href = '/'>
                Novo video
            </Button>
        </nav>
    );
}

export default Menu; 