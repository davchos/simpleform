import "./css/Form.css";
// import { useState } from "react";

const Form = (props) => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    passwordComfirm,
    setPasswordcomfirm,
    textarea,
    setTextArea,
    setRegistered,
    setEdit,
  } = props;
  // setEdit(false);
  // setRegistered(false);
  let cls = "";
  const handleNameChange = (event) => {
    console.log(event);
    const value = event.target.value;
    setName(value);
  };
  const handleEmailChange = (event) => {
    console.log(event);
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    setTextArea("");
    console.log(event);
    const value = event.target.value;
    setPassword(value);
  };
  const handlePasswordComfirmChange = (event) => {
    setTextArea("");
    const value = event.target.value;
    setPasswordcomfirm(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${name} ${email} ${password}`);
    if (password !== passwordComfirm) {
      setTextArea("Les mots de passe ne sont identiques");
      cls = "borderRed";
    } else {
      setRegistered(true);
      setEdit(false);
    }
  };

  return (
    <div className="form">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <label for="name">Name: </label>
        <input
          id="name"
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <label for="email">Email: </label>
        <input
          id="email"
          placeholder="Email"
          type="text"
          name="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <label for="password">Password</label>
        <input
          className="cls"
          id="password"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label for="changePassword">Confirm your password</label>
        <input
          className="cls"
          id="changePassword"
          placeholder="Comfirm password"
          type="password"
          name="password"
          value={passwordComfirm}
          onChange={handlePasswordComfirmChange}
        />
        <textarea
          name=""
          id="textarea"
          cols="30"
          rows="1"
          defaultValue={textarea}
        ></textarea>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
export default Form;
