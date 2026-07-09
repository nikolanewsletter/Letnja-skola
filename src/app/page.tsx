import Image from "next/image";
import {
  ArrowRight as ArrowRightIcon,
  Check as CheckIcon,
  Star,
  X as XIcon,
} from "lucide-react";

import { AudienceGrid } from "./components/audience-grid";
import { CtaLink } from "./components/cta-link";
import { SignupForm } from "./components/signup-form";

const audience = [
  "Edukatore",
  "Mentore",
  "Terapeute",
  "Coacheve",
  "Nutricioniste",
  "Fitness trenere",
  "Vlasnike uslužnih biznisa",
  "Vlasnike proizvodnih biznisa",
  "Copywritere",
  "Virtuelne asistente",
  "Psihologe i psihoterapeute",
  "Kreatore sadržaja",
];

const forYou = [
  "Pišeš naslove koji povećavaju šansu da tvoj mejl bude otvoren",
  "Postaviš strukturu newslettera koji drži pažnju do kraja",
  "Napišeš uvod koji uvlači čitaoca u tekst i vodi ka prodaji",
  "Koristiš psihologiju pisanja bez manipulacije i agresivne prodaje",
  "Napišeš poziv na akciju koji vodi ka jasnom sledećem koraku",
  "Postaviš prodajnu seriju od 5–7 mejlova",
  "Koristiš AI alate tako da dobiješ bolji draft bez generičkog tona",
  "Napišeš svoj konkretan newsletter i dobiješ povratnu informaciju na njega",
];

const notForYou = [
  "očekuješ tehničku obuku u softveru za slanje newslettera",
  "ne želiš da prisustvuješ online sastancima",
  "ne želiš da pišeš, vežbaš i radiš domaće zadatke",
  "očekuješ da će samo prisustvo časovima doneti rezultat bez tvoje primene",
  "ne želiš da prihvatiš povratnu informaciju na svoj tekst",
  "tražiš gotove šablone bez razumevanja psihologije pisanja",
];

const expectations = [
  "Rad u maloj grupi",
  "WhatsApp grupa podrške",
  "Svaki sastanak traje u proseku 60–90 minuta",
  "Očekuje te provereno znanje testirano u praksi",
  "Informacije iz iskustva koje se na internetu ne mogu naći",
  "Primena pisanja tvog newslettera na licu mesta",
  "Na kraju svakog časa te očekuje domaći zadatak za sledeći čas koji imaš vremena da mi pošalješ do sledećeg časa koji pregledam i dajem ti povratnu informaciju",
];

const format = [
  "Imamo 6 online sastanaka po 60–90 minuta uživo",
  "Letnja škola traje 6 nedelja, a snimke sastanaka dobijaš trajno",
  "Na 5. sastanku radimo praktično i konkretno pisanje tvog newslettera",
  "Tokom trajanja škole na WhatsApp grupi pružam podršku svim polaznicima",
  "Sastanke imamo uživo putem Zoom aplikacije koji se snimaju i ostaju ti zauvek",
  "Radiš domaći i šalješ mi na mejl",
];

const outcomes = [
  "Znanje i sigurnost da pišeš newsletter koji prodaje",
  "Jasnu osnovu pisanja naslova za svoje buduće mejlove",
  "10 formula poziva na akciju sa prodajnom funkcijom",
  "Jasnu strukturu prodajne serije od 5 - 7 mejlova",
  "Povratne informacije na domaće zadatke i tvoj dosadašnji rad",
  "Znanje kako da koristiš AI za pisanje newslettera",
  "Sigurnost da znaš kako da sedneš i napišeš mejl bez blokade",
];

const reviews = Array.from({ length: 10 }, (_, index) => ({
  src: `/${index + 1}.png`,
  alt: `Utisak polaznika ${index + 1} o radu sa Nikolom Mirosavićem`,
}));

const lessons = [
  {
    date: "03.08.2026",
    title: "Pisanje kopirajterskih naslova koji nose 90% uspešnosti newslettera",
    intro:
      "Edukujem te kako da pišeš naslove koji nose visok procenat otvaranja mejlova. Koliko god da daješ vrednost u okviru mejla, ako tvoj naslov nije dobar, uzalud je sav napisani trud. Zato ćemo ovaj prvi čas posvetiti onom najvažnijem, a to je kako da pišeš konkretan i jasan naslov koji otvara mejl.",
    topics: [
      "Šta su naslovi?",
      "Zašto su važni i čemu oni sve služe?",
      "Autentični naslovi koji otvaraju mejl",
      "Sofisticirani klikbejt",
      "Naslovi koje softveri stavljaju u spam",
      "Formati naslova",
      "Vrste naslova",
      "Tipovi naslova",
      "Neophodni elementi naslova za jasnoću obraćanja",
      "Newsjacking naslovi",
      "Tehnika osvešćivanja već postojećeg znanja",
      "Psihološki pristup pisanja naslova",
    ],
  },
  {
    date: "10.08.2026",
    title: "Mikro struktura mejla koji se čita i koji prodaje",
    intro:
      "Na drugom času ćeš saznati kako da pišeš mejl koji kroz različite uglove pristupa čitaocu i pretvara ga u kupca.",
    topics: [
      "Vrstama",
      "Tipovima",
      "Modelima pisanja mejla",
      "Strukturi",
      "Formatu",
      "Psihologiji koja presreće misli čitaoca i vodi ga ka kupovini",
    ],
  },
  {
    date: "17.08.2026",
    title: "10 formula poziva na akciju sa jasnom prodajnom funkcijom",
    intro: "Ovo je čas gde čitaoca vodimo u konkretan sledeći korak.",
    topics: [
      "Konkretnost poziva na akciju",
      "Jasnoću poziva na akciju",
      "Direktno obećanu dobit",
      "Motivaciju ka kliku",
      "Povezanost poziva sa telom mejla",
      "Strah od isteka koji zatvara prodaju",
      "Otvaranje komunikacije",
      "Poziv da urade sami i jave rezultat",
      "Moć follow-up mejla nakon klika",
      "Jasnoća tvoje ponude i na šta pozivaš",
    ],
  },
  {
    date: "24.08.2026",
    title: "Radimo na psihologiji postavke serije od 5–7 prodajnih mejlova",
    intro:
      "Ovde ću te naučiti kako da praviš serije niza od nekoliko mejlova koji vode ka prodaji i psihološku logiku toka. Pokazaću ti praktičnu primenu psihologije koja uključuje psihološke strukture koje koriste u praksi:",
    topics: [
      "IKEA",
      "Starbucks",
      "McDonald's",
      "Apple",
      "Sistemi koji provereno rade u praksi i vode čitaoca iz mejla u mejl, gde se čitalac prirodno približava odluci da kupi",
    ],
  },
  {
    date: "31.08.2026",
    title: "Pisanje newslettera na času, praktični sastanak",
    intro:
      "Ovo je čas na kom primenjujemo konkretno stečeno znanje na tvom newsletteru. Metodologija rada koju koristim u edukaciji zasniva se na praktičnoj primeni sada i na licu mesta. Zato na ovom sastanku radimo na korekciji tvog mejla koji ćeš do ovog sastanka napisati, a na samom sastanku ću ti dati jasnu i konkretnu povratnu informaciju i sugestije za unapređenje.",
    topics: [],
  },
  {
    date: "07.09.2026",
    title: "Korišćenje veštačke inteligencije za pisanje newslettera",
    intro:
      "Praktičan čas na kom ti pokazujem kako da uspešno koristiš ChatGPT, Gemini i Claude za pisanje newslettera bez generičkog tona. Saznaćeš kako da dobiješ bolji draft, jasniju strukturu i uverljiv ton u svom newsletteru bez generičkog teksta, a da zvuči najpribližnije tvom tonu komunikacije. Takođe ćemo raditi na pristupu komunikacije sa AI modelima u zavisnosti od potrebe biznisa.",
    topics: [],
  },
];

const lessonOrdinals = ["Prvi", "Drugi", "Treći", "Četvrti", "Peti", "Šesti"];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="check-mark" aria-hidden="true">
            <CheckIcon size={17} strokeWidth={3.2} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ArrowList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="arrow-mark" aria-hidden="true">
            <ArrowRightIcon size={16} strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main>
      <section id="hero" className="hero-section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/hero-video.MOV" />
        </video>
        <div className="container hero-layout">
          <div className="hero-copy">
            <h1>
              <span>LETNJA ŠKOLA</span>
              <span>PISANJA</span>
              <span>NEWSLETTERA</span>
            </h1>
            <p className="hero-subtitle">
              Ovladaj pisanjem prodajnog newslettera od naslova do poziva na
              akciju.
            </p>
            <p className="lead">
              <span>
                Letnja škola u kojoj ćeš steći znanje kako se piše newsletter
                koji ima jasnu strukturu,
              </span>
              <span>
                psihologiju, odnos sa čitaocem i prodajnu funkciju.
              </span>
            </p>
            <div className="hero-meta" aria-label="Termin i format programa">
              <strong>Od 3. avgusta do 7. septembra</strong>
              <strong>
                6 online časova uživo + praktičan rad na tvom newsletteru +
                domaći zadaci
              </strong>
            </div>
            <CtaLink location="hero">
              Prijavljujem se za Letnju školu pisanja newslettera
            </CtaLink>
          </div>
        </div>
      </section>

      <section id="uvod" className="section intro-section">
        <div className="container">
          <div className="prose-block opening-copy">
            <p className="opening-empathy">
              Razumem da te frustrira jer tvoje dosadašnje uloženo vreme u
              newsletter, trud i pokušaji pisanja newslettera ne donose željene
              rezultate. Možda tek želiš da pokreneš newsletter, ali ne želiš da
              kreneš nasumično, bez jasne strukture i sigurnosti šta zapravo
              treba da pišeš.
            </p>
            <p className="highlight opening-focus">
              Zato je važno da znaš kako se gradi naslov koji uzima pažnju, uvod
              koji uvlači čitaoca, struktura koja ga vodi kroz tekst, odnos koji
              stvara poverenje i poziv na akciju koji ima jasnu prodajnu
              funkciju.
            </p>
            <p className="opening-promise">
              <strong>
                Ovo je jedina letnja škola koja će te osposobiti da već na jesen
                pišeš prodajne newslettere koji se čitaju i koji prodaju.
              </strong>{" "}
              U ovoj letnjoj školi pisanja newslettera prolazimo kroz ceo
              proces pisanja prodajnog newslettera, od naslova, preko mikro
              strukture mejla, do poziva na akciju. Radićemo na dubokoj
              strateškoj psihologiji pisanja mejlova, građenju odnosa i poziva
              na akciju koji prodaju.
            </p>
          </div>
          <div className="centered-cta">
            <CtaLink location="uvod">
              Želim da ovladam pisanjem newslettera
            </CtaLink>
          </div>
        </div>
      </section>

      <section id="za-tebe" className="section section-soft fit-section">
        <div className="container fit-wrap">
          <h2 className="fit-heading">Da li je ova škola za tebe?</h2>
          <div className="fit-grid">
            <article className="card card-positive fit-card">
              <h3>
                Letnja škola pisanja newslettera je za tebe ako želiš da ovladaš
                kako da:
              </h3>
              <CheckList items={forYou} />
            </article>
            <article className="card card-negative fit-card">
              <h3>Letnja škola pisanja newslettera nije za tebe ako:</h3>
              <ul className="space-y-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="x-mark" aria-hidden="true">
                      <XIcon size={15} strokeWidth={3.2} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="audience-block">
            <div className="audience-heading">
              <p className="audience-kicker" aria-hidden="true">
                OVA ŠKOLA JE ZA
              </p>
            </div>
            <AudienceGrid items={audience} />
          </div>
        </div>
      </section>

      <section
        id="ocekivanja"
        className="section support-section"
        aria-label="Šta te očekuje"
      >
        <div className="container support-wrap">
          <p className="support-kicker" aria-hidden="true">
            ŠTA TE OČEKUJE?
          </p>
          <div className="two-column">
            <article className="card">
              <h3>Šta te očekuje u letnjoj školi pisanja newslettera?</h3>
              <ArrowList items={expectations} />
            </article>
            <article className="card">
              <h3>Kako funkcioniše letnja škola pisanja newslettera?</h3>
              <ArrowList items={format} />
            </article>
          </div>
        </div>
      </section>

      <section id="o-predavacu" className="section instructor-section">
        <div className="container instructor-wrap">
          <p className="instructor-kicker" aria-hidden="true">
            O PREDAVAČU
          </p>
          <div className="instructor-grid">
            <div className="instructor-image-wrap">
              <Image
                src="/nikola-slika.png"
                alt="Nikola Mirosavić u radnom prostoru za snimanje newsletter edukacije"
                width={880}
                height={950}
                sizes="(max-width: 900px) 100vw, 48vw"
                className="instructor-image"
              />
            </div>

            <div className="instructor-copy">
              <h3>Nikola Mirosavić</h3>
              <div className="instructor-prose">
                <p>
                  Newsletter mastermind, edukator i mentor. Poslednjih 9 godina
                  bavim se newsletterom i mail marketingom, do sada sam u samo
                  poslednjih 3 godine sa preko 130 biznisa postavio uspešne
                  newsletter strategije o čemu svedoče i rezultati klijenata na
                  kraju ove stranice.
                </p>
                <p>
                  Nakon više od 467 nedelja slanja newslettera i konzistentnosti
                  bez ijedne jedine srede izuzetka odlučio sam da svojim
                  znanjem, veštinama proverenim i testiranim u praksi pomognem
                  malim biznisima da izgrade zajednicu, poverenje, odnos sa
                  svojim klijentima i unaprede prodaju putem mejla.
                </p>
                <ul>
                  <li>Iskustvo od preko 9 godina u digitalnom marketingu</li>
                  <li>Kreiranje kampanja za različite vrste mreža</li>
                </ul>
                <p>
                  Sve ovo doprinosi tome da kreativno implementiram različite
                  inovativne strategije u newsletter koje su dostupne samo
                  ljudima sa kojima sarađujem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="casovi" className="section program-section">
        <div className="container program-wrap">
          <h2 className="sr-only">Program letnje škole po časovima</h2>
          <p className="program-kicker" aria-hidden="true">
            Program
          </p>
          <h2 className="program-title">Šta konkretno radimo na časovima?</h2>
          <div className="lesson-list program-list">
            {lessons.map((lesson, index) => (
              <details key={lesson.date} className="lesson-card">
                <summary>
                  <span className="lesson-play" aria-hidden="true" />
                  <span className="lesson-title">
                    <span className="lesson-ordinal">
                      <span>{lessonOrdinals[index]} čas</span>:
                    </span>{" "}
                    {lesson.title}
                  </span>
                  <span className="lesson-date sr-only">
                    Čas {index + 1}, {lesson.date}
                  </span>
                </summary>
                <div className="lesson-content">
                  <p>{lesson.intro}</p>
                  {lesson.topics.length > 0 ? (
                    <ul>
                      {lesson.topics.map((topic) => (
                        <li key={topic}>
                          <span className="lesson-topic-icon" aria-hidden="true">
                            👉
                          </span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
          <div className="centered-cta">
            <CtaLink location="casovi">
              Zauzimam svoje mesto u Letnjoj školi
            </CtaLink>
          </div>
        </div>
      </section>

      <section id="ne-radimo" className="section expectations-section">
        <div className="container expectations-wrap">
          <h2 className="expectations-kicker">OČEKIVANJA</h2>
          <div className="expectations-card">
            <h3 className="expectations-question">
              Šta NE RADIMO na ovoj letnjoj školi pisanja newslettera?
            </h3>
            <p className="expectations-copy">
              Ne radimo ni u jednom softveru za slanje newslettera niti se
              bavimo tehničkim stvarima u softveru već se{" "}
              <span className="expectations-underline">
                isključivo pisanjem i psihologijom pisanja mejlova.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section id="ishodi" className="section outcome-section">
        <div className="container outcome-wrap">
          <div className="outcome-heading">
            <h2>Nakon letnje škole imaćeš:</h2>
          </div>
          <article className="card outcome-card">
            <CheckList items={outcomes} />
          </article>
          <div className="outcome-cta">
            <CtaLink location="ishodi">Prijavljujem se za Letnju školu</CtaLink>
          </div>
        </div>
      </section>

      <section id="reviews" className="section reviews-section">
        <div className="container reviews-heading">
          <div className="reviews-title">
            <h2 aria-label="Utisci">UTISCI</h2>
          </div>
          <Star className="reviews-star" size={58} strokeWidth={1.8} />
          <p className="reviews-copy">
            Iskustva ljudi koji su već radili sa mnom i primenili newsletter
            strategije u svom pisanju.
          </p>
        </div>

        <div className="reviews-marquee" aria-label="Utisci polaznika">
          <div className="reviews-track">
            {[...reviews, ...reviews].map((review, index) => (
              <figure
                key={`${review.src}-${index}`}
                className="review-card"
                aria-hidden={index >= reviews.length}
              >
                <Image
                  src={review.src}
                  alt={index < reviews.length ? review.alt : ""}
                  width={1080}
                  height={1080}
                  sizes="(max-width: 640px) 72vw, (max-width: 900px) 42vw, 320px"
                  className="review-image"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="cena" className="section price-section">
        <div className="container price-layout">
          <div className="price-heading">
            <h2 aria-label="Prijavi se">PRIJAVI SE</h2>
            <p className="section-lead">
              Sada te pozivam da se prijaviš za Letnju školu pisanja
              newslettera.
            </p>
          </div>

          <article className="price-card">
            <div className="price-card-top">
              <p className="price-plan">Letnja škola</p>
              <span className="badge">Broj mesta je ograničen</span>
            </div>
            <p className="price-label">Cena</p>
            <div className="price">600€</div>
            <div className="payment-box">
              <strong>Plaćanje u 2 rate:</strong>
              <span>Prva rata 300€ do 03.08.2026.</span>
              <span>Druga rata 300€ do 03.09.2026.</span>
            </div>
            <div className="full-payment">
              <span>
                Za uplatu u celosti pre početka programa cena iznosi:
              </span>
              <strong>540€</strong>
            </div>
            <CtaLink location="cena" className="w-full">
              PRIJAVI SE
            </CtaLink>
          </article>
        </div>
      </section>

      <section id="prijava" className="section signup-section">
        <div className="container signup-grid">
          <div className="signup-copy">
            <p className="signup-kicker" aria-hidden="true">
              <span>Prijavna</span>
              <span>forma</span>
            </p>
            <p className="section-lead">
              Zamolio bih te da popuniš polja pored kako bih imao više
              informacija o tebi i mogao što lakše i što bolje da ti pomognem u
              budućem radu i ovladavanju novim veštinama.
            </p>
          </div>
          <SignupForm />
        </div>
      </section>

      <div className="mobile-sticky-cta">
        <CtaLink location="mobile_sticky">Prijavljujem se</CtaLink>
      </div>
    </main>
  );
}
