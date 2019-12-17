import {
    // Link as UILink,
    Paper,
    TextField,
    Typography,
    FormControlLabel,
    Avatar,
    CircularProgress,
    FormControl,
} from "@material-ui/core";
// import {Email, Lock} from "@material-ui/icons";
import {styled} from '@material-ui/core/styles';
import theme from "../../theme";

export const LoginPaper = styled(Paper)({
    width: '50%',
    textAlign: 'center',
});

export const CustomTextField = styled(TextField)({
    marginTop: 16,
    marginBottom: 16,
    width: '80%',
});

export const CustomTypography = styled(Typography)({
    marginTop: 16,
    marginBottom: 16,
});

export const CustomFormControlLabel = styled(FormControlLabel)({
    marginTop: 16,
    marginBottom: 16,
});

export const CustomAvatar = styled(Avatar)({
    marginRight: 16,
    marginLeft: 16,
});

export const CustomCircularProgress = styled(CircularProgress)({
    color: theme.COLOR_WHITE,
});

export const CustomFormControl = styled(FormControl)({
    marginTop: 16,
    // marginBottom: 16,
});
