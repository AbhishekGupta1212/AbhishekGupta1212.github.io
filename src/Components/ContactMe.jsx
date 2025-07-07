import React from "react";


import { useForm, ValidationError } from "@formspree/react";

import "../Styles/ContactMe.css";
function ContactForm() {
  const [state, handleSubmit] = useForm("xyyayvwe");

  if (state.succeeded) {
    return (
      <>
        {" "}
        <div id="formsub" style={{ textAlign: "center" }}>
          <img
            width={300}
            src="https://png.pngtree.com/png-vector/20230105/ourmid/pngtree-3d-green-check-mark-icon-png-image_6552255.png"
            alt=""
          />
          <h1>Your mail has been sent Succesfully !</h1>
        </div>
      </>
    );
  }

  return (
    <section id="contact">
      <div id="tech" margin={"auto"} justifyContent={"space-around"}>
        <h1>Contact Me</h1>
      </div>
      <div id="contactform">
        <div id="contactlinkdiv">
          <div>
            <div>
              {" "}
              <div style={{ fontSize: "1.5rem", marginRight: "10px" }}>
                <i class="fa-solid fa-envelope"></i>
              </div>
              <h4 id="contact-email">Email : abhig1502@gmail.com</h4>
            </div>
            <div>
              <a
                target={"blank"}
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=abhig1502@gmail.com"
              >
                <button id="btnform">Email Now !</button>
              </a>
            </div>
          </div>
          <div className="whatsapp">
            <div>
              {" "}
              <div style={{ fontSize: "1.5rem", marginRight: "10px" }}>
                <i class="fa-solid fa-phone"></i>
              </div>
              <h4 id="contact-phone"> Phone : 7388408332</h4>
            </div>
            <div>
              <a target={"blank"} href="tel:07388408332">
                {" "}
                <button id="btnform">Call Now !</button>
              </a>
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            id="socialgit"
          >
            <a target="blank" href="https://github.com/AbhishekGupta1212" id="contact-github">
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>

            <a
              target="blank"
              href="https://www.linkedin.com/in/abhishek-gupta-13883623a/"
              id="contact-linkedin"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function App() {
  return <ContactForm />;
}
export default App;