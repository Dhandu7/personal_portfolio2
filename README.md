# Aaryan Dhand — Portfolio

A sleek, dark React portfolio built with Vite.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 📦 Build for Production

```bash
npm run build
npm run preview
```

---

## ✏️ How to Customize

All portfolio content lives in **`src/data.js`** — you never need to touch component files.

### Personal Info
Edit the `personal` object at the top of `src/data.js`:
```js
export const personal = {
  name: 'Your Name',
  email: 'you@email.com',
  github: 'https://github.com/yourusername',
  // photo: '/photo.jpg',  ← uncomment and drop photo in /public
  ...
}
```

### Add Your Photo
1. Drop your photo into the `/public/` folder (e.g. `photo.jpg`)
2. In `src/data.js`, uncomment and set:
   ```js
   photo: '/photo.jpg',
   ```

### Add a New Experience
In `src/data.js`, append to the `experiences` array:
```js
{
  id: 4,
  company: 'Company Name',
  role: 'Your Role',
  location: 'City, Province',
  date: 'Month Year – Month Year',
  current: false,      // ← true = green "Current" badge
  bullets: [
    'Accomplishment one.',
    'Accomplishment two.',
  ],
},
```

### Add a New Project
In `src/data.js`, append to the `projects` array:
```js
{
  id: 4,
  name: 'Project Name',
  description: 'What it does and why it matters.',
  stack: ['React', 'Python', 'AWS'],
  github: 'https://github.com/you/repo',
  live: 'https://yourproject.com',    // or null
  image: '/projects/screenshot.png',  // or null — drop image in /public/projects/
  emoji: '🚀',   // shown as placeholder if no image
},
```

### Add Project Screenshots
1. Create a `/public/projects/` folder
2. Drop your screenshot in (e.g. `nba.png`)
3. Set `image: '/projects/nba.png'` in the project entry

### Add a Skill Group
Append to `skillGroups` in `src/data.js`:
```js
{
  title: 'New Category',
  skills: ['Skill A', 'Skill B', 'Skill C'],
},
```

---

## 🗂 Project Structure

```
src/
├── data.js              ← ALL content lives here
├── App.jsx
├── main.jsx
├── index.css
└── components/
    ├── Nav.jsx / .css
    ├── Hero.jsx / .css
    ├── About.jsx / .css
    ├── Experience.jsx / .css
    ├── Projects.jsx / .css
    ├── Skills.jsx / .css
    ├── Contact.jsx / .css
    ├── Footer.jsx / .css
    ├── SectionHeader.jsx / .css
    └── FadeIn.jsx
```
