# WEEK 2 PROJECT DOCUMENTATION

**Project Title:** *Styled Portfolio Website*
**Week:** *2*
**Technology Stack:** *HTML5, CSS3, VS Code, Live Server*
**Submission Date:** *June 23, 2026*

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

The Styled Portfolio Website is a personal portfolio website created to showcase personal information, skills, and contact details in a professional and visually appealing format.

Week 1 focused on building the structure using HTML.
Week 2 focused on styling the website using CSS.

### Project Objectives

* Learn CSS fundamentals and styling rules
* Understand CSS selectors and specificity
* Apply colors, fonts, and spacing
* Build responsive layouts using Flexbox/Grid
* Add hover effects and transitions
* Improve UI/UX design

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 2. WEEK 1 IMPLEMENTATION SUMMARY

During Week 1, the portfolio website structure was built using HTML.

### HTML Concepts Used

* HTML5 document structure
* Semantic HTML tags
* Forms and inputs
* Navigation links
* Images and media
* Internal linking

### Sections Created

* Header
* Navigation Bar
* About Section
* Skills Section
* Contact Section
* Footer

### Week 1 Technical Requirements

✔ Create index.html

✔ Add 3 sections

✔ Semantic HTML tags

✔ Working contact form

✔ Images with alt text

✔ Internal navigation links


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 3. WEEK 2 CSS IMPLEMENTATION

Week 2 focused on adding styling and responsiveness.

### CSS Concepts Used

**1. CSS Selectors**
* Element Selector
* Class Selector
* ID Selector
* Pseudo-Class Selector

**2. Box Model**
* Content
* Padding
* Border
* Margin

**3. Typography Styling**
* Custom fonts (Inter from Google Fonts)
* Font sizes (using clamp for responsive scaling)
* Font weights (300-700)
* Line spacing (1.7)

**4. Colors and Backgrounds**
* Primary Color: #8b5cf6 (Purple accent)
* Secondary Color: #0a0a0a (Dark background)
* Background Color: #000000 (Pure black)
* Glass Effect: rgba(255,255,255,0.03)
* Text Primary: #fafafa
* Text Secondary: #a1a1aa

**5. Flexbox Layout**
Used for:
* Navigation Bar (centered, gap-based)
* Hero Section (text + image side by side)
* Skills Grid (auto-fit grid)

**6. CSS Grid Layout**
Used for:
* Skills Section (repeat auto-fit)
* Projects Section (card grid)

**7. Hover Effects**
Hover effects added to:
* Navigation links
* Skills cards
* Project cards
* Form buttons
* Profile image

**8. Responsive Design**
Media queries used for:
* 768px breakpoint (tablet)
* 480px breakpoint (mobile)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 4. DESIGN DECISIONS

Several design choices were made to improve user experience.

### Design Goals

* Clean UI - Minimalist dark theme
* Modern Appearance - Glassmorphism effects
* Easy Navigation - Sticky header with blur
* Mobile-Friendly Layout - Stack on small screens
* Good Readability - Proper contrast and spacing

### Color Scheme Decision

Dark theme with purple/pink/orange gradient accents was chosen for a modern, professional portfolio appearance.

### Layout Decisions

Flexbox was selected because it:
* Simplifies alignment
* Improves responsiveness
* Makes layouts easier to manage

CSS Grid was used for card layouts to create uniform, responsive grids.

### Glassmorphism Design

Glass effects implemented using:
* backdrop-filter: blur(20px)
* Semi-transparent backgrounds
* Subtle borders
* Soft shadows with color tints

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 5. RESPONSIVENESS APPROACH

The website was designed using mobile-friendly principles.

### Techniques Used

* Flexible layouts (flex-wrap, auto-fit)
* Relative sizing (rem, %, clamp)
* Media queries (@media)
* Responsive navigation (stacked on mobile)

### Screen Compatibility

* Desktop (1024px+)
* Tablet (768px)
* Mobile (480px and below)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 6. SETUP AND INSTALLATION INSTRUCTIONS

### Requirements

* VS Code
* Browser (Chrome recommended)
* Live Server Extension

### Installation Steps

**Step 1:** Download or clone the project files
**Step 2:** Open project folder in VS Code
**Step 3:** Ensure these files exist
* index.html
* style.css
* README.md

**Step 4:** Open index.html using Live Server
**Step 5:** View project in browser

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 7. CODE STRUCTURE

### Project Folder Structure

```
portfolio-website/
|
├── index.html        # Main HTML file
├── style.css         # CSS stylesheet
├── README.md         # Documentation
├── requirement.txt   # Requirements
├── images/           # Profile image
└── screenshot/       # Project screenshots
```

### File Explanation

**index.html**
Contains website structure and content with semantic HTML tags.

**style.css**
Contains all styling rules including:
* CSS Reset
* Variables (colors, transitions)
* Layouts (Flexbox, Grid)
* Responsive design (media queries)
* Animations and hover effects

**README.md**
Contains project overview, documentation, and implementation details.

**images/**
Contains profile picture (profile.png)

**screenshot/**
Contains project screenshots for visual documentation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 8. TECHNICAL REQUIREMENTS COMPLETION

✔ External style.css file

✔ 3+ CSS selectors (element, class, pseudo-class)

✔ Hover effects on buttons, links, and cards

✔ Responsive design with media queries

✔ CSS Grid/Flexbox layouts

✔ Custom fonts (Google Fonts - Inter) and color scheme


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 9. TECHNICAL DETAILS

### Architecture

* HTML → Structure
* CSS → Styling

### Logic Used

This project focuses on frontend styling and layout.

Logic includes:
* Responsive layout switching using media queries
* Hover interactions using CSS pseudo-classes
* Navigation flow using internal anchor links
* Animation sequences using CSS keyframes

### Data Structures

No complex data structures were required since this is a static frontend project.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 10. VISUAL DOCUMENTATION

### Screenshots

Screenshots of the completed project are available in the `screenshot/` folder.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 11. TESTING EVIDENCE

The project was tested for functionality and responsiveness.

✔ Website loads successfully

✔ Navigation links work properly

✔ Hover effects function correctly

✔ Mobile layout adjusts properly

✔ Contact form accepts input

✔ Smooth animations and transitions


### Browser Testing

✔ Google Chrome

✔ Microsoft Edge

✔ Mozilla Firefox


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 12. CHALLENGES FACED

* Managing layout alignment between text and image
* Making sections responsive on all screen sizes
* Choosing suitable color palette for dark theme
* Improving spacing consistency
* Implementing smooth glassmorphism effects
* Balancing visibility of floating background icons

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 13. LEARNINGS FROM WEEK 2

Through this project, I learned:

* CSS fundamentals and styling rules
* Selectors and specificity (element, class, ID, pseudo-class)
* Box model (content, padding, border, margin)
* Flexbox layout (alignment, direction, wrapping)
* CSS Grid layout (auto-fit, minmax)
* Responsive design with media queries
* Hover effects and transitions
* CSS animations (keyframes, duration, timing)
* Glassmorphism design techniques
* Dark theme color schemes
* Custom fonts with Google Fonts
* CSS variables for maintainability

This week significantly improved my frontend styling skills and understanding of UI design.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 14. CONCLUSION

The Week 2 project successfully transformed a basic HTML portfolio into a modern, responsive, and visually appealing website using CSS.

This project strengthened my understanding of web styling, layout systems, and responsive design principles.

It also provided practical experience in building user-friendly web interfaces with glassmorphism effects and smooth animations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━