import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import './styles.css';

const Thanks = () => {
  return (
    <div id="page-thanks">
      <FiCheckCircle size={48} />
      <h1>Obrigado por cadastrar seu ponto</h1>
    </div>
  );
};

export default Thanks;
