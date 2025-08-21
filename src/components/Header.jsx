import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex flex-col items-center text-center py-8">
      <img
        src="/harold_jacquot_square3.jpg"
        alt="Harold Jacquot"
        className="rounded-full w-32 h-32 border-4 border-blue-500 shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-4 text-gray-900 dark:text-gray-100">
        Harold JACQUOT
      </h1>
      <h2 className="text-blue-600 dark:text-blue-400 font-semibold">
        Digital Manager - Lyon
      </h2>
      <div className="flex space-x-4 mt-3">
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
    </header>
  );
}
