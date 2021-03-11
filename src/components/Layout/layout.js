import React from 'react';
import Auxillary from '../../hoc/Auxillary'
import classes from './layout.module.css'
const layout = (props) =>{

    return (
        <Auxillary>
        <div>
            Toolbar, SideBar, Backdrop
        </div>
        <main className ={classes.Content} >
            {props.children}
        </main>
        </Auxillary>
    )
}

export default layout;