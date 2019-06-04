import { connect } from 'react-redux';

import SelectBlock from './SelectBlock.component.js';

const mapStateToProps = state => ({
    selectedCurrency: state.common.selectedCurrency,
});

export default connect(
    mapStateToProps,
)(SelectBlock);
