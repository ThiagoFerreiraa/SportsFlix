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

