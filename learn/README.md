# 🏐 Volleyball Player Form

React + Vite + TypeScript + Bootstrap

---

## 🇬🇧 English

### 📖 Description

This project is a learning-oriented React application built with **Vite**, **TypeScript**, and **Bootstrap**.

It displays a volleyball player form where the user selects a playing position:

- Setter
- Middle Blocker
- Opposite
- Outside Hitter
- Libero

Based on the selected position, the app dynamically shows:

- The main characteristics of that role
- Three well-known professional players for the position

The goal of this project is to practice **clean React architecture**, **component separation**, and **TypeScript best practices**.

---

### 🧱 Tech Stack

- ⚛️ React
- ⚡ Vite
- 🟦 TypeScript
- 🎨 Bootstrap 5

---

### 🗂️ Project Structure

```txt
src/
├─ App.tsx
├─ main.tsx
└─ components/
   ├─ PlayerForm/
   │  ├─ PlayerForm.tsx
   │  ├─ PositionSelect.tsx
   │  ├─ PositionInfo.tsx
   │  └─ positions/
   │     ├─ SetterInfo.tsx
   │     ├─ MiddleInfo.tsx
   │     ├─ OppositeInfo.tsx
   │     ├─ OutsideInfo.tsx
   │     └─ LiberoInfo.tsx
   └─ common/
      └─ PlayerCard.tsx
```

🧠 Architecture Decisions

Single responsibility components

One main container component (PlayerForm) for state and logic

Presentational components per volleyball position

Reusable UI components (PlayerCard)

Strict TypeScript typing

Bootstrap imported via npm (no CDN)

Learning Goals

Understand React component composition

Practice TypeScript with React

Conditional rendering

Basic Bootstrap styling

Organize a scalable React project
