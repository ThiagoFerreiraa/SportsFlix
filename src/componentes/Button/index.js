import styled from 'styled-components';

const Button = styled.button`
    color:var(--white);
    border: 2px solid var(--white);
    background:var(--black);
    padding:16px 24px;
    margin-bottom:20px;
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
`;

export default Button;
