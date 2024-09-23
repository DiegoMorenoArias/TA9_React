import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  document.title = `Contador ${count}` // Sólo se agregó esta línea respecto al TA4 xd
  // Incrementa usando el anterior
  const incrementar = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Baja de a uno, encaro un operador ternario para la condición de no bajar si es 0.
  const decrementar = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Reinicia el contador a 0.
  const reiniciar = () => {
    setCount(0);
  };

  // Uso useEffect para mostrar un mensaje en consola cuando cambie
  useEffect(() => {
    console.log(`Número: ${count}`);
  }, [count]);

  return (
    <div id="fiumbaDiv">
      <h1>Contador: {count}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export default Counter;