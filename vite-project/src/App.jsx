import React, { useState } from 'react';
import styles from './assets/App.module.css';

function App() {
  const [colorName, setColorName] = useState('');
  const [colorCode, setColorCode] = useState('');
  const [colorCards, setColorCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (event) => {
    setColorName(event.target.value);
  };

  const handleCodeChange = (event) => {
    setColorCode(event.target.value);
  };

  const validateColorCode = (code) => {
    return /^#[0-9A-Fa-f]{6}$/.test(code);
  };

  const handleSubmit = () => {
    if (!colorName.trim() || !validateColorCode(colorCode)) {
      setErrorMessage('Por favor, verifique os dados inseridos no formulário');
      return;
    }

    setColorCards([...colorCards, { name: colorName, code: colorCode }]);
    setColorName('');
    setColorCode('');
    setErrorMessage('');
  };

  return (
    <div className={styles.app}>
      <input
        type="text"
        value={colorName}
        onChange={handleNameChange}
        placeholder="Nome da Cor"
        className={styles.colorInput}
      />
      <input
        type="text"
        value={colorCode}
        onChange={handleCodeChange}
        placeholder="Código da Cor (#000000)"
        className={styles.colorInput}
      />
      <button className={styles.submitButton} onClick={handleSubmit}>
        Enviar
      </button>

      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

      <div>
        {colorCards.map((card, index) => (
          <div
            key={index}
            style={{ backgroundColor: card.code }}
            className={styles.colorCard}
          >
            <p>{card.name}</p>
            <p>{card.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
