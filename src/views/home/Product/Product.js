import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

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
        background:'white',
    },

});

class Product extends React.PureComponent {

    render() {

        const {item, classes} = this.props;
        return (
            <Card className={classes.card}
                  height={200}
            >
                <Grid
                    className={classes.media}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Typography style={{
                        fontSize: item.size,
                    }} variant="h5" component="h2">
                        {item.face}
                    </Typography>
                </Grid>
                <CardContent>
                    <Typography variant="body2" component="p">
                        {item.price} $
                    </Typography>
                </CardContent>

            </Card>
        );
    }
}


export default withStyles(useStyles)(Product);
