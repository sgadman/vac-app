import { Router } from "@reach/router";

import DataPage from "./pages/DataPage";
import EditPage from "./pages/EditPage";

const App = () => {
  const Data = () => <DataPage />;
  const Edit = () => <EditPage />;

  return (
    <Router>
      <Data path="/" />
      <Edit path="/edit" />
    </Router>
  );
};

export default App;
