#!/usr/bin/env node

/**
 * Setup Git Hooks - Windows Compatible
 *
 * Installs git hooks to automatically check for untranslated strings
 * Usage: node scripts/setup-hooks.js
 */

const fs = require('fs')
const path = require('path')

const HOOKS_DIR = path.join(__dirname, '..', '.git', 'hooks')
const PRE_COMMIT_HOOK = path.join(HOOKS_DIR, 'pre-commit')

const PRE_COMMIT_CONTENT = `#!/bin/sh
#
# Pre-commit hook to check for untranslated Chinese strings
# Automatically installed by setup-hooks.js
#

echo ""
echo "🔍 Checking for untranslated strings..."
echo ""

node scripts/find-untranslated.js

if [ $? -ne 0 ]; then
  echo ""
  echo "❌ Found untranslated strings!"
  echo ""
  echo "Please translate them before committing."
  echo "Or use 'git commit --no-verify' to skip this check."
  echo ""
  exit 1
fi

echo "✅ All strings are translated"
echo ""
exit 0
`

/**
 * Main execution
 */
function main() {
  console.log('\n🚀 Setting up git hooks...\n')

  // Check if .git directory exists
  if (!fs.existsSync(path.join(__dirname, '..', '.git'))) {
    console.error('❌ Error: Not a git repository!')
    console.error('   Please run this script from a git repository.\n')
    process.exit(1)
  }

  // Create hooks directory if it doesn't exist
  if (!fs.existsSync(HOOKS_DIR)) {
    fs.mkdirSync(HOOKS_DIR, { recursive: true })
    console.log('✅ Created hooks directory')
  }

  // Write pre-commit hook
  try {
    fs.writeFileSync(PRE_COMMIT_HOOK, PRE_COMMIT_CONTENT, { mode: 0o755 })
    console.log('✅ Installed pre-commit hook')
  } catch (error) {
    console.error('❌ Failed to install pre-commit hook:', error.message)
    process.exit(1)
  }

  console.log('\n✅ Git hooks setup completed!\n')
  console.log('The pre-commit hook will now check for untranslated strings')
  console.log('before each commit.\n')
  console.log('To bypass the check, use: git commit --no-verify\n')
}

// Run the script
main()
