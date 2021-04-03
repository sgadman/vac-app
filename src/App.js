import { Router } from "@reach/router";

import DataPage from "./pages/DataPage";
import EditPage from "./pages/EditPage";
import Header from "./components/Header/Header";

const App = () => {
  const Data = () => <DataPage />;
  const Edit = () => <EditPage />;

  return (
    <div style={{ height: "97vh" }}>
      <Header />
      <Router>
        <Data path="/" />
        <Edit path="/edit" />
      </Router>
    </div>
  );
};

export default App;
