import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
    color:var(--white);
    border: 2px solid var(--white);
    padding:16px 24px;
    font-size:16px;
    border-radius:4px;
    font-weight:bold;
    outline:none;
    text-decoration:none;
    transition: all .3s;

    &:hover,
    &:focus{
        color:var(--primary);
        border: 2px solid var(--primary);
    }

    @media(max-width:800px){
        position:fixed;
        left:0;
        right:0;
        bottom:0;
        background-color:var(--primary);
        color:var(--white);
        outline:none;
        text-align:center;
        border:0;
        border-radius:0;
    }
`;


export default Button;
