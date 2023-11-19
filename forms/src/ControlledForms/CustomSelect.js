const CustomSelect = ({ value, setValue }) => {
  const selectOptions = [
    { id: 1, value: "option 1" },
    { id: 2, value: "option 2" },
    { id: 3, value: "option 3" },
    { id: 4, value: "option 4" },
    { id: 5, value: "option 5" },
  ];

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    const select = event.target.value;
    setValue((prevState) => ({ ...prevState, select }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <label style={{ marginRight: "10px" }} htmlFor="select">
        Select
      </label>
      <select
        onChange={handleSelectChange}
        type="select"
        name="select"
        id="select "
      >
        {selectOptions.map((option) => (
          <option key={option.id}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
