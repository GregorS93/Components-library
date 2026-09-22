import TextInput from "./TextInput.component";
import Textarea from "./Textarea.component";

export default function Inputs() {
  return (
    <div className="inputs-overlay">
      <div className="input-block">
        <div className="input-block-copy">
          <span className="input-block-label">Text input</span>
          <span className="input-block-hint">Label, helper text, and error</span>
        </div>
        <div className="input-stack">
          <TextInput
            label="Name"
            name="library-name"
            placeholder="Ada Lovelace"
            autoComplete="off"
          />
          <TextInput
            label="Email"
            type="email"
            name="library-email"
            placeholder="ada@example.com"
            helper="We'll send a confirmation"
            autoComplete="off"
          />
          <TextInput
            label="Website"
            type="url"
            name="library-website"
            defaultValue="notaurl"
            error="Enter a valid URL"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="input-block">
        <div className="input-block-copy">
          <span className="input-block-label">Textarea</span>
          <span className="input-block-hint">Same states, more room to type</span>
        </div>
        <div className="input-stack">
          <Textarea
            label="Message"
            name="library-message"
            placeholder="What should we know?"
            helper="Keep it under 240 characters"
          />
          <Textarea
            label="Bio"
            name="library-bio"
            defaultValue="Too short"
            error="Add at least 20 characters"
          />
        </div>
      </div>
    </div>
  );
}
