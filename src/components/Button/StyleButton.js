import styled from "styled-components";

export const StyleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.$border || "none"};
  cursor: pointer;
  background: ${(props) => props.$backgroundColor || "#15634C"};
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "46px"};
  padding: ${(props) => props.$padding || "10px"};
  border-radius: ${(props) => props.$borderRadius || "10px"};
  z-index: ${(props) => props.$zIndex || "auto"};
  transition: background-color 0.3s ease, border-color 0.3s ease, transform 0.2s ease;

  &:hover {
    
    transform: scale(1.05);
  }

  a,
  div {
    font-size: ${(props) => props.$fontSize || "16px"};
    font-weight: ${(props) => props.$fontWeight || "600"};
    color: ${(props) => props.$textColor || "white"};
    text-decoration: ${(props) => props.$textDecoration || "none"};
    display: flex;
    align-items: center;
    border-bottom: ${(props) => props.$borderBottom || "none"};
    text-transform: ${(props) => props.$textTransform || "none"};
    transition: color 0.3s ease;
    
    .iconify {
      font-size: ${(props) => props.$iconFontSize || "16px"};
    }
  }

  &:hover a,
  &:hover div {
    color: ${(props) => props.$hoverTextColor || "white"};
  }
`;

export default StyleButton;
