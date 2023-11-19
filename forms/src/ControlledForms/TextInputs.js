import {debounce } from "lodash"

const TextInputs = ({ value, setValue }) => {
//debounce - це для затримки 

  const handleNameChange = debounce ((event) => {
    const name = event.target.value;
    console.log(name);
    setValue((prevState) => ({ ...prevState, name }));
  },1000);
  const handleEmailChange = (event) => {
    const email = event.target.value;
    setValue((prevState) => ({ ...prevState, email }));
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <label style={{ marginRight: "10px" }} htmlFor="firstName">
          Name
        </label>
        <input
          onChange={handleNameChange}
          value={value.name}
          type="text"
          name="firstName"
          id="firstName "
        />
      </div>
      <div style={{ padding: "20px" }}>
        <label style={{ marginRight: "10px" }} htmlFor="email">
          Email
        </label>
        <input
          onChange={handleEmailChange}
          value={value.email}
          type="email"
          name="email"
          id="email"
        />
      </div>
    </>
  );
};

export default TextInputs;
