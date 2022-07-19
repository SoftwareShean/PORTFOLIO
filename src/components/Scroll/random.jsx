<div className="container">
<motion.div
  className="landing"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
>
  <motion.h1
    initial={{ y: "-100vh" }}
    animate={{ y: 0 }}
    transition={{ delay: 0.3, type: "tween" }}
  >
    SOFTWARE SHEAN
  </motion.h1>
  <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, type: "fade" }}
  >
    SAAF-TWEHR SHH-IAN
  </motion.h2>
  <motion.button
    onClick={handleClick}
    initial={{ y: "100vh" }}
    animate={{ y: 0 }}
    transition={{ delay: 0.4, type: "tween" }}
  >
    view projects
  </motion.button>
</motion.div>
  <motion.div className="pts" ref={{scrollRef}} initial="hidden" animate="visible" variants={boxVariants}>
    <div
      className="new-card pts"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <div className="heading">
        <div className="project-title">
          <a href="www.passthespatula.com" target="_blank">
            <h1>www.passthespatula.com</h1>
          </a>
          <div className="app-icon"></div>
        </div>
      </div>
      <div className="card-body">
        <div className="project-icons">
          <div className="project-icons-1">
            <img src={ReactIcon} />
          </div>
          <div className="project-icons-2">
            <FirebaseIcon />
          </div>
          <div className="project-icons-3">
            <img src={ShopifyIcon} />
          </div>
          <div className="project-icons-4">
            <DraftJsLogo />
          </div>
          <div className="project-icons-5">
            <SassIcon />
          </div>
        </div>

        <div className="project-description fadein">
          Pass The Spatula is a youth led culinary program from the Food
          Education Fund based out of New York City. I created a new
          website for the launch of their second magazine issue.
          <br />
          <br /> The platform is built with the React library, hosted and
          deployed on Firebase, with a custom backend blog component built
          using DraftJS from Facebook. Shopify's SDK is also integrated,
          which facilitated sales of the new issue.
        </div>
      </div>
    </div>
  </motion.div>
<div className="cc">
  <div className="new-card slideup cc">
    <div className="heading">
      <div className="project-title">
        <a href="https://cultcatalogue.netlify.app/">
          <h1>cultcatalogue</h1>
        </a>
        <div className="app-icon"></div>
      </div>
    </div>
    <div className="card-body">
      <div className="project-icons">
        <div className="project-icons-1">
          <img src={ReactIcon} />
        </div>
        <div className="project-icons-2">
          <SassIcon />
        </div>
        <div className="project-icons-3">
          <img src={NodeIcon} />
        </div>
        <div className="project-icons-4">
          <img src={MongoIcon} />
        </div>
      </div>
      <div className="project-description">
        Based on a passion project from 2014, CultCatalogue is an API for
        biographies and works of contemporary global artists.
        <br />
        <br />
        Inspired by the book This Will Have Been: Art, Love, and Politics
        in the 1980's, CultCatalogue aims to provide a free and open API
        for art lovers and aficionados alike. Click the title above to
        view the projects documentation.
      </div>
    </div>
  </div>
</div>
<div className="new-card slideup cura">
  <div className="heading">
    <div className="project-title">
      <a href="https://cura-app.netlify.app/">
        <h1>CURA</h1>
      </a>
      <div className="app-icon"></div>
    </div>
  </div>
  <div className="card-body">
    <div className="project-icons">
      <div className="project-icons-1">
        <img src={ReactIcon} />
      </div>

      <div className="project-icons-2">
        <img src={RailsIcon} />
      </div>

      <div className="project-icons-3">
        <img src={RubyIcon} />
      </div>
    </div>
    <div className="project-description">
      CURA is your digital content manager. With a daily timeline, add
      links with rich data, upload photos, and add notes. Manage each day
      with CURA and never forget a memory. With API integrations fro the
      NYT you wont miss any of the latest top stories.
    </div>
  </div>
</div>
<div className="new-card slideup covid">
  <div className="heading">
    <div className="project-title">
      <a href="https://cura-app.netlify.app/">
        <h1>COVIData</h1>
      </a>
      <div className="app-icon"></div>
    </div>
  </div>
  <div className="card-body">
    <div className="project-icons">
      <div className="project-icons-1">
        <img src={CSS3} />
      </div>

      <div className="project-icons-2">
        <img src={JS} />
      </div>

      <div className="project-icons-3">
        <img src={HTML5} />
      </div>
    </div>
    <div className="project-description">
      CoviData was built at the beginning of the Covid-19 global pandemic
      as a means of tracking the latest news as well as infection rates
      and death tolls with data provided from The Covid Tracking Project.
      Disperate APIs were interpreted to provide unique data
      visualizations by State.
    </div>
  </div>
</div>
<div className="fixed mission">
  <h2>
    I am committed to making a positive impact. At my root, I am a builder
    and creator. My work experience is diverse and varied which provides
    me with a unique skillset. I am action oriented and independent,
    organized, creative, and most importantly, deeply passionate about my
    work and the things I create.
  </h2>
</div>
</div>