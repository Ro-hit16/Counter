
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import Controls from "./Component/Controls";

function App() {
  return (
    <center className="   card_container">
      <div className="card" style={{ width: "40%" }}>
        <Header />
          
        <Controls />
      </div>
    </center>
  );
}

export default App;
