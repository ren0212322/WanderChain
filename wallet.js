document.getElementById('walletButton').addEventListener('click', function() {
    // Prompt the user to enter a wallet address
    const walletAddress = prompt('Enter the wallet address you want to connect:');
    
    if (walletAddress) {
      // Log the entered wallet address
      console.log('Wallet Address:', walletAddress);
    } else {
      console.log('No wallet address entered.');
    }
  });

  