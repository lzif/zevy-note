# **ZephyrVault**

**ZephyrVault** is your ultimate note-taking platform—**offline-first**, secure, and designed for productivity. Whether you’re a student, creative, or developer, your ideas flow freely while staying locked in your vault.

---

## ✨ **Features**

### 📝 **Note-Taking & Organization**

- Create notes in **text, audio, or image** formats.
- Organize with **tags**, **folders**, and smart search.
- Utilize **nested, color-coded tags** for quick access.
- Benefit from **AI-suggested tags** and folder organization.
- **Markdown-ready** with live preview and export to **Markdown, PDF, JSON, or HTML**.

### 🔐 **Security & Privacy**

- **Zero-knowledge encryption** for ultimate privacy.
- Secure your notes with **AES-256 encryption** and custom passwords.
- Create encrypted notes using a unique password that never leaves your device.
- Perform **secure searches** in encrypted notes using **SSE**.
- Secure shared notes with **password protection** for public, link, or specific users.

### 🔗 **API Integration & Automation**

- Integrate ZephyrVault into your workflow with a **public API**.
- Automate note creation, updates, and bulk exports programmatically.

### 🎨 **Customization & Themes**

- Switch between pre-built **light** or **dark modes**.
- Use **AI-powered recommendations** for custom themes tailored to your usage.

### 🤖 **AI-Powered Productivity**

- Generate **automatic summaries** of long notes using AI.

### 🗂️ **Backup & Export**

- **Auto-backup** your notes locally or to cloud storage of your choice.
- Export individual or bulk notes in **Markdown, JSON**, or **PDF** formats.

### 🤝 **Collaboration Tools**

- Work with your team in **real-time**, no matter where they are.
- Manage permissions with **view-only or editor roles**.
- Revert changes anytime with **version control**.

### 🎨 **Visual Creativity Tools**

- Design **diagrams**, **mind maps**, and **sketches** with intuitive tools.
- Use pre-designed **templates** for brainstorming or planning.
- Free your imagination with a **drawing canvas**.

### 🌐 **Sync & Offline Support**

- Sync across devices with **secure cloud integration**.
- **Offline-first support**: Access and edit your notes even without an internet connection.

---

## 🔐 **Privacy and Security**

### **Standard Notes**

- Notes can be shared as:
  - **Public:** Accessible by anyone.
  - **Link-Only:** Accessible via a private link.
  - **Selected Users:** Restricted to invited collaborators.
  - **Private:** Accessible only to the creator.
- Optional **password protection** for shared notes ensures only authorized users can view them.
- Notes shared with editing permissions track changes with **version history** for rollback.

### **Encrypted Notes**

- Encrypted notes are protected with a password **different from the account password**.
- The password is stored temporarily in **sessionStorage** (not in server or local storage).
- Notes are encrypted and decrypted on the user's device using **AES-256 encryption**.
- Encrypted notes can be shared but require the same password for access. Passwords must be shared manually.

### **Data Security**

- All data is transmitted securely over **TLS/HTTPS**.
- Server stores:
  - **Standard notes:** Stored as plaintext but secured with optional password protection.
  - **Encrypted notes:** Stored in fully encrypted form (zero-knowledge).
- Passwords for notes are hashed using secure algorithms like **Argon2** or **PBKDF2**.

For more details, see [SECURITY.md](./SECURITY.md).

---

## 🚀 **Getting Started**

### **Prerequisites**
- **Node.js** (v20+)
- **PNPM**

### **Installation**
1. Clone the repository:  
   ```bash
   git clone https://github.com/lzif/zephyrvault.git
   cd zephyrvault
   ```
2. Install dependencies:  
   ```bash
   pnpm install
   ```
3. Run the development server:  
   ```bash
   pnpm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173).

---

## 🛠️ **Tech Stack**
- **Frontend**: Svelte, Tailwind CSS  
- **Backend**: SvelteKit, Node.js  
- **Database**: PostgreSQL + Object Storage  
- **Offline-First**: Service Workers, IndexedDB  
- **Real-Time**: WebSockets  
- **AI Tools**: Lightweight local models  

---

## 📜 **License**
Licensed under the **MIT License**. See [LICENSE](./LICENSE) for details.

---

## 💬 **Feedback & Contributions**
We welcome ideas, bugs, or feature suggestions:  
- Submit issues via GitHub.  
- Fork, contribute, and grow ZephyrVault with us!  

---

**ZephyrVault** — Secure, AI-powered, and offline-ready. Redefine note-taking your way. 🚀
