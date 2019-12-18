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
import LoadingView from "./LoadingView";
import {Box, CircularProgress} from "@material-ui/core";

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
    finishText: {
        fontSize: 14,
        alignSelf: 'center',
        justifySelf: 'center',
        margin: 20,
    },


});

class LoadingProducts extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            finishScrolling: false,
        }
    }

    loadMore = () => {

                const {
                    page,sort
                }=this.props;
                console.log('page et sort',page,sort);
                this.props.loadMoreData(page,sort).then(res => {
                    if (res.length < 19) {
                        this.setState({finishScrolling: true})
                    }
                    this.setState({loading: false})
                }).catch(e => catcher(e));

    };

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    handleScroll = () => {
        const wrappedElement = document.getElementById('products');
        if (this.isBottom(wrappedElement) && !this.state.finishScrolling) {
            this.setState({
                    loading: true
                },
                () => this.loadMore()
            );
        }

    };

    componentWillMount() {
        this.scrollListener = window.addEventListener("scroll", this.handleScroll);
    }


    render() {
        const {displayedProducts} = this.props;
        const {finishScrolling, loading} = this.state;
        return (
            <Grid container spacing={3} id="products">


                {displayedProducts.map((item, key) => (
                   ((key+1) % 21)==0 ?
                    <Box display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    margin={20}
                    height={40}
                    width={'100%'}
                    >
                    <Typography color='black'>
                    loading....
                    </Typography>
                    </Box>
                    :




                    <Grid item xs={6} sm={3} key={key}>
                        <Product item={item}/>
                    </Grid>


                ))}
                {
                    loading &&
                    <Box display='flex'
                         flexDirection='column'
                         alignItems='center'
                         justifyContent='center'
                         textAlign='center'
                         margin={20}
                         height={40}
                         width={'100%'}
                    >
                        <Typography color='black'>
                            loading....
                        </Typography>
                    </Box>

                }

                {
                    finishScrolling &&
                    <Box display='flex'
                         flexDirection='column'
                         alignItems='center'
                         justifyContent='center'
                         textAlign='center'
                         margin={20}
                         height={40}
                         width={'100%'}
                    >
                        <Typography style={{
                            fontSize: 24,
                            margin: 20,
                        }}
                                    variant="body2">
                            ~ end of catalogue ~
                        </Typography>
                    </Box>
                }
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    displayedProducts: state.products.displayedProducts,
    page:state.products.page,
    sort:state.products.sort,


});

const mapDispatchToProps = dispatch => ({
    loadMoreData: (page,sort) => dispatch(loadMoreData(page,sort)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(useStyles)(LoadingProducts));
