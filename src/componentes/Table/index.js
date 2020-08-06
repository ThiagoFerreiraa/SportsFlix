import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const TableWrapper = styled.table`
width:800px;
margin-left:auto;
margin-right:auto;
margin-top:20px;
margin-bottom:50px;

th {
  background:var(--primary);
  border: 2px solid var(--primary);
  padding:8px 12px;
}

th .actions {
    max-width: 95px;
}

td {
    border-bottom: 2px solid var(--primary);
    padding: 0.5rem;
} 

 @media (max-width: 800px) {
    width: 100%;
    th:not(:first-child) {
      span {
        display: none;
      }
   }
   .titulo {
      width: 100%;
    }
    .descricao {
      display:none;
    }
 }
`;

function Table({ categorias }) {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th className="text-left titulo"><span>Titulo</span></th>
          <th className="text-left descricao"><span>Descrição</span></th>
          <th className="text-center actions"><span>Editar</span></th>
          <th className="text-center actions"><span>Remover</span></th>
        </tr>
      </thead>
      <tbody>
        {categorias.map((categoria, index) => (
          <tr key={index}>
            <>
              <td>{categoria.titulo}</td>
              <td className="descricao">{categoria.descricao.text}</td>
              <td className="text-center">
                <Link>
                  <EditIcon />
                </Link>
              </td>
              <td className="text-center">
                <Link>
                  <DeleteIcon />
                </Link>
              </td>
            </>
          </tr>
        ))}
      </tbody>
    </TableWrapper>

  );
}

Table.prototype = {
  categorias: PropTypes.string.isRequired,
};

export default Table;
