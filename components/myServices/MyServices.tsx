import React from "react";
import "../../style/globals.css";

const MyServices = () => {
  const Achievements = [
    {
      name: "Projects Completed",
      numbers: "250+",
    },
    {
      name: "Community Peers",
      numbers: "100+",
    },
    {
      name: "Something there",
      numbers: "30+",
    },
    {
      name: "Something else",
      numbers: "10+",
    },
  ];
  return (
    <div className="grid gap-20 pr-16">
      <h2 className="text-5xl font-bold">What Can I Do For Your Needs</h2>
      <p className="text-xl">
        It is easier to entrust the work to the experts because theu are able to
        provide the best results with reliable quality
      </p>
      <div className="grid grid-cols-2 grid-rows-2 gap-y-8">
        {Achievements.map((item) => (
          <div key={item.name}>
            <h3 className="yellow-font text-3xl">{item.numbers}</h3>
            <p className="text-xl">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
const achievements = [{ name: "Projects Completed" }];
