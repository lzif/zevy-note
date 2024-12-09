# TODO  

A task list for the development of the **Svelte Note-Taking Suite**, organized by phases from the roadmap. Each phase is broken down into smaller actionable tasks for easier implementation and progress tracking.  

---

## **Phase 1: Core Features**  

### 1.1. Text-Based Notes  
- [ ] Create a component for creating and editing text notes.  
- [ ] Add **tagging** functionality for notes.  
- [ ] Implement a **search bar** with full-text search capability.  

### 1.2. Markdown Editor  
- [ ] Integrate a Markdown editor using libraries like **Marked.js** or **Showdown.js**.  
- [ ] Build a **live preview** feature for Markdown notes.  
- [ ] Add export options for notes in **Markdown**, **HTML**, and **PDF** formats.  

---

## **Phase 2: Multi-Format Notes**  

### 2.1. Audio Notes  
- [ ] Integrate Web APIs for recording audio (e.g., MediaRecorder API).  
- [ ] Build components to manage and play audio notes.  
- [ ] Add support for uploading audio files from the user's device.  

### 2.2. Image Notes  
- [ ] Build an image upload feature for notes.  
- [ ] Add image preview support in the notes editor.  
- [ ] Include image compression before storage to optimize space.  

### 2.3. Cloud Synchronization  
- [ ] Integrate synchronization using **Firebase** or **Supabase** to ensure notes are accessible across devices.  
- [ ] Add OAuth-based authentication (Google, Microsoft, etc.).  

---

## **Phase 3: Collaboration**  

### 3.1. Real-Time Editing  
- [ ] Use WebSockets for real-time collaboration.  
- [ ] Add **user cursor indicators** to show collaborators’ positions in the note.  
- [ ] Handle conflicts with a **version history** system or CRDT (Conflict-Free Replicated Data Types).  

### 3.2. Sharing Permissions  
- [ ] Add sharing settings for notes: public, link-only, selected users, private.  
- [ ] Implement permission controls for view-only or edit access.  

### 3.3. Version History  
- [ ] Create a system to store previous versions of notes.  
- [ ] Add an option to view and restore previous versions.  

---

## **Phase 4: Visual Notes**  

### 4.1. Diagram and Mind Maps  
- [ ] Integrate libraries like **Mermaid.js** or **GoJS** for creating diagrams.  
- [ ] Build a drag-and-drop interface for mind maps.  

### 4.2. Drawing Canvas  
- [ ] Use HTML5 Canvas to provide a freehand drawing area.  
- [ ] Add basic drawing tools such as pencil, lines, and shapes.  
- [ ] Add export options for drawings in PNG/JPEG format.  

### 4.3. Templates  
- [ ] Create basic templates for brainstorming, mind maps, and project notes.  
- [ ] Add support for saving custom templates created by users.  

---

## **Phase 5: Security and AI Features**  

### 5.1. Secure Notes  
- [ ] Implement a system for **encrypted notes** using passwords different from the account password.  
- [ ] Use **AES-GCM 256-bit** encryption for encrypting/decrypting data client-side.  
- [ ] Store encrypted note passwords only in **sessionStorage** for better security.  

### 5.2. Password Protection for Shared Notes  
- [ ] Add a feature to password-protect notes shared with public, link-only, or specific users.  
- [ ] Use secure hashing (e.g., **Argon2** or **PBKDF2**) to store passwords on the server.  

### 5.3. AI-Powered Suggestions  
- [ ] Implement an AI-based system for automatic tag suggestions based on note content.  
- [ ] Add contextual search functionality with AI-powered query suggestions.  

---

## **Ongoing Tasks and Improvements**  

- [ ] Optimize the app for low-spec devices to ensure smooth performance.  
- [ ] Add **dark mode** support with a user-friendly theme.  
- [ ] Continuously improve user experience (UX) through regular testing and community feedback.  

---

## **Contribution Guidelines**  

### How to Work on a Task  
1. Pick a task from this TODO list.  
2. Fork the repository and create a new branch with the name of the feature you are working on.  
3. Once completed, submit a pull request to the main branch with a detailed explanation of your changes.  

### Notes  
If you find any bugs or want to propose a new feature, please open an issue on GitHub.  

---

## **Top Priorities**  
To ensure a strong and stable initial release, focus on the following tasks:  
1. **Phase 1 (Core Features):** Basic note-taking functionality.  
2. **Phase 2 (Multi-Format Notes):** Support for audio and image notes.  
3. **Phase 5.1 (Secure Notes):** Ensuring security is a top priority.
