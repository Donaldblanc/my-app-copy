
import { JSX } from "react";
import ButtonComponent from "./button";
const AboutPage = (): JSX.Element => {

  console.log("hey server or client")

 

  return <div>
    <h1> ABOUT PAGE HEADING </h1>
    <p> Welcome to the About Page for our Application </p>
    <span>client component</span>
    
    <ButtonComponent />
     
  </div>;
};

export default AboutPage;
