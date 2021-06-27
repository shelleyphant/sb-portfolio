import React from 'react'
import Layout from "../components/Layout";
import * as Icon  from "react-feather";

export default function index() {
  return (
    <Layout>
      <section id="welcome">
        <h2>Welcome</h2>
        <p>Shelley Bassett is a digital interaction designer based in Melbourne, Aus</p>
      </section>
      <section id="about">
        <h2>About Shelley</h2>
      </section>
      <section id="expertise">
        <h2>Expertise</h2>
        <div className="skill">
          <div><Icon.Monitor/></div>
          <h3>Responsive Usability</h3>
          <p>Duis malesuada vitae nisi sed scelerisque. Mauris dictum consequat orci in vestibulum.</p>
        </div>
        <div className="skill">
        <div><Icon.Users/></div>
          <h3>User Centric</h3>
          <p>Duis malesuada vitae nisi sed scelerisque. Mauris dictum consequat orci in vestibulum.</p>
        </div>
        <div className="skill">
        <div><Icon.Zap/></div>
          <h3>SEO Focused</h3>
          <p>Duis malesuada vitae nisi sed scelerisque. Mauris dictum consequat orci in vestibulum.</p>
        </div>
      </section>
      <section id="work">
        <h2>Selected Work</h2>
      </section>
      <section id="contact">
        <h2>Get in Contact</h2>
      </section>
    </Layout>
  )
}
