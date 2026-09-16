# 📸 Adding Local Images — Guide

This guide explains how to replace the placeholder/external images with your own local images in the Vihan portfolio.

---

## 📁 Folder Structure

All images go inside `src/pictures/`. The folders are already created for you:

```
src/pictures/
├── background/       ← Site background image
│   └── background.jpg
├── profile/          ← Your profile / avatar photo
│   └── profile.jpg
├── projects/         ← Project cover images
│   └── project_1.jpg
├── referrals/        ← Referral / testimonial photos
│   └── (person-name.jpg)
```

---

## 🔧 Step-by-Step Instructions

### 1. Profile Photo (About Section)

Your photo is already set up. To change it:

1. Drop your new photo into `src/pictures/profile/`
2. Open `src/data/bio.js`
3. Update the import at the top:

```js
// Change the filename to match your new image
import profilePhoto from "../pictures/profile/your-photo.jpg";
```

That's it — the rest of the file already uses `profilePhoto`.

---

### 2. Referral / Testimonial Photos

Currently using external URLs. To switch to local images:

1. Drop each person's photo into `src/pictures/referrals/`  
   Example: `marcus.jpg`, `elena.jpg`, etc.

2. Open `src/data/referrals.js`

3. Add imports at the **top** of the file:

```js
import marcus from '../pictures/referrals/marcus.jpg';
import elena from '../pictures/referrals/elena.jpg';
import julian from '../pictures/referrals/julian.jpg';
import sienna from '../pictures/referrals/sienna.jpg';
import arthur from '../pictures/referrals/arthur.jpg';
import isabella from '../pictures/referrals/isabella.jpg';
```

4. Replace each `image: "https://..."` with the imported variable:

```js
// BEFORE
{
  id: 1,
  name: "Marcus Thorne",
  image: "https://lh3.googleusercontent.com/...",
}

// AFTER
{
  id: 1,
  name: "Marcus Thorne",
  image: marcus,   // ← no quotes, it's a variable
}
```

5. Repeat for all 6 referrals.

---

### 3. Project Cover Images

1. Drop project images into `src/pictures/projects/`  
   Example: `project_1.jpg`, `project_2.jpg`, etc.

2. Open `src/data/projects.js`

3. Add imports at the top (one is already there as an example):

```js
import project_1 from '../pictures/projects/project_1.jpg';
import project_2 from '../pictures/projects/project_2.jpg';
// ... add more as needed
```

4. Replace the `image` field in each project:

```js
// BEFORE
image: "https://some-external-url.com/...",

// AFTER
image: project_2,   // ← no quotes
```

---

### 4. Background Image

The full-page background behind the dark overlay.

1. Drop your image into `src/pictures/background/`
2. Open `src/App.jsx` — the import is already there:

```js
import backgroundImg from './pictures/background/background.jpg';
```

3. Just replace the file `background.jpg` with your own (keep the same filename), or update the import path to match your new filename.

---

## 📐 Recommended Image Sizes

| Image Type    | Recommended Size  | Format         |
|---------------|-------------------|----------------|
| Background    | 1920×1080 or larger | `.jpg` / `.webp` |
| Profile       | 400×400 (square)  | `.jpg` / `.webp` |
| Projects      | 800×450 (16:9)    | `.jpg` / `.webp` |
| Referrals     | 200×200 (square)  | `.jpg` / `.webp` |

---

## ⚡ Quick Tips

- **No quotes** around imported variables — `image: myPhoto` not `image: "myPhoto"`
- **Compress images** before adding — use [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
- **Vite handles the rest** — it automatically optimizes and bundles imported images
- **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`, `.gif`
- If you keep the **same filename**, you don't need to change any code — just replace the file
