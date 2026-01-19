interface Props {
  fill?: string;
  height?: string;
  width?: string;
}

const CheckboxIcon: React.FC<Props> = ({
  fill = "#000000",
  height = "24",
  width = "24",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="14" fill={fill} />
      <path
        d="M19.8333 9.33334L11.5 18.6667L8.16663 14.9333"
        stroke="white"
        stroke-width="1.52"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CheckboxIcon;
