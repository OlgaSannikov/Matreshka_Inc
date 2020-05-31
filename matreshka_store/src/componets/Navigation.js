import React from "react";
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import { Nav, NavItem}  from 'reactstrap';
import Subscribe from "./Subscribe";
import BookPage from "./BookPage";
import Requests from "./Requests";
import AddOrEditGifts from "./AddOrEditGifts";
import AdminsPage from "./AdminsPage";



function Navigation(){
    return (
        <Router>
            <Nav id="navigation">
                <NavItem>
                <Link className="class-link" to="/">Home</Link>
                </NavItem>
                <NavItem><Link className="class-link" to="/bestsellers">New York Times Bestsellers</Link>
                </NavItem>
                <NavItem><Link className="class-link" to="/subscribe">Subscribe</Link></NavItem>
                <NavItem><Link className="class-link" to="/from_russia">Gifts and Books from Russia</Link></NavItem>
                <NavItem><Link className="class-link" to="/requests">Requests</Link></NavItem>
            </Nav>
            <Switch>
                {/* <Route exact path="/" component={}></Route>  */}
                <Route exact path="/bestsellers" component={BookPage}></Route>
                <Route exact path="/subscribe" component={Subscribe} ></Route>
                <Route exact path="/requests" component={Requests} ></Route>
                {/* <Route path='/' exact={true} component={EmployeeList}/> */}
                <Route path="/add_edit_gifts/:id" component={AddOrEditGifts}/>
                <Route exact path="/admin" component={AdminsPage} ></Route>
            </Switch>
        </Router>
    )
}

export default Navigation;
