import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./layout";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <AppLayout />
      </Provider>
    </Router>
  );
}

export default App;
