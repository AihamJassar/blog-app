# MyBlog 🚀

A modern, responsive, and interactive **Blog platform** built with **Next.js, TailwindCSS, and TypeScript**.  
This project is fully **Dark Mode compatible**, supports **dynamic articles**, **comments**, and includes **micro animations** for a lively user experience.

---

## 🛠 Technologies Used

- **Next.js 15 (App Router)** – React Framework for SSR & SPA
- **TailwindCSS** – Utility-first CSS framework
- **TypeScript** – Static type checking
- **Framer Motion** – Animations for cards and hover effects
- **SWR** – Data fetching with caching
- **JSONPlaceholder API** – Mock API for posts and comments
- **Lucide Icons** – For UI icons (Dark Mode, Social links)

---

## ✨ Features

- Fully responsive **Landing Page** with dynamic **Banner** and latest articles
- **Infinite Scroll** for loading more articles
- **Post Detail Page** with comments and a submission form
- **Dark Mode toggle** in Navbar and Footer
- **Micro Animations**:
  - Hover effects on cards
  - Slide-up on articles and comments
  - Bounce effect on newly added comments
- **Gradient overlays** on images for elegant design
- Clean and modular **Folder Structure**
- Strong **TypeScript typing** for all components and API data

---

## 📁 Folder Structure

```bash
src
├── app
│   ├── (site)
│   │   ├── posts
│   │   │   ├── [id]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   └── page.tsx
│   └── layout.tsx
│
├── components
│   ├── layout          # Navbar, Footer, DarkToggle
│   └── post            # PostCard, PostCardSkeleton, CommentForm
│
├── lib
│   └── fetcher.ts      # utilities
│
├── types
│   └── post.ts         # shared TypeScript types
│
├── styles
│   └── globals.css     # global styles
│
└── public
    ├── images
    └── favicon.ico


```

---

## 🎨 UI / UX Highlights

- **Landing Page Banner** – eye-catching, responsive, with hover zoom effect
- **Cards** – interactive hover, slide animations, gradient overlays
- **Comments** – smooth entry animations and bounce effect for new comments
- **Dark Mode** – switchable from Navbar and Footer
- Fully responsive design for mobile, tablet, and desktop

---

## 🔗 Social & Footer

- Footer contains **social links**: Facebook, Twitter, Instagram, GitHub
- Dark Mode toggle included for quick theme switching
- Polished and modern layout for professional look

---

## 🚀 How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/AihamJassar/blog-app.git
cd blog-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000
in your browser.
