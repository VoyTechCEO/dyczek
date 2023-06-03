import React, { createElement, useEffect, useRef } from 'react';

interface Props {
  element: string;
  content: string;
  className?: string;
}

const ElementRef = ({ element, content, className }: Props) => {
  const refText = useRef<HTMLElement>(null);

  useEffect(() => {
    if (refText.current) {
      refText.current.innerHTML = content;
    }
  });

  return createElement(
    element,
    { ref: refText, className: className && className },
    content
  );
};

export default ElementRef;
