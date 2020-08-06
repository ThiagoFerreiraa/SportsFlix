/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import useForm from '../../../hocks/useForm';
import FormField from '../../../componentes/FormField';
import Button from '../../../componentes/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { HandlerMudancas, valores } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=nzfU-jZ9te8',
    categoria: 'NBA',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === valores.categoria);

        console.log('categoria Escolhida', categoriaEscolhida);

        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          console.log('Cadastrou com sucesso!');
          history.push('/');
        });
      }}
      >
        <FormField
          label="Titulo do Video"
          value={valores.titulo}
          onChange={HandlerMudancas}
          name="titulo"
        />

        <FormField
          label="URL"
          value={valores.url}
          onChange={HandlerMudancas}
          name="url"
        />

        <FormField
          label="Categoria"
          value={valores.categoria}
          onChange={HandlerMudancas}
          name="categoria"
          suggestion={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
