import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {loadMoreData} from "../../../redux/logics/products";
import {connect} from "react-redux";
import Product from "./Product";
import {catcher} from "../../../utils/catcher";
import {Box} from "@material-ui/core";
import {addDisplayProductsAction} from "../../../redux/actions/products";
import {API} from "../../../config";

class LoadingProducts extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            finishScrolling: false,
            dispalyedAd: '',
        }
    }

    loadMore = () => {
        const {
            page, sort, dispalyedAds, loadMoreData, addDisplayProducts
        } = this.props;
        let dispalyedAd = API('/ads/?r=' + Math.floor(Math.random() * 1000));
        let exist = dispalyedAds.indexOf(dispalyedAd);
        while (exist > 0) {
            dispalyedAd = API('/ads/?r=' + Math.floor(Math.random() * 1000));
            exist = dispalyedAds.indexOf(dispalyedAd);
        }
        this.setState({
            dispalyedAd
        }, () => {

            loadMoreData(page, sort).then(res => {
                if (res.length < 19) {
                    this.setState({finishScrolling: true})
                }
                addDisplayProducts(dispalyedAd);
                this.setState({loading: false})
            }).catch(e => catcher(e));
        });
    }

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
        const {displayedProducts, dispalyedAds} = this.props;
        const {finishScrolling, loading} = this.state;
        return (
            <Grid spacing={3}
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{margin: 20, marginTop: 100, width: '95%'}}
                  id="products"
            >
                {
                    displayedProducts.map((item, key) => (
                        <>
                            <Grid item xs={6} sm={3} key={key}>
                                <Product item={item}/>
                            </Grid>
                            {(key + 1) % 20 === 0 &&
                            <Grid
                                item
                                xs={12}
                                style={{
                                    background: 'white',
                                    alignItems: 'center',
                                }}
                            >
                                <img src={dispalyedAds[(key + 1) / 20]}
                                     style={{
                                         width: '80%',
                                         height: '20%',
                                         alignSelf: 'center'

                                     }}
                                />

                            </Grid>
                            }
                        </>
                    ))
                }
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
                        <Typography>
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
                        <Typography style={{fontSize: 24, margin: 20}}
                                    variant="body2"
                        >
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
    page: state.products.page,
    sort: state.products.sort,
    dispalyedAds: state.products.dispalyedAds,


});

const mapDispatchToProps = dispatch => ({
    loadMoreData: (page, sort) => dispatch(loadMoreData(page, sort)),
    addDisplayProducts: (data) => dispatch(addDisplayProductsAction(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadingProducts);
