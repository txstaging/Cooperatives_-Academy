# Transformix Academy

A Next.js App Router and TypeScript implementation of the supplied Arabic TX Cooperatives Academy landing page. The original HTML and `css2` files remain in their reference folder.

## Run locally

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Open **http://localhost:3000**.

For production deployment, use the Docker setup below. Next.js creates a
standalone Node server during `npm run build`, and Docker includes its static
assets and public files.

## Edit the website

- `src/app/page.tsx`: page composition and structured data.
- `src/app/layout.tsx`: Arabic RTL document settings and SEO metadata.
- `src/app/globals.css`: original colors, spacing, responsive layouts, and accessibility refinements.
- `src/data/academy.ts`: the seven programs, four role descriptions, eight FAQs, and contact email.
- `src/components/landing-sections.tsx`: hero, academy introduction, learning experience, ongoing value, resource placeholders, and contact copy.
- `src/components/site-header.tsx`: responsive navigation.
- `src/components/roles-section.tsx`: accessible role tabs with arrow, Home, and End key navigation.
- `src/components/request-form.tsx`: validated email request preparation and clipboard fallback.
- `public/fonts/`: locally hosted IBM Plex Sans Arabic font subsets and their SIL Open Font License.

The site uses the supplied CSS directly rather than introducing a styling framework, keeping the visual reference intact. Navigation uses local section anchors. It has no dependency on the original ChatGPT Site account, address, or permissions.

The three “coming content” cards and their preview note are preserved from the reference. Replace them with approved program, lesson, and trainer content before publishing if desired.

## Contact form

The form prepares an email addressed to `info@thetransformix.com`. It does **not** submit, store, or email visitor data automatically. Visitors review the generated message, then open their email application or copy it. No database or email service credentials are needed for the reference behavior.

## Verify

```sh
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

Browser tests start the production build on port 3100 and use installed Google Chrome. To use Playwright's Chromium instead, remove `channel: "chrome"` from `playwright.config.ts` and install it with `npx playwright install chromium`.

Tests cover desktop/mobile rendering, local navigation, accordions, keyboard tabs, form validation, email preparation, clipboard success/failure, and horizontal overflow. Preview screenshots are saved to `artifacts/desktop.png` and `artifacts/mobile.png`.

## Deploy to a VPS with Docker

Your VPS needs Docker Engine and the Docker Compose plugin. Copy the source
project to the VPS or clone your own Git repository there. Run these commands
from the directory containing `Dockerfile` and `docker-compose.yml`:

```sh
docker compose config
docker compose up -d --build
docker compose ps
```

Open **http://YOUR_VPS_IP:3100**. For direct access, allow port 3100 in your
VPS/network firewall. No `.env` file is required: Compose maps VPS port 3100
to the application on port 3000 inside the container.

The Dockerfile builds on Node.js 22 and runs only the standalone application,
its traced runtime dependencies, `.next/static`, and `public`. It runs as the
unprivileged `node` user. Compose restarts the service after exits and VPS
reboots unless you explicitly stop it. The image health check verifies the
home page; inspect its status with `docker compose ps`. The Docker daemon must
start at boot for reboot recovery.

Local dependencies, build output, reference files, test artifacts, and `.env`
files are excluded from the Docker build context. No host Node.js installation,
database, or persistent volume is required for this website.

### A domain and HTTPS

For Nginx or Caddy running on the VPS host, change the port mapping in
`docker-compose.yml` to `"127.0.0.1:3100:3000"` and run `docker compose up -d`.
Point the domain's DNS to the VPS and configure the reverse proxy to forward
to **http://127.0.0.1:3100** and handle TLS certificates. If your proxy runs in
another container, connect both services to the same Docker network and proxy
to `web:3000` instead.

The supplied Compose service serves HTTP. Domain and TLS configuration belongs
to your reverse proxy. Set the production domain in the page metadata when you
have one.

### Update, inspect, and stop

After copying or pulling updated source on the VPS:

```sh
docker compose build --pull
docker compose up -d
docker compose ps
```

View logs:

```sh
docker compose logs --tail=100 -f web
```

Stop and remove this project's container and network:

```sh
docker compose down
```

The standalone assets follow the [Next.js output guidance](https://nextjs.org/docs/app/api-reference/config/next-config-js/output).
