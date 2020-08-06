import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Ring } from 'react-spinners-css';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import categoriasRepository from '../../repositories/categorias';

import PageDefault from '../../componentes/PageDefault';

const LoadingWrapper = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
   margin: 10px auto;
`;

function Home() {
  // eslint-disable-next-line no-shadow
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      // eslint-disable-next-line max-len
      .then((categoriasComVideos) => { setDadosIniciais(categoriasComVideos); console.log(categoriasComVideos); })
      .catch((err) => { console.log(err.message); });
  }, []);

  // http://localhost:8080/categorias?_embed=videos

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (
        <LoadingWrapper>
          <Ring color="var(--primary)" size={100} />
        </LoadingWrapper>
      )}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="A historia de superação do Black Mamba"
              />

              <Carousel
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
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
      /> */}
    </PageDefault>
  );
}

export default Home;
