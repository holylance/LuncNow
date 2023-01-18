import React from "react"
import {Navbar, NavItem} from "react-materialize"

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <Navbar left="true">
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/link_list">Link List</NavItem>
                </Navbar>
            </div>
        );
    }
}
