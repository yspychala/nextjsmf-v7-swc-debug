  NEXT_VERSION=$(jq --raw-output '.dependencies.next' package.json)
  echo ""
  echo "# Install optional dependencies for Next.js (Version : $NEXT_VERSION) to avoid SWC packages error on server start."
  npm i next@"$NEXT_VERSION" --include=optional --silent

  echo "✓ Installation is done"
  echo ""