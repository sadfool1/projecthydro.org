import React, { Component } from 'react';
import Profile from './profiles/Profile';
import './sections.css';

const profileStyles = {
  width: '100%',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
}

class Team extends Component  {
  render() {
    return (
      <>
      <h2 style={{width: "100%", textAlign: "center"}}>Core Contributors</h2>
      <section className="sections" id="team">
        <div style={{...profileStyles}}>
          <Profile
            name ="Andy Chorlian"
            teamrole="Protocol Developer"
            linkedIn="https://www.linkedin.com/in/achorlia/"
            email="andy@hydrogenplatform.com"
            twitter="https://twitter.com/andy8052"
            github="https://github.com/AndyHydro"
            photoName = "andy.jpeg"
            backgroundName = "architecture.jpg"
          />
          <Profile
            name = "Noah Zinsmeister"
            teamrole="Protocol Developer"
            linkedIn="https://www.linkedin.com/in/noahzinsmeister/"
            email="noah@hydrogenplatform.com"
            twitter="https://twitter.com/noahzinsmeister"
            github="https://github.com/noahhydro"
            photoName = "noah.png"
            backgroundName = "stars.png"
          />
          <Profile
            name = "Shane Hampton"
            teamrole="Product"
            linkedIn="https://www.linkedin.com/in/shane-hampton-a9689b49/"
            email="shane@hydrogenplatform.com"
            twitter="https://twitter.com/citizenshane_"
            github="https://github.com/shanehampton"
            photoName = "shane.png"
            backgroundName = "hexagons.png"
          />
          <Profile
            name = "Jess Nicholson"
            teamrole="Product"
            linkedIn="https://www.linkedin.com/in/jessica-nicholson-4b117092/"
            email="jess@hydrogenplatform.com"
            github="https://github.com/JessHydrogen"
            photoName = "jess.png"
            backgroundName = "kitty.jpg"
          />
          <Profile
            name = "Anurag Angara"
            teamrole="Product"
            linkedIn="https://www.linkedin.com/in/anurag-angara-6863a483/"
            email="anurag@hydrogenplatform.com"
            twitter="https://twitter.com/AnuragHydro"
            github="https://github.com/AnuragHydro"
            photoName = "anurag.png"
            backgroundName = "mumen.png"
          />
          <Profile
            name = "Nahom Yemane"
            teamrole="Community Manager"
            linkedIn="https://www.linkedin.com/in/nahom-yemane/"
            email="nahom@hydrogenplatform.com"
            twitter="https://twitter.com/NYemane_"
            photoName = "nahom.png"
            backgroundName = "aurora.jpg"
          />
        </div>
      </section>
      </>
    )
  }
}

export default Team
