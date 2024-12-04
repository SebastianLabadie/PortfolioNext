
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import React from "react"

const SocialMedia = () => {
  return (
    <>
      <Link href="https://www.linkedin.com/in/sebasti%C3%A1n-labadie-173902181/" className="text-white hover:text-primary transition-colors">
        <FaLinkedinIn className="h-6 w-6" />
      </Link>
      <Link href="https://x.com/SebastianLb6" className="text-white hover:text-primary transition-colors">
        <FaX className="h-6 w-6" />
      </Link>
      <Link href="https://www.instagram.com/sebastian._.labadie/" className="text-white hover:text-primary transition-colors" >
        <FaInstagram className="h-6 w-6" />
      </Link>
      <Link href="https://wa.me/59891843400" className="text-white hover:text-primary transition-colors">
        <FaWhatsapp className="h-6 w-6" />
      </Link>
    </>
  )
};

export default SocialMedia;
