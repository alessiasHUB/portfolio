import axios from "axios";
import React from "react";

interface IContactForm {
  name: string;
  email: string;
  message: string;
}
const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  
  const baseUrl = process.env.NODE_ENV === "production"
	? "https://portfolio-back-sptl.onrender.com"
	: "localhost:4000"

  const postContactForm = async (conFom:IContactForm) => {
    try {
        await axios.post(
          `${baseUrl}/contact_form/`,
          conFom
        );
    } catch (error) {
      console.error("Woops... issue with POST request: ", error);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const name = e.currentTarget.elements.namedItem("name") as HTMLInputElement;
    const email = e.currentTarget.elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const message = e.currentTarget.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;
    const conFom :IContactForm = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
    postContactForm(conFom)
  };

  return (
    <div className="container-contact-form">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
