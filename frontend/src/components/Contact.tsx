import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <div className=" bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl lg:max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600">
            We'd love to talk about how we can help you.
          </p>
        </div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <ContactForm />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Contact;
