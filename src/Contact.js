import { useForm } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("myylojjq");

  if (state.succeeded) {
    return <div>Thank you for writing to us!</div>;
  }

  return (
    <div className="contact-message">
      <div className="contact-image">
        <img src="/image/contact.jpg" alt="women" />
      </div>
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xpzkbjyr"
        method="POST"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="box"
          name="name"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="box"
          name="email"
          required
        />

        <textarea
          cols="30"
          rows="10"
          className="box address"
          placeholder="Your Comments"
          required
        ></textarea>

        <button
          type="submit"
          value="submit"
          className="contact-btn"
          disabled={state.submitting}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
