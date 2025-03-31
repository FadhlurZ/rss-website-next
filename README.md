# RSS Website - Next

Developed by Muhammad Fadhlurrohman

This is the repository for the RSS Website. It is a simple application that retrieves news articles from the [NOS RSS Feeds](https://nos.nl/feeds). The application consists of two pages. 

-   The main overview that shows the latest articles from the selected RSS feed
-   A detail page of an article

Next to that there is also an api route found under /pages/api/rss/. The API route acts as a proxy for the app to avoid CORS errors. The API route is used when fetching data. An example url for the api is:

```
http://localhost:3000/api/rss/:feed
```

:feed is replaced by the frontend to retrieve the latest news based on the selected feed. The following feeds are used by the app:

- `nosnieuwsalgemeen` (General news)
- `nosnieuwsbinnenland` (Domestic news)
- `nosnieuwsbuitenland` (World news)
- `nossportalgemeen` (Sports news)
- `nosvoetbal` (Football news)
- `nosnieuwstech` (Tech news)

The frontend then uses this api url to retrieve the data using the hook found in `useRSSFeed.ts`

## First time setup

-   Make sure you use the current Node version (found in .nvmrc) by running the following command. If have [nvm](https://github.com/nvm-sh/nvm) installed, you can use the following command to switch to the correct node version: `nvm use`
-   Install packages using `npm install`
-   After successful install run the development environment using `npm run dev`
-   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

A quick overview of the project is seen below

```text
euromoslim-os-next
├─ node_modules/
├─ src/
│  ├─ components            (Reusable components used within the app)
│  ├─ helpers               (Methods used troughout the system)
│  ├─ hooks                 (Hooks used within the app)
│  ├─ pages                 (Pages of the app)
│  ├─ store                 (Zustand store)
│  ├─ styles                (Global styling)
│  ├─ typings               (Typescript interfaces and constants)
├─ package.json
├─ README.md
```

## Commands

The following commands are found in `package.json` are used as follows.

`npm run dev` - Starts the development server

`npm run build` - Create a Next build

## Next.js

This application uses the `pages` router of Next.js. To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## App techniques overview

The system uses [Tanstack Query](https://tanstack.com/query/latest) and [Zustand](https://github.com/pmndrs/zustand) for state management. [Tailwind](https://tailwindcss.com/)is used for styling.
