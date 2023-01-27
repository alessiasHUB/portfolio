import React from "react";

// interface IContactForm {
//   name: string;
//   email: string;
//   message: string;
// }
const ContactForm: React.FC = () => {
  // const [formStatus, setFormStatus] = React.useState("Send");

  // const postContactForm = async (conFom:IContactForm) => {
  //   try {
  //       await axios.post(
  //         `${baseUrl}/contact_form/`,
  //         {name: conFom.name, email:conFom.email ,message:conFom.message}
  //       );
  //   } catch (error) {
  //     console.error("Woops... issue with POST request: ", error);
  //   }
  // };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  // const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setFormStatus("Submitting...");
  //   const name = e.currentTarget.elements.namedItem("name") as HTMLInputElement;
  //   const email = e.currentTarget.elements.namedItem(
  //     "email"
  //   ) as HTMLInputElement;
  //   const message = e.currentTarget.elements.namedItem(
  //     "message"
  //   ) as HTMLTextAreaElement;
  //   const conFom :IContactForm = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   console.log(conFom);
  //   postContactForm(conFom)
  //   .then(()=>setFormStatus("Send"))
  //   e.currentTarget.reset()
  // };

  return (
    <>
      <a href="https://www.linkedin.com/in/alessiaborys/">linkedIN</a>
      <br />
      <a href="mailto:borys.alessia@gmail.com/">email me</a>
      <form
        name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmitForm}
      >
        <input type="hidden" name="form-name" value="contact v1" />
        <div>
          <label>
            Name <br />
            <input type="text" name="name" />
          </label>
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <br />
          <input id="email" type="email" name="email" />
        </div>

        <div>
          <label htmlFor="email">Message</label>
          <br />
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </>
    // <div className="container-contact-form">
    //   <form onSubmit={onSubmit}>
    //     <div className="mb-3">
    //       <label className="form-label" htmlFor="name">
    //         Name
    //       </label>
    //       <input className="form-control" type="text" id="name" required />
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label" htmlFor="email">
    //         Email
    //       </label>
    //       <input className="form-control" type="email" id="email" required />
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label" htmlFor="message">
    //         Message
    //       </label>
    //       <textarea className="form-control" id="message" required />
    //     </div>
    //     <button className="btn btn-danger" type="submit">
    //       {formStatus}
    //     </button>
    //   </form>
    // </div>
  );
};

export default ContactForm;
