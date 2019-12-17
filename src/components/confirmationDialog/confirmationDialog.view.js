import React from 'react';
import * as PropTypes from "prop-types";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';

/**
 * Confirmation dialog Component
 */
class AlertDialog extends React.PureComponent {
    render() {
        const {title, content, open, handleDisagree, handleClose, handleAgree} = this.props;
        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDisagree} color="primary">
                        CANCEL
                    </Button>
                    <Button onClick={handleAgree} color="primary" autoFocus>
                        CONFIRM
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

AlertDialog.propTypes = {
    /**
     * Confirmation dialog title
     */
    title: PropTypes.string.isRequired,
    /**
     * Confirmation dialog content
     */
    content: PropTypes.string.isRequired,
    /**
     * is true when confirmation dialog is opened
     */
    open: PropTypes.bool.isRequired,
    /**
     * handle disagree button clicked
     */
    handleDisagree: PropTypes.func.isRequired,
    /**
     * handle close confirmation dialog
     */
    handleClose: PropTypes.func.isRequired,
    /**
     * handle agree button clicked
     */
    handleAgree: PropTypes.func.isRequired,
};

export default AlertDialog;
