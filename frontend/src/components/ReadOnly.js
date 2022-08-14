const NonEditableRow = ({ gridData, onEditRow }) => {
  return (
    <tr>
      <td>{gridData.name}</td>
      <td>{gridData.email}</td>
      <td>{gridData.role}</td>
      <td>{gridData.date}</td>
      <td onClick={() => onEditRow(gridData.id)}>Edit</td>
    </tr>
  );
};

export default NonEditableRow;
