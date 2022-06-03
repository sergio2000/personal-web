import React from "react";
import "./footer.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer id="footer">© {date} Sergio Acosta. All rights reserved.</footer>
  );
}
export default Footer;