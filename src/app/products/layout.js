import React from "react";

export default function ProductsLayout({ children }) {
  return (
    <div>
      {/* You could add a products-specific header or sidebar here. */}
      <main>{children}</main>
    </div>
  );
}
