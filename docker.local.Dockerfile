FROM node:18-alpine3.17 as builder

# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files

COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Run linting before build
RUN npm run lint
# Build the app
RUN npm run build


# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/dist /usr/share/nginx/html
# Add your nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]