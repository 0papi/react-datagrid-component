const DataGrid = ({ grid, gridHeaders, onHeaderClick }) => {
  return (
    <div className="grid-wrapper">
      <form>
        <table>
          <thead>
            {gridHeaders &&
              gridHeaders.map((header) => (
                <th onClick={() => onHeaderClick()} key={header.id}>
                  {header.text}
                </th>
              ))}
          </thead>
          <tbody>
            {grid &&
              grid.map((grid) => (
                <tr key={grid.id}>
                  <td>{grid.name}</td>
                  <td>{grid.email}</td>
                  <td>{grid.role}</td>
                  <td>{grid.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default DataGrid;
