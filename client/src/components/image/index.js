/**
 * Custom Img component with image fail fallback
 */

import React, { useState } from "react";

export default function({ src, alt }) {
  const [imageSrc, setImageSrc] = useState(src);

  const loadFallBack = () => {
    setImageSrc("https://placekitten.com/200/300");
  };

  return <img alt={alt} src={imageSrc} onError={loadFallBack} />;
}
