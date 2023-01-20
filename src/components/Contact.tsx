// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IContactProps {}

const Contact: React.FunctionComponent<IContactProps> = (props) => {

  // todo: contact form that goes to my email
  return (
    <div className="content">
      <a href="mailto: borys.alessia@gmail.com">E-mail me!</a>
      <br />
      <a href="https://www.linkedin.com/in/alessiaborys/">LinkedIn</a>
    </div>
  );
};

export default Contact;
