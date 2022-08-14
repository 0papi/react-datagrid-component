const EditableRow = ({ formData, onEditRowChange }) => {
  const { name, email, role, date } = formData;
  return (
    <tr>
      <td>
        <input
          type="text"
          name="name"
          placeholder="enter a name"
          value={name}
          onChange={onEditRowChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="email"
          placeholder="enter an email"
          value={email}
          onChange={onEditRowChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="role"
          placeholder="enter a role"
          value={role}
          onChange={onEditRowChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="date"
          placeholder="enter a date"
          value={date}
          onChange={onEditRowChange}
        />
      </td>
      <td>
        <button type="submit">Submit</button>
      </td>
    </tr>
  );
};

export default EditableRow;
