import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Registered from "./components/Registered";
import Form from "./components/Form";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordComfirm, setPasswordcomfirm] = useState("");
  const [textarea, setTextArea] = useState("");
  const [registered, setRegistered] = useState(false);
  const [edit, setEdit] = useState(false);
  console.log("registered " + registered + "edit" + edit);

  return (
    <div>
      <div className="main">
        {registered ? (
          edit ? (
            <Form
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              passwordComfirm={passwordComfirm}
              setPasswordcomfirm={setPasswordcomfirm}
              textarea={textarea}
              setTextArea={setTextArea}
              setRegistered={setRegistered}
              setEdit={setEdit}
            />
          ) : (
            <Registered
              name={name}
              email={email}
              password={password}
              setEdit={setEdit}
              setRegistered={setRegistered}
            />
          )
        ) : (
          <Form
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            passwordComfirm={passwordComfirm}
            setPasswordcomfirm={setPasswordcomfirm}
            textarea={textarea}
            setTextArea={setTextArea}
            setRegistered={setRegistered}
            setEdit={setEdit}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
