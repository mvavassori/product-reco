import React from "react";

const RedditEmbed = ({ embedCode }) => {
  // Extracting the height value from the embedCode
  const heightMatch = embedCode.match(/height:(\d+)px/);
  const height = heightMatch ? heightMatch[1] : "400"; // Default height if not found
  return (
    <iframe
      srcDoc={embedCode}
      style={{ border: "0", width: "100%", height: `${height}px` }}
    />
  );
};

export default RedditEmbed;
