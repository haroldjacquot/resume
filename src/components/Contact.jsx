import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="p-6 mb-8 text-center bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h3 className="mb-4 text-xl font-semibold text-blue-600 dark:text-blue-400">
        Contact
      </h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300">
        <a href="mailto:haroldjacquot@yahoo.fr" className="hover:text-blue-500 dark:hover:text-blue-400">
          haroldjacquot@yahoo.fr
        </a>
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <a
          href="https://www.linkedin.com/in/haroldjacquot/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          linkedin.com/in/haroldjacquot/
        </a>
      </p>
      <div className="flex justify-center mt-4 space-x-4">
        <a
          href="mailto:haroldjacquot@yahoo.fr"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/haroldjacquot/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </section>
  );
}
