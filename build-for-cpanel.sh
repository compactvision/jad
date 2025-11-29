#!/bin/bash

echo "🔨 Building assets for cPanel deployment..."

# Installer et build les assets
npm ci
npm run build

echo "✅ Build complete!"