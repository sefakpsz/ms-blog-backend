# ms-blog-backend

Look at the [Nitro documentation](https://nitro.unjs.io/) to learn more.

## Endpoints

```bash
# Auth
POST /auth/login
# Blog
GET /blog/posts
POST /blog/post/create
GET /blog/post/:id
DELETE /blog/post/:id
```

## Setup

Make sure to install the dependencies:

```bash
bun install
```

## Development Server

Start the development server on <http://localhost:3000>

```bash
bun run dev
```

## Production

Build the application for production:

```bash
bun run build
```