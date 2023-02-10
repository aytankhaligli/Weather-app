import React from "react";

export default function ErrorPage({ errorMsg }) {
  return (
    <div className="text-4xl my-10 mx-auto">
      <p>{errorMsg}</p>
    </div>
  );
}
