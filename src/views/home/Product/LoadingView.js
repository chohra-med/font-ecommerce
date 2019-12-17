import React, {PureComponent} from "react";
import {
    Box,
    CircularProgress,
} from '@material-ui/core';


export default class LoadingView extends PureComponent{

    render(){
        return(
            <Box display='flex'
                 flexDirection='column'
                 alignItems='center'
                 justifyContent='center'
                 textAlign='center'
                 height='100vh'
                 width='100%'
            >
                <CircularProgress color='secondary'/>
            </Box>
        )
    }
}
