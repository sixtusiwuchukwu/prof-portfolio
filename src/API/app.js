import React from "react";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { SampleProvider } from "./Context";
import Home from "./VIEWS/Home";
import Collection from "../API/VIEWS/Collections";
import Additem from "./VIEWS/Dashboard/AddItem";
import UserProfile from "./VIEWS/Dashboard/UserProfile";
import Adminlogin from "./VIEWS/Dashboard/Adminlogin";
import Dashboard from "./VIEWS/Dashboard/Statistic";
import Dashboardlayout from "./VIEWS/Dashboard/DashboardLayout";
import Createcollection from "./VIEWS/Dashboard/CreateCollection";

const Notfound = ({ match }) => {
  return (
    <h2>
      a page with <Link to={match.params.id}>{match.params.id}</Link> is
      Notfound
    </h2>
  );
};

const App = (props) => {
  // const [hideheader,setHideheader]=useState(true)
  return (
    <ApolloProvider>
      <BrowserRouter>
        <div>
          <SampleProvider>
            {/* <Header /> */}

            <Switch>
              <Route
                path="/projects/collections/:collectionName"
                component={Collection}
              />

              <Route path="/" exact component={Home} />

              {/* dashboard Admin login route */}
              <Route path="/adminlogin" exact component={Adminlogin} />

              {/* dashboard routes is wrapped with dashboardlayout component as a parent element */}

              <Dashboardlayout>
                {/* dashboard routes */}

                {/* <Redirect to="/admin/dashboard" /> */}

                <Route path="/admin/additems" exact component={Additem} />

                <Route
                  path="/admin/createcollection"
                  exact
                  component={Createcollection}
                />
                <Route path="/admin/profile" exact component={UserProfile} />

                <Route path="/admin/dashboard" exact component={Dashboard} />
              </Dashboardlayout>

              <Route path="/:id" component={Notfound} />
            </Switch>
          </SampleProvider>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};
export default App;
