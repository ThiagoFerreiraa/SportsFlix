import styled from 'styled-components';


export const LogoImage = styled.img `
    max-width:168px;
    
    @media(max-width:800px){
        max-width:105px;
        max-height:80px;
        padding-top:5%;
        padding-bottom:5%;
    }
`;

export const MenuWrapper = styled.nav`
    background-color: var(--black);
    width:100%;
    height:94px;
    z-index:100;
    
    
    position:fixed;
    top:0;
    left:0;
    right:0;

    padding-left:5%;
    padding-right:5%;
    


    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    border-bottom: 2px solid var(--primary);

    @media(max-width:800px){
        height:40px;
        justify-content:center;
    }
`;

export const ButtonLink = styled.a`
    color:var(--white);
    border: 2px solid var(--white);
    background:var(--black);
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

        &:hover,
        &:focus{
        color:var(--white);
        border:none;
        }

    }
`;

