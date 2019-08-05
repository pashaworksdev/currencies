import React from 'react';

import './FavoriteInformation.styles.css';

const FavoriteInformation = props => {

    const {
        selectedFavoriteCurrency,
        startDate,
        endDate,
    } = props;

    return (
        <div className="text-information currencies-information__text-information">
            <div className="text-information__field">
                { 'Currency Name: '}
                { selectedFavoriteCurrency.name }
            </div>
            <div className="text-information__field">
                { 'Currency Abbreviation: '}
                { selectedFavoriteCurrency.abbreviation }
            </div>
            <div className="text-information__field">
                { 'Start date: '}
                { startDate.toDateString() }
            </div>
            <div className="text-information__field">
                { 'End date: '}
                { endDate.toDateString() }
            </div>
        </div>
    );

};

export default FavoriteInformation;
