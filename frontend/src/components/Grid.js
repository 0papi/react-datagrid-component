import ColumnGrid from "./ColumnGrid";

const DataGrid = ({ grid }) => {
  return (
    <div className="grid-wrapper">
      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Date</th>
          <th>ID</th>
        </thead>

        <tbody>
          {grid &&
            grid.map((grid) => (
              <tr key={grid.id}>
                <td>{grid.name}</td>
                <td>{grid.email}</td>
                <td>{grid.role}</td>
                <td>{grid.date}</td>
                <td>{grid.id}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
