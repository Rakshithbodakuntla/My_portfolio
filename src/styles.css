@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap");

:root {
  font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #dbe7f4;
  background: #050a12;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  --bg: #050a12;
  --surface: rgba(13, 25, 42, 0.72);
  --surface-strong: rgba(17, 34, 55, 0.9);
  --line: rgba(148, 184, 218, 0.14);
  --line-strong: rgba(96, 221, 255, 0.28);
  --text: #edf6ff;
  --muted: #93a9bd;
  --cyan: #5ee5ff;
  --cyan-strong: #1fc8ec;
  --blue: #6d8cff;
  --green: #79f2c0;
  --shadow: 0 22px 70px rgba(0, 0, 0, 0.34);
  --pointer-x: 50vw;
  --pointer-y: 40vh;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: var(--bg);
}

button,
input,
textarea {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  color: inherit;
}

::selection {
  color: #031017;
  background: var(--cyan);
}

.site-shell {
  min-height: 100vh;
  position: relative;
  overflow: clip;
  background:
    radial-gradient(circle at 75% 4%, rgba(73, 102, 255, 0.13), transparent 24rem),
    radial-gradient(circle at 4% 42%, rgba(25, 201, 236, 0.08), transparent 25rem),
    linear-gradient(180deg, #06101c 0%, #050a12 40%, #07101a 100%);
}

.pointer-glow {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(
    600px circle at var(--pointer-x) var(--pointer-y),
    rgba(60, 214, 255, 0.08),
    transparent 45%
  );
}

.grid-overlay {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.13;
  background-image:
    linear-gradient(rgba(120, 160, 197, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(120, 160, 197, 0.08) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: linear-gradient(to bottom, black, transparent 92%);
}

.ambient {
  position: fixed;
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  opacity: 0.08;
  z-index: 0;
}

.ambient-one {
  background: var(--cyan);
  top: 16%;
  right: -12rem;
}

.ambient-two {
  background: var(--blue);
  bottom: 8%;
  left: -14rem;
}

main,
footer,
.topbar {
  position: relative;
  z-index: 1;
}

.container {
  width: min(1160px, calc(100% - 40px));
  margin-inline: auto;
}

.section {
  padding: 112px 0;
}

.muted-section {
  border-block: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(8, 18, 30, 0.76), rgba(10, 22, 36, 0.52));
}

.topbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  border-bottom: 1px solid rgba(132, 179, 218, 0.12);
  background: rgba(5, 10, 18, 0.72);
  backdrop-filter: blur(18px);
}

.nav-inner {
  height: 76px;
  display: flex;
  align-items: center;
  gap: 22px;
}

.brand {
  border: 0;
  background: transparent;
  display: inline-flex;
  align-items: center;
  gap: 11px;
  padding: 0;
  cursor: pointer;
  text-align: left;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  color: #061019;
  border-radius: 13px;
  font: 700 16px/1 "Space Grotesk", sans-serif;
  background: linear-gradient(135deg, var(--cyan), #82a9ff);
  box-shadow: 0 0 26px rgba(94, 229, 255, 0.24);
}

.brand-copy {
  display: grid;
  gap: 2px;
}

.brand-copy strong {
  font-family: "Space Grotesk", sans-serif;
  color: var(--text);
  letter-spacing: -0.02em;
}

.brand-copy small {
  color: var(--muted);
  font-size: 11px;
}

.desktop-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-left: auto;
}

.nav-link {
  position: relative;
  border: 0;
  background: transparent;
  color: #91a8bb;
  font-size: 13px;
  padding: 10px 9px;
  cursor: pointer;
  transition: color 180ms ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 3px;
  height: 2px;
  border-radius: 999px;
  background: var(--cyan);
  transition: left 180ms ease, right 180ms ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text);
}

.nav-link.active::after {
  left: 9px;
  right: 9px;
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-left: 12px;
  padding: 10px 15px;
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  color: var(--text);
  font-size: 13px;
  background: rgba(94, 229, 255, 0.06);
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}

.nav-cta:hover {
  transform: translateY(-2px);
  border-color: rgba(94, 229, 255, 0.54);
  background: rgba(94, 229, 255, 0.11);
}

.menu-button {
  display: none;
  margin-left: auto;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  padding: 8px;
}

.mobile-nav {
  display: none;
}

.hero {
  min-height: 100vh;
  padding-top: 154px;
  padding-bottom: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(330px, 0.82fr);
  align-items: center;
  gap: 76px;
}

.eyebrow,
.section-kicker {
  color: var(--cyan);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.eyebrow {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 23px;
  padding: 9px 13px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  background: rgba(94, 229, 255, 0.04);
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 5px rgba(121, 242, 192, 0.1), 0 0 16px rgba(121, 242, 192, 0.8);
}

.hero h1,
.section-title {
  margin: 0;
  color: var(--text);
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: -0.045em;
}

.hero h1 {
  max-width: 790px;
  font-size: clamp(3.3rem, 6.5vw, 6.6rem);
  line-height: 0.97;
}

.hero h1 span {
  color: transparent;
  background: linear-gradient(100deg, #f6fbff 8%, var(--cyan) 52%, #8da5ff 92%);
  background-clip: text;
  -webkit-background-clip: text;
}

.hero-lead {
  max-width: 680px;
  margin: 28px 0 0;
  color: #a7bbcc;
  font-size: clamp(1.04rem, 1.5vw, 1.19rem);
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
  margin-top: 34px;
}

.button {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  padding: 0 20px;
  border-radius: 13px;
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: 700;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button.primary {
  color: #06121a;
  background: linear-gradient(135deg, var(--cyan), #7da3ff);
  box-shadow: 0 12px 34px rgba(63, 204, 245, 0.2);
}

.button.primary:hover {
  box-shadow: 0 15px 42px rgba(63, 204, 245, 0.3);
}

.button.secondary {
  color: var(--text);
  background: rgba(255, 255, 255, 0.025);
  border-color: var(--line);
}

.button.secondary:hover {
  border-color: var(--line-strong);
}

.button.full {
  width: 100%;
}

.social-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 27px;
  color: var(--muted);
  font-size: 14px;
}

.social-row a,
.social-row span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.social-row a {
  transition: color 180ms ease;
}

.social-row a:hover {
  color: var(--cyan);
}

.hero-visual {
  min-height: 500px;
  display: grid;
  place-items: center;
  position: relative;
}

.profile-card {
  width: min(100%, 390px);
  position: relative;
  z-index: 2;
  padding: 26px;
  border: 1px solid rgba(115, 213, 243, 0.24);
  border-radius: 27px;
  background:
    linear-gradient(145deg, rgba(24, 43, 67, 0.88), rgba(7, 17, 30, 0.94)),
    rgba(10, 23, 38, 0.82);
  box-shadow: var(--shadow), inset 0 1px 0 rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  transform: rotate(1.5deg);
}

.profile-card::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(140deg, rgba(94, 229, 255, 0.5), transparent 35%, rgba(109, 140, 255, 0.4));
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}

.profile-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6f8ba1;
  font: 700 10px/1 "Space Grotesk", sans-serif;
  letter-spacing: 0.16em;
}

.online-pill {
  color: var(--green);
  padding: 6px 8px;
  border: 1px solid rgba(121, 242, 192, 0.22);
  border-radius: 999px;
  background: rgba(121, 242, 192, 0.06);
}

.monogram {
  width: 112px;
  height: 112px;
  margin: 34px auto 24px;
  display: grid;
  place-items: center;
  border-radius: 31px;
  color: #03131a;
  font: 700 36px/1 "Space Grotesk", sans-serif;
  background: linear-gradient(135deg, #d7faff, var(--cyan) 45%, #798fff);
  box-shadow: 0 22px 55px rgba(69, 207, 242, 0.22);
}

.profile-card h2 {
  margin: 0;
  text-align: center;
  color: var(--text);
  font-family: "Space Grotesk", sans-serif;
  font-size: 25px;
}

.profile-card > p {
  margin: 7px 0 0;
  text-align: center;
  color: var(--cyan);
}

.profile-divider {
  height: 1px;
  margin: 25px 0;
  background: linear-gradient(90deg, transparent, var(--line-strong), transparent);
}

.profile-stack {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9px;
}

.profile-stack span {
  padding: 10px 9px;
  border: 1px solid var(--line);
  border-radius: 10px;
  text-align: center;
  color: #b1c7d8;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.025);
}

.profile-code {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin-top: 18px;
  padding: 13px;
  border-radius: 11px;
  color: #7390a5;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11px;
  background: rgba(1, 9, 16, 0.64);
}

.profile-code strong {
  color: var(--green);
  font-weight: 500;
}

.orbit {
  position: absolute;
  border: 1px solid rgba(95, 210, 241, 0.13);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

.orbit::after {
  content: "";
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--cyan);
  box-shadow: 0 0 20px rgba(94, 229, 255, 0.8);
}

.orbit-one {
  width: 440px;
  height: 440px;
}

.orbit-one::after {
  top: 46px;
  left: 75px;
}

.orbit-two {
  width: 520px;
  height: 280px;
  transform: rotate(-18deg);
  animation-duration: 26s;
  animation-direction: reverse;
}

.orbit-two::after {
  right: 34px;
  top: 90px;
  background: #8b9cff;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 70px;
}

.metric-card {
  min-height: 122px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 17px;
  background: rgba(13, 27, 44, 0.6);
  backdrop-filter: blur(12px);
}

.metric-card strong {
  color: var(--text);
  font: 700 clamp(2rem, 3vw, 2.7rem)/1 "Space Grotesk", sans-serif;
}

.metric-card span {
  margin-top: 9px;
  color: var(--muted);
  font-size: 13px;
}

.about-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 90px;
}

.section-kicker {
  margin: 0 0 14px;
}

.section-title {
  max-width: 780px;
  font-size: clamp(2.35rem, 4.4vw, 4.5rem);
  line-height: 1.04;
}

.about-copy {
  color: #a5bacb;
  font-size: 17px;
  line-height: 1.85;
}

.about-copy p:first-child {
  margin-top: 4px;
}

.principles {
  display: grid;
  gap: 12px;
  margin-top: 29px;
}

.principles span {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #d9e8f4;
  font-weight: 600;
}

.principles svg {
  color: var(--cyan);
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 40px;
  margin-bottom: 50px;
}

.section-heading > p {
  max-width: 420px;
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.section-watermark {
  color: rgba(94, 229, 255, 0.24);
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.expertise-card,
.project-card,
.credential-panel,
.contact-form {
  border: 1px solid var(--line);
  background: linear-gradient(145deg, rgba(15, 31, 50, 0.72), rgba(7, 17, 29, 0.82));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);
}

.expertise-card {
  min-height: 330px;
  padding: 30px;
  border-radius: 20px;
  transition: transform 220ms ease, border-color 220ms ease, background 220ms ease;
}

.expertise-card:hover,
.project-card:hover {
  transform: translateY(-5px);
  border-color: var(--line-strong);
  background: linear-gradient(145deg, rgba(17, 38, 60, 0.82), rgba(8, 20, 34, 0.9));
}

.icon-box {
  width: 49px;
  height: 49px;
  display: grid;
  place-items: center;
  color: var(--cyan);
  border: 1px solid var(--line-strong);
  border-radius: 14px;
  background: rgba(94, 229, 255, 0.06);
}

.icon-box.small {
  width: 40px;
  height: 40px;
  border-radius: 11px;
}

.expertise-card h3,
.project-card h3,
.credential-panel h2 {
  color: var(--text);
  font-family: "Space Grotesk", sans-serif;
}

.expertise-card h3 {
  margin: 24px 0 12px;
  font-size: 23px;
}

.expertise-card > p {
  min-height: 74px;
  margin: 0;
  color: var(--muted);
  line-height: 1.67;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.tag-list span {
  padding: 7px 10px;
  border: 1px solid rgba(113, 194, 223, 0.15);
  border-radius: 8px;
  color: #a9c3d6;
  font-size: 12px;
  background: rgba(63, 149, 183, 0.06);
}

.tag-list.compact {
  margin-top: 20px;
}

.tag-list.compact span {
  padding: 6px 9px;
}

.timeline {
  position: relative;
  display: grid;
  gap: 26px;
  padding-left: 28px;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 6px;
  width: 1px;
  background: linear-gradient(var(--cyan), rgba(94, 229, 255, 0.05));
}

.timeline-item {
  position: relative;
}

.timeline-marker {
  position: absolute;
  top: 29px;
  left: -28px;
  width: 13px;
  height: 13px;
  border: 3px solid #07101b;
  border-radius: 50%;
  background: var(--cyan);
  box-shadow: 0 0 0 4px rgba(94, 229, 255, 0.12), 0 0 20px rgba(94, 229, 255, 0.55);
}

.experience-card {
  padding: 31px;
  border: 1px solid var(--line);
  border-radius: 21px;
  background: rgba(10, 22, 37, 0.68);
  box-shadow: var(--shadow);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
}

.company-chip {
  display: inline-block;
  margin-bottom: 10px;
  color: var(--cyan);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.experience-header h3 {
  margin: 0;
  color: var(--text);
  font-family: "Space Grotesk", sans-serif;
  font-size: 29px;
}

.experience-header p,
.experience-header time {
  color: var(--muted);
}

.experience-header p {
  margin: 7px 0 0;
}

.experience-header time {
  white-space: nowrap;
  padding: 8px 11px;
  border: 1px solid var(--line);
  border-radius: 9px;
  font-size: 13px;
  background: rgba(255, 255, 255, 0.02);
}

.experience-summary {
  max-width: 850px;
  margin: 26px 0 20px;
  color: #bdd0df;
  font-size: 16px;
  line-height: 1.75;
}

.experience-card ul {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.experience-card li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: var(--muted);
  line-height: 1.65;
}

.experience-card li svg {
  flex: 0 0 auto;
  margin-top: 5px;
  color: var(--cyan);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.project-card {
  min-height: 390px;
  display: flex;
  flex-direction: column;
  padding: 29px;
  border-radius: 20px;
  transition: transform 220ms ease, border-color 220ms ease, background 220ms ease;
}

.project-topline {
  display: flex;
  align-items: center;
  gap: 12px;
}

.project-topline > span {
  color: var(--cyan);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.project-card h3 {
  margin: 25px 0 14px;
  font-size: 25px;
}

.project-card > p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.project-outcome {
  margin-top: 23px;
  padding: 12px 13px;
  border-left: 3px solid var(--cyan);
  color: #cce4f4;
  font-size: 13px;
  line-height: 1.5;
  background: rgba(94, 229, 255, 0.045);
}

.text-link {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 25px;
  color: var(--cyan);
  font-weight: 700;
  font-size: 14px;
}

.text-link:hover {
  color: #b2f4ff;
}

.credentials-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 18px;
}

.credential-panel {
  padding: 32px;
  border-radius: 21px;
}

.panel-heading {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 28px;
}

.panel-heading > svg {
  color: var(--cyan);
  margin-top: 2px;
}

.credential-panel h2 {
  margin: 0;
  font-size: 25px;
}

.credential-list,
.education-list {
  display: grid;
  gap: 13px;
}

.credential-list > div {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 13px;
  color: #cbdbe7;
  background: rgba(255, 255, 255, 0.02);
}

.credential-list svg {
  flex: 0 0 auto;
  color: var(--cyan);
}

.education-list > div {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.02);
}

.education-list h3 {
  margin: 0 0 7px;
  color: var(--text);
  font-size: 18px;
}

.education-list p {
  margin: 0;
  color: var(--muted);
}

.contact-section {
  background:
    radial-gradient(circle at 75% 60%, rgba(73, 111, 255, 0.12), transparent 28rem),
    linear-gradient(180deg, #07111d, #060b12);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 0.82fr;
  gap: 70px;
  align-items: start;
}

.contact-copy > p:not(.section-kicker) {
  max-width: 620px;
  color: var(--muted);
  line-height: 1.8;
  font-size: 17px;
}

.contact-details {
  display: grid;
  gap: 13px;
  margin-top: 36px;
}

.contact-details a,
.contact-details > div {
  display: flex;
  align-items: center;
  gap: 14px;
  color: #d8e8f4;
}

.contact-details svg {
  color: var(--cyan);
}

.contact-details span {
  display: grid;
  gap: 2px;
}

.contact-details small {
  color: #678299;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-form {
  display: grid;
  gap: 18px;
  padding: 29px;
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.contact-form label {
  display: grid;
  gap: 8px;
  color: #c6d8e6;
  font-size: 13px;
  font-weight: 700;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  outline: none;
  color: var(--text);
  padding: 13px 14px;
  background: rgba(3, 10, 18, 0.62);
  resize: vertical;
  transition: border-color 180ms ease, box-shadow 180ms ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: rgba(94, 229, 255, 0.55);
  box-shadow: 0 0 0 4px rgba(94, 229, 255, 0.07);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #526b7e;
}

footer {
  border-top: 1px solid var(--line);
  background: #050a11;
}

.footer-inner {
  min-height: 112px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.footer-inner > div {
  display: grid;
  gap: 5px;
}

.footer-inner strong {
  color: var(--text);
  font-family: "Space Grotesk", sans-serif;
}

.footer-inner span,
.footer-inner p {
  color: #6f879a;
  font-size: 13px;
}

@media (max-width: 1060px) {
  .desktop-nav {
    display: none;
  }

  .nav-cta {
    margin-left: auto;
  }

  .menu-button {
    display: inline-grid;
    place-items: center;
  }

  .mobile-nav {
    display: grid;
    width: min(1160px, calc(100% - 40px));
    margin: 0 auto 13px;
    padding: 10px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: rgba(8, 18, 30, 0.96);
  }

  .mobile-nav button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0;
    border-radius: 9px;
    padding: 12px;
    color: #b8c9d6;
    background: transparent;
  }

  .mobile-nav button:hover {
    color: var(--text);
    background: rgba(255, 255, 255, 0.035);
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .hero h1 {
    max-width: 900px;
  }

  .hero-visual {
    min-height: 430px;
  }

  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .credentials-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .container {
    width: min(100% - 28px, 1160px);
  }

  .section {
    padding: 82px 0;
  }

  .nav-inner {
    height: 68px;
  }

  .brand-copy {
    display: none;
  }

  .nav-cta {
    display: none;
  }

  .hero {
    min-height: auto;
    padding-top: 125px;
  }

  .hero h1 {
    font-size: clamp(3rem, 15vw, 5rem);
  }

  .hero-visual {
    min-height: 390px;
  }

  .profile-card {
    width: min(100%, 350px);
    transform: none;
  }

  .orbit-one {
    width: 360px;
    height: 360px;
  }

  .orbit-two {
    width: 390px;
    height: 220px;
  }

  .metrics-grid,
  .expertise-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .metrics-grid {
    margin-top: 48px;
  }

  .metric-card {
    min-height: 105px;
  }

  .section-heading,
  .experience-header,
  .footer-inner {
    align-items: flex-start;
    flex-direction: column;
  }

  .section-heading {
    margin-bottom: 36px;
  }

  .section-heading > p {
    max-width: 100%;
  }

  .experience-header time {
    white-space: normal;
  }

  .experience-card,
  .project-card,
  .expertise-card,
  .credential-panel,
  .contact-form {
    padding: 23px;
  }

  .footer-inner {
    justify-content: center;
    padding: 28px 0;
  }

  .footer-inner p {
    margin: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
