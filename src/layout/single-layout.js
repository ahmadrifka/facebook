import React from 'react';
import './layout.css';
import Header from './headbar/header';
import Content from './content/content';

function SingleLayout() {
    return(
        <div>
            <Header/>
            <Content/>
        </div>
    )
}

export default SingleLayout;