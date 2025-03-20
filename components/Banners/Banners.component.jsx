import Banner from "./Banner.component";

export default function Banners() {
  return (
    <>
      <br />
      <br />
      <Banner
        title="Congratulations!"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        status="Success"
        icons="./components/Banners/icons/success.png"
      />
      <br />
      <br />
      <Banner
        title="Attention"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        status="Warning"
        icons="./components/Banners/icons/exclamation.png"
      />
      <br />
      <br />
      <Banner
        title="There is a problem with your application"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        status="Error"
        icons="./components/Banners/icons/x-circle.png"
      />
      <br />
      <br />
      <Banner
        title="Update available"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
        status="Neutral"
        icons="./components/Banners/icons/info.png"
      />
      <br />
      <br />
    </>
  );
}
