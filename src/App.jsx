import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const getUser = { name, email };
    // console.log(getUser);
    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(getUser),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = [...users, data]
        setUsers(newUser)
        console.log("get back new user from server by response", data);
        form.reset()
      });
  };

  return (
    <>
      <h1>Users Management</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" id="1" />
        <br></br>
        <input type="email" name="email" placeholder="Email" id="2" />
        <br></br>
        <input type="submit" value="Add User" />
      </form>

      <p>Total User {users.length}</p>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.name} : {user.email}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
