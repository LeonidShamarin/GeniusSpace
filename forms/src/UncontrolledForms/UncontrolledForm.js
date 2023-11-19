const UncontrolledForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name= event.target.firstName.value;
    const email= event.target.email.value;
    console.log({name:name, email:email});
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Name </label>
      <input type="text" name="firstName" id="firstName " />
      <label htmlFor="email">Email </label>
      <input type="email" name="email" id="email" />
      {/* <button type="submit">Submit Form</button> */}
      <input type="submit" />
    </form>
  );
};

export default UncontrolledForm;
