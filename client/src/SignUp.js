import React, { useState } from "react";


function SignUp({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log('whatever')
    fetch("/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        onLogin(data)
        console.log("the data", data)
      });
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password_confirmation">Confirm Password:</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    <div className="c3po">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY9tNLmWMqh647EqnW6Dqgu4vbehrl2JI1w&usqp=CAU" alt="c3po"/>

    </div>
    </>

  );
}

export default SignUp;