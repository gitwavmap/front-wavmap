# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the root of the project:

- `npm install` - Install dependencies
- `npm run dev` - Start local dev server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview build locally before deploying
- `npm run astro ...` - Run CLI commands like `astro add`, `astro check`

## Architecture

This is a multilingual Astro SSR application with Directus CMS integration for content management and authentication. The application includes internationalization (i18n) support with French, Spanish, and English.

### Key Technologies:

- **Frontend Framework**: Astro with SSR enabled (`output: 'server'`, Node.js adapter)
- **Backend Integration**: Directus CMS via `@directus/sdk`
- **Authentication**: Cookie-based authentication with session tokens
- **Internationalization**: Paraglide.js with inlang project for multi-language support
- **Styling**: Tailwind CSS with custom theme and animations
- **Environment**: `astro:env/client` for client-accessible environment variables

### Project Structure:

```
src/
├── lib/directus.ts          # Directus client configuration with token management
├── middleware/index.ts      # Authentication & i18n middleware (route protection)
├── components/              # Reusable Astro components
│   ├── AuthForm.astro      # Login/register form with client-side JS
│   ├── PostForm.astro      # Post creation/editing form
│   ├── LanguageSelector.astro # Language switching component
│   └── Welcome.astro       # Welcome component
├── layouts/Layout.astro     # Base HTML layout with Inter font
├── pages/                   # File-based routing
│   ├── api/                # Server-side API endpoints
│   │   ├── auth/           # Authentication endpoints
│   │   │   ├── login.ts    # POST /api/auth/login
│   │   │   ├── register.ts # POST /api/auth/register
│   │   │   ├── logout.ts   # Logout functionality
│   │   │   ├── forgot-password.ts
│   │   │   ├── reset-password.ts
│   │   │   └── send-verification.ts
│   │   └── posts/          # Post management endpoints
│   │       ├── new.ts      # Create new post
│   │       └── update.ts   # Update existing post
│   ├── dashboard/          # Protected dashboard pages
│   │   ├── index.astro     # Dashboard home with post listings
│   │   └── posts/          # Post management pages
│   │       ├── [id].astro  # Edit specific post
│   │       └── new.astro   # Create new post page
│   ├── index.astro         # Homepage with gradient design
│   ├── login.astro         # Login page
│   ├── register.astro      # Registration page
│   ├── welcome.astro       # Welcome page
│   ├── forgot-password.astro
│   └── reset-password.astro
├── paraglide/              # Generated i18n files
│   ├── messages.js         # Message imports
│   ├── runtime.js          # Language runtime
│   └── messages/           # Language-specific message files
│       ├── en.js
│       ├── fr.js
│       └── es.js
└── styles/globals.css      # Global styles with custom CSS classes
```

### Authentication & Security:

1. **Middleware Protection**: `/dashboard` routes protected by `src/middleware/index.ts`
2. **Token Management**: `directus_session_token` cookie with 7-day expiry
3. **Client Functions**: Separate token client for server-side API calls
4. **Route Guards**: Invalid tokens redirect to `/login` with cookie cleanup
5. **User Context**: Authenticated user available in `Astro.locals.user`

### Internationalization (i18n):

- **Languages**: English (default), French, Spanish
- **Configuration**: `project.inlang/settings.json` with message format plugin
- **Message Files**: JSON files in `/messages/` directory
- **Detection**: URL param > Cookie > Accept-Language header priority
- **Persistence**: Language preference stored in `preferred-language` cookie
- **Runtime**: Paraglide.js manages language switching and message loading

### Directus Integration:

- **Client Setup**: `src/lib/directus.ts` with cookie authentication
- **Token Clients**: Separate authenticated clients for server-side requests
- **Environment**: `DIRECTUS_URL` required for client connection
- **Collections**: Posts collection with CRUD operations
- **Error Handling**: Token validation with automatic cleanup on failure

### Styling & UI:

- **Framework**: Tailwind CSS with custom configuration
- **Theme**: Custom primary/secondary color palettes with gradients
- **Typography**: Inter font family from Google Fonts
- **Components**: Glass-card effects, animations (float, fade-in, slide-up)
- **Responsive**: Mobile-first design with breakpoint classes
- **Animations**: Custom keyframes for floating elements and transitions