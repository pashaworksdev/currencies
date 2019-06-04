import { connect } from 'react-redux';

import SelectBlock from './SelectBlock.component.js';

const mapStateToProps = state => ({
    selectedCurrency: state.favorite.selectedFavoriteCurrency,
});

export default connect(
    mapStateToProps,
)(SelectBlock);
