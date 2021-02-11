import React from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

const App = () => {

    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer/>
      </div>
    );
}

export default App;
