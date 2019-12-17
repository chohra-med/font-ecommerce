import {connect} from "react-redux";
import View from "./home.view";
import {fetchProducts, loadMoreData} from "../../redux/logics/products";

const mapStateToProps = state => ({
    displayedProducts: state.products.displayedProducts,
    waitingListProducts: state.products.waitingListProducts

});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(loadMoreData(1)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View);
