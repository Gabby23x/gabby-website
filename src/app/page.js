import Image from "next/image";
import Navbar from "./navbar";
import "./home.css"; // Import the CSS file


export default function Home() {
  return (
    <div className="container">
      <Navbar /> {/* Add the Navbar component here */}
      <div className="content">
        <div className="text-container">
          <p className="description animationt" >Hello I am</p>
          <h1 className="title">Gabrielle Loncke (Gabby)</h1>
          <p className="description typing-effect">
            A passionate CS and Game Dev Student<br />
            with a love for creating amazing
            digital experiences.
          </p>
        </div>
        <div className="image-container">
          <div className="image-circle">
            <Image src="/images/profile.jpg" alt="Profile Picture" width={5472} height={3648} />
          </div>
        </div>
      </div>
    </div>
  );
}