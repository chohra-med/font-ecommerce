import React from "react";
import LoadingView from "./Product/LoadingView";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import styles from '../../theme/material_ui/home.mui_style';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import LoadingProducts from "./Product/LoadingProducts";
import {API} from "../../config";
import {addDisplayProductsAction} from "../../redux/actions/products";


class View extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openSnackBar: false,
            messageSnackBar: '',
            variantSnackBar: 'info',
            refreshing: false,
            openDrawer: false,
            value: '',
        }
    }

    componentDidMount() {
        const {fetchProducts} = this.props;
        this.setState({
            refreshing: true
        }, async () => {
            try {
                await fetchProducts();
            } catch (e) {
                alert(e.response);
            }
            this.setState({
                refreshing: false,
            })
        });

    }

    toggleDrawer = () => {
        const {openDrawer} = this.state;
        this.setState({openDrawer: !openDrawer});
    };

    handleChange = (event) => {
        const {fetchProducts, addDisplayProducts, newSort, dispalyedAds} = this.props;
        let value = event.target.value;

        let dispalyedAd = API('/ads/?r=' + Math.floor(Math.random() * 1000));
        let exist = dispalyedAds.indexOf(dispalyedAd);
        while (exist > 0) {
            dispalyedAd = API('/ads/?r=' + Math.floor(Math.random() * 1000));
            exist = dispalyedAds.indexOf(dispalyedAd);
        }


        this.setState({
            refreshing: true,
            value
        }, async () => {
            try {
                await addDisplayProducts(dispalyedAd);
                await fetchProducts(value);
                await newSort(value);
            } catch (e) {
                alert(e.response);
            }
            this.setState({
                refreshing: false,
            })
        });
    };

    render() {
        const {classes} = this.props;
        const {
            refreshing,
            openDrawer,
            value
        } = this.state;
        return (
            <div
                style={{background: '#F4F4F4'}}
            >
                <React.Fragment>
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu"
                                        onClick={this.toggleDrawer}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6">
                                E Commerce Website
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <SwipeableDrawer
                        open={openDrawer}
                        onOpen={this.toggleDrawer}
                        classes={{
                            paper: classNames(classes.drawerPaper, !openDrawer && classes.drawerPaperClose),
                        }}
                        onClose={this.toggleDrawer}
                    >
                        <div
                            className={classes.list}
                            style={{marginTop: 20, padding: 10,}}
                            role="presentation"
                        >
                            <Typography variant="body2" component="h3">
                                Order Product By
                            </Typography>
                            <RadioGroup aria-label="gender" name="gender1" value={value}
                                        style={{
                                            marginTop: 20,
                                            spacing: 10
                                        }}
                                        onChange={this.handleChange}>
                                <FormControlLabel value={null} control={<Radio/>} label="Random" defaultChecked/>
                                <FormControlLabel value="id" control={<Radio/>} label="Id"/>
                                <FormControlLabel value="size" control={<Radio/>} label="Size"/>
                                <FormControlLabel value="price" control={<Radio/>} label="Price"/>
                            </RadioGroup>
                        </div>
                    </SwipeableDrawer>
                </React.Fragment>
                {
                    refreshing ?
                        <LoadingView/>
                        :
                        <LoadingProducts/>

                }
            </div>
        );
    }
}

export default withStyles(styles)(View)
