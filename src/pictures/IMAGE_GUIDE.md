# 📸 Image Guide — Folder Structure

All images for the portfolio are organized under `src/pictures/`. Drop your files into the correct folder and update the corresponding data file.

---

## Folder Structure

```
src/pictures/
├── background/       ← Site background image
│   └── background.jpg
├── profile/          ← Profile / avatar photo
│   └── (your-photo.jpg)
├── projects/         ← Project cover images
│   └── (project-name.jpg)
├── referrals/        ← Referral / testimonial photos
│   └── (person-name.jpg)
└── IMAGE_GUIDE.md    ← This file
```

---

## How to Update Each Image

### 🌄 Background Image
The full-site background image behind the overlay.

1. Place your image in `src/pictures/background/`
2. Update the import in **`src/App.jsx`**:
   ```js
   import backgroundImg from './pictures/background/your-new-image.jpg';
   ```

### 👤 Profile Photo
Your avatar shown in the About section.

1. Place your photo in `src/pictures/profile/`
2. Update **`src/data/bio.js`** → `profilePhoto`:
   ```js
   import profilePhoto from '../pictures/profile/your-photo.jpg';
   // then in the bio object:
   profilePhoto: profilePhoto,
   ```

### 🛠️ Project Images
Cover images for each project card.

1. Place project images in `src/pictures/projects/`
2. Update **`src/data/projects.js`** — replace the `image` URL for each project:
   ```js
   import cobotImg from '../pictures/projects/cobot.jpg';
   // then in the project object:
   image: cobotImg,
   ```

### 🤝 Referral Photos
Photos for people giving referrals/testimonials.

1. Place photos in `src/pictures/referrals/`
2. Update the referrals data file with the local import (same pattern as above).

---

## Image Tips
- **Recommended formats**: `.jpg`, `.webp`, or `.png`
- **Background**: Use a high-res landscape image (1920×1080 or larger)
- **Profile**: Square crop works best (e.g. 400×400)
- **Projects**: Landscape ratio ~16:9 (e.g. 800×450)
- **Compress images** before adding — tools like [Squoosh](https://squoosh.app/) help reduce file size without quality loss
