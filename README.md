# ✨ Resume Email Sender – Chrome Extension + n8n Agent

Automate your job application workflow. This Chrome Extension lets you **highlight any email address**, right-click, and instantly **send a cold email, follow-up, or reminder** using pre-built templates via an **n8n webhook**.

---

## 🚀 Features

* 🖱️ Right-click email → Send instantly
* 🧠 Cold Email, Follow-Up & Reminder Templates
* 🔥 Premium UI with clean design
* 🌐 Seamless n8n webhook integration
* 📨 Auto-sends resume and message with one click

---

## 📦 How It Works

1. **Highlight** any email address on a web page
2. **Right-click** and choose **"Send Resume Email"**
3. Extension triggers your **n8n workflow** via a webhook
4. Email is sent instantly using selected template

---

## 🛠️ Tech Stack

* **Chrome Extension (Manifest V3)**
* **n8n (Low-code Automation Platform)**
* **JavaScript, HTML, CSS**
* **Webhook + Email Node in n8n**

---

## 🔧 Setup

### 1. Clone This Repo


### 2. Load Extension in Chrome

* Go to `chrome://extensions/`
* Enable **Developer Mode**
* Click **"Load Unpacked"**
* Select the `extension` folder

### 3. Configure Webhook in `background.js`

Update the webhook URL:

```js
const webhookUrl = "https://your-n8n-url/webhook/send-resume";
```

---

## 📬 n8n Workflow

The n8n agent receives the email address and selected template, then sends the email using the Email node.

JSON workflow file is included in this repo:
`n8n-resume-email-sender-workflow.json`

---

## 💼 Email Templates

* Cold Email
* Follow-Up
* Reminder
  Each email includes a clean message + resume attachment logic.

---

## 📄 License

MIT License © 2025 Rayyan Shaikh

---

## ✉️ Contact

**Built with ❤️ by Rayyan Shaikh**
Email: [rayyanshaikh1404@gmail.com](mailto:rayyanshaikh1404@gmail.com)
LinkedIn: [linkedin.com/in/rayyanshaikh](https://linkedin.com/in/rayyanshaikh)

