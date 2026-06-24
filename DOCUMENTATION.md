# WEEK 3 PROJECT DOCUMENTATION

**Project Title:** *Interactive Portfolio Website*
**Week:** *3*
**Technology Stack:** *HTML5, CSS3, JavaScript (ES6), VS Code, Live Server*
**Submission Date:** *June 24, 2026*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## QUALITY STANDARDS CHECKLIST

✔ Project Overview

✔ Setup Instructions

✔ Code Structure

✔ Visual Documentation

✔ Technical Details

✔ Testing Evidence

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 1. PROJECT OVERVIEW

### Project Description

The Interactive Portfolio Website is an upgraded version of the portfolio project developed during Week 1 and Week 2.

Week 1 focused on building the website structure using HTML.
Week 2 focused on styling and responsiveness using CSS.
Week 3 focuses on adding interactivity and dynamic behavior using JavaScript.

The goal is to transform a static website into an interactive and user-friendly web application.

### Project Objectives

* Learn JavaScript fundamentals
* Understand DOM manipulation
* Implement event listeners
* Create reusable functions
* Add interactive website features
* Validate forms using JavaScript
* Use local storage for user preferences

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 2. WEEK 1 & WEEK 2 IMPLEMENTATION SUMMARY

### Week 1 (HTML)

Implemented:

* Website structure
* Semantic HTML tags
* Forms and inputs
* Navigation links
* Images and media

### Week 2 (CSS)

Implemented:

* Styling and layout
* Flexbox and Grid
* Responsive design
* Hover effects
* Animations
* Glassmorphism design

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 3. WEEK 3 JAVASCRIPT IMPLEMENTATION

Week 3 focused on making the portfolio website interactive.

### JavaScript Concepts Used

**1. Variables and Data Types**

* let
* const
* Strings
* Numbers
* Boolean

Example:

```javascript
const theme = "dark";
let isMenuOpen = false;
```

---

**2. Functions**
Reusable blocks of code created for interaction handling.

Example:

```javascript
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
```

---

**3. DOM Manipulation**
JavaScript used to access and modify webpage elements dynamically.

Methods used:

* getElementById()
* querySelector()
* querySelectorAll()

Example:

```javascript
document.querySelector(".hero-title").innerText = "Welcome to My Portfolio";
```

---

**4. Event Listeners**
Added listeners for user interaction.

Events used:

* click
* hover
* submit
* input

Example:

```javascript
button.addEventListener("click", toggleTheme);
```

---

**5. Form Validation**
Implemented validation for contact form.

Checks include:

* Empty fields
* Invalid email format
* Minimum input length

Example:

```javascript
if(name.value.trim() === "") {
    error.textContent = "Name is required";
}
```

---

**6. Local Storage**
Used browser storage to save preferences.

Example:

```javascript
localStorage.setItem("theme", "dark");
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 4. INTERACTIVE FEATURES IMPLEMENTED

The following interactive features were added:

### 1. Dark/Light Mode Toggle

Allows users to switch between themes.

Features:

* One-click toggle
* Smooth transition
* Saved using local storage

---

### 2. Contact Form Validation

Form validates inputs before submission.

Validation includes:

* Required fields
* Email validation
* Error messages

---

### 3. Dynamic Content Updates

JavaScript updates webpage content dynamically.

Examples:

* Text changes
* Section visibility
* UI updates

---

### 4. Show/Hide Sections

Users can show or collapse sections interactively.

---

### 5. Smooth Navigation

Navigation enhanced with smooth scrolling.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 5. DESIGN DECISIONS

Several JavaScript design decisions were made to improve maintainability and performance.

### Design Goals

* Keep code modular
* Use reusable functions
* Improve user experience
* Maintain responsive behavior
* Keep interactions smooth

### Logic Design

Functions were separated based on purpose:

* Theme management
* Form validation
* Event handling
* UI updates

This improved code readability and maintainability.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 6. RESPONSIVENESS APPROACH

JavaScript functionality was designed to work on all screen sizes.

### Compatibility

* Desktop (1024px+)
* Tablet (768px)
* Mobile (480px and below)

### Responsive Features

* Mobile-friendly navigation
* Theme toggle support
* Form validation across devices
* Smooth interactions on smaller screens

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 7. SETUP AND INSTALLATION INSTRUCTIONS

### Requirements

* VS Code
* Browser (Chrome recommended)
* Live Server Extension

### Installation Steps

**Step 1:** Download or clone project files

**Step 2:** Open project in VS Code

**Step 3:** Ensure these files exist

* index.html
* style.css
* script.js
* README.md

**Step 4:** Launch with Live Server

**Step 5:** Open browser and test interactions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 8. CODE STRUCTURE

### Project Folder Structure

```bash
portfolio-website/
|
├── index.html
├── style.css
├── script.js
├── README.md
├── requirement.txt
├── images/
└── screenshot/
```

### File Explanation

**index.html**
Contains webpage structure.

**style.css**
Contains styling and responsive layouts.

**script.js**
Contains all JavaScript logic including:

* DOM manipulation
* Event listeners
* Validation logic
* Local storage

**README.md**
Contains complete documentation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 9. TECHNICAL REQUIREMENTS COMPLETION

✔ Create script.js file

✔ Implement form validation

✔ Add 3+ interactive features

✔ Use DOM manipulation

✔ Use event listeners

✔ Create reusable functions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 10. TECHNICAL DETAILS

### Architecture

* HTML → Structure
* CSS → Styling
* JavaScript → Logic & Interactivity

### Logic Used

Main logic includes:

* DOM selection
* Event-driven programming
* Input validation
* Dynamic UI updates
* Local storage management

### Data Structures

Basic JavaScript data structures used:

* Strings
* Arrays
* Objects
* Boolean values

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 11. VISUAL DOCUMENTATION

### Screenshots

Screenshots of interactive features are stored in the `screenshot/` folder.

Examples:

* Homepage
* Dark Mode
* Form Validation Errors
* Interactive Components

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 12. TESTING EVIDENCE

The project was tested for functionality and interactivity.

✔ JavaScript loads successfully

✔ Dark mode works properly

✔ Form validation works

✔ Event listeners respond correctly

✔ Dynamic content updates properly

✔ Local storage saves preferences

### Browser Testing

✔ Google Chrome

✔ Microsoft Edge

✔ Mozilla Firefox

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 13. CHALLENGES FACED

* Understanding DOM selection methods
* Managing multiple event listeners
* Debugging JavaScript errors
* Handling form validation edge cases
* Saving preferences using local storage

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 14. LEARNINGS FROM WEEK 3

Through this project, I learned:

* JavaScript fundamentals
* Variables and data types
* Functions and reusable logic
* DOM manipulation
* Event listeners
* Form validation
* Local storage
* Dynamic UI updates
* Debugging JavaScript issues

This week significantly improved my frontend development and problem-solving skills.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 15. CONCLUSION

The Week 3 project successfully transformed a static portfolio website into an interactive and dynamic web application using JavaScript.

This project strengthened my understanding of frontend interactivity, DOM manipulation, event handling, and user-focused design.

It also provided practical experience in writing structured JavaScript code and building responsive interactive features.
