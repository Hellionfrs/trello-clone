# FullStack [Trello Clone]([https://trello-clone-eight-black.vercel.app](https://trello-clone-git-vitest-next-hellionfrs-projects.vercel.app))
This repository contains the Fullstack Trello Clone, built with Next.js 14, Server Actions, React, Prisma, Stripe, Tailwind, and Postgresql (Supabase).
## Summary
FullStack Trello Clone is an application that provides functionality similar to Trello. It allows users to manage their tasks and projects by creating boards, lists, and cards. With features such as authentication, organizations, activity logging, integration with Unsplash API for random cover images, and more, this application offers a comprehensive project management experience.

## Key Features

- Authentication
- Organizations / Workspaces
- Board creation
- Unsplash API for random beautiful cover images
- Activity log for the entire organization
- Board rename and delete
- List creation
- List rename, delete, drag & drop reorder, and copy
- Card creation
- Card description, rename, delete, drag & drop reorder, and copy
- Card activity log
- Board limit for every organization
- Stripe subscription for each organization to unlock unlimited boards
- Landing page
- MySQL DB
- Prisma ORM
- shadcnUI & TailwindCSS
## Prerequisites

Make sure you have Node.js version 18.x.x installed.

### Cloning the Repository

```ruby
git clone git@github.com:Hellionfrs/trello-clone.git
```

### Install Packages

```ruby
npm i
```

### Setup .env file
At the project's root create .env file
```ruby
code .env
```
and complete the following ENV variables
```ruby
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_something
CLERK_SECRET_KEY=sk_test_something
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL= database url of your preference
// DIRECT_URL = if using supabase

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY= get this access key from https://unsplash.com/

STRIPE_API_KEY= get from https://stripe.com/ => sk_test_something

NEXT_PUBLIC_APP_URL=http://localhost:3000 (on development) change it to the link after the deployment with the new link u get on vercel or any other application you are using for deployment

STRIPE_WEBHOOK_SECRET=whsec_something
```

### Setup Prisma
Add a MySQL Database (I used PlanetScale) and run the following 
```ruby
npx prisma generate
npx prisma db push
```

### Start the App

```ruby
npm run dev
```

## Deployment
The application is deployed and accessible at: [Trello Clone]([https://trello-clone-eight-black.vercel.app](https://trello-clone-git-vitest-next-hellionfrs-projects.vercel.app)https://trello-clone-git-vitest-next-hellionfrs-projects.vercel.app)

