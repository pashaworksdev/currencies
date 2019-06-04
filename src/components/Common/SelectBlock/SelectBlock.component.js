import React from 'react';

import './SelectBlock.styles.scss';

const SelectBlock = props => {

    const {
        additionalClassName,
        selectedCurrency,
        children,
    } = props;

    return Object.keys(selectedCurrency).length === 0
        ? (
            <div className={`currency-not-selected ${additionalClassName}__currency-not-selected`}>
            'Select currency'
            </div>
        )
        : (
            <div className={`currencies-information ${additionalClassName}__currencies-information`}>
                {children}
            </div>
        );

};

export default SelectBlock;
