#!/bin/sh
# One check for people and CI: lint, unit tests, build once, style guard, e2e against the build.
# The exit code is the real result: set -e stops at the first failing step, and no step is piped.
set -eu
cd "$(dirname "$0")/.."

step() { echo; echo "== $1"; }

step "lint";        npm run lint
step "unit tests";  npm run test:unit
step "build";       npm run build
step "style guard"; npm run guard
step "e2e";         npx playwright test

echo; echo "check: all steps passed"
