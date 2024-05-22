import React from "react";

export default function Aleart(props) {
  const capitalize = (word) => {
    var lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div className="container my-3 " style={{ height: "60px" }}>
      {props.aleart && (
        <>
          <div
            className={`alert alert-${props.aleart.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{capitalize(props.aleart.type)}</strong> {props.aleart.msg}
          </div>
        </>
      )}
    </div>
  );
}
