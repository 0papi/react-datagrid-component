import { useEffect, useState } from "react";
import DataGrid from "./components/Grid";

function App() {
  const [gridData, setGridData] = useState([]);

  // fetch data function
  const getGridData = async () => {
    const res = await fetch("http://localhost:5000/api/grids");
    const data = await res.json();

    setGridData(data.grids);
  };

  useEffect(() => {
    getGridData();
  }, []);

  return (
    <div className="container">
      <h2 className="header_msg">React Datagrid Component</h2>
      <DataGrid grid={gridData} />
    </div>
  );
}

export default App;
