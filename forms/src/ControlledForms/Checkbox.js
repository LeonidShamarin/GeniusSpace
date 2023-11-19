const Checkbox = ({ value, setValue }) => {
  const handleCheckboxChange = (event) => {
    const checkbox = event.target.checked;
    setValue((prevState) => ({ ...prevState, checkbox }));
  };
  return (
    <div style={{ padding: "20px" }}>
      <label style={{ marginRight: "10px" }} htmlFor="checkbox">
        Checkbox
      </label>
      <input
        onChange={handleCheckboxChange}
        checked={value.checkbox}
        type="checkbox"
        name="checkbox"
        id="checkbox"
      />
    </div>
  );
};

export default Checkbox;
