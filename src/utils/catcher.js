export const catcher = (showSnackBar) => (err) => {
    if (err.response && err.response.data) {
        if (err.response.data) {
            showSnackBar(`${err.response.status}: ${JSON.stringify(err.response.data)}`, 'error');
        } else {
            showSnackBar(`Error Code ${err.response.status}`, 'error');
        }
    } else {
        if (err.message || err.type || err.code) {
            showSnackBar(`Error ${err.message || err.type || err.code}`, 'error');
        } else {
            showSnackBar('Une erreur inconnue est servenue (Server Error).', 'error');
        }
    }
};
