const messages = [
    "Initializing Hacking...",
    "Reading your Files...",
    "Password files Detected...",
    "Sending all passwords and personal files to server...",
    "Cleaning up..."
  ];
  
  async function hacking() {
    const container = document.querySelector(".container");
  
    for (let msg of messages) {
      const time = Math.floor(Math.random() * 7) + 1; 
  
      const div = document.createElement("div");
      div.innerHTML = msg;
      container.append(div);
  
      console.log(`Displayed: ${msg}`);  
      
      await new Promise(resolve => setTimeout(resolve, time * 1000));
    }
  }
  
  hacking();