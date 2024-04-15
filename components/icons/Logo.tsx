

interface IconProps {
  size?: number;
  color?: string;
}

const Logo: React.FC<IconProps> = ({ size = 24, color = "currentColor" }) => (
	<svg
		height={size}
		width={size}
		version="1.1"
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		
		viewBox="0 0 512 512"
		xmlSpace="preserve"
	>
		<path
			fill="#D80027"
			d="M450.207,317.793C450.207,425.05,363.256,512,256,512c-107.257,0-194.207-86.95-194.207-194.207
	C61.793,176.552,256,0,256,0S450.207,176.552,450.207,317.793z"
		/>
		<path
			fill="#A2001D"
			d="M450.207,317.793C450.207,425.05,363.256,512,256,512c0-211.862,0-512,0-512
	S450.207,176.552,450.207,317.793z"
		/>
		<polygon
			fill="#FFFFFF"
			points="336.92,285.425 288.368,285.425 288.368,236.873 223.632,236.873 223.632,285.425 
	175.08,285.425 175.08,350.161 223.632,350.161 223.632,398.712 288.368,398.712 288.368,350.161 336.92,350.161 "
		/>
	</svg>
);

export default Logo;
