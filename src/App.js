import React from "react";
import BodyComponent from "./components/bodyComponent";
import Footer from "./components/Footer";
import HeaderComponent from "./components/headerComponent";

export default function App() {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
      <Footer />
    </div>
  );
}

// npx create-react-app covid19tracker
// npm start
