import React, { useState } from "react";

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState();
  const [disableBtn, setDisableBtn] = useState();

  return (
    <section className="donate">
      <form>
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <div>
          <label>Show your love for poors</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter donation amount (USD)"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />

          <input
            type="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your Message"
          />

          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
          />
          <button type="submit" className="btn" disabled={disableBtn}>
            Donate {amount ? `$${amount}` : `$0`}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Donate;
