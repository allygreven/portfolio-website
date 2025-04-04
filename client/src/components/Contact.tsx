import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Contact() {
  return (
    <div>
      <h1 className="font-heading text-3xl">/CONTACT</h1>
      <div className="flex justify-center items-center p-8 gap-12 text-2xl">
      <a href="mailto:allysongreven@gmail.com">
        <MdOutlineAlternateEmail />
      </a>
      <a href="https://www.linkedin.com/in/allysongreven/" className="hover:text-#74442B">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/allygreven">
        <FaGithub />
      </a>
      </div>
    </div>
  );
}
