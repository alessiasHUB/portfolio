// import ContactForm from "./ContactForm";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IContactProps {}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  // todo: contact form that goes to my email
  return (
    <div className="content">
      <div className="container-contact">
      <h2 className="mb-3">Contact Me</h2>
        {/* <ContactForm /> */}
      </div>
    </div>
  );
};

export default Contact;
