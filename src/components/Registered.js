import "./css/Registered.css";

const Registered = (props) => {
  const { name, email, password, setEdit, setRegistered } = props;
  const handleClick = () => {
    setEdit(true);
    setRegistered(false);
  };
  // console.log(name);
  return (
    <div className="editRegistered">
      <div className="editText">
        <span>Name: {name}</span>
        <span>Email: {email}</span>
        <span>Password: {password}</span>
      </div>
      <div className="editButton">
        <button onClick={handleClick}>Edit your information</button>
      </div>
    </div>
  );
};
export default Registered;
