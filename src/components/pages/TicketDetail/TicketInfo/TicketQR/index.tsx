import Typography from "@/components/typography";
import { Flex } from "antd";
import "./style.scss";
const TicketQR = () => {
  return (
    <Flex vertical align="center" className="ticket-qr">
      <svg
        width="321"
        height="320"
        viewBox="0 0 321 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g filter="url(#filter0_d_662_1819)">
          <rect
            x="32.5"
            y="28"
            width="256"
            height="256"
            rx="16"
            fill="white"
            shape-rendering="crispEdges"
          />
          <rect
            x="40.5"
            y="36"
            width="240"
            height="240"
            fill="url(#pattern0_662_1819)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_662_1819"
            x="0.5"
            y="0"
            width="320"
            height="320"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="16" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_662_1819"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_662_1819"
              result="shape"
            />
          </filter>
          <pattern
            id="pattern0_662_1819"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_662_1819" transform="scale(0.00666667)" />
          </pattern>
          <image
            id="image0_662_1819"
            width="150"
            height="150"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      <Typography className="ticket-qr-sub">
        Show this code to the gatekeeper at the cinema
      </Typography>
    </Flex>
  );
};

export default TicketQR;
