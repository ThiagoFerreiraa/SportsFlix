import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';


const Main = styled.main`
background-color: var(--black);
color: var(--white);
flex: 1;
margin-top: 94px;
padding-top:50px;
padding-left: 5%;
padding-right: 5%;

@media(max-width:800px){
  margin-top:0;
}
`;

function PageDefault({children}){
    return(
      <> 
        <Menu/>
          <Main>
            {children}
          </Main>
        <Footer/>
      </>
    )

}


export default PageDefault;