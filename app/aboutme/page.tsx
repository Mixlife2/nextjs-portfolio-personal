import React from 'react';
import { aboutMe } from '../components/about-me'; 
import { Navigation } from '../components/nav';
import Particles from "../components/particles";

function Page() {
  return (
    <div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}/>
      <Navigation />
      {aboutMe()}
    </div>
  );
}

export default Page;
