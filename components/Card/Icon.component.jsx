import { BsCloudUpload } from "react-icons/bs";

const Icon = ({ icon, backgroundColor }) => {
  const iconStyle = {
    backgroundColor,
    height: "48px",
    width: "48px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    marginTop: "-25px",
    cursor: "pointer",
  };

  return <div style={iconStyle}>{icon}</div>;
};

Icon.defaultProps = {
  icon: <BsCloudUpload className="first-icon" />,
};

export default Icon;
