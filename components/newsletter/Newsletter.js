import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMensagem('Por favor, insira um e-mail válido.');
      return;
    }
    setMensagem('Obrigado por assinar!');
    setEmail('');
  };

  return (
    <div style={{
      background: '#f3f8fd',
      padding: '40px 0',
      textAlign: 'center',
      margin: '40px auto',
      maxWidth: '90%',
      borderRadius: '4px'
    }}>
      <h2 style={{
        color: '#2563ad',
        fontWeight: '600',
        marginBottom: '24px'
      }}>
        Receba dicas exclusivas de autocuidado
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            padding: '10px 16px',
            border: 'none',
            borderRadius: '2px',
            fontSize: '16px',
            width: '220px',
            boxSizing: 'border-box'
          }}
        />
        <button
          type="submit"
          style={{
            background: '#2563ad',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '2px',
            padding: '10px 28px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Assinar
        </button>
      </form>
      {mensagem && (
        <div style={{ marginTop: '16px', color: '#2563ad', fontWeight: '500' }}>
          {mensagem}
        </div>
      )}
    </div>
  );
};

export default Newsletter;