import NavSearch from '../components/navSearch';
import { connect } from 'react-redux';

const NavSearchContainer = connect(
    (state) => {
        return {
            inputText: state.state.artists.inputText,
        };
    }
)(NavSearch);
export default NavSearchContainer;
