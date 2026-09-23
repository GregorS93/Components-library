import { BsCloudUpload } from "react-icons/bs";

const Icon = ({ icon, backgroundColor }) => {
  const iconStyle = {
    backgroundColor,
    height: "3rem",
    width: "3rem",
    borderRadius: "0.5rem",
    display: "flex",
    justifyContent: "center",
    marginTop: "-1.5625rem",
    cursor: "pointer",
  };

  return <div style={iconStyle}>{icon}</div>;
};

Icon.defaultProps = {
  icon: <BsCloudUpload className="first-icon" />,
};

export default Icon;
