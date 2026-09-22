import { useState } from "react";
import TextInput from "./TextInput.component";
import Textarea from "./Textarea.component";

function isValidUrl(value) {
  const trimmed = value.trim();
  if (!trimmed) return false;

  try {
    const withProtocol = /^https?:\/\//i.test(trimmed)
      ? trimmed
      : `https://${trimmed}`;
    const url = new URL(withProtocol);
    if (url.username || url.password) return false;
    return /^([a-z0-9-]+\.)+[a-z]{2,}$/i.test(url.hostname);
  } catch {
    return false;
  }
}

function WebsiteInput() {
  const [value, setValue] = useState("notaurl");

  return (
    <TextInput
      label="Website"
      type="url"
      name="library-website"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      error={isValidUrl(value) ? undefined : "Enter a valid URL"}
      autoComplete="off"
    />
  );
}

function BioTextarea() {
  const [value, setValue] = useState("Too short");

  return (
    <Textarea
      label="Bio"
      name="library-bio"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      error={value.trim().length > 20 ? undefined : "Add at least 20 characters"}
    />
  );
}

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
          <WebsiteInput />
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
          <BioTextarea />
        </div>
      </div>
    </div>
  );
}
