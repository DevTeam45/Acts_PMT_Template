import React from "react";

const Footer = () => {
  var d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © {" "} {d.getFullYear()} {" "}
          <a href="https://actschurch.co.za/" target="_blank" rel="noreferrer">
            Acts Christian Church
          </a>{" "}  | <a href="tel:+27118052381">Tel: +27 11 805 2381</a> | <a href="mailto:admin@actschurch.co.za">admin@actschurch.co.za</a>
          
        </p>
      </div>
    </div>
  );
};

export default Footer;
