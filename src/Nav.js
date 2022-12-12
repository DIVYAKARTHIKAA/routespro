import React from 'react';
import { AppBar } from '@mui/material';

export default class Header extends React.Component{
    render(){
        <>
        <AppBar sx={{maxHeight: '25px'}} position="static">
            <ToolBar></ToolBar>
        </AppBar>
        </>
    }
}