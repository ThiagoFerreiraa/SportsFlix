import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import {LogoImage , MenuWrapper} from './style';
import Button  from '../Button';
// import ButtonLink from './componentes/ButtonLink';



function Menu(){
    return (
        <MenuWrapper className = 'Menu'>
            <Link to ='/'>
                <LogoImage className="Logo" src = {Logo} alt = 'SportFlix logo' />
            </Link>
            <Button className = 'ButtonLink' to = '/cadastro/video'>
                Novo video
            </Button>
        </MenuWrapper>
    );
}

export default Menu; 