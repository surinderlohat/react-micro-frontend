import React from "react";
import "./App.css";

const LoginApp = React.lazy(
  () => import("@yarn-workspace-poc/login-signup/src/App")
);

const DashboardApp = React.lazy(
  () => import("@yarn-workspace-poc/dashboard/src/App")
);

function App() {
  return (
    <div className="App">
      <LoginApp />
      <DashboardApp />
    </div>
  );
}

export default App;
