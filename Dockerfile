# Dev and build environment for the Astro site.
#
# This exists so the project can be built and served without installing a
# matching Node on the host: Astro 7 requires Node >= 22.12.0.
# Production is deployed by Vercel, not from this image.
FROM node:22-bookworm-slim

WORKDIR /app

# Install dependencies in their own layer so editing source does not
# invalidate the npm install cache.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Astro's default dev port.
EXPOSE 4321

# --host binds to 0.0.0.0; without it the dev server listens only on the
# container's loopback and is unreachable from the host.
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
