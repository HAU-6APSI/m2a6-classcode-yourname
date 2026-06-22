// ───────────────────────────────────────────────────────────────────────────
// Layout - a reusable layout component
// ───────────────────────────────────────────────────────────────────────────
//
// Concept: layout components and the `children` prop.
// Read: content/m2-react Activity 6, and
//       content/react-theory/08-atomic-design.md (templates / layouts)
//
// Requirement:
//   Render the shared page frame around whatever is passed as children:
//     - a <header> containing the text:  My App
//     - a <main> containing the component's {children}
//     - a <footer> containing the text:  Footer
//
//   <Layout><p>Hello</p></Layout>  puts "Hello" inside the <main>.

export default function Layout({ children }) {
  // TODO: return the header, main (with children), and footer.
  return null
}
