# Module 2 - Activity 6 - Component Reusability

> **The last guided activity.** After this you build your own projects in
> Module 3. You are **done when `npm test` is all green**.

The finale: the patterns that keep a growing app from turning into a mess.
You will write **custom hooks** (reusing stateful logic), a **layout component**
(reusing a page frame), and use the **Context API** (sharing a value without
passing props through every level).

## Read first

The concepts for this activity live in your **course workspace repo**:

- `content/m2-react/README.md` -> **Activity 6** section
- `content/react-theory/04-hooks-mental-model.md` (custom hooks)
- `content/react-theory/06-state-management.md` (Context)
- `content/react-theory/07-project-structure-and-organization.md` (folders)
- `content/react-theory/08-atomic-design.md` (layouts / templates)

## What to do

### 1. Fill in your details

Open [`student.json`](student.json) and fill in every field.

### 2. Implement the pieces

| File | Builds | Concept |
| --- | --- | --- |
| [`hooks/useToggle.js`](src/hooks/useToggle.js) | a reusable on/off hook | custom hooks |
| [`hooks/useCounter.js`](src/hooks/useCounter.js) | a reusable counter hook | custom hooks |
| [`components/Layout.jsx`](src/components/Layout.jsx) | a header/main/footer frame | layout + `children` |
| [`context/ThemeContext.jsx`](src/context/ThemeContext.jsx) | the theme context | Context API |
| [`components/ThemedButton.jsx`](src/components/ThemedButton.jsx) | reads the theme | `useContext` |

Each file states the exact requirement. Replace each `// TODO` so the tests
pass. Do not change file names or the exports.

## Set up your repo

1. **Use this template -> Create a new repository**, owner **`HAU-6APSI`**.
2. Name it `m2a6-<classcode>-yourname`, **Private**.
3. Clone your copy and `npm install`.

## Running the app and the tests

```bash
npm run dev          # http://localhost:5173
npm test             # each passing test is a point
npm run test:watch
```

> **Write your code in `src/` only.** The files in `test/` are how your work is
> graded.

## Submit

```bash
git add -A
git commit -m "✨ Activity 6 complete"
git push
```

Then check the **Actions** tab for the green check and the "N / N tests passed"
summary.
