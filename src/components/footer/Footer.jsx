import React from "react";
import Link from "../link/Link";
import "./Footer.css";

function Footer() {
  const linksFooterLeft = [
    "FAQ", "Help Center", "Terms of Use", "Privacy", "Cookie Preferences", "Corporate Information"];
  

  const urlsFooterLeft = [
    "https://help.netflix.com/en/node/412",
    "https://help.netflix.com/en/",
    "https://help.netflix.com/legal/termsofuse",
    "https://help.netflix.com/legal/privacy",
    "https://help.netflix.com/legal/privacy",
    "https://help.netflix.com/legal/corpinfo",
  ];


  return (
    <div className="footer">
      <div className="top">Questions? Call 0800-800-82</div>
      <div className="bottom">
        <div className="links">
          {linksFooterLeft.map((v, i) => (
            <Link key={i} linkName={v} url={urlsFooterLeft[i]} />
          ))}
        </div>
        <div className="language">
         
        </div>
      </div>
    </div>
  );
}

export default Footer;
