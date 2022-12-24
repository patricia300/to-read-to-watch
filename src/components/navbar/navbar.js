import React from 'react';
import './navbar.css';

class Navbar extends React.Component{
    render(){
        return (
            <nav className='navbar'>
                <div>{this.props.left}</div>
                <div>{this.props.right}</div>
            </nav>
        );
    }
}

export default Navbar;