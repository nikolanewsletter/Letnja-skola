import { CtaLink } from "./components/cta-link";

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
  "Ljubitelje prodajnog pisanja",
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
  "Minimum jedan napisan i ispravljen newsletter",
  "Banku naslova za svoje buduće mejlove",
  "10 formula poziva na akciju sa prodajnom funkcijom",
  "Jasnu strukturu prodajne serije od 5–7 mejlova",
  "Povratnu informaciju na domaće zadatke",
  "AI pristup koji ne zvuči generički",
  "Sigurnost da znaš kako da sedneš i napišeš mejl bez blokade",
];

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

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="check-mark" aria-hidden="true">
            ✓
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
            →
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
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Letnja škola pisanja newslettera</p>
            <h1>
              Ovladaj pisanjem prodajnog newslettera od naslova do poziva na
              akciju
            </h1>
            <p className="lead">
              Letnja škola u kojoj ćeš steći znanje kako se piše newsletter koji
              ima jasnu strukturu, psihologiju, odnos sa čitaocem i prodajnu
              funkciju.
            </p>
            <div className="hero-meta">
              <span>Od 3. avgusta do 7. septembra</span>
              <span>
                6 online časova uživo + praktičan rad na tvom newsletteru +
                domaći zadaci
              </span>
            </div>
            <CtaLink location="hero">
              Prijavljujem se za Letnju školu pisanja newslettera
            </CtaLink>
          </div>

          <aside className="hero-card" aria-label="Ključne informacije">
            <div>
              <span className="small-label">Format programa</span>
              <p>6 nedelja rada na tvom pisanju</p>
            </div>
            <ul>
              <li>6 online časova uživo</li>
              <li>Praktičan rad na tvom newsletteru</li>
              <li>Domaći zadaci</li>
              <li>Snimci ostaju trajno</li>
              <li>Mala grupa</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="uvod" className="section">
        <div className="container narrow">
          <p className="eyebrow">Zašto program postoji</p>
          <h2>
            Ako tvoj newsletter ne donosi rezultat, problem najčešće nije u
            trudu nego u strukturi.
          </h2>
          <div className="prose-block">
            <p>
              Razumem da te frustrira jer tvoje dosadašnje uloženo vreme u
              newsletter, trud i pokušaji pisanja newslettera ne donose željene
              rezultate. Možda tek želiš da pokreneš newsletter, ali ne želiš da
              kreneš nasumično, bez jasne strukture i sigurnosti šta zapravo
              treba da pišeš.
            </p>
            <p className="highlight">
              Zato je važno da znaš kako se gradi naslov koji uzima pažnju, uvod
              koji uvlači čitaoca, struktura koja ga vodi kroz tekst, odnos koji
              stvara poverenje i poziv na akciju koji ima jasnu prodajnu
              funkciju.
            </p>
            <p>
              Ovo je jedina letnja škola koja će te osposobiti da već na jesen
              pišeš prodajne newslettere koji se čitaju i koji prodaju. U ovoj
              letnjoj školi pisanja newslettera prolazimo kroz ceo proces
              pisanja prodajnog newslettera, od naslova, preko mikro strukture
              mejla, do poziva na akciju.
            </p>
          </div>
          <CtaLink location="uvod">Želim da ovladam pisanjem newslettera</CtaLink>
        </div>
      </section>

      <section id="za-tebe" className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Da li je ovo za tebe?</p>
            <h2>Prepoznaj gde si sada i šta zaista želiš da unaprediš.</h2>
          </div>
          <div className="fit-grid">
            <article className="card">
              <h3>
                Letnja škola pisanja newslettera je za tebe ako želiš da ovladaš
                kako da:
              </h3>
              <CheckList items={forYou} />
            </article>
            <article className="card card-muted">
              <h3>Letnja škola pisanja newslettera nije za tebe ako:</h3>
              <ul className="space-y-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="x-mark" aria-hidden="true">
                      ×
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="audience-block">
            <h3>Ova letnja škola je za:</h3>
            <div className="tag-grid">
              {audience.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ocekivanja" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Format i podrška</p>
            <h2>Šta te očekuje i kako funkcioniše letnja škola.</h2>
          </div>
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

      <section id="ishodi" className="section outcome-section">
        <div className="container outcome-grid">
          <div>
            <p className="eyebrow">Ishodi programa</p>
            <h2>Nakon letnje škole imaćeš:</h2>
            <p className="section-lead">
              Ne završavaš samo sa beleškama sa časova. Završavaš sa konkretnim
              materijalom, povratnom informacijom i sigurnijim sistemom pisanja.
            </p>
            <CtaLink location="ishodi">Prijavljujem se za Letnju školu</CtaLink>
          </div>
          <article className="card outcome-card">
            <CheckList items={outcomes} />
          </article>
        </div>
      </section>

      <section id="casovi" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Program po časovima</p>
            <h2>Šta konkretno radiš tokom 6 nedelja.</h2>
          </div>
          <div className="lesson-list">
            {lessons.map((lesson, index) => (
              <details key={lesson.date} className="lesson-card" open={index === 0}>
                <summary>
                  <span className="lesson-number">Čas {index + 1}</span>
                  <span className="lesson-title">{lesson.title}</span>
                  <span className="lesson-date">{lesson.date}</span>
                </summary>
                <div className="lesson-content">
                  <p>{lesson.intro}</p>
                  {lesson.topics.length > 0 ? (
                    <ul>
                      {lesson.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
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

      <section id="ne-radimo" className="section section-soft">
        <div className="container narrow">
          <article className="notice-card">
            <span className="notice-icon" aria-hidden="true">
              !
            </span>
            <div>
              <p className="eyebrow">Važno očekivanje</p>
              <h2>Šta NE RADIMO na ovoj letnjoj školi pisanja newslettera?</h2>
              <p>
                Ne radimo ni u jednom softveru za slanje newslettera niti se
                bavimo tehničkim stvarima u softveru već isključivo pisanjem i
                psihologijom pisanja mejlova.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="cena" className="section price-section">
        <div className="container price-grid">
          <div>
            <p className="eyebrow">Cena i prijava</p>
            <h2>Šta je potrebno sada da uradiš?</h2>
            <p className="section-lead">
              Sada te pozivam da se prijaviš za Letnju školu pisanja
              newslettera. Broj mesta je ograničen zbog rada u maloj grupi i
              povratnih informacija na domaće zadatke.
            </p>
          </div>

          <article className="price-card">
            <span className="badge">Broj mesta je ograničen</span>
            <p className="small-label">Cena programa</p>
            <div className="price">600€</div>
            <div className="payment-box">
              <strong>Plaćanje u 2 rate:</strong>
              <span>300€ do 03.08.2026.</span>
              <span>300€ do 03.09.2026.</span>
            </div>
            <div className="full-payment">
              <span>Uplata u celosti pre početka programa:</span>
              <strong>540€</strong>
            </div>
            <CtaLink location="cena" className="w-full">
              Prijavljujem se za Letnju školu pisanja newslettera
            </CtaLink>
          </article>
        </div>
      </section>

      <section id="prijava" className="section signup-section">
        <div className="container signup-grid">
          <div>
            <p className="eyebrow">Prijavna forma</p>
            <h2>Ostavi podatke za prijavu.</h2>
            <p className="section-lead">
              Forma je pripremljena za povezivanje sa MailerLite, CRM ili drugim
              alatom za prijave.
            </p>
          </div>
          <form className="signup-form">
            {/* TODO: Ubaciti MailerLite form embed kod ili povezati formu sa backendom. */}
            <label>
              Ime
              <input name="name" type="text" placeholder="Tvoje ime" required />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="tvoj@email.com"
                required
              />
            </label>
            <label>
              Telefon <span>opciono</span>
              <input name="phone" type="tel" placeholder="+381..." />
            </label>
            <label>
              Da li već imaš newsletter?
              <textarea name="hasNewsletter" rows={3} required />
            </label>
            <label>
              Šta želiš da postigneš kroz Letnju školu?
              <textarea name="goal" rows={4} required />
            </label>
            <button type="button" className="btn btn-primary w-full">
              Pošalji prijavu
            </button>
          </form>
        </div>
      </section>

      <div className="mobile-sticky-cta">
        <CtaLink location="mobile_sticky">Prijavljujem se</CtaLink>
      </div>
    </main>
  );
}
