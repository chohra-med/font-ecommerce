import {connect} from "react-redux";
import View from "./router.view";

const mapStateToProps = state => ({
    title: 'Creatella E-Commerce',
});

export default connect(
    mapStateToProps,
)(View);
