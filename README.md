# Career Quest

A retro-styled personality quiz game built with React, TypeScript, and Vite.

The app presents a series of fantasy-themed questions and matches the player to a character archetype such as explorer, problem solver, builder, or connector.

## Tech stack

- React
- TypeScript
- Vite
- React Router
- GitHub Pages deployment

## Local development

Install dependencies:

```bash
npm install
```

Run the app locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## GitHub Pages deployment

This project is configured for GitHub Pages using the repo URL:

```text
https://CLav1305.github.io/career-quest/
```

Deploy the app:

```bash
npm run deploy
```

This runs the production build and publishes the `dist` folder to the GitHub Pages branch.

## Project structure

```text
src/
  components/
  data/
  pages/
  styles/
  App.tsx
  main.tsx
  index.css
```

## Notes

- The app uses a hash router for compatibility with static hosting.
- Image paths are configured to work correctly with the GitHub Pages base URL.
- The quiz content is stored in JSON data files under `src/data/`.

## License

This project is for educational and personal use unless otherwise specified by the repository owner.
