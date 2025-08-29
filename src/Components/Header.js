import React from "react";
import "../App.css";
import List from "./List";
import DynamicallyGeneratedList from "./DynamicallyGeneratedList";

const Header = () => {
    return (<header className="App-header">
                <h1>3 Facts about ReactJS</h1>
                <DynamicallyGeneratedList />
                {/* <List/>       */}
            </header>
            )
}

export default Header;