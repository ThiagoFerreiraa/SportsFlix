import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
background-color: var(--grayDark);
color: var(--white);
flex: 1;
margin-top: 94px;
padding-top:50px;
padding-left: 5%;
padding-right: 5%;

${({ paddingAll }) => css`
  padding: ${paddingAll};
`}

@media(max-width:800px){
  margin-top:0;
}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
