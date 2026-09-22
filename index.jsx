import ReactDOM from "react-dom/client";
import Badge from "./components/Badge/Badge.component";
import Banners from "./components/Banners/Banners.component";
import Card from "./components/Card/Card.component";
import TestimonialLogo from "./components/Testimonials/TestimonialLogo.component";
import TestimonialPicture from "./components/Testimonials/TestimonialPicture.component";
import Tooltip from "./components/Tooltip/Tooltip.component";
import Toasts from "./components/Toasts/Toasts.component";
import Buttons from "./components/Button/Buttons.component";
import Toggles from "./components/Toggle/Toggles.component";
import Choices from "./components/Choice/Choices.component";

function SectionHeading({ index, title }) {
  return (
    <h2 className="section-heading">
      <span className="section-index">{index}</span>
      <span className="section-title">{title}</span>
    </h2>
  );
}

function App() {
  return (
    <>
      <header className="page-header">
        <p className="page-eyebrow">Component library</p>
        <h1>
          Favorite components,
          <br />
          <em>gathered in</em> one place
        </h1>
        <p className="page-subtitle">
          A small library of React building blocks I actually use.
        </p>
      </header>

      <section className="component-section">
        <div className="section-inner">
          <SectionHeading index="01" title="Badges" />
          <div className="badges">
            <Badge />
            <br />
            <Badge roundEdge />
          </div>
        </div>
      </section>

      <section className="component-section">
        <div className="section-inner">
          <SectionHeading index="02" title="Banners" />
          <Banners />
        </div>
      </section>

      <section className="component-section">
        <div className="section-inner">
          <SectionHeading index="03" title="Cards" />
          <div className="card-background">
            <Card />
          </div>
        </div>
      </section>

      <section className="component-section">
        <div className="section-inner">
          <SectionHeading index="04" title="Testimonials" />
        </div>
        <div className="section-inner section-inner-wide">
          <TestimonialLogo />
          <br />
          <br />
          <TestimonialPicture />
        </div>
      </section>

      <section className="component-section">
        <div className="section-inner">
          <SectionHeading index="05" title="Tooltips" />
          <Tooltip style="light" />
          <br />
          <br />
          <Tooltip style="dark" />
        </div>
      </section>

      <section className="component-section">
        <div className="section-inner">
          <SectionHeading index="06" title="Toasts" />
          <Toasts />
        </div>
      </section>

      <section className="component-section">
        <div className="section-inner">
          <SectionHeading index="07" title="Buttons" />
          <Buttons />
        </div>
      </section>

      <section className="component-section">
        <div className="section-inner">
          <SectionHeading index="08" title="Toggles" />
          <Toggles />
        </div>
      </section>

      <section className="component-section">
        <div className="section-inner">
          <SectionHeading index="09" title="Choices" />
          <Choices />
        </div>
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
