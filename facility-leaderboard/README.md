## Contributing

This is an open source project hosted at https://facility-leaderboard.web.app/leaderboard for the facility community. You can also find us on discord: https://discord.gg/7AfpxXArWv

Any PR/ update/ enhancement is welcome. My only requirement is that it must build without errors (including lint) and -if it is a GUI change- that the majority of users would be for it.

My assumption/ expectation is that contributors will be only interested in the src/app folders, as this is the actual functional front end

## Getting Started

If you are new to nextJS, typescript, react, etc. - you will want to install npm/npx (or your choice of manager; it can be yarn etc) and then run 
```bash
npm install
```
In the root directory

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

To run/set up firebase:
```bash
firebase login
firebase init
firebase deploy
```

## Using your own backend

This application is expecting - and is linked to - a firestore backend. This can be replaced or deployed under a different firestore, but you will need to fill out .env.local params
Firebase hosting is free under the static build of nextJS, which is what this website is setup for.

Since the project is nextJS, a different host can work (update package.json) - but you may then be going with a different backend, which would require a re-write of the fetch processes in leaderboard.tsx

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!