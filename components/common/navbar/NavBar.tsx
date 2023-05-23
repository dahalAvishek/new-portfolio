import React from "react";
import "../../../style/globals.css";

interface Props {
  nav: "Home" | "About" | "Projects";
  setNav: React.Dispatch<React.SetStateAction<"Home" | "About" | "Projects">>;
}

const NavBar = ({nav, setNav}: Props) => {
  return (
    <nav className="flex gap-6 items-end mx-auto">
      {(() => {
        const navElements:Props['nav'][] = ["Home", "About", "Projects"];
        const navButtons = navElements.map((item) => {
          if (item !== nav) {
            return (<button
              key={navElements.indexOf(item)}
              className="text-2xl py-1 px-2 hover:border-b-4 hover:scale-118"
              onClick={(e) => setNav(item)}
            >
              {item}
            </button>)
          } else {
            return(<button
              key={navElements.indexOf(item)}
              className="text-2xl py-1 px-2 scale-110 border-b-4 border-b-amber-300"
              onClick={(e) => setNav(item)}
            >
              {item}
            </button>)
          }
          
        });
        return navButtons;
      })()}
    </nav>
  );
};

export default NavBar;
