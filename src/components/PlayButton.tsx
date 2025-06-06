import React from "react";

interface PlayButtonProps {
  handlePlayButton: () => void;
}

export default function PlayButton({ handlePlayButton }: PlayButtonProps) {
  return (
    <div
      onClick={handlePlayButton}
      className="w-[40%] cursor-pointer aspect-square bg-[#9C2DF4] border-[#253040] rounded-full max-w-[250px]  border-b-12 border-x-4 relative"
    >
      <div className="border-b-12 border-[#9C2DF4] border-x-4 w-full h-full rounded-full circle flex items-center justify-center"></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="67"
          height="64"
          fill="none"
          viewBox="0 0 67 64"
        >
          <g filter="url(#a)">
            <path
              fill="#fff"
              d="m3.381 33.397-.283-1.845C.658 15.62-.563 7.654 4.026 3.32 8.616-1.013 16.31.84 31.7 4.545l2.035.49c21.007 5.058 31.51 7.587 33.051 15.019 1.541 7.431-7.06 14.08-24.26 27.376l-1.753 1.355c-13.98 10.808-20.972 16.212-27.15 13.67-6.18-2.543-7.534-11.382-10.242-29.058Z"
            />
          </g>
          <defs>
            <filter
              id="a"
              width="66.038"
              height="62.264"
              x=".925"
              y=".811"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="-6" />
              <feComposite
                in2="hardAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
              />
              <feColorMatrix values="0 0 0 0 0.141176 0 0 0 0 0.188235 0 0 0 0 0.254902 0 0 0 1 0" />
              <feBlend in2="shape" result="effect1_innerShadow_15_637" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
