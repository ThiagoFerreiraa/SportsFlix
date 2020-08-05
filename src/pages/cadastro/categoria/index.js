/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Titulo from './style';
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

  useEffect(() => {

   //Bucando Arquivos no json.

    console.log('Alo Thiago');
    const URL_TOP = 'http://localhost:8080/categorias';

    // fetch(URL_TOP).then((respostaDoServidor) => {
    //   return respostaDoServidor.json();
    // }).then((respostaDoServidorJson) => {
    //   console.log(respostaDoServidorJson);
    // });

    // ou vc pode usar assim...

    fetch(URL_TOP).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma categoria bacanuda',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Outra categoria bacanuda',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

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

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categorias, indice) => (
          <li key={`${categorias}${indice}`}>
            {categorias.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
