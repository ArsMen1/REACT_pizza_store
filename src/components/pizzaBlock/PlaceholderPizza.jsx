import React from "react";
import ContentLoader from "react-content-loader";

function PlaceholderPizza() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="120" r="120" />
      <rect x="0" y="250" rx="6" ry="6" width="260" height="26" />
      <rect x="0" y="290" rx="6" ry="6" width="260" height="84" />
      <rect x="0" y="390" rx="6" ry="6" width="110" height="25" />
      <rect x="150" y="380" rx="20" ry="20" width="110" height="40" />
    </ContentLoader>
  );
}

export default PlaceholderPizza;
