

# 🌌 Developer Portfolio — Full Build Plan

A premium, futuristic, dark-themed developer portfolio with heavy animations, 3D elements, and interactive backgrounds.

---

## 🎨 Global Foundation
- **Dark-only theme** with purple/blue/cyan gradient accents
- **Glassmorphism** card and panel styling throughout
- **Interactive particle background** (mouse-reactive) on all pages
- **Animated navbar** with backdrop blur, active link indicators, and mobile hamburger menu
- **Full-page route transitions** using Framer Motion — each page gets a unique entry/exit animation (fade, slide, scale, etc.)
- **Modern sans-serif typography** with strong hierarchy and generous spacing
- Fully responsive across mobile, tablet, and desktop

---

## 🌌 Page 1: Hero / Landing
- **3D animated scene** with floating developer-themed objects (code brackets, database icons, React logo, etc.) using Three.js
- Animated headline and subheadline ("Junior Software Developer | Final Year CSE Student")
- Two CTA buttons: **View Projects** and **Download Resume**
- Particle background behind the 3D scene
- Scroll indicator animation at the bottom
- Subtle parallax movement on mouse

---

## 👨‍💻 Page 2: About
- Scroll-triggered section reveals
- **Timeline layout** for education and journey milestones
- Skills summary with **animated progress bars**
- Floating 3D decorative object in the background
- Glassmorphism cards for bio sections
- Placeholder professional description

---

## 🚀 Page 3: Projects
- **6+ placeholder project cards** in an animated grid
- Each card has: title, description, tech stack badges, GitHub link, live demo link
- **Hover effects**: tilt + glow
- Click to open an **expandable detail modal** with smooth animation
- Lazy-loaded project images
- Grid reflow animation on filter/sort

---

## 🧠 Page 4: Skills
- Skills categorized into: Frontend, Backend, Database, Tools
- **Animated circular progress indicators** for proficiency
- 3D rotating skill icons
- Scroll-triggered staggered animations
- Interactive hover effects on each skill

---

## 📝 Page 5: Featured Articles
- Blog/article cards with title, description, and "Read more" link
- Animated staggered entry transitions
- Structure ready to plug in Medium or Dev.to content later
- Placeholder articles with tech-themed content

---

## 💻 Page 6: Coding Profiles
- Cards for: GitHub, LeetCode, CodeChef, HackerRank, LinkedIn
- Each with an **animated icon**, hover glow interaction, and external link
- Subtle glowing accent animations
- Grid layout with staggered reveal

---

## 📩 Page 7: Contact
- Contact form with: Name, Email, Message fields
- **Animated input focus effects** (glowing borders)
- **Success animation** on submission
- EmailJS-ready structure (easy to wire up with your credentials)
- Social links section
- Download Resume button

---

## ⚡ Technical Approach
- **React Router** for all navigation
- **Framer Motion** for all animations and page transitions
- **Three.js** (via React Three Fiber) for 3D elements
- **tsparticles** for interactive particle backgrounds
- **Lazy loading** and **code splitting** for Three.js and heavy components
- Clean folder structure: `components/`, `pages/`, `animations/`, `three/`, `hooks/`, `utils/`, `assets/`
- Optimized particle counts and 3D complexity for smooth performance

