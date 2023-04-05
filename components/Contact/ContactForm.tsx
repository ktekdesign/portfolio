import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import { saira } from "../../utils/fonts";

const alertContent = () => {
  MySwal.fire({
    title: "Félicitation!",
    text: "Nous avons reçu votre message. Nous vous répondrons dans le plus bref délai",
    icon: "success",
    timer: 10000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

type FormData = {
  name: string,
  email: string,
  number: string,
  subject: string,
  text: string
}
// Form initial state
const INITIAL_STATE: FormData = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact]: [FormData, Dispatch<SetStateAction<FormData>>]  = useState(INITIAL_STATE);
  const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target);
    const { name, value } = e.currentTarget;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const list = "c4f0db4f-5164-4de0-8bf9-63a23e09e2bd";
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text, list };
      await axios.post(url, payload);
      const urlNewsletter = `${baseUrl}/api/newsletter`;
      await axios.post(urlNewsletter, payload);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-title">
          <h2 className={saira.className}>Contactez-nous</h2>
          <p>
            Nous serons ravis de discuter de votre projet avec vous.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="contact-form-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nom"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="Téléphone"
                      className="form-control"
                      value={contact.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Sujet"
                      className="form-control"
                      value={contact.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols={30}
                      rows={6}
                      placeholder="Votre message..."
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
