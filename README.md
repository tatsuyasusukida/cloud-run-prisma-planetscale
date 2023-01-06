# cloud-run-prisma-planetscale

## Quick Start

```sh
npm install
npm run build
npm start
```

## Deploy to Cloud Run

```sh
gcloud run deploy prisma \
  --source . \
  --region asia-northeast1 \
  --allow-unauthenticated \
  --set-env-vars "DATABASE_URL=mysql://xxxx:yyyy@ap-northeast.connect.psdb.cloud/zzzz?sslaccept=strict"
```
