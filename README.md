# **ZephyrVault**

**ZephyrVault** is your ultimate note-taking and idea management platform. Combining **lightweight performance**, **uncompromising security**, and **offline-first support**, it’s designed to help you capture, organize, and collaborate on your ideas—anytime, anywhere.

Whether you’re a student, creative professional, or part of a team, **ZephyrVault** lets your ideas flow freely while staying securely locked in your personal vault.

---

## ✨ **Features**

### 📝 **Effortless Note-Taking**

- Capture notes in **text, audio, or image** formats.
- Tag, organize, and search notes with **lightning-fast full-text search**.
- Sync across devices with **secure cloud integration**.
- **Offline-first support**: Access and edit your notes even without an internet connection.

### 🔒 **Secure Notes**

- Create **encrypted notes** with a unique password that never leaves your device.
- Secure shared notes with **password protection** (for public, link, or specific users).
- Use **zero-knowledge encryption** for maximum privacy.

### 🤝 **Seamless Collaboration**

- Work with your team in **real-time**, no matter where they are.
- Manage permissions with **view-only or editor roles**.
- Revert changes anytime with **version control**.

### 💡 **Markdown-Ready**

- Write and structure content using **Markdown syntax**.
- See live previews while editing.
- Export your notes as **Markdown, HTML, or PDF**.

### 🎨 **Visual Creativity Unleashed**

- Design **diagrams**, **mind maps**, and **sketches** with intuitive tools.
- Use pre-designed **templates** for brainstorming or planning.
- Free your imagination with a **drawing canvas**.

### 📂 **Advanced Organization Tools**

- Organize notes into **folders, projects, or themes**.
- Utilize **nested, color-coded tags** for quick access.
- Smart suggestions powered by **AI** for auto-tagging and folder organization.

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

Before installing, ensure you have:

- **Node.js** (v16 or later)
- **PNPM**

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/lzif/zephyrvault.git
   cd zephyrvault
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 🛠️ **Tech Stack**

- **Frontend**: Svelte, Tailwind CSS
- **Backend**: SvelteKit, Node.js
- **Database**: PostgreSQL for structured data + Object Storage for multimedia files
- **Real-Time Collaboration**: WebSockets
- **Cloud Sync**: Firebase
- **Offline-First Support**: Service Workers, IndexedDB

---

## 🎯 **Roadmap**

### **Phase 1: Core Functionality**

- Launch basic note-taking features, including text-based notes with tagging and full-text search.
- Add **Markdown editor** with live preview.
- Ensure secure storage for **standard notes**.

### **Phase 2: Offline-First Support**

- Implement **Service Workers** and **IndexedDB** to enable offline note creation, editing, and viewing.
- Develop automatic sync to cloud storage when reconnected to the internet.
- Enhance user experience with seamless offline-to-online transitions.

### **Phase 3: Security Enhancements**

- Integrate **AES-256 encryption** for encrypted notes with zero-knowledge security.
- Allow secure note sharing with password protection for public and private access.
- Implement **Argon2/PBKDF2 hashing** for storing note passwords.

### **Phase 4: Multi-Format Notes**

- Add support for **audio** and **image-based notes** with tagging and search.
- Expand cloud sync capabilities to support multimedia files securely.

### **Phase 5: Collaboration Tools**

- Enable **real-time collaboration** with roles such as viewer and editor.
- Develop **version control** for tracking and reverting changes.
- Enhance team workflows with shared project folders.

### **Phase 6: Advanced Organization Tools**

- Introduce **AI-powered smart suggestions** for tags and folder organization.
- Add **nested, color-coded tags** for better note categorization.
- Optimize **natural language processing** for intelligent search capabilities.

### **Phase 7: Visual Creativity & Productivity**

- Release tools for **mind mapping**, **diagrams**, and **drawing canvas**.
- Provide customizable **brainstorming templates** for planning sessions.
- Enhance integration between visual tools and text notes.

### **Phase 8: Privacy & Sharing Upgrades**

- Improve data sharing with **link-only** and **user-restricted access** options.
- Develop encrypted note sharing requiring manual password exchange.
- Refine access controls for granular permissions.

### **Phase 9: AI & Automation**

- Automate repetitive tasks like tagging, folder management, and note summaries using **AI suggestions**.
- Personalize recommendations and improve collaboration insights with **machine learning models**.

---

## 🧑‍💻 **Contributing**

We’re excited to grow ZephyrVault with your help! Follow these steps to contribute:

1. Fork the repository and create a new branch.
2. Implement your changes and test them thoroughly.
3. Submit a pull request with a detailed explanation of your changes.

---

## 📜 **License**

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## 🌟 **Why Choose ZephyrVault?**

- **Effortless Performance**: Built with Svelte for speed and simplicity.
- **Unified Platform**: Text, visual, and collaborative tools in one place.
- **Privacy First**: Your ideas are secure, always.
- **Open Source**: Accessible, community-driven, and transparent.
- **Offline-First Support**: Access and edit your notes anytime, anywhere, even without an internet connection.

Join us in reshaping how ideas are captured and shared. Let your creativity soar with ZephyrVault.

---

## 💬 **Feedback & Support**

Have questions, suggestions, or bug reports?

- Open an issue in this repository.

Together, let’s redefine note-taking. 🚀
