import React from 'react'
import Sidebar from './sidebar';
import Content from './content';
import './main.css'

function Main(){
    return(
        <div className="main-block">
            <Sidebar/>
            <Content/>
        </div>
    );
}

export default Main