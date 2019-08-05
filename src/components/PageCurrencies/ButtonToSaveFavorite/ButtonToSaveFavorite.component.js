import React from 'react';
import FontAwesome from 'react-fontawesome';

import './ButtonToSaveFavorite.styles.scss';

const ButtonToSaveFavorite = props => {

    const addFavoriteCurrency = () =>
        props.addFavoriteCurrency(props.selectedCurrency);

    return (
        <button
            className="favorite-button currencies-information__favorite-button"
            onClick={addFavoriteCurrency}
        >
            <FontAwesome name="plus-circle" />
            { ' To favorite!' }
        </button>
    );

};

export default ButtonToSaveFavorite;
