import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="portfolioFooter bg-black text-white h-64 p-6 flex flex-col justify-between">
      
      {/* Top Section */}
      <div className="portfolioFooterTop flex justify-between items-center">
        <Link
          href="/"
          className="portfolioFooterTitle text-4xl font-semibold hover:text-gray-300"
        >
          You reached the end but it's not the end!
          <br />
          Better days will come!
        </Link>

        {/* Social Media Icons */}
        <div className="portfolioFooterSocial flex space-x-6">
          <a
            href="https://www.linkedin.com/in/nico-castro/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolioFooterIcon text-yellow-600 hover:text-blue-700"
          >
            <FaLinkedin size={48} />
          </a>

          <a
            href="https://github.com/NicoCastro"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolioFooterIcon text-yellow-600 hover:text-gray-600"
          >
            <FaGithub size={48} />
          </a>

          <a
            href="https://www.instagram.com/ccsaiengineeringclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolioFooterIcon text-yellow-600 hover:text-pink-700"
          >
            <FaInstagram size={48} />
          </a>
        </div>
      </div>

      {/* Center Section */}
      <div className="portfolioFooterCenter text-center mt-4">
        <p className="text-lg">1O1.projects</p>
        <p className="text-lg">
          © 2025 Nico Castro. All Rights Reserved
        </p>
      </div>

      {/* Bottom Section */}
      <div className="portfolioFooterBottom flex justify-center space-x-8 mt-2">
        <span className="text-lg">
          Email{" "}
          <a
            href="mailto:castroconi101s@gmail.com"
            className="portfolioFooterLink text-yellow-600 hover:text-black hover:bg-white"
          >
            castroconi101s@gmail.com
          </a>
        </span>

        <span className="text-lg">
          Phone{" "}
          <a
            href="tel:+14374451436"
            className="portfolioFooterLink text-yellow-600 hover:text-black hover:bg-white"
          >
            +1 (437) 445 1436
          </a>
        </span>
      </div>
    </footer>
  );
}
