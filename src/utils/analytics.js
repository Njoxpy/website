// src/utils/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  const trackingId = import.meta.env.REACT_APP_GA_TRACKING_ID;

  if (trackingId) {
    ReactGA.initialize(trackingId);
  } else {
    console.warn("Google Analytics tracking ID not found");
  }
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track custom events
export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

// Track downloads (for your resume/CV)
export const trackDownload = (filename) => {
  ReactGA.event({
    category: "Download",
    action: "click",
    label: filename,
  });
};

// Track external link clicks
export const trackExternalLink = (url) => {
  ReactGA.event({
    category: "External Link",
    action: "click",
    label: url,
  });
};
