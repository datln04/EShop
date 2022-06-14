import { Component } from "react";
import { NavBar } from "../NavBarComponent/NavBarComponent";
import { Topbar } from "../TopbarComponent/TopbarComponent";


export class Header extends Component {
    render() {
        return (
            <>
                <Topbar />
                <NavBar />
            </>
        )
    }
}