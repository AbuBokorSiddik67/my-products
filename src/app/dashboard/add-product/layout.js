import React from "react";

export default function AddProductLayout({ children }) {
  return (
    <div>
      {/*
        You can add specific dashboard layout elements here,
        like a sidebar or a header specific to the dashboard section.
        For now, we'll just render the child components.
      */}
      <main>{children}</main>
    </div>
  );
}
