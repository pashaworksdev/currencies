import { connect } from 'react-redux';

import SelectBlock from './SelectBlock.component.js';

const selectRequiredState = (state, props) => (
    props.additionalClassName === 'main'
        ? state.common.selectedCurrency : state.favorite.selectedFavoriteCurrency
);

const mapStateToProps = (state, props) => ({
    selectedCurrency: selectRequiredState(state, props),
});

export default connect(
    mapStateToProps,
)(SelectBlock);
