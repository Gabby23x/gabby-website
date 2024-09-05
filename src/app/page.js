import Image from "next/image";
import Navbar from "./navbar";
import "./home.css"; // Import the CSS file

export default function Home() {
  return (
    <div className="container">
      <Navbar /> {/* Add the Navbar component here */}
      <h1 className="title">Gabby</h1>
      <div className="image-placeholder">
        <span>Image</span>
      </div>
    </div>
  );
}