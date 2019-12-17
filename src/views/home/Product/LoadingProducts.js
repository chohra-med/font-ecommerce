import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import {fetchProducts, loadMoreData} from "../../../redux/logics/products";
import {connect} from "react-redux";
import View from "../home.view";
import Product from "./Product";
import {catcher} from "../../../utils/catcher";

const useStyles = theme => ({
    card: {
        minWidth: 275,
        maxWidth: 320,
        margin: '2px',
        background: '#f1f1f1',
        borderRadius: 3,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 140,
        background: 'white',
    },

});

class LoadingProducts extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state={
            page:1,
            scrolling:false,
            finishScrolling:false,
        }
    }
    loadMore = () => {
        this.setState(
            {
                page: this.state.page + 1,
                scrolling: true
            });
            this.props.loadMoreData(this.state.page).then(res=>{
                if(res.length<28){
                    this.setState({finishScrolling:true})
                }
            }).catch(e=>catcher(e));

    }
    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }
    handleScroll = () => {
        const wrappedElement = document.getElementById('products');
        if (this.isBottom(wrappedElement)) {
            alert('header bottom reached');
        }

    };
    componentWillMount() {
        this.scrollListener = window.addEventListener("scroll", e => {
            this.loadMore();
        });
    }



    render() {

        const {displayedProducts, classes} = this.props;
        return (
            <Grid container spacing={3} id="products">


                {displayedProducts.map((item, key) => (
                    <Grid item xs={6} sm={3} key={key}>
                        <Product item={item}/>
                    </Grid>


                ))}
                <div>


                </div>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    displayedProducts: state.products.displayedProducts,

});

const mapDispatchToProps = dispatch => ({
    loadMoreData: (data) => dispatch(loadMoreData(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(useStyles)(LoadingProducts));
