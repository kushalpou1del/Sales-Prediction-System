 import Hero from "./components/hero/Hero";
import Login from "./auth/login/Login";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import Sample from "./sample/Sample";
export default function Home() {
  return (
    <div>
     
   <Navbar/>
    <Hero/>
      <Sample/>

     </div>
  );
}
