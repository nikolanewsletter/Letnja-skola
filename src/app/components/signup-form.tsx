"use client";

import { useState } from "react";

export function SignupForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      className="signup-form"
      onSubmit={async (event) => {
        event.preventDefault();

        const endpoint = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEB_APP_URL;
        const form = event.currentTarget;
        const formData = new FormData(form);

        if (!endpoint) {
          setErrorMessage("Forma trenutno nije povezana. Nedostaje Google Sheets URL.");
          return;
        }

        setErrorMessage("");
        setIsSubmitting(true);

        try {
          await fetch(endpoint, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "text/plain",
            },
            body: JSON.stringify({
              firstName: formData.get("firstName"),
              lastName: formData.get("lastName"),
              instagram: formData.get("instagram"),
              website: formData.get("website"),
              phone: formData.get("phone"),
              hasNewsletter: formData.get("hasNewsletter"),
              paymentPlan: formData.get("paymentPlan"),
              pib: formData.get("pib"),
            }),
          });

          form.reset();
          setIsSubmitted(true);
        } catch {
          setErrorMessage(
            "Prijava nije poslata. Pokušaj ponovo ili mi se javi direktno.",
          );
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <div className="form-row">
        <label>
          Ime
          <input name="firstName" type="text" autoComplete="given-name" required />
        </label>
        <label>
          Prezime
          <input name="lastName" type="text" autoComplete="family-name" required />
        </label>
      </div>

      <label>
        Instagram profil
        <input name="instagram" type="text" placeholder="@tvojprofil" required />
      </label>

      <label>
        Tvoj sajt <span>(ako imaš)</span>
        <input name="website" type="url" placeholder="https://..." />
      </label>

      <label>
        Broj telefona
        <input name="phone" type="tel" autoComplete="tel" required />
      </label>

      <fieldset className="choice-group">
        <legend>Da li imaš newsletter?</legend>
        <div className="choice-row">
          <label className="choice-option">
            <input name="hasNewsletter" type="radio" value="da" required />
            <span>Da</span>
          </label>
          <label className="choice-option">
            <input name="hasNewsletter" type="radio" value="ne" />
            <span>Ne</span>
          </label>
        </div>
      </fieldset>

      <fieldset className="choice-group">
        <legend>Da li želiš da platiš u celosti ili u dve rate?</legend>
        <div className="choice-row">
          <label className="choice-option">
            <input name="paymentPlan" type="radio" value="u dve rate" required />
            <span>U dve rate</span>
          </label>
          <label className="choice-option">
            <input name="paymentPlan" type="radio" value="u celosti" />
            <span>U celosti</span>
          </label>
        </div>
      </fieldset>

      <label>
        <span>
          *Ako plaćaš kao pravno lice napiši mi PIB kako bih ti izdao predračun
        </span>
        <input name="pib" type="text" inputMode="numeric" placeholder="PIB" />
      </label>

      <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
        {isSubmitting ? "Slanje..." : "Dovrši prijavu"}
      </button>

      {errorMessage ? (
        <p className="error-message" role="alert">
          {errorMessage}
        </p>
      ) : null}

      {isSubmitted ? (
        <p className="success-message" role="status">
          Hvala ti na prijavi, uskoro ću te kontaktirati! Radujem se druženju!
        </p>
      ) : null}
    </form>
  );
}
