const InputData = ({ value }) => {
  return (
    <div>
      <p>
        firstName: <strong> {value.name}</strong>
      </p>
      <p>
        email: <strong>{value.email}</strong>
      </p>
      <p>
        checkbox: <strong>{value.checkbox.toString()}</strong>
      </p>
      <p>
        Select: <strong>{value.select}</strong>
      </p>
    </div>
  );
};

export default InputData;
