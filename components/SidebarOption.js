import React from "react";
import styles from "../styles/sidebarOption.module.scss";

function SidebarOption({ active, text, Icon }) {
  const buttonStyle = "";
  if (active === true) {
    const buttonStyle = styles.sidebarOption__active;
  } else {
    const buttonStyle = styles.sidebarOption;
  }

  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>

      <style jsx>{`
        .sidebarOption {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .sidebarOption:hover {
          background-color: #e8f5fe;
          border-radius: 30px;
          color: var(--twitter-color);
          transition: color 100ms ease-out;
        }

        .sidebarOption > .MuiSvgIcon-root {
          padding: 20px;
        }

        .sidebarOption > h2 {
          font-weight: 800;
          font-size: 20px;
          margin-right: 20px;
        }

        .sidebarOption__active {
          color: var(--twitter-color);
        }
      `}</style>
    </div>
  );
}

export default SidebarOption;
