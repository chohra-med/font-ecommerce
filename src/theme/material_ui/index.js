import {createMuiTheme} from "@material-ui/core";
// import {purple, amber} from "@material-ui/core/colors";
import theme from "../index";

export default createMuiTheme({
    palette: {
        primary: {
            main: theme.COLOR_PRIMARY,
            // main: purple[500],
        },
        secondary: {
            main: theme.COLOR_SECONDARY,
        },
        primaryText: {
            main: theme.COLOR_DEFAULT,
        }
    },
});
