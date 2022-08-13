const ColumnGrid = ({ name, email, role, date, id }) => {
  return (
    <table className="table-header">
      <tr>
        <th>{name}</th>
        <th>{email}</th>
        <th>{role}</th>
        <th>{date}</th>
        <th>{id}</th>
      </tr>
    </table>
  );
};

export default ColumnGrid;
