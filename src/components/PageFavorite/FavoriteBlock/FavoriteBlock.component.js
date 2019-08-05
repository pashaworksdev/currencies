import React from 'react';

import FavoriteTab from '../FavoriteTab';

import './FavoriteBlock.styles.scss';

const FavoriteBlock = props => {

    const {
        selectedFavoriteCurrency,
        storageOfFavoriteCurrencies,
        children,
    } = props;

    const selectFavoriteCurrency = currency =>
        props.selectFavoriteCurrency(currency);

    const removeFavoriteCurrency = currency => {
        (selectedFavoriteCurrency.id === currency.id) && props.selectFavoriteCurrency({});
        props.removeFavoriteCurrency(currency);
    };

    const renderTabs = () => storageOfFavoriteCurrencies.map(currency => (
        <FavoriteTab
            key={currency.id}
            currency={currency}
            selectedFavoriteCurrency={selectedFavoriteCurrency}
            selectFavoriteCurrency={selectFavoriteCurrency}
            removeFavoriteCurrency={removeFavoriteCurrency}
        />
    ));

    return (
        <div className="favorite current-page__favorite">
            <div className="favorite-tabs favorite__favorite-tabs">
                {renderTabs()}
            </div>
            {children}
        </div>
    );

};

export default FavoriteBlock;
