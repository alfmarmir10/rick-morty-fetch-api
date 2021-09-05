import React from 'react';
import '../styles/styles_base.css';
import '../styles/styles.css';

function Card(props) {

  const {Esme, Alfonso} = props;

  return (
    <div className="card flex-column-center bg-white">
      <p className="font-weight-bold font-size-md text-align-center">{Esme}</p>
      <img className="card-img margin-top-sm" src={Alfonso} alt={`Caracter ${Esme}`} />
    </div>
  );
}

export default Card;
