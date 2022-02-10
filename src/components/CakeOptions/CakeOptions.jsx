import React from "react";

import "./CakeOptions.css";

const CakeOptions = (props) => {
  const options = [
    { text: "Cakes", handler: props.actionProvider.handleCakes, id: 1 },
    { text: "CupCakes", handler: props.actionProvider.handleCupCakes  , id: 2 },
    { text: "Pastries", handler: props.actionProvider.handlePastries  , id: 3 },
    { text: "Macarons", handler: props.actionProvider.handleMacarons  , id: 4 },
    { text: "Donuts", handler: props.actionProvider.handleDonuts , id: 5 },
    { text: "Customization", handler: props.actionProvider.handleCustom, id: 6 },

  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="cake-option-button">
        {option.text}
    </button>
  ));

  return <div className="cake-options-container">{buttonsMarkup}</div>;
};

export default CakeOptions;