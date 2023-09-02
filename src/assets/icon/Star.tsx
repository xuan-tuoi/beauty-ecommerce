import React from 'react';

const StarIcon = ({ width, height }: { width?: string; height?: string }) => {
  return (
    <svg
      width={width || '25'}
      height={height || '24'}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="0.106445"
        width="24.7867"
        height="23.074"
        fill="url(#pattern0)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_12_2950"
            transform="matrix(0.00930902 0 0 0.01 0.034549 0)"
          />
        </pattern>
        <image
          id="image0_12_2950"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default StarIcon;
