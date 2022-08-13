import { useEffect, useState } from "react";
import DataGrid from "./components/Grid";

const colHeaders = [
  {
    id: 1,
    text: "Name",
  },
  {
    id: 2,
    text: "Email",
  },
  {
    id: 3,
    text: "Role",
  },
  {
    id: 4,
    text: "Date",
  },
];

function App() {
  const [gridData, setGridData] = useState([]);
  const [isSort, setIsSort] = useState(false);

  useEffect(() => {
    // fetch data function
    const getGridData = async () => {
      const res = await fetch("http://localhost:5000/api/grids");
      const data = await res.json();

      if (isSort) {
        setGridData(
          data.grids.sort((a, b) => new Date(b.date) - new Date(a.date))
        );
      } else {
        setGridData(data.grids);
      }
    };

    getGridData();
  }, [isSort]);

  const onColHeaderClick = () => {
    setIsSort((prevSort) => !prevSort);
  };

  return (
    <div className="container">
      <h2 className="header_msg">React Datagrid Component</h2>
      <DataGrid
        grid={gridData}
        gridHeaders={colHeaders}
        onHeaderClick={onColHeaderClick}
      />
    </div>
  );
}

export default App;
