import { Router } from "@reach/router";

function App() {
  const Data = () => <div>data</div>;
  const Edit = () => <div>Edit</div>;

  return (
    <Router>
      <Data path="/" />
      <Edit path="/edit" />
    </Router>
  );
}

export default App;
