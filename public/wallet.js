// document.getElementById("walletButton").addEventListener("click", function () {
//   // Prompt the user to enter a wallet address
//   const walletAddress = prompt("Enter the wallet address you want to connect:");

//   if (walletAddress) {
//     // Log the entered wallet address
//     console.log("Wallet Address:", walletAddress);
//   } else {
//     console.log("No wallet address entered.");
//   }
// });

let clientAddress;

const isWalletConnected = () => {
  return localStorage.getItem("clientAddress") ;
};

window.onload = () => {
  if (isWalletConnected()) {
    console.log(isWalletConnected());
    
    document.getElementById("walletButton").innerText = "Connected";
  }
};

async function connectWallet() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Request connection to MetaMask only when the button is clicked
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // Get the connected wallet's signer
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    // Update button text to "Connected"
    document.getElementById("walletButton").innerText = "Connected";

    // Store the connected address in localStorage
    localStorage.setItem("clientAddress", address);
    console.log("Connected wallet address:", address);
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
  }
}
