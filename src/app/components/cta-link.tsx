"use client";

type CtaLinkProps = {
  children: React.ReactNode;
  href?: string;
  location: string;
  className?: string;
};

export function CtaLink({
  children,
  href = "#prijava",
  location,
  className = "",
}: CtaLinkProps) {
  return (
    <a
      href={href}
      className={`btn btn-primary ${className}`}
      data-cta-location={location}
      onClick={(event) => {
        const target = event.currentTarget;

        console.log("cta_click_letnja_skola", {
          cta_location: location,
          cta_text: target.innerText,
          page_url: window.location.href,
        });
      }}
    >
      {children}
    </a>
  );
}
