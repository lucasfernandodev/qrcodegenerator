import style from './style.module.css'
interface IconPropsInterface{
  fill?:  string,
  stroke?: string,
  width?: number,
  height?: number,
  strokeWidth?: number,
  hide?: boolean
  onClick?: (e?: any) => void
}

const IconPen: React.FC<IconPropsInterface> = ({
  strokeWidth = 1.5,
  height = 24,
  width = 24,
  stroke = "currentColor",
  fill = "none",
  hide = true,
  onClick,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth= {strokeWidth}
      stroke={stroke}
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"

      className={hide === true ? style.pen :  style.active}
      onClick={onClick}
  
      {...props}
    >
        {console.log(hide)}
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
      <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
    </svg>
  );
};

export default IconPen;
