import React from "react";
import PropTypes from "prop-types";
import ProfileButtonWithStyle from "./ProfileButton.styles";

const ProfilePropTypes = {
  children: PropTypes.node,
  imgUrl: PropTypes.string,
  borderColor: PropTypes.string,
  clickable: PropTypes.bool,
  fontColor: PropTypes.string
};

const ProfileDefaultProps = {
  children: null,
  borderColor: "white",
  clickable: true,
  fontColor: "black"
};

function ProfileButton({props, ref}) {
  return React.forwardRef((props, ref) => {
    return (
      <ProfileButtonWithStyle {...props} ref={ref}>
        {props.children}
      </ProfileButtonWithStyle>
    );
  });
}

ProfileButton.propTypes = ProfilePropTypes;
ProfileButton.defaultProps = ProfileDefaultProps;

export default ProfileButton;
