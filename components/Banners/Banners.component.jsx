import Banner from "./Banner.component";
import successIcon from "./icons/success.png";
import exclamationIcon from "./icons/exclamation.png";
import xcircleIcon from "./icons/x-circle.png";
import infoIcon from "./icons/info.png";

export default function Banners() {
  return (
    <>
      <br />
      <br />
      <Banner
        title="Congratulations!"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        status="Success"
        icons={successIcon}
      />
      <br />
      <br />
      <Banner
        title="Attention"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        status="Warning"
        icons={exclamationIcon}
      />
      <br />
      <br />
      <Banner
        title="There is a problem with your application"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        status="Error"
        icons={xcircleIcon}
      />
      <br />
      <br />
      <Banner
        title="Update available"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        status="Neutral"
        icons={infoIcon}
      />
      <br />
      <br />
    </>
  );
}
