import styled from "styled-components";
import tokens from '../Sharable/tokens';

const ProfileButtonWithStyle = styled.button`
    margin: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    border: 2px solid ${props => props.borderColor};
    border-radius: 50%;
    outline: none;
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    color: ${props => props.fontColor};
    line-height: ${tokens.button.fontSize.profile};
    font-size: ${tokens.button.fontSize.profile};
    ${props => { props.onClick ? "&:hover {cursor: pointer;}" : "" }}
`;

export default ProfileButtonWithStyle;