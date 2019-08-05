import { connect } from 'react-redux';

import Header from './Header.component.js';

const mapStateToProps = state => ({
    amountOfFavoriteCurrencies: state.common.storageOfFavoriteCurrencies.length,
});

export default connect(
    mapStateToProps,
)(Header);
