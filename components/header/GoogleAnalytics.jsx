import React, { useEffect } from "react";

function GoogleAnalytics() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-NL598L3CX1";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "G-NL598L3CX1");
  }, []);

  return null;
}

export default GoogleAnalytics;
