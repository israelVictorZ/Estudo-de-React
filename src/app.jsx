import React from 'react';

const titulo = <h1>Esse é um Titulo</h1>;

const App = () => {
  const nome = 'Juliano';
  const ativo = false;

  function mostrarNome(sobrenome) {
    return 'Michel ' + sobrenome;
  }

  const carro = {
    marca: 'ford',
    rodas: 'quatro',
  };

  const estiloP = {
    color: 'gray',
    fontWeight: '700',
    fontSize: '40px',
  };

  return (
    <>
      {titulo}
      <label htmlFor="nome">Nome</label>
      <input
        className={ativo ? 'ativo' : 'inativo'}
        type="text"
        id="nome"
        placeholder={nome}
      />

      <p style={estiloP}>{false ? 'Isso é verdadeiro' : 'Isso é falso'}</p>
      <br />
      <p>{mostrarNome('Thenorio')}</p>
      <br />

      <p>{new Date().getFullYear()}</p>
      <br />

      <p>
        {carro.marca}, {carro.rodas}
      </p>
    </>
  );
};

export default App;
