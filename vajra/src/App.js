import "./App.css";
import Sidebar from "./components/Sidebar";
import Totalincident from "./components/Totalincident";
import Expenses from "./components/Expenses";
import Totalassets from "./components/Totalassets";
import Inservice from "./components/Inservice";
import IncidentManagement from "./components/IncidentManagement";
import Departments from "./components/Departments";
import Calibrated from "./components/Calibrated";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Totalincident />
      <Expenses />
      <Inservice />
      <Totalassets />
      <IncidentManagement />
      <Departments />
      <Calibrated />
      <div className="orange1"></div>
      <div className="orange2"></div>
      <div className="blue"></div>
    </div>
  );
}

export default App;
