export const NextArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    width="11"
    height="15"
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_45_306)">
      <path
        d="M5.41353 5.95329C5.43306 5.88167 5.42004 5.80029 5.37446 5.70915C5.3354 5.63753 5.28006 5.56266 5.20845 5.48454L1.21431 1.50016C1.11014 1.396 0.986442 1.34391 0.843213 1.34391C0.699984 1.34391 0.577913 1.396 0.477002 1.50016C0.37609 1.60433 0.325635 1.72803 0.325635 1.87126C0.325635 2.01449 0.374463 2.13818 0.472119 2.24235L4.28071 5.94352L0.472119 9.65446C0.380973 9.7391 0.32889 9.84326 0.315869 9.96696C0.302848 10.0907 0.330518 10.2062 0.398877 10.3136C0.467236 10.4211 0.563265 10.491 0.686963 10.5236C0.810661 10.5562 0.927848 10.5496 1.03853 10.5041C1.10363 10.478 1.16222 10.439 1.21431 10.3869L5.20845 6.40251C5.28006 6.32438 5.33215 6.25602 5.3647 6.19743C5.41027 6.10628 5.42655 6.0249 5.41353 5.95329ZM10.101 5.48454L6.10688 1.50016C6.00272 1.396 5.87902 1.34391 5.73579 1.34391C5.59256 1.34391 5.47049 1.396 5.36958 1.50016C5.26867 1.60433 5.21821 1.72803 5.21821 1.87126C5.21821 2.01449 5.26704 2.13818 5.3647 2.24235L9.17329 5.95329L5.3647 9.64469C5.27355 9.73584 5.22147 9.84326 5.20845 9.96696C5.19543 10.0907 5.22472 10.2046 5.29634 10.3088C5.36795 10.4129 5.46398 10.4829 5.58442 10.5187C5.70487 10.5545 5.82043 10.5496 5.9311 10.5041C5.99621 10.478 6.05155 10.439 6.09712 10.3869L10.101 6.41227C10.1726 6.32113 10.2247 6.24951 10.2573 6.19743C10.3028 6.11279 10.3191 6.03141 10.3061 5.95329C10.3387 5.81657 10.2703 5.66032 10.101 5.48454Z"
        fill="#3E5765"
      />
    </g>
    <defs>
      <clipPath id="clip0_45_306">
        <rect
          width="10"
          height="10.5"
          fill="white"
          transform="matrix(1 0 0 -1 0.312744 11.1934)"
        />
      </clipPath>
    </defs>
  </svg>
);
export const UpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="11"
    height="8"
    viewBox="0 0 11 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
  </svg>
);

export const BlackUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="11"
    height="8"
    viewBox="0 0 11 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.5 0L11 8H0L5.5 0Z" fill="#000000" />
  </svg>
);
export const Loader: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <circle
    fill="#89D9FF"
    stroke="#89D9FF"
    strokeWidth="15"
    r="15"
    cx="40"
    cy="65"
  >
    <animate
      attributeName="cy"
      calcMode="spline"
      dur="2"
      values="65;135;65;"
      keySplines=".5 0 .5 1;.5 0 .5 1"
      repeatCount="indefinite"
      begin="-.4"
    ></animate>
  </circle>
  <circle
    fill="#89D9FF"
    stroke="#89D9FF"
    strokeWidth="15"
    r="15"
    cx="100"
    cy="65"
  >
    <animate
      attributeName="cy"
      calcMode="spline"
      dur="2"
      values="65;135;65;"
      keySplines=".5 0 .5 1;.5 0 .5 1"
      repeatCount="indefinite"
      begin="-.2"
    ></animate>
  </circle>
  <circle
    fill="#89D9FF"
    stroke="#89D9FF"
    strokeWidth="15"
    r="15"
    cx="160"
    cy="65"
  >
    <animate
      attributeName="cy"
      calcMode="spline"
      dur="2"
      values="65;135;65;"
      keySplines=".5 0 .5 1;.5 0 .5 1"
      repeatCount="indefinite"
      begin="0"
    ></animate>
  </circle>
</svg>
);