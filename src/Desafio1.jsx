import React from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const Desafio1 = () => {
  const dados = mario;

  const fonts = {
    fontWeight: '600',
  };

  const ativa = {
    color: 'green',
  };

  const inativa = {
    color: 'red',
  };

  let total = 0;

  return (
    <div style={fonts}>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={dados.ativa ? ativa : inativa}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>

      <p>
        {dados.compras.map((compra) => {
          let numberString = compra.preco.slice(3);
          total += parseInt(numberString, 10);
        })}
        Total Gasto: R$ {total}
      </p>

      {total > 10000 ? <p>Você está gastando muito</p> : ''}
    </div>
  );
};

export default Desafio1;
