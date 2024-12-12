# TODO

A task list for the development of the **Svelte Note-Taking Suite**, organized by phases from the roadmap. Each phase is broken down into smaller actionable tasks for easier implementation and progress tracking.

---

## **Phase 1: Core Features**

### 1.1. Text-Based Notes
- [ ] Create a component for creating and editing text notes.
- [ ] Add tagging functionality for notes.
- [ ] Implement a search bar with full-text search capability.

### 1.2. Markdown Editor
- [ ] Integrate a Markdown editor using libraries like Marked.js or Showdown.js.
- [ ] Build a live preview feature for Markdown notes.
- [ ] Add export options for notes in Markdown, HTML, and PDF formats.

---

## **Phase 2: Offline-First Support**

### 2.1. Service Workers and IndexedDB
- [ ] Implement offline-first functionality using Service Workers.
- [ ] Use IndexedDB for local data storage.
- [ ] Ensure seamless offline access to notes.

### 2.2. Offline Editing and Viewing
- [ ] Allow users to create, edit, and view notes without an internet connection.
- [ ] Implement conflict resolution for offline changes.

### 2.3. Sync Mechanism
- [ ] Develop a sync mechanism to upload offline changes when back online.
- [ ] Ensure data integrity during sync.

---

## **Phase 3: Multi-Format Notes**

### 3.1. Audio Notes
- [ ] Integrate Web APIs for recording audio (e.g., MediaRecorder API).
- [ ] Build components to manage and play audio notes.
- [ ] Support uploading audio files from the user's device.

### 3.2. Image Notes
- [ ] Implement an image upload feature for notes.
- [ ] Add image preview support in the notes editor.
- [ ] Implement image compression before storage to optimize space.

### 3.3. Cloud Synchronization
- [ ] Choose between Firebase and Supabase for cloud synchronization.
- [ ] Integrate OAuth-based authentication (Google, Microsoft, etc.).

---

## **Phase 4: Collaboration**

### 4.1. Real-Time Editing
- [ ] Use WebSockets for real-time collaboration.
- [ ] Add user cursor indicators to show collaborators’ positions in the note.
- [ ] Implement a version history system or CRDT for conflict resolution.

### 4.2. Sharing Permissions
- [ ] Implement sharing settings for notes: public, link-only, selected users, private.
- [ ] Develop permission controls for view-only or edit access.

### 4.3. Version History
- [ ] Create a system to store previous versions of notes.
- [ ] Add an option to view and restore previous versions.

---

## **Phase 5: Visual Tools**

### 5.1. Diagram and Mind Maps
- [ ] Integrate libraries like Mermaid.js or GoJS for creating diagrams.
- [ ] Develop a drag-and-drop interface for mind maps.

### 5.2. Drawing Canvas
- [ ] Implement an HTML5 Canvas-based freehand drawing area.
- [ ] Add basic drawing tools such as pencil, lines, and shapes.
- [ ] Implement export options for drawings in PNG/JPEG format.

### 5.3. Templates
- [ ] Create basic templates for brainstorming, mind maps, and project notes.
- [ ] Allow users to save custom templates.

---

## **Phase 6: AI & Automation**

### 6.1. AI-Powered Suggestions
- [ ] Implement an AI-based system for automatic tag suggestions based on note content.
- [ ] Add contextual search functionality with AI-powered query suggestions.

### 6.2. Natural Language Processing
- [ ] Optimize search with natural language processing for better query understanding.

---

## **Ongoing Tasks and Improvements**

- [ ] Optimize the app for low-spec devices to ensure smooth performance.
- [ ] Implement dark mode support with a user-friendly theme.
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
2. **Phase 2 (Offline-First Support):** Ensure offline access and sync.
3. **Phase 3 (Multi-Format Notes):** Support for audio and image notes.
