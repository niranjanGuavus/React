import React, {Suspense} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AllQoutes from "./pages/AllQoutes";
//import NewQoutes from "./pages/NewQoutes"; //  implement laze loading so remove general  import
import NotFound from "./pages/NotFound";
import QouteDetails from "./pages/QouteDetails";

const NewQoutes = React.lazy(()=>import('./pages/NewQoutes'))
function App() {
  return (
    <Layout>
      <Suspense fallback={
        <div className="centered">
          <LoadingSpinner/>
        </div>
      }>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/qoutes"></Redirect>
          </Route>
          <Route path="/qoutes" exact>
            <AllQoutes></AllQoutes>
          </Route>
          <Route path="/qoutes/:qouteId">
            <QouteDetails></QouteDetails>
          </Route>
          <Route path="/new-qoute">
            <NewQoutes></NewQoutes>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Suspense>
      
    </Layout>
  );
}

export default App;
