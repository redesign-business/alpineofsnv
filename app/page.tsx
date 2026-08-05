const services = [
  {
    title: "Dental implants",
    copy: "A lasting foundation for a confident, functional smile.",
    image: "/images/03958b_ed9dad7375824d8aa645a2630ce1c2bb-mv2-c792ba7cc9.jpg",
  },
  {
    title: "Wisdom teeth",
    copy: "Thoughtful removal with comfort and recovery in mind.",
    image: "/images/03958b_23984e1af88149a5a7d675ea9abfe12c-mv2-65a647f26a.jpg",
  },
  {
    title: "Jaw surgery",
    copy: "Advanced alignment and reconstruction for better function.",
    image: "/images/03958b_9af81c87201944e0b4726275be300d99-mv2-7e69ad3fb9.jpg",
  },
  {
    title: "Bone grafting",
    copy: "Precision treatment that prepares and preserves your smile.",
    image: "/images/03958b_a9d74ce41a4e4d23a713142fe86aca3e-mv2-34da55d9ed.jpg",
  },
];

const ctaHref = "https://www.alpineofsnv.com/book-online";

export default function Home() {
  return (
    <main>
      <div className="topline">
        <span>Board-certified oral &amp; maxillofacial surgery</span>
        <a href="tel:+17757374004">(775) 737-4004</a>
      </div>

      <nav aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Alpine Oral Facial Surgery home">
          <img
            src="/images/03958b_35ccadc3ac5c4dca8948749cd2c59ba0-mv2-510296f3e5.jpg"
            alt="Alpine Oral Facial Surgery"
          />
        </a>
        <div className="navlinks">
          <a href="#services">Services</a>
          <a href="#doctor">Our surgeon</a>
          <a href="#safety">Safety</a>
          <a href="#answers">Patient info</a>
        </div>
        <a className="button button-small" href={ctaHref}>Book a consultation</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Reno, Nevada · Specialized surgical care</p>
          <h1>Expert hands.<br /><em>Human care.</em></h1>
          <p className="hero-intro">
            Advanced oral and facial surgery in a setting designed around your
            comfort, safety, and return to everyday life.
          </p>
          <div className="hero-actions">
            <a className="button" href={ctaHref}>Book a consultation</a>
            <span>Online scheduling available</span>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="sun" />
          <img
            src="/images/03958b_ba296e7efbd5442e919c650b1853d463-mv2-1b5f4dcaf4.jpg"
            alt="Dr. Brandyn Herman, board-certified oral and maxillofacial surgeon"
          />
          <div className="portrait-note">
            <strong>Dr. Brandyn Herman, DMD</strong>
            <span>Reno native · Board certified</span>
          </div>
        </div>
      </section>

      <div className="trustbar" aria-label="Practice highlights">
        <span>Board certified</span>
        <i />
        <span>Advanced anesthesia</span>
        <i />
        <span>Modern technology</span>
        <i />
        <span>Northern Nevada rooted</span>
      </div>

      <section className="proof" id="doctor">
        <div className="section-heading">
          <p className="eyebrow">The Alpine standard</p>
          <h2>Credentials you can trust.<br />Care you can feel.</h2>
        </div>
        <div className="proof-grid">
          <article className="proof-card proof-cream">
            <span className="number">01</span>
            <div>
              <p className="proof-label">Surgical expertise</p>
              <h3>Board certified, with distinction.</h3>
              <p>
                Dr. Herman graduated magna cum laude from UNLV School of Dental
                Medicine before completing surgical residency at University of
                Cincinnati Medical Center.
              </p>
            </div>
            <img
              src="/images/03958b_1c52aa579ba5497ca30837d34bf2e7d1-mv2-b038117c00.jpg"
              alt="Dr. Herman's dental graduation credential"
            />
          </article>
          <article className="proof-card proof-blue" id="safety">
            <span className="number">02</span>
            <div>
              <p className="proof-label">A prepared team</p>
              <h3>Safety is everyone&apos;s specialty.</h3>
              <p>
                Every staff member is DAANCE-certified or eligible and Advanced
                Cardiovascular Life Support certified, supporting safe anesthesia
                and sedation at every level.
              </p>
            </div>
            <img
              src="/images/03958b_51ecefa307b0454588012205a3573194-mv2-c874555db0.jpg"
              alt="General anesthesia and sedation care"
            />
          </article>
          <article className="proof-card proof-green">
            <span className="number">03</span>
            <div>
              <p className="proof-label">Connected care</p>
              <h3>Advanced care, when you need it.</h3>
              <p>
                As a credentialed surgeon at Renown Regional Medical Center,
                Dr. Herman can provide continuity for patients who need more
                comprehensive treatment.
              </p>
            </div>
            <img
              src="/images/03958b_d0992d4a47324a05b94077bc404c2731-mv2-e02330781c.jpg"
              alt="Advanced jaw reconstruction treatment"
            />
          </article>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-intro">
          <p className="eyebrow">What we do</p>
          <h2>From relief to<br /><em>restoration.</em></h2>
          <p>
            Comprehensive treatment, current technology, and a full range of
            anesthetic options are brought together in one welcoming practice.
          </p>
          <a className="text-link" href={ctaHref}>Book a consultation <span>↗</span></a>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <img src={service.image} alt="" />
              <div className="service-copy">
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story">
        <div className="story-image">
          <img
            src="/images/03958b_417f2556e94e48abb8ef29b690ee6c0e-mv2-5910007277.jpg"
            alt="Alpine Oral Facial Surgery's comfortable, modern office"
          />
          <div className="story-badge">Reno rooted<br />since 2022</div>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Homegrown care</p>
          <h2>Built for the community that raised him.</h2>
          <p className="large-copy">
            A Reno native, Dr. Herman returned home to create the kind of surgical
            experience he wanted Northern Nevada to have: precise, personal, and
            deeply connected to the community.
          </p>
          <p>
            From common extractions to complex facial reconstruction, our office
            was built so every patient can feel informed and cared for.
          </p>
          <a className="button button-dark" href={ctaHref}>Book a consultation</a>
        </div>
      </section>

      <section className="faq" id="answers">
        <div className="faq-copy">
          <p className="eyebrow">Before your visit</p>
          <h2>Good questions.<br />Clear answers.</h2>
          <div className="accordions">
            <details open>
              <summary>What treatments do you offer?<span>+</span></summary>
              <p>Dental implants, wisdom and tooth extractions, bone grafting, jaw surgery, benign pathology, TMJ care, and anesthesia and sedation.</p>
            </details>
            <details>
              <summary>What anesthesia options are available?<span>+</span></summary>
              <p>Options range from nitrous oxide to general anesthesia. Your care team will recommend the appropriate approach for your treatment and health history.</p>
            </details>
            <details>
              <summary>How do I prepare for my first visit?<span>+</span></summary>
              <p>Complete your new patient forms online and bring your identification, insurance information, medication list, and referral materials.</p>
            </details>
            <details>
              <summary>When is the office open?<span>+</span></summary>
              <p>Tuesday through Thursday, 7 am–4 pm, and Friday, 7 am–3 pm.</p>
            </details>
          </div>
        </div>
        <div className="faq-image">
          <img
            src="/images/03958b_974c781202b2447fb304144a1ded0800-mv2-a68fbacb44.jpg"
            alt="Patient receiving thoughtful oral and facial care"
          />
          <blockquote>“Our mission is to provide an optimal patient experience.”</blockquote>
        </div>
      </section>

      <section className="final-cta">
        <img
          src="/images/03958b_f5b5d83689f548c29b727a7814ed1084-mv2-d013ac071f.jpg"
          alt="Modern oral surgery care"
        />
        <div className="final-overlay" />
        <div className="final-content">
          <p className="eyebrow">Your next step</p>
          <h2>Feel confident<br />about your care.</h2>
          <a className="button button-light" href={ctaHref}>Book a consultation</a>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div>
            <p className="footer-brand">ALPINE</p>
            <span>Oral Facial Surgery</span>
          </div>
          <div>
            <strong>Visit</strong>
            <address>10587 Double R Blvd.<br />Suite 100<br />Reno, NV 89521</address>
          </div>
          <div>
            <strong>Contact</strong>
            <a href="tel:+17757374004">(775) 737-4004</a>
            <a href="mailto:contact@alpineofsnv.com">contact@alpineofsnv.com</a>
          </div>
          <div>
            <strong>Hours</strong>
            <p>Tue–Thu · 7–4<br />Friday · 7–3</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Alpine Oral Facial Surgery</span>
          <span>Serving Northern Nevada</span>
        </div>
      </footer>

      <style>{`
        :root { --ink:#173b38; --paper:#f4f0e7; --rust:#b55b3e; --blue:#b8d6dc; --lime:#d5dc9d; --white:#fffdf8; }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:var(--paper); color:var(--ink); font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; text-decoration:none; }
        img { display:block; width:100%; }
        .topline { min-height:38px; padding:9px 5vw; display:flex; justify-content:space-between; background:var(--ink); color:#e9e6d8; font-size:11px; letter-spacing:.12em; text-transform:uppercase; }
        nav { height:90px; padding:0 5vw; display:flex; align-items:center; justify-content:space-between; gap:32px; background:var(--white); border-bottom:1px solid #173b3822; }
        .brand img { width:200px; height:50px; object-fit:contain; }
        .navlinks { display:flex; gap:32px; font-size:13px; }
        .navlinks a { padding:12px 0; border-bottom:1px solid transparent; }
        .navlinks a:hover { border-color:var(--rust); }
        .button { display:inline-flex; align-items:center; justify-content:center; min-height:54px; padding:0 25px; background:var(--rust); color:white; font-weight:700; font-size:12px; letter-spacing:.08em; text-transform:uppercase; transition:.2s ease; }
        .button:hover { background:#93452f; transform:translateY(-2px); }
        .button-small { min-height:44px; padding:0 18px; }
        .hero { min-height:710px; display:grid; grid-template-columns:1.08fr .92fr; overflow:hidden; background:var(--white); }
        .hero-copy { padding:115px 5vw 90px 8vw; position:relative; z-index:2; }
        .eyebrow { margin:0 0 24px; color:var(--rust); font-size:11px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; }
        h1,h2 { margin:0; font-family:Georgia, 'Times New Roman', serif; font-weight:400; line-height:.93; letter-spacing:-.045em; }
        h1 { max-width:730px; font-size:clamp(64px,7.2vw,112px); }
        h1 em, h2 em { color:var(--rust); font-weight:400; }
        .hero-intro { max-width:530px; margin:38px 0; font-family:Georgia, serif; font-size:20px; line-height:1.55; color:#365552; }
        .hero-actions { display:flex; align-items:center; gap:22px; }
        .hero-actions span { font-size:11px; letter-spacing:.08em; text-transform:uppercase; }
        .hero-portrait { min-height:710px; position:relative; background:var(--blue); overflow:hidden; }
        .hero-portrait:after { content:""; position:absolute; inset:auto 0 0; height:35%; background:linear-gradient(transparent, #173b3899); }
        .hero-portrait img { position:absolute; inset:40px 0 0; height:calc(100% - 40px); object-fit:cover; object-position:center 20%; z-index:1; }
        .sun { width:430px; height:430px; position:absolute; top:74px; left:50%; transform:translateX(-50%); border-radius:50%; background:#d9dfa2; }
        .portrait-note { position:absolute; z-index:3; left:42px; bottom:38px; color:white; display:flex; flex-direction:column; gap:7px; }
        .portrait-note strong { font-family:Georgia,serif; font-size:22px; font-weight:400; }
        .portrait-note span { font-size:11px; letter-spacing:.1em; text-transform:uppercase; }
        .trustbar { min-height:74px; padding:15px 6vw; display:flex; align-items:center; justify-content:space-between; gap:18px; background:var(--rust); color:#fffaf1; font-size:11px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; }
        .trustbar i { width:4px; height:4px; border-radius:50%; background:#fff9; }
        .proof { padding:120px 5vw; }
        .section-heading { display:flex; justify-content:space-between; align-items:flex-start; gap:30px; margin-bottom:60px; }
        .section-heading h2 { width:67%; font-size:clamp(48px,5.5vw,82px); }
        .proof-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
        .proof-card { min-height:610px; position:relative; padding:32px; display:flex; flex-direction:column; justify-content:space-between; overflow:hidden; }
        .proof-cream { background:#e5d8c5; }
        .proof-blue { background:var(--blue); }
        .proof-green { background:var(--lime); }
        .number { width:42px; height:42px; display:grid; place-items:center; border:1px solid #173b3866; border-radius:50%; font-size:11px; }
        .proof-card > div { position:relative; z-index:2; margin-top:auto; padding:34px 0 26px; }
        .proof-label { margin:0 0 12px!important; font-size:10px!important; font-weight:700; letter-spacing:.16em; text-transform:uppercase; }
        .proof-card h3 { max-width:360px; margin:0 0 18px; font-family:Georgia,serif; font-size:32px; line-height:1.05; font-weight:400; }
        .proof-card p { margin:0; font-size:14px; line-height:1.65; }
        .proof-card img { height:145px; object-fit:cover; filter:saturate(.75); }
        .proof-cream img { object-fit:contain; background:#fff; padding:10px; }
        .services { padding:120px 5vw; display:grid; grid-template-columns:.72fr 1.28fr; gap:7vw; background:var(--ink); color:#f5f1e7; }
        .services-intro { position:sticky; top:40px; align-self:start; padding-top:25px; }
        .services h2 { font-size:clamp(54px,5.5vw,84px); }
        .services-intro > p:not(.eyebrow) { max-width:390px; margin:34px 0; color:#c6d0cb; font-family:Georgia,serif; font-size:17px; line-height:1.6; }
        .text-link { display:inline-flex; gap:22px; padding-bottom:7px; border-bottom:1px solid #ffffff77; font-size:11px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; }
        .service-grid { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
        .service-card { min-height:420px; position:relative; overflow:hidden; background:#244a46; }
        .service-card:nth-child(even) { transform:translateY(65px); }
        .service-card img { height:260px; object-fit:cover; filter:saturate(.7); transition:.4s ease; }
        .service-card:hover img { transform:scale(1.035); filter:saturate(1); }
        .service-copy { padding:24px; display:grid; grid-template-columns:28px 1fr; }
        .service-copy span { padding-top:5px; font-size:10px; color:#aebfba; }
        .service-copy h3 { margin:0; font-family:Georgia,serif; font-size:24px; font-weight:400; }
        .service-copy p { grid-column:2; margin:9px 0 0; color:#b9c7c2; font-size:13px; line-height:1.5; }
        .story { min-height:760px; display:grid; grid-template-columns:1fr 1fr; background:var(--white); }
        .story-image { min-height:700px; position:relative; background:var(--blue); overflow:hidden; }
        .story-image img { width:100%; height:100%; object-fit:cover; image-rendering:auto; }
        .story-badge { width:150px; height:150px; position:absolute; right:28px; bottom:28px; display:grid; place-items:center; border-radius:50%; background:var(--lime); text-align:center; font-family:Georgia,serif; font-size:17px; line-height:1.3; transform:rotate(-7deg); }
        .story-copy { padding:100px 8vw; display:flex; flex-direction:column; justify-content:center; }
        .story-copy h2 { font-size:clamp(48px,5vw,76px); }
        .story-copy .large-copy { margin:35px 0 20px; font-family:Georgia,serif; font-size:20px; line-height:1.55; }
        .story-copy > p:not(.eyebrow):not(.large-copy) { max-width:490px; color:#58706d; font-size:14px; line-height:1.7; }
        .button-dark { margin-top:22px; align-self:flex-start; background:var(--ink); }
        .faq { padding:120px 5vw; display:grid; grid-template-columns:1.05fr .95fr; gap:8vw; background:#e8e1d4; }
        .faq h2 { font-size:clamp(50px,5vw,78px); }
        .accordions { margin-top:50px; border-top:1px solid #173b3844; }
        details { border-bottom:1px solid #173b3844; }
        summary { padding:24px 0; display:flex; justify-content:space-between; gap:20px; cursor:pointer; list-style:none; font-family:Georgia,serif; font-size:18px; }
        summary::-webkit-details-marker { display:none; }
        summary span { font-family:Arial,sans-serif; font-weight:300; }
        details p { margin:0; padding:0 35px 24px 0; color:#506965; font-size:14px; line-height:1.65; }
        .faq-image { min-height:660px; position:relative; }
        .faq-image img { height:100%; object-fit:cover; }
        blockquote { width:70%; margin:0; padding:28px; position:absolute; left:-35px; bottom:30px; background:var(--rust); color:white; font-family:Georgia,serif; font-size:20px; line-height:1.35; }
        .final-cta { min-height:620px; position:relative; display:grid; place-items:center; overflow:hidden; color:white; text-align:center; }
        .final-cta > img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .final-overlay { position:absolute; inset:0; background:#173b38b8; }
        .final-content { position:relative; z-index:2; }
        .final-content .eyebrow { color:#d5dc9d; }
        .final-content h2 { margin-bottom:42px; font-size:clamp(58px,7vw,100px); }
        .button-light { background:var(--white); color:var(--ink); }
        footer { padding:72px 5vw 24px; background:#102e2c; color:#dce3dc; }
        .footer-main { display:grid; grid-template-columns:1.7fr repeat(3,1fr); gap:40px; padding-bottom:65px; }
        .footer-main strong { display:block; margin-bottom:18px; color:#92aaa4; font-size:10px; letter-spacing:.15em; text-transform:uppercase; }
        .footer-main address,.footer-main p,.footer-main a { display:block; margin:0 0 7px; font-style:normal; font-size:13px; line-height:1.65; }
        .footer-brand { margin:0!important; color:white; font-family:Georgia,serif; font-size:38px!important; letter-spacing:.16em; line-height:1!important; }
        .footer-main > div:first-child span { font-size:10px; letter-spacing:.22em; text-transform:uppercase; }
        .footer-bottom { padding-top:22px; display:flex; justify-content:space-between; border-top:1px solid #ffffff22; color:#829b95; font-size:10px; letter-spacing:.1em; text-transform:uppercase; }
        @media (max-width: 900px) {
          .navlinks { display:none; }
          .hero { grid-template-columns:1fr; }
          .hero-copy { padding:85px 7vw 70px; }
          .hero-portrait { min-height:600px; }
          .proof-grid { grid-template-columns:1fr; }
          .proof-card { min-height:520px; }
          .services { grid-template-columns:1fr; }
          .services-intro { position:static; }
          .story { grid-template-columns:1fr; }
          .story-image { min-height:600px; }
          .faq { grid-template-columns:1fr; }
          .footer-main { grid-template-columns:1.4fr 1fr 1fr; }
          .footer-main > div:last-child { display:none; }
        }
        @media (max-width: 600px) {
          .topline span { display:none; }
          .topline { justify-content:center; }
          nav { height:76px; padding:0 20px; }
          .brand img { width:145px; }
          nav .button { font-size:9px; min-height:38px; padding:0 10px; }
          .hero-copy { padding:70px 24px 60px; }
          h1 { font-size:58px; }
          .hero-intro { font-size:18px; }
          .hero-actions { align-items:flex-start; flex-direction:column; }
          .hero-portrait { min-height:520px; }
          .hero-portrait img { inset:25px 0 0; height:calc(100% - 25px); }
          .sun { width:340px; height:340px; }
          .portrait-note { left:24px; bottom:24px; }
          .trustbar { justify-content:center; flex-wrap:wrap; padding:20px; }
          .trustbar i { display:none; }
          .trustbar span { width:45%; text-align:center; }
          .proof,.services,.faq { padding:85px 24px; }
          .section-heading { display:block; }
          .section-heading h2 { width:100%; font-size:49px; }
          .proof-card { padding:25px; }
          .service-grid { grid-template-columns:1fr; }
          .service-card:nth-child(even) { transform:none; }
          .story-image { min-height:450px; }
          .story-copy { padding:85px 24px; }
          .faq-image { min-height:500px; }
          blockquote { width:88%; left:-10px; }
          .final-cta { min-height:540px; padding:24px; }
          .footer-main { grid-template-columns:1fr 1fr; }
          .footer-main > div:first-child { grid-column:1 / -1; }
          .footer-bottom { gap:15px; flex-direction:column; }
        }
      `}</style>
    </main>
  );
}
