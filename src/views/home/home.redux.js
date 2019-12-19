import {connect} from "react-redux";
import View from "./home.view";
import {fetchProducts, loadMoreData} from "../../redux/logics/products";
import {addDisplayProductsAction, newSortAction} from "../../redux/actions/products";

const mapStateToProps = state => ({
    displayedProducts: state.products.displayedProducts,
    waitingListProducts: state.products.waitingListProducts,
    dispalyedAds:state.products.dispalyedAds
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: (sort) => dispatch(fetchProducts(sort)),
    newSort:(sort)=>dispatch(newSortAction(sort)),
    addDisplayProducts: (data) => dispatch(addDisplayProductsAction(data)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View);
