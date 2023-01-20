import React from "react";

const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  
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
    const conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
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
