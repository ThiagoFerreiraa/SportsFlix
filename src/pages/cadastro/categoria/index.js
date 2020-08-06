/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ring } from 'react-spinners-css';
import styled from 'styled-components';
import Titulo from './style';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';
import Table from '../../../componentes/Table';
import useForm from '../../../hocks/useForm';

function CadastroCategoria() {
  const LoadingWrapper = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
   margin: 10px auto;
  `;

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { HandlerMudancas, valores, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Bucando Arquivos no json.

    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://sportflix.herokuapp.com/categorias';

    fetch(URL_TOP).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });

    // ou vc pode usar assim...

    // fetch(URL_TOP).then((respostaDoServidor) => {
    //   return respostaDoServidor.json();
    // }).then((respostaDoServidorJson) => {
    //   console.log(respostaDoServidorJson);
    // });

  // setTimeout(() => {
  //     <Ring color="var(--primary)" size={100} />
  // }, []);
  });

  return (
    <PageDefault>
      <Titulo>
        Cadastro de Categoria:
        {valores.titulo}
      </Titulo>

      <form onSubmit={
        function handlerSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            valores,
          ]);

          clearForm();
        }
      }
      >

        <FormField
          label="Nome da  Categoria"
          type="text"
          value={valores.titulo}
          onChange={HandlerMudancas}
          name="titulo"
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={valores.descricao}
          onChange={HandlerMudancas}
          name="descricao"
        />

        <FormField
          label="Cor"
          type="color"
          value={valores.cor}
          onChange={HandlerMudancas}
          name="cor"
        />

        <Button>
          Cadastrar
        </Button>

      </form>

      <Table categorias={categorias} />
      {categorias.length === 0 && (
        <LoadingWrapper>
          <Ring color="var(--primary)" size={100} />
        </LoadingWrapper>
      )}

      <Link to="/">
        Ir para Home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
