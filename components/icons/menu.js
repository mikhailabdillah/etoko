const MenuIcon = (props) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 4h20M0 10h20M0 16h20" />
      </g>
    </svg>
  );
};

export default MenuIcon;
