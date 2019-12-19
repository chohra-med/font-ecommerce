import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {differenceTwoDatesInDays} from "../../../utils/helpers";

const useStyles = theme => ({
    card: {
        minWidth: '30%',
        margin: '2px',
        background: 'white',
        borderRadius: 3,
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 140,
        background: '#FAFAFA',
        borderRadius: 4,
        borderColor: 'black',
        color: theme.palette.text.secondary,
    },
});

class Product extends React.PureComponent {

    render() {
        const {item, classes} = this.props;
        let diffDate = parseInt(differenceTwoDatesInDays(new Date(item.date), new Date()));
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
                    <Typography
                        component="p">
                        {item.price / 100} $
                    </Typography>
                    <Typography
                        variant="body2" component="p"
                        stlye={{
                            color: 'grey'
                        }}>
                        {diffDate >= 7 ? new Date(item.date).toDateString() : `${diffDate} days ago`}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}


export default withStyles(useStyles)(Product);
