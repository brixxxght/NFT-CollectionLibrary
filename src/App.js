import { useState } from "react";
import "./App.css";

function App() {
  const [account, setAccount] = useState(null);
  // 1. => check if metamask is installed
  const handleConnect = async () => {
    if (typeof window.ethereum !== undefined) {
      console.log("Yay!, metamask is installed");
      // 2. => get wallet accounts with ethers
      const myAccounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(myAccounts[0]);
      // console.log(myAccounts[0]);
    } else console.log("abeg install metamask");
  };

  return (
    <div className="App">
      <button
        onClick={handleConnect}
        style={{ padding: "10px 15px 10px 15px" }}
      >
        connect wallet
      </button>
      <p>Connected to: {account}</p>
    </div>
  );
}

export default App;
