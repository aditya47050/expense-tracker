## 📟 BudgetBuddy - Personal Finance Tracker

**BudgetBuddy** is a full-stack personal finance tracker built with:

* **React Native (Expo)** for the mobile frontend
* **Clerk** for authentication
* **Node.js + Express** for the backend
* **PostgreSQL (via Neon)** as the database
* **Upstash Redis** for rate limiting
* Optional **cron job** to prevent server cold starts on free hosting

---

### 📲 Features

* 🔐 Secure authentication using Clerk
* ➕ Add income/expense transactions
* 📊 View summary: balance, income, expenses
* 📃️ View and delete past transactions
* 🔄 Pull-to-refresh and offline-friendly UI
* 🌐 Rate limiting via Upstash Redis
* ☁️ Cloud-ready: supports serverless PostgreSQL and cron ping

---

## ✨ Tech Stack

| Frontend (Expo)     | Backend (Express)              | Infra                 |
| ------------------- | ------------------------------ | --------------------- |
| React Native (Expo) | Express.js                     | Neon PostgreSQL       |
| Clerk Auth          | PostgreSQL (via `postgres.js`) | Upstash Redis         |
| Zustand             | REST APIs                      | CRON (for cold start) |
| Expo Router         | Rate Limiter                   |                       |

---

## 🛠️ Getting Started

### ⚙️ Backend Setup

#### 1. Clone and Install

```bash
git clone https://github.com/yourusername/budgetbuddy-backend.git
cd budgetbuddy-backend
npm install
```

#### 2. Environment Variables

Create a `.env` file in the root and add:

```env
PORT=2000
DATABASE_URL=your_neon_postgres_url
API_URL=https://your-app-domain.com/api/health
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
NODE_ENV=development
```

#### 3. Run Locally

```bash
node index.js
```

Neon/Postgres table will auto-create if not present.

---

### 📱 Frontend Setup

Clone and setup the React Native frontend (already done):

```bash
cd budgetbuddy-frontend
npm install
```

Add this to your `app.config.js` or `app.json`:

```json
"extra": {
  "expoPublicClerkPublishableKey": "your_clerk_publishable_key"
}
```

#### Run on Emulator / Device

```bash
npx expo start
```

---

## 📡️ API Endpoints

All endpoints prefixed with `/api/transactions`

| Method | Endpoint                            | Description                   |
| ------ | ----------------------------------- | ----------------------------- |
| GET    | `/api/health`                       | Health check                  |
| POST   | `/api/transactions/`                | Add a new transaction         |
| GET    | `/api/transactions/:userId`         | Get all transactions for user |
| DELETE | `/api/transactions/:id`             | Delete a transaction          |
| GET    | `/api/transactions/summary/:userId` | Get balance, income, expenses |

---

## 🧶 Rate Limiting

Using Upstash Redis:

* 100 requests per minute
* Defined in `middleware/rateLimiter.js`

---

## 🔀 CRON (Optional, for Render/Free Hosting)

In production, cron runs every 14 mins to ping `/api/health` and prevent cold starts:

```js
"*/14 * * * *"
```

---

## 🔐 Security Notes

* ✅ Clerk **publishableKey** is public-safe
* ❌ Never expose Clerk **secret keys**, DB credentials, or JWTs in frontend or public repos

---

## 🛆 Deployment Suggestions

* **Backend**: Deploy on [Render](https://render.com), Railway, or Vercel Serverless
* **Frontend**: Use `EAS Build` to generate signed APK
* **Database**: [Neon](https://neon.tech) for serverless PostgreSQL

---

## 📸 Screenshots

Include app UI screenshots here (if needed later).

---

## 🧑‍💻 Author

**Aditya Kiran Mandhare**

📧 [adityamandhare47050@gmail.com](mailto:adityamandhare47050@gmail.com)

🔗 [GitHub](https://github.com/aditya47050) | [LinkedIn](https://www.linkedin.com/in/aditya-mandhare-00217a26b)
