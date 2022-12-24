import React from "react";
import './links.css';

class Links extends React.Component{
    
    render(){
        const links = this.props.links.map((link) => {
            return (
            <li key={link.name}>
                <a href={link.route}>{link.name}</a>
            </li>
            );
        })
        return(
            <ul className="links">{links}</ul>
        );
    }
}

export default Links;