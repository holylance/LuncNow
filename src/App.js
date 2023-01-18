import React, { Component } from "react";
import Navigation from './bundles/components/Navigations';
import Welcome from './bundles/components/Welcome';
import LinkList from './bundles/components/LinkList';
import MyFooter from './bundles/components/MyFooter';
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="container">
                <Navigation/>
                <Routes>
                    <Route path="/" exact element={<Welcome/>} />
                    <Route path="/link_list/" element={<LinkList/>} />
                </Routes>
                <MyFooter/>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;

// <Route path="/tokenomics/" element={<Tokenomics/>} />
// <Route path="/usage/" element={<Usage/>} />
// <Route path="/audit/" element={<Audit/>} />
// <Route path="/roadmap/" element={<Roadmap/>} />
// <Route path="/contact/" element={<Contact/>} />
