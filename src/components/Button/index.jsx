import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import StyleButton from "./StyleButton.js";

const Button = ({
	text,
	onClick,  
	textTransform,
	buttonProps,
	rounded,
	padding,   
	borderRadius,
	fontSize,
	backgroundColor,
	color,
	width,
	height,
	fontWeight,
	link,
	textColor,
	border,
	icon,
	textDecoration,
	borderBottom,
	iconPosition = "left",
	iconFontSize,
	hoverBackgroundColor,
	hoverBorder,
	hoverTextColor,
	hoverWidth,
	hover = true,
	zIndex,
	hoverBorderSize,
	className,
}) => {
	return (
		<StyleButton
			{...buttonProps}
			onClick={onClick}
			$rounded={rounded}
			$padding={padding}
			$fontSize={fontSize}
			$borderRadius={borderRadius}
			$backgroundColor={backgroundColor}
			$textDecoration={textDecoration}
			$borderBottom={borderBottom}
			$color={color}
			$width={width}
			$height={height}
			$fontWeight={fontWeight}
			$textColor={textColor}
			$border={border}
			$zIndex={zIndex}
			$hover={hover}
			$hoverBorderSize={hoverBorderSize}
			$hoverBorder={hoverBorder}
			$hoverWidth={hoverWidth}
			$hoverTextColor={hoverTextColor}
			$hoverBackgroundColor={hoverBackgroundColor}
			$textTransform={textTransform}
			$className={className}
			$iconFontSize={iconFontSize}>
			{link && (
				<Link to={link} className="d-flex align-items-center">
					{icon && iconPosition === "left" && <Icon icon={icon} className="me-2 fs-16" />}

					{text}
					{icon && iconPosition === "right" && <Icon icon={icon} className="ms-2 fs-16" />}
				</Link>
			)}
			{!link && (
				<div className="d-flex align-items-center">
					{icon && iconPosition === "left" && <Icon icon={icon} className="me-2 fs-16" />}
					{text}
					{icon && iconPosition === "right" && <Icon icon={icon} className="ms-2 fs-16" />}
				</div>
			)}
		</StyleButton>
	);
};

export default Button;
