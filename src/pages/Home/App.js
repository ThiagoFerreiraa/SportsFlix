import React from 'react';
import styled from 'styled-components';
import Menu from '../../componentes/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import Footer from '../../componentes/Footer';

const AppWrapper = styled.div`
background: var(--grayDark);
padding-top: 94px;
@media(max-width:800px){  
  padding-top:40px;
}
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="A historia de superação do Black Mamba"
      />

      <Carousel
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Footer />

    </AppWrapper>
  );
}

export default Home;
