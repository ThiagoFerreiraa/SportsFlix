import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
// import ButtonLink from './componentes/ButtonLink';
import { Button } from '../Button';


function Menu(){
    return (
        <nav className = 'Menu'>
            <Link to ='/'>
             <img className="Logo" src = {Logo} alt = 'SportFlix logo' />
            </Link>
            <Button className = 'ButtonLink' to = '/cadastro/video'>
                Novo video
            </Button>
        </nav>
    );
}

export default Menu; 