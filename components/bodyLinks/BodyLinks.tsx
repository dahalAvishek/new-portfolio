import React from "react";
import Image from "next/image";
import GoogleLogo from "../../public/GoogleLogo.png";
import LinkedInLogo from "../../public/LinkedInLogo.png";
import MetaLogo from "../../public/MetaLogo.png";
import SlackLogo from "../../public/SlackLogo.png";
import "../../style/globals.css";

const BodyLinks = () => {
  const Logos = [
    { name: "metaLogo", url: "https://www.facebook.com", logo: MetaLogo },

    {
      name: "linkedinLogo",
      url: "https://www.linkedIn.com",
      logo: LinkedInLogo,
    },

    { name: "slackLogo", url: "https://www.slackIn.com", logo: SlackLogo },

    { name: "googleLogo", url: "https://www.googleIn.com", logo: GoogleLogo },
  ];
  return (
    <div className="w-full flex justify-around py-6 body-links">
      {Logos.map((socialSite) => (
        <a
          href={socialSite.url}
          key={socialSite.name}
          className="body-link w-36 h-14 flex align-middle justify-evenly"
        >
          <Image
            src={socialSite.logo}
            width={70}
            height={20}
            alt="meta-logo"
            className="my-auto"
          />
        </a>
      ))}
    </div>
  );
};

export default BodyLinks;
