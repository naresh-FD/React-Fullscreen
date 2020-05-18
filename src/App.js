import React from "react";

import Info from "./Info";
// import Citations from "./Citations";
// import Nav from "./Nav";
// import Resources from "./Resources";
import MaximizableView from "./MaximizableView";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <MaximizableView backgroundColor="#efefef">
        <Info />
      </MaximizableView>
    </React.Fragment>
  );
}

export default App;
