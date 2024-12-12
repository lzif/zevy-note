# TODO List for ZephyrVault

This document outlines detailed tasks for each phase of development.

---

## Phase 1: Core Functionality

- [ ] Implement basic text-based note-taking functionality.
  - [ ] Create UI for adding, editing, and deleting notes.
  - [ ] Develop backend support for storing and retrieving notes.
- [ ] Add tagging and full-text search.
  - [ ] Develop tag management UI (add, remove, filter).
  - [ ] Optimize database for full-text search queries.
- [ ] Implement Markdown editor.
  - [ ] Add support for live preview while editing.
  - [ ] Ensure seamless Markdown-to-HTML export.
- [ ] Secure storage for standard notes.
  - [ ] Integrate TLS/HTTPS for data transmission.
  - [ ] Hash user credentials with Argon2 or PBKDF2.

---

## Phase 2: Offline-First Support

- [ ] Develop offline storage using IndexedDB.
  - [ ] Implement caching for notes and tags.
  - [ ] Create sync logic for local changes.
- [ ] Add Service Worker for offline capabilities.
  - [ ] Cache static assets like CSS and JS.
  - [ ] Handle API requests while offline.
- [ ] Create sync logic for automatic updates after reconnecting.

---

## Phase 3: Security Enhancements

- [ ] Integrate AES-256 encryption for encrypted notes.
  - [ ] Encrypt/decrypt notes on the client side.
  - [ ] Develop password management for encrypted notes.
- [ ] Add zero-knowledge encryption support.
  - [ ] Ensure encryption keys are not stored on the server.
- [ ] Implement password-protected note sharing.
  - [ ] Allow public, link-only, and user-specific access.
  - [ ] Create a UI for setting access permissions.

---

## Phase 4: Multi-Format Notes

- [ ] Add support for audio-based notes.
  - [ ] Develop audio recording functionality.
  - [ ] Optimize backend for storing audio files.
- [ ] Add support for image-based notes.
  - [ ] Integrate image upload and preview features.
  - [ ] Use object storage for secure multimedia storage.
- [ ] Enhance cloud sync for multimedia files.

---

## Phase 5: Collaboration Tools

- [ ] Implement real-time collaboration.
  - [ ] Use WebSockets for live updates across devices.
  - [ ] Develop role-based permissions (viewer, editor).
- [ ] Add version control.
  - [ ] Track changes for each note.
  - [ ] Implement rollback functionality in the UI.
- [ ] Enable shared project folders.
  - [ ] Allow users to organize shared notes into folders.

---

## Phase 6: Advanced Organization Tools

- [ ] Introduce nested and color-coded tags.
  - [ ] Create a UI for managing nested tags.
  - [ ] Add color-coding options in the tag manager.
- [ ] Develop AI-powered smart suggestions.
  - [ ] Use machine learning models to auto-tag notes.
  - [ ] Implement folder organization recommendations.
- [ ] Optimize search with natural language processing.

---

## Phase 7: Visual Creativity & Productivity

- [ ] Add mind mapping tools.
  - [ ] Create drag-and-drop node functionality.
  - [ ] Enable connections between nodes with labels.
- [ ] Develop diagram creation features.
  - [ ] Provide templates for common diagram types.
  - [ ] Support export to image or PDF formats.
- [ ] Build a drawing canvas.
  - [ ] Allow freehand drawing with stylus or mouse.
  - [ ] Save drawings as part of a note or standalone.

---

## Phase 8: Privacy & Sharing Upgrades

- [ ] Improve data sharing with access controls.
  - [ ] Develop UI for setting link-only and user-specific permissions.
  - [ ] Track shared note access history.
- [ ] Add encrypted note sharing.
  - [ ] Require manual password exchange for access.
  - [ ] Ensure compatibility with AES-256 encryption.

---

## Phase 9: AI & Automation

- [ ] Automate tagging and folder management.
  - [ ] Train models on existing user data (opt-in).
  - [ ] Deploy AI-powered tag/folder suggestions in the UI.
- [ ] Improve natural language search.
  - [ ] Add support for searching notes using conversational queries.
  - [ ] Integrate keyword highlighting in search results.
- [ ] Generate note summaries using AI.
  - [ ] Summarize long notes into key points automatically.

---

## General Maintenance & Enhancements

- [ ] Refactor codebase for better readability and maintainability.
- [ ] Write comprehensive unit and integration tests.
- [ ] Improve UI/UX based on user feedback.
- [ ] Optimize application performance for low-end devices.
