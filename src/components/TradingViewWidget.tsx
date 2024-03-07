"use client"
// import { memo, useEffect, useState } from "react";
// import { SymbolOverview } from "react-ts-tradingview-widgets";

// function TradingViewWidget() {
//   const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <SymbolOverview
//       colorTheme="light"
//       chartType="area"
//       downColor="#800080"
//       borderDownColor="#800080"
//       wickDownColor="#800080"
//       symbols="COINBASE:BTCUSD|All"
//       chartOnly
//       width={windowWidth ? Math.floor(windowWidth / 2 + windowWidth * 0.13) : undefined}
//       height={500}
//       lineColor="#2962FF"
//     />
//   );
// }

// export default memo(TradingViewWidget);


import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
            "autosize": true,
            "symbol": "BITSTAMP:BTCUSD",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "2",
            "locale": "en",
            "enable_publishing": false,
            "backgroundColor": "rgba(255, 255, 255, 1)",
            "gridColor": "rgba(255, 255, 255, 0.06)",
            "hide_top_toolbar": true,
            "hide_legend": true,
            "withdateranges": true,
            "range": "YTD",
            "allow_symbol_change": true,
            "save_image": false,
            "calendar": false,
            "hide_volume": true,
            "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);