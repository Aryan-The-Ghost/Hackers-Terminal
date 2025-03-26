# Hacking Simulator 💻

A fun and simple hacking simulator project built using **HTML, CSS, and JavaScript**. It mimics a terminal-like interface, displaying fake hacking messages with random delays to simulate a realistic hacking process.

---

## 🚀 **Demo**
The simulator displays the following messages with random delays (1-7 seconds) between them:
- `Initializing Hacking...`
- `Reading your Files...`
- `Password files Detected...`
- `Sending all passwords and personal files to server...`
- `Cleaning up...`

The background color is green, and the messages appear one by one, creating a realistic terminal effect.

---

## 🛠️ **Technologies Used**
- **HTML**: For the basic structure.
- **CSS**: To style the terminal-like appearance with a green background.
- **JavaScript**: Handles the message display logic with random delays.

---

## 📄 **How to Run**
1. Clone the repository:
git clone https://github.com/Aryan-The-Ghost/Hackers-Terminal


2. Open the `index.html` file in your browser.

---

## 🛠️ **Customization**
- You can modify the messages in the `script.js` file by adding or removing entries from the `messages` array.
- To change the delay range, modify:
```javascript
const time = Math.floor(Math.random() * 7) + 1; 

Change the 7 to any other maximum delay value.


🐛 Bugs and Issues
If you encounter any issues, feel free to create a new issue in the repository.

🙌 Contributing
Pull requests are welcome! If you'd like to contribute, feel free to fork the project and submit a PR.

📄 License
This project is licensed under the MIT License – feel free to use, modify, and distribute it.

✨ Author
Aryan Mishra
