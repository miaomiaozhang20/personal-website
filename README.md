# Miaomiao Zhang - Personal Website

A personal academic website built with React, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/miaomiaozhang20/miaomiaozhang20.github.io.git
cd miaomiaozhang20.github.io
```

2. Install dependencies
```bash
npm install
```

3. Add your profile image
   - Place your image file named `IMG_2834.JPG` in the `public` folder
   - Or update the image path in `src/pages/Index.jsx` to match your image filename

4. Run the development server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.

## Deployment to GitHub Pages

This site is configured to deploy automatically to GitHub Pages using GitHub Actions.

1. Push your code to the main branch
2. GitHub Actions will automatically build and deploy to `gh-pages` branch
3. Your site will be live at `https://miaomiaozhang20.github.io/`

## Customization

- Update your information in `src/pages/Index.jsx`
- Modify colors in `tailwind.config.js`
- Add your profile image to the `public` folder

## Technologies Used

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons
