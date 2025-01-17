import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormPost {
  firstname?: string;
  message?: string;
  email?: string;
}

function ContactForm(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const [submitted, setSubmitted] = useState(false);

  const emailRegex =
    // eslint-disable-next-line no-control-regex
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPost>();
  const onSubmit: SubmitHandler<FormPost> = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => console.log(error));

    setSubmitted(true);
    console.log(data);
  };

  return (
    <div>
      {/* <a href="https://www.linkedin.com/in/alessiaborys/">linkedIN</a>
      <br />
      <a href="mailto:borys.alessia@gmail.com/">email me</a> */}
      {!submitted && (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <div>
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                {...register("firstname")}
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              id="email"
              placeholder="Email"
              {...register("email", { required: true, pattern: emailRegex })}
            />
            {errors.email?.type === "required" ? (
              <p>Email is required</p>
            ) : errors.email?.type === "pattern" ? (
              <p>Invalid email</p>
            ) : (
              <></>
            )}
          </div>
          <div>
            <textarea
              id="message"
              placeholder="Message"
              {...register("message")}
            ></textarea>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      )}
      {submitted && <h5>Thanks for submitting!</h5>}
    </div>
  );
}

export default ContactForm;
