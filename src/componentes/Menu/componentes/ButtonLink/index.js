import React from 'react';

function ButtonLink(props) {
 // props => {className: "o que alguém passar", href: '/', children: 'O que a pessoa colocar na children'}
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
