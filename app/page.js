const services = [
  {
    title: 'Élevage',
    text: 'Une sélection attentive, une approche familiale et un accompagnement sérieux pour des chiens bien dans leurs pattes.',
  },
  {
    title: 'Éducation canine',
    text: 'Un travail fondé sur l’écoute, la cohérence et la relation pour aider chaque duo humain-chien à évoluer ensemble.',
  },
  {
    title: 'Osthéopathie canine',
    text: 'Une approche douce et globale pour le confort, l’équilibre et le bien-être du chien à chaque étape de sa vie.',
  },
];

const dogs = [
  {
    name: 'Roussanne',
    role: 'Chienne reproductrice',
    text: 'Une présence équilibrée, attentive et proche de l’humain, au cœur de l’identité de l’élevage.',
  },
  {
    name: 'Naya',
    role: 'Jeune femelle',
    text: 'Une énergie élégante, une belle évolution et une personnalité prometteuse.',
  },
  {
    name: 'Portées à venir',
    role: 'Sur demande',
    text: 'Contactez-nous pour connaître les projets, les disponibilités et les conditions de réservation.',
  },
];

const values = [
  'Approche familiale et responsable',
  'Respect du chien et de son rythme',
  'Conseils avant et après adoption',
  'Univers premium, chaleureux et rassurant',
];

export default function Home() {
  return (
    <main className="site">
      <header className="header">
        <div className="container navWrap">
          <div>
            <p className="brandTop">Les Loups du Nideck</p>
            <p className="brandBottom">Natacha Kocher · Éleveuse · Éducatrice canine · Osthéopathe</p>
          </div>

          <nav className="nav">
            <a href="#elevage">L’élevage</a>
            <a href="#services">Services</a>
            <a href="#chiens">Les chiens</a>
            <a href="#apropos">À propos</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="heroAura" />
        <div className="container heroGrid">
          <div className="heroCopy">
            <p className="kicker">Les Loups du Nideck</p>
            <h1>
              Un univers <span>premium</span> inspiré par la nature, le lien et l’excellence canine.
            </h1>
            <p className="lead">
              Le site officiel de <strong>Natacha Kocher</strong>, pensé comme une vitrine haut de gamme pour présenter l’élevage,
              l’éducation canine et l’osthéopathie dans une atmosphère noire et or inspirée du vrai logo.
            </p>

            <div className="ctaRow">
              <a className="btn btnGold" href="#contact">Me contacter</a>
              <a className="btn btnGhost" href="#services">Découvrir les services</a>
            </div>

            <ul className="heroBadges">
              <li>Élevage</li>
              <li>Éducation canine</li>
              <li>Osthéopathie</li>
            </ul>
          </div>

          <div className="heroPanel">
            <div className="logoCircle">
              <div className="logoInner">
                <p className="kicker center">Signature</p>
                <h2>Deux loups, la montagne, la nuit, l’or</h2>
                <p>
                  Une direction artistique forte, cinématographique et prestigieuse pour transmettre immédiatement la personnalité de la marque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="sectionHead">
            <p className="kicker">Services</p>
            <h2>Trois expertises, une même exigence</h2>
            <p>
              Une présentation claire des activités de Natacha Kocher, avec un ton rassurant, professionnel et émotionnel.
            </p>
          </div>

          <div className="serviceGrid">
            {services.map((item) => (
              <article className="serviceCard" key={item.title}>
                <div className="serviceVisual" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#contact">En savoir plus</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apropos" className="section sectionMuted">
        <div className="container aboutGrid">
          <div className="aboutVisual" />
          <div className="aboutCopy">
            <p className="kicker">À propos</p>
            <h2>Une vocation née du lien avec le chien</h2>
            <p>
              Depuis toujours, les chiens occupent une place centrale. Ce site premium met en lumière une approche fondée sur l’observation,
              la sensibilité, le respect et l’accompagnement des familles comme des animaux.
            </p>
            <p>
              À travers l’élevage, l’éducation canine et l’osthéopathie, l’objectif est de construire une relation saine, solide et durable.
            </p>
            <div className="valueGrid">
              {values.map((value) => (
                <div className="valueItem" key={value}>{value}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="chiens" className="section">
        <div className="container">
          <div className="sectionHead splitHead">
            <div>
              <p className="kicker">Les chiens</p>
              <h2>Des profils présentés avec élégance</h2>
            </div>
            <p>
              Cette section peut être enrichie plus tard avec les vraies photos, les lignées, le caractère et les informations détaillées.
            </p>
          </div>

          <div className="dogGrid">
            {dogs.map((dog) => (
              <article className="dogCard" key={dog.name}>
                <div className="dogImage" />
                <span>{dog.role}</span>
                <h3>{dog.name}</h3>
                <p>{dog.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="elevage" className="section calloutSection">
        <div className="container callout">
          <div>
            <p className="kicker">L’élevage</p>
            <h2>Une présence en ligne gratuite, élégante et prête à évoluer</h2>
            <p>
              Le site est conçu pour être publié facilement, puis amélioré ensuite avec le vrai téléphone, l’email, la localisation, les photos
              et les contenus définitifs.
            </p>
          </div>
          <a className="btn btnGold" href="#contact">Demander des informations</a>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contactGrid">
          <div>
            <p className="kicker">Contact</p>
            <h2>Prendre contact avec Natacha Kocher</h2>
            <p>
              Remplace ici les coordonnées provisoires par les vraies informations de contact. Le bouton e-mail est déjà prêt pour une future mise à jour.
            </p>
          </div>

          <div className="contactCard">
            <div className="contactLine">
              <span>Téléphone</span>
              <strong>06 00 00 00 00</strong>
            </div>
            <div className="contactLine">
              <span>E-mail</span>
              <strong>contact@lesloupsdunideck.fr</strong>
            </div>
            <div className="contactLine">
              <span>Localisation</span>
              <strong>Alsace · France</strong>
            </div>
            <a className="btn btnGold full" href="mailto:contact@lesloupsdunideck.fr">Envoyer un message</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerWrap">
          <div>
            <p className="brandTop">Les Loups du Nideck</p>
            <p className="brandBottom">Natacha Kocher · Éleveuse · Éducatrice canine · Osthéopathe</p>
          </div>
          <p className="footerNote">© 2026 Les Loups du Nideck — Version premium du site.</p>
        </div>
      </footer>
    </main>
  );
}
