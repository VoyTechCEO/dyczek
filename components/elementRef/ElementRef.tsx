import React, { createElement, useEffect, useRef } from 'react';

interface Props {
  element: string;
  content: string;
}

const ElementRef = ({ element, content }: Props) => {
  const refText = useRef<HTMLElement>(null);

  useEffect(() => {
    if (refText.current) {
      refText.current.innerHTML = content;
    }
  });

  return createElement(element, { ref: refText }, content);
};

export default ElementRef;
