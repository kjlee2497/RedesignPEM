import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { contactFormType } from "../types";

const Contact = () => {
  const formEmpty = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactFormType>();
  const onSubmit: SubmitHandler<contactFormType> = (data) => console.log(data);

  const [formValues, setFormValues] = useState(formEmpty);

  return (
    <div className="fade-in">
      <Navbar />

      <div className="about-banner">
        <h1>Contact Us</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
        <h2>Get In Touch</h2>
        <h3>
          We'd love to hear from you. Fill out the form below to get started.{" "}
        </h3>
        {/* register your input into the hook by invoking the "register" function
        include validation with required or other standard HTML validation rules */}
        <div className="nameInputs">
          <div className="formInputs">
            <label>First Name</label>
            <input
              value={formValues.firstName}
              {...register("firstName", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.firstName && <span>This field is required</span>}
          </div>
          <div className="formInputs">
            <label>Last Name</label>
            <input
              value={formValues.lastName}
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <span>This field is required</span>}
          </div>
        </div>

        <div className="formInputs">
          <label>E-Mail</label>
          <input
            type="email"
            value={formValues.email}
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>

        <div className="formInputs messageInput">
          <label>Message</label>
          <input
            type="text"
            value={formValues.message}
            {...register("message", { required: true })}
          />
          {errors.message && <span>This field is required</span>}
        </div>

        <button className='input'>Send</button>
      </form>

      <Footer />
    </div>
  );
};

export default Contact;
