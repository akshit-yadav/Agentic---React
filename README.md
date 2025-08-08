# 🚀 AI Agent Landing Page

A responsive, multi-page web application built using **React**, **Vite**, **Tailwind CSS**, and **React Router**, designed to showcase the capabilities of an always-on AI sales agent. This landing page includes call-to-action buttons, feature highlights, and a dynamic layout suitable for modern SaaS products.

---

## 📸 Preview

![Landing Page Preview](./screenshots/landing-page.png)

---

## ✨ Features

- ⚛️ **React + Vite**: Fast, modern frontend development with lightning-fast HMR.
- 🌐 **React Router**: Seamless navigation between pages (`Landing`, `Example`, and more).
- 🎨 **Tailwind CSS**: Fully responsive design with utility-first CSS.
- 🧠 **Lucide Icons**: Beautiful open-source icons for feature highlights.
- 📱 **Mobile Responsive**: Optimized for various screen sizes.
- 🧩 **Reusable Components**: Button and Card components built with flexibility in mind.

---

## 📁 Project Structure

```bash
src/
├── assets/               # Static assets (logos, images)
├── components/
│   └── ui/
│       ├── button.jsx    # Reusable Button component
│       └── card.jsx      # Reusable Card component
├── lib/
│   └── utils.js          # Utility for className merging
├── pages/
│   ├── agent_landing.jsx # Landing Page
│   └── example.jsx       # Example Page
├── App.jsx               # Root application file with router
└── main.jsx              # Vite entry point
```

---

## 🧪 Live Demo

> You can try the app locally by running the following commands:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
npm run dev
```

---

## 📦 Dependencies

| Package             | Version | Purpose                        |
|--------------------|---------|--------------------------------|
| `react`            | ^18.x   | UI library                     |
| `vite`             | ^4.x    | Build tool                     |
| `react-router-dom` | ^6.x    | Routing                        |
| `tailwindcss`      | ^3.x    | Styling framework              |
| `lucide-react`     | ^0.x    | Icon library                   |

---

## 🔨 Components Overview

### `Button`

A customizable button component using Tailwind:

```jsx
<Button variant="default" size="md">Click Me</Button>
```

### `Card`

Simple Card layout to display feature blocks:

```jsx
<Card>
  <CardContent>
    <h3>CRM Integration</h3>
    <p>Connect with HubSpot, Salesforce, etc.</p>
  </CardContent>
</Card>
```

---

## 🧭 Routing

Using `react-router-dom` for multi-page structure:

```jsx
<Routes>
  <Route path="/" element={<AIAgentLandingPage />} />
  <Route path="/example" element={<Example />} />
</Routes>
```

---

## 🎨 Styling

All UI is styled with **Tailwind CSS** classes. To override themes or dark mode, refer to:

```css
/* index.css */
body {
  background-color: white;
}
```

---

## 🔍 Screenshots

| Feature Section    | Screenshot                              |
|-------------------|------------------------------------------|
| Full Landing Page | ![screenshot](./screenshots/landing-page.png) |
| Feature Cards     | ![screenshot](./screenshots/cards.png)        |

> (Make sure to add actual screenshots inside a `screenshots/` folder.)

---

## 📚 Future Enhancements

- [ ] Add 404 Not Found route
- [ ] Integrate demo modal or video
- [ ] Add scroll animations using Framer Motion
- [ ] Add Tailwind theming (dark/light toggle)

---

## 👨‍💻 Author

- **Akshit Yadav** – [@yourhandle](https://github.com/yourusername)

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## ⭐️ Show Your Support

If you liked the project, consider giving it a ⭐ on GitHub to help others find it!
