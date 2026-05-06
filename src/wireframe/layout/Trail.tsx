import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const STOPS = [
  { num: "01", path: "/",         label: "Profile"  },
  { num: "02", path: "/projects", label: "Projects" },
  { num: "03", path: "/about",    label: "About"    },
  { num: "04", path: "/resume",   label: "Resume"   },
  { num: "05", path: "/blog",     label: "Writing"  },
  { num: "06", path: "/contact",  label: "Contact"  },
];

export const Trail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDetail = location.pathname.startsWith("/projects/") && location.pathname !== "/projects";

  if (isDetail) return null;

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="trail">
      {STOPS.map((s) => (
        <div
          key={s.path}
          className={"stop" + (isActive(s.path) ? " on" : "")}
          onClick={() => navigate(s.path)}
        >
          {s.num}
          <span className="tip">{s.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Trail;
