import React from "react";
import logoBottomImage from "/logo-bottom.png";

function Footer() {
  return (
    <div className="bg-[url('/bg-footer.png')] p-10 bg-cover bg-no-repeat bg-bottom">
      <img src={logoBottomImage} alt="logo-bottom" />
      <div>
        <div className="bg-white mt-5 p-3">
          <span className="uppercase font-bold text-[#00537C] flex md:block">
            Technology Department
          </span>
          <div className="text-primary pt-3 text-left md:text-center">
            Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa
            Barat{" "}
          </div>
        </div>
        <div className="mt-5 p-3 md:flex hidden justify-center gap-3">
          <a href="#who-we-are">
            <span className="capitalize font-bold text-white">
              Who we are |
            </span>
          </a>
          <a href="#core">
            <span className="capitalize font-bold text-white">
              Our Values |
            </span>
          </a>
          <a href="#perks">
            <span className="capitalize font-bold text-white">The Perks</span>
          </a>
        </div>
        <div className="mt-5 p-3 pl-0 md:hidden flex flex-col text-left justify-center gap-3">
          <a href="#who-we-are">
            <span className="capitalize font-bold text-white">Who we are</span>
          </a>
          <a href="#core">
            <span className="capitalize font-bold text-white">Our Values</span>
          </a>
          <a href="#perks">
            <span className="capitalize font-bold text-white">The Perks</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
