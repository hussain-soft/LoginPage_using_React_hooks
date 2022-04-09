import react, { useState } from "react";
import "./App.css";

function App() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [allEntry, setallEntry] = useState([]);
  const submitform = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setallEntry([...allEntry, newEntry]);
  };
  return (
    <>
      <div className="Main_div">
        <form action="" onSubmit={submitform}>
          <label htmlFor="email">Email</label>
          <br></br>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Mail"
            autoComplete="off"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br></br>
          <label htmlFor="password">Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <br></br>
          <button type="submit">Login</button>
          <br></br>
          <label>SignUp?</label>
          <br></br>
          <label>Forget Password?</label>
        </form>
      </div>
    </>
  );
}

export default App;
