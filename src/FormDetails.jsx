import { useState } from "react";

function FormDetails() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userForm, setUserForm] = useState([]);

  function handleClick() {
    setUserForm([...userForm, userName, userAge, userAddress]);
    setUserName("");
    setUserAge("");
    setUserAddress("");
  }
  function handleDelete(id) {
    setUserForm(userForm.filter((item, i) => i !== id));
  }
  return (
    <>
      <h1> The form </h1>
      <p> Details </p>
      <label>
        Name:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleClick}> Display </button>
      {userForm.map((form, id) => {
        return (
          <div key={id}>
            <li>
              {form}
              <button onClick={() => handleDelete(id)}> Delete </button>
            </li>
          </div>
        );
      })}
    </>
  );
}
export default FormDetails;
