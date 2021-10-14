import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// import { getUserInfo } from "@/store/actions";
import Login from "@/views/login";
class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </HashRouter>
    );
  }
}

// export default connect((state) => state.user, { getUserInfo })(Router);
export default connect((state) => state.user)(Router);
