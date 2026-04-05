# 🌌 Radifans — Portfolio (Aether Pixel Edition) 🎮

Welcome to the **Aether Pixel** edition of my portfolio! Fully rewritten from Next.js to **Astro 4.x**, this version features a custom "HD-2D" gaming aesthetic with a deep arcade soul.

---

## 🚀 Character Classes (Tech Stack)

*   **Framework**: [Astro 4.x](https://astro.build/) (Static First)
*   **Aesthetics**: Vanilla CSS (RPG UI, CRT Scanlines, Pixel Scenarios)
*   **Typography**: *Press Start 2P*, *Outfit*, and *VT323*
*   **Infrastructure**: [Vercel](https://vercel.com/) (Static Hosting + Standalone Serverless Functions)
*   **Communications**: [Resend HTTP API](https://resend.com/)

---

## 🛠️ Station Setup (Getting Started)

First, navigate to the portfolio directory and install dependencies:

```bash
cd astro-portfolio
npm install --legacy-peer-deps
```

Then, start the local development world:

```bash
npm run dev
```

Open **[http://localhost:4321](http://localhost:4321)** with your browser to explore the realm.

---

## 🗺️ Project Atlas

*   `src/data/`: The "Single Source of Truth." Manage your **bio**, **skills**, **experience**, and **projects** here.
*   `src/components/`: Modular "Gear" (UI components) — Hero, Skills, Quest Log, etc.
*   `api/send-email.js`: The standalone "Save Point" (Contact Form API).
*   `public/images/`: Your 16-bit environment scenario and character assets.

---

## 🚢 Deployment (The World Map)

This project is optimized for **Vercel**. 

1.  **Framework**: Set to `Astro`.
2.  **Root Directory**: Set to `astro-portfolio`.
3.  **Environment Variables**: Ensure `RESEND_API_KEY` and `RESEND_RECIPIENT_EMAIL` are configured in your dashboard.

---

**Adventure on!** 🏹⚔️🏆
