# scaling-umbrella

An Nx-powered monorepo hosting Cloudflare Workers for 2 accounts:
- **Mr. Rainbowsmoke** - `apps/mr-rainbowsmoke`
- **RainbowsmokeOfficial** - `apps/rainbowsmoke-official`

## Structure

```
scaling-umbrella/
├── apps/
│   ├── mr-rainbowsmoke/         # Cloudflare Worker for Mr. Rainbowsmoke account
│   │   ├── src/
│   │   │   └── index.ts         # Worker entry point
│   │   ├── wrangler.toml        # Cloudflare configuration
│   │   └── project.json         # Nx project configuration
│   └── rainbowsmoke-official/   # Cloudflare Worker for RainbowsmokeOfficial account
│       ├── src/
│       │   └── index.ts         # Worker entry point
│       ├── wrangler.toml        # Cloudflare configuration
│       └── project.json         # Nx project configuration
├── nx.json                      # Nx workspace configuration
└── package.json
```

## Prerequisites

- Node.js (v18 or higher)
- npm
- Cloudflare account credentials

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run a worker locally:

```bash
# Mr. Rainbowsmoke worker
nx dev mr-rainbowsmoke

# RainbowsmokeOfficial worker
nx dev rainbowsmoke-official
```

### Deployment

Before deploying, configure your Cloudflare account credentials:

1. Login to Wrangler:
   ```bash
   npx wrangler login
   ```

2. Update the `account_id` in each worker's `wrangler.toml` file

Deploy a worker:

```bash
# Deploy Mr. Rainbowsmoke worker
nx deploy mr-rainbowsmoke

# Deploy RainbowsmokeOfficial worker
nx deploy rainbowsmoke-official
```

### Linting

```bash
# Lint all projects
nx run-many -t lint

# Lint specific project
nx lint mr-rainbowsmoke
nx lint rainbowsmoke-official
```

## Nx Commands

### View Project Graph

```bash
nx graph
```

### Show Project Details

```bash
nx show project mr-rainbowsmoke
nx show project rainbowsmoke-official
```

### Run Tasks Across Projects

```bash
# Run dev for all projects
nx run-many -t dev

# Run deploy for all projects
nx run-many -t deploy
```

## Configuration

### Wrangler Configuration

Each worker has its own `wrangler.toml` configuration file. Update these files with:
- `account_id`: Your Cloudflare account ID
- Environment-specific settings
- Worker bindings (KV, R2, D1, etc.)

### Nx Configuration

The workspace is configured with:
- TypeScript support
- ESLint for code quality
- Prettier for code formatting
- Cloudflare Workers support via Wrangler

## Adding New Projects

To add a new Cloudflare Worker project:

```bash
npx nx g @nx/js:library <project-name> --directory=apps/<project-name> --projectNameAndRootFormat=as-provided --bundler=none --unitTestRunner=none --simpleName
```

Then:
1. Create a `wrangler.toml` file
2. Update `src/index.ts` with worker code
3. Update `project.json` with dev and deploy targets

## Learn More

- [Nx Documentation](https://nx.dev)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
