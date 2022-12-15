# Portfolio V5

## Welcome to my portfolio site copy repository!

My portfolio site resides in an other repository.
Why? You may ask, well it is because how I have it set up!
My CI/CD with GitHub Actions setup has security issues:

- Read more about [Self-Hosted Runners Security](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security)

To get you started out quickly with the setup up here is simple tree map:

```bash
portfolio-site-v5
├─── .github
│   ├─── ISSUE_TEMPLATE -   -   # GitHub issue templates
│   └─── workflows  -   -   -   # GitHub workflows
├─── apps   -   -   -   -   -   # Every 1st layer folder is a separate Yarn workspace
│   ├─── server -   -   -   -   # Front-end proxy server (will be renamed)
│   │   └─── static -   -   -   # Static files related to code
│   ├─── shared-content -   -   # Custom Contentful plugin (WIP)
│   ├─── shared-ui  -   -   -   # Custom React library
│   │   ├─── components -   -   # React components
│   │   ├─── node_modules   -   # Local modules
│   │   ├─── props  -   -   -   # Styled Props typing (WIP)
│   │   ├─── themes -   -   -   # Theme settings
│   │   └─── utils  -   -   -   # UI Utils
│   ├─── tessavwalstijn -   -   # NextJS project where my portfolio lives
│   │   ├─── .next  -   -   -   # Next build output
│   │   ├─── node_modules   -   # Local modules
│   │   ├─── pages  -   -   -   # NextJS pages folder structure
│   │   ├─── .configFiles
│   │   └─── twalstijn.js   -   # Special file to lift this next project to /server
│   └─── notIncludedSites   -   # NextJS project where other site lives (NOT INCLUDED)
│       ├─── .next  -   -   -   # Next build output
│       ├─── node_modules   -   # Local modules
│       ├─── pages  -   -   -   # NextJS pages folder structure
│       ├─── .configFiles
│       └─── siteName.js    -   # Special file to lift this next project to /server
├─── .configFiles
├─── docker-compose.yml -   -   # Docker compose file to build dev and production env
├─── front-end-dev.dockerfile   # Dockerfile for front-end dev environment
├─── front-end-prd.dockerfile   # Dockerfile for front-end production environment
├─── LICENSE
├─── package.json   -   -   -   # All the juicy settings
└─── README.md  -   -   -   -   # This beauty file
```

To try out the works of this project I recommend you having Docker and Docker Compose

  - Ubuntu Guide
    - [Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04)
    - [Docker Compose](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-22-04)
  - [Windows](https://docs.docker.com/desktop/install/windows-install/)

If you do not want to go the docker route you will need to have:

  - [Yarn](https://classic.yarnpkg.com/en/)
  - [NodeJS](https://nodejs.org/en/download/)

Now you have installed the required software here is how you can start the project

  - Using Docker
    ```bash
    # Build and Start: Production & Development
    docker compose up -d --build
    # Build and Start: Production
    docker compose up -d front-end-system-dev --build
    # Build and Start: Development
    docker compose up -d front-end-system-prd --build
    ```
  - Using Yarn
    ```bash
    # Build and Start: Production
    yarn run demo-prd
    # Build and Start: Development
    yarn run demo-dev
    ```

Finally you can open the project on:

-  Development
    - http://twalstijn.lvh.me:3030/ or
    - http://twalstijn.localhost:3030/

-  Production
    - http://twalstijn.lvh.me:3333/ or
    - http://twalstijn.localhost:3333/

What is lvh.me ???

> http://lvh.me is a free service that resolves itself along with all subdomains to localhost

I use lvh.me to be able to see my FontAwesome icons these are blocked on subdomains.localhost 
