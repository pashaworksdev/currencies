import React from 'react';
import FontAwesome from 'react-fontawesome';

import './FavoriteTab.styles.scss';

const FavoriteTab = props => {

    const {
        currency,
        selectedFavoriteCurrency,
    } = props;

    const selectFavoriteCurrency = () =>
        props.selectFavoriteCurrency(currency);

    const removeFavoriteCurrency = () =>
        props.removeFavoriteCurrency(currency);

    return (
        <div className="favorite-tab">
            <div
                className="favorite-tab__remove"
                onClick={removeFavoriteCurrency}
            >
                <FontAwesome name="times" />
            </div>
            <div
                className={`favorite-tab__abbreviation ${(selectedFavoriteCurrency.abbreviation === currency.abbreviation) ? 'favorite-tab__abbreviation--selected' : ''}`}
                onClick={selectFavoriteCurrency}
            >
                {currency.abbreviation}
            </div>
        </div>
    );

};

export default FavoriteTab;
