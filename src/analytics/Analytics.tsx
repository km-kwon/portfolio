import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, target: string | Date, config?: Record<string, unknown>) => void;
  }
}

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
const cloudflareToken = import.meta.env.VITE_CLOUDFLARE_ANALYTICS_TOKEN;
const analyticsEnabled = import.meta.env.PROD || import.meta.env.VITE_ANALYTICS_DEBUG === "true";

const appendScriptOnce = (
  id: string,
  src: string,
  attributes: Record<string, string | boolean> = {},
) => {
  if (typeof document === "undefined" || document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.src = src;

  Object.entries(attributes).forEach(([key, value]) => {
    if (typeof value === "boolean") {
      if (value) script.setAttribute(key, "");
      return;
    }
    script.setAttribute(key, value);
  });

  document.head.appendChild(script);
};

const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!analyticsEnabled) return;

    if (gaMeasurementId) {
      appendScriptOnce(
        "ga4-script",
        `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`,
        { async: true },
      );

      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || ((...args: unknown[]) => {
        window.dataLayer?.push(args);
      });
      window.gtag("js", new Date());
      window.gtag("config", gaMeasurementId, { send_page_view: false });
    }

    if (cloudflareToken) {
      appendScriptOnce(
        "cloudflare-web-analytics-script",
        "https://static.cloudflareinsights.com/beacon.min.js",
        {
          defer: true,
          "data-cf-beacon": JSON.stringify({ token: cloudflareToken }),
        },
      );
    }
  }, []);

  useEffect(() => {
    if (!analyticsEnabled || !gaMeasurementId || !window.gtag) return;

    window.gtag("config", gaMeasurementId, {
      page_path: `${location.pathname}${location.search}${location.hash}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.hash, location.pathname, location.search]);

  return null;
};

export default Analytics;
