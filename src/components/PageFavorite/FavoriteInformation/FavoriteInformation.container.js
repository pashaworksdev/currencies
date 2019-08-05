import { connect } from 'react-redux';

import FavoriteInformation from './FavoriteInformation.component.js';

const mapStateToProps = state => ({
    selectedFavoriteCurrency: state.favorite.selectedFavoriteCurrency,
    startDate: state.common.startDate,
    endDate: state.common.endDate,
});

export default connect(
    mapStateToProps,
)(FavoriteInformation);
