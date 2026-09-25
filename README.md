# Sweep Club — fictional cleaning business demo

A responsive static website with no dependencies or build step. The real source is in `dist/`: edit `index.html` for content, `styles.css` for design and `script.js` for interactions. `hero.png` is original AI-generated illustration. No testimonials, awards or certifications are claimed.

## What works
- Responsive layout, section navigation and quote calls to action.
- Service cards preselect the corresponding quote service.
- Expandable FAQs, native required-field and email validation.
- On-screen quote-request summary; safely inserts user text as text.
- Keyboard focus styles, a skip link and reduced-motion support.

## What is not connected
The form is deliberately a demo. No network request, email, database record, payment, estimate or booking is created. Nothing is stored. Contact information, service area and business policies are explicitly labeled placeholders.

## Run locally
Open `dist/index.html` directly, or from this directory run `python3 -m http.server 4173 --directory dist` and visit http://localhost:4173.

## Test it yourself
1. Open desktop and phone views. Check all sections and make sure there is no sideways scrolling.
2. Tap every quote button. Service-card links should select the matching service.
3. Open and close each FAQ with click, Enter and Space.
4. Submit the empty form: the browser should identify missing fields. Try an invalid email too.
5. Use made-up valid details and submit. An on-screen summary should appear, clearly saying nothing was sent or saved.
6. Edit a field: the old summary should disappear. Reload: no request is retained.
7. Use only Tab / Shift+Tab / Enter to navigate; verify visible focus. Try 200% browser zoom.
8. Before launch, test on an actual iPhone and Android phone, and test the connected form's delivery and failure states.

## GitHub and a custom domain
This source is ready for a GitHub repository; no GitHub repository has been created or connected for you. GitHub stores your code. Your hosting provider serves the website.

For a GitHub-driven public launch, one option is Cloudflare Pages:
1. Create a GitHub repository and upload this folder's source, including `dist`. Do not upload `.git`, secrets or access tokens. `.openai/hosting.json` belongs to the separate Sites preview and is not needed by Pages.
2. Connect the GitHub repository in Cloudflare Pages. Select main as the production branch, no framework, no build command, and `dist` as the output directory.
3. Deploy and verify the temporary Pages address. Future approved changes pushed to main trigger deployments.
4. Buy the domain you want from a registrar. In Pages, add it under Custom domains FIRST, then follow the DNS instructions. A root domain requires its Cloudflare zone/nameservers; a subdomain can use the instructed CNAME. Wait for DNS and HTTPS activation and test both www and the bare domain, selecting one canonical address and redirecting the other.
5. Replace every placeholder with real verified business information. Confirm service scope and policies. Keep the demo label until the business is actually ready.
6. Connect the form to a form service such as Formspree or a server endpoint: replace the demo submit handler, configure the destination inbox, implement loading/success/error behavior, spam protection and server-side validation, and add an appropriate privacy notice. Never put secret email API keys into browser JavaScript. Show success only after the service accepts a request.
7. Submit a test on the live domain, confirm inbox delivery, verify spam filtering and failure handling, and check the site on phones before promotion.

## Ongoing costs
As checked September 24, 2026: Cloudflare Pages has a $0 Free plan suitable for a small static site; plan limits apply. Formspree offers 50 submissions per month on its Free plan; higher volume/features require a paid plan. Domain registration renews yearly and varies by extension and availability: reserve roughly $10–$25/year for an ordinary non-premium domain as a planning estimate, and check the registrar's actual renewal quote before buying. Premium domains may cost much more. A branded email mailbox is optional and billed separately by its provider. No database, paid frontend framework or paid plugin is required by this demo. Maintenance means checking form delivery, renewing the domain and updating services/contact details. These third-party costs do not describe the pricing of the private Sites preview.

Sources:
- https://www.cloudflare.com/products/pages/
- https://developers.cloudflare.com/pages/configuration/git-integration/
- https://developers.cloudflare.com/pages/configuration/custom-domains/
- https://formspree.io/plans/
- https://www.cloudflare.com/domains/
