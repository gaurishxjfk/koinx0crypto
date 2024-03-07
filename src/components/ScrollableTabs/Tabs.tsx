import React from "react";
import Overview from "./Overview";
import Fundamentals from "./Fundamentals";
import Sentiments from "./Sentiments";
import News from "./News";
import Team from "./Team";

type TabMapping = {
  [key: string]: JSX.Element;
};

const tabMapping: TabMapping = {
  Overview: <Overview />,
  Fundamentals: <Fundamentals />,
  "News Insights": <News />,
  Sentiments: <Sentiments />,
  Team: <Team />,
  Technicals: <Fundamentals />,
  Tokenomics: <Fundamentals />,
};

const Tabs = ({ tab }: { tab: string }) => {
  const ComponentToRender = tabMapping[tab];
  return (
    <div className="rounded-lg bg-white px-1 md:px-[1.5rem] py-[1.75rem] mt-4 shadow-sm lg:max-w-[69%] xl:max-w-[75%]">
      {ComponentToRender}
    </div>
  );
};

export default Tabs;
