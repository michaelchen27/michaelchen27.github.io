# Michael Chen's Portfolio

This is a personal portfolio website built with React.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run publish`

Builds the app and copies the production output to the **repository root** (`index.html`, `static/`, etc.). Use this before pushing to GitHub — the live site is served from the root of `master`, not from the `build/` folder.

### `npm run deploy`

Builds and pushes to a separate `gh-pages` branch (not used for this repo’s current GitHub Pages setup).

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Publish to GitHub Pages (copy build output to repo root, then commit and push):
   ```bash
   npm run publish
   git add index.html asset-manifest.json static/
   git commit -m "Publish production build"
   git push
   ```

## Customization

- Edit `src/App.js` to customize your portfolio content
- Modify `src/App.css` to change the styling
- Add your images to the `public` folder and reference them in your components

## Technologies Used

- React 18
- Create React App
- GitHub Pages (for deployment)
