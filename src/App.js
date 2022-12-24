import React from "react";
import Button from './components/button/button';
import Navbar from "./components/navbar/navbar";
import Avatar from "./components/avatar/avatar";
import Links from "./components/Links/links";
class App extends React.Component {
    render(){
        const links = [
            {'name':'To Read', 'route': '/to-read'},
            {'name': 'To Watch', 'route': '/to-watch'},
        ];
        const url = '../asset/demon-slayer-logo.png';
        return(
            <div>
            <h1>All Component</h1>
            <Navbar
                left={<Avatar url={url} alt="logo du site"></Avatar>}
                right={<Links links={links}></Links>}
            >
            </Navbar>
           <Button name="Envoyer" className="btn-succes"></Button>
            </div>
        );
    }
}

export default App;