import { FiPhone, FiMail } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <div className="bg-green-600/10 pt-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-semibold text-gray-900 text-4xl sm:text-4xl md:text-6xl lg:text-5xl">
              Contact us
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto min-h-screen max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-5 lg:gap-16">
            <div className="col-span-3">
              <ContactForm />
            </div>
            <div className="divide-y col-span-2 divide-gray-300 ">
              <div className="flex gap-x-7 px-3 pb-6">
                <RiLinkedinBoxLine className="mt-1.5 size-6 shrink-0 text-gray-800 " />
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 ">Linkedin</h3>
                  <p className="mt-1 text-sm text-gray-600 ">
                    Connect with us for updates.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-1 text-sm text-gray-700 hover:text-gray-900 focus:outline-none  -100"
                    href="https://www.linkedin.com/in/dawit-mellese/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect us on Linkedin
                    <GoArrowUpRight />
                  </a>
                </div>
              </div>

              {/* Telegram */}
              <div className="flex gap-x-7 px-3 py-6">
                <PiTelegramLogo className="mt-1.5 size-6 shrink-0 text-gray-800 " />
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 ">Telegram</h3>
                  <p className="mt-1 text-sm text-gray-600 ">
                    Reach out to us on Telegram.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-1 text-sm text-gray-700 hover:text-gray-900 focus:outline-none  -100"
                    href="https://t.me/halas7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Telegram
                    <GoArrowUpRight />
                  </a>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex gap-x-7 px-3 py-6">
                <FiPhone className="mt-1.5 size-6 shrink-0 text-gray-800 " />
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 ">Call us</h3>
                  <p className="mt-1 text-sm text-gray-600 ">
                    You can reach us by phone.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-1 text-sm text-gray-700 hover:text-gray-900 focus:outline-none  -100"
                    href="tel:+251938071193"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +251 938 071193
                    <GoArrowUpRight />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-x-7 px-3 py-6">
                <FiMail className="mt-1.5 size-6 shrink-0 text-gray-800 " />
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 ">Email Us</h3>
                  <p className="mt-1 text-sm text-gray-600 ">
                    Feel free to send us an email.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-1 text-sm text-gray-700 hover:text-gray-900 focus:outline-none  -100"
                    href="mailto:dawitm777@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dawitm777@gmail.com
                    <GoArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
