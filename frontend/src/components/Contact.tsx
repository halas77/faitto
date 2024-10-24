import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-[83rem] px-4 sm:px-0 lg:px-0 bg-gradient-to-r from-green-950 to-teal-900 rounded-3xl">
        <div className="max-w-2xl lg:max-w-6xl mx-auto">
          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16 py-5">
            <ContactForm />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
