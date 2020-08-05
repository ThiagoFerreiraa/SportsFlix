/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function HandlerMudancas(infoEvento) {
    setValue(
      infoEvento.target.getAttribute('name'),
      infoEvento.target.value,
    );
  }

  const Titulo = styled.h1`
     margin-bottom:20px;
     display:flex;
     justify-content:center;
  `;

  return (
    <PageDefault>
      <Titulo>
        Cadastro de Categoria:
        {valores.nome}
      </Titulo>

      <form onSubmit={
        function handlerSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            valores,
          ]);
          setValores(valoresIniciais);
        }
        }
      >

        <FormField
          label="Nome da  Categoria"
          type="text"
          value={valores.nome}
          onChange={HandlerMudancas}
          name="nome"
        />

        <FormField
          label="Descricao"
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

      {/*
      <ul>
        {categorias.map((categorias, indice) => (
          <li key={`${categorias}${indice}`}>
            {categorias.nome}
            {categorias.descricao}
          </li>
        ))}
      </ul> */}

      <Link to="/">
        Ir para Home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
