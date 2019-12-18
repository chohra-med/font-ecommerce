import React from "react";
import {Button} from '@material-ui/core';
import {catcher} from "../../utils/catcher";
import LoadingView from "./Product/LoadingView";
import SnackBar from '../../components/snackbar';
import Product from "./Product/Product";
import Grid from '@material-ui/core/Grid';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import styles from '../../theme/material_ui/home.mui_style';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import LoadingProducts from "./Product/LoadingProducts";
import {fetchProducts} from "../../redux/logics/products";
import {newSortAction} from "../../redux/actions/products";


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
                catcher(this.showSnackBar);
            }
            this.setState({
                refreshing: false,
            })
        });

    }

    showSnackBar = (message, variant = 'info') => {
        this.setState({
            openSnackBar: true,
            messageSnackBar: message,
            variantSnackBar: variant,
        });
    };
    toggleDrawer = () => {
        const {openDrawer} = this.state;
        this.setState({openDrawer: !openDrawer});
    };


    handleChange = (event) => {
        const {fetchProducts,newSort} = this.props;
        let value=event.target.value;
        this.setState({
            refreshing: true,
            value
        }, async () => {
            try {
                await fetchProducts(value);
                await newSort(value);
            } catch (e) {
                catcher(this.showSnackBar);
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
            >

                <AppBar position="static">
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
                            <FormControlLabel value={null} control={<Radio/>} label="Random"/>
                            <FormControlLabel value="id" control={<Radio/>} label="Id"/>
                            <FormControlLabel value="size" control={<Radio/>} label="Size"/>
                            <FormControlLabel value="price" control={<Radio/>} label="Price"/>
                        </RadioGroup>

                    </div>
                </SwipeableDrawer>
                <p>
                    {value}

                </p>
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
