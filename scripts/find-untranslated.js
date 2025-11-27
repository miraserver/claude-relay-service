#!/usr/bin/env node

/**
 * Find Untranslated Strings - Windows Compatible
 *
 * Scans Vue files for hardcoded Chinese text that needs translation
 * Usage: node scripts/find-untranslated.js
 */

const fs = require('fs')
const path = require('path')

// Configuration
const SPA_DIR = path.join(__dirname, '..', 'web', 'admin-spa', 'src')
const EXTENSIONS = ['.vue', '.js', '.ts']
const EXCLUDE_DIRS = ['node_modules', 'dist', 'build', '.git']

// Chinese character detection regex
const CHINESE_REGEX = /[\u4e00-\u9fa5]+/g

// Patterns to exclude (already translated or should not be translated)
const EXCLUDE_PATTERNS = [
  /\$t\(['"]/, // Already using $t()
  /t\(['"]/, // Already using t()
  /\{\{ \$t\(/, // Template $t()
  /class=/, // CSS classes
  /style=/, // Inline styles
  /@click=/, // Vue directives
  /@/, // Vue directives
  /v-/, // Vue directives
  /<!--.*-->/, // HTML comments
  /\/\/.*/, // JS comments
  /\/\*[\s\S]*?\*\//, // Multi-line comments
  /console\./, // Console logs
  /import .* from/ // Import statements
]

let totalFiles = 0
let filesWithChinese = 0
let totalMatches = 0

/**
 * Check if line should be excluded from detection
 */
function shouldExcludeLine(line) {
  return EXCLUDE_PATTERNS.some((pattern) => pattern.test(line))
}

/**
 * Recursively scan directory for files
 */
function scanDirectory(dir) {
  const results = []

  try {
    const files = fs.readdirSync(dir)

    for (const file of files) {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory()) {
        if (!EXCLUDE_DIRS.includes(file)) {
          results.push(...scanDirectory(filePath))
        }
      } else if (stat.isFile()) {
        const ext = path.extname(file)
        if (EXTENSIONS.includes(ext)) {
          results.push(filePath)
        }
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error.message)
  }

  return results
}

/**
 * Analyze a single file for untranslated strings
 */
function analyzeFile(filePath) {
  totalFiles++

  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const lines = content.split('\n')
    const matches = []

    lines.forEach((line, index) => {
      if (shouldExcludeLine(line)) {
        return
      }

      const chineseMatches = line.match(CHINESE_REGEX)
      if (chineseMatches && chineseMatches.length > 0) {
        matches.push({
          line: index + 1,
          content: line.trim(),
          matches: chineseMatches
        })
      }
    })

    if (matches.length > 0) {
      filesWithChinese++
      totalMatches += matches.length
      return { filePath, matches }
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message)
  }

  return null
}

/**
 * Format output for console
 */
function formatOutput(results) {
  console.log(`\n${'='.repeat(80)}`)
  console.log('🔍 UNTRANSLATED STRINGS REPORT')
  console.log(`${'='.repeat(80)}\n`)

  if (results.length === 0) {
    console.log('✅ No untranslated Chinese strings found!\n')
    return
  }

  results.forEach(({ filePath, matches }) => {
    const relativePath = path.relative(SPA_DIR, filePath)
    console.log(`\n📄 ${relativePath}`)
    console.log('-'.repeat(80))

    matches.forEach(({ line, content, matches: chineseMatches }) => {
      console.log(`  Line ${line}: ${content}`)
      console.log(`    → Found: ${chineseMatches.join(', ')}\n`)
    })
  })

  console.log(`\n${'='.repeat(80)}`)
  console.log('📊 SUMMARY')
  console.log('='.repeat(80))
  console.log(`Total files scanned: ${totalFiles}`)
  console.log(`Files with Chinese text: ${filesWithChinese}`)
  console.log(`Total untranslated strings: ${totalMatches}`)
  console.log(`${'='.repeat(80)}\n`)
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Starting untranslated strings scan...')
  console.log(`📁 Scanning directory: ${SPA_DIR}\n`)

  const files = scanDirectory(SPA_DIR)
  console.log(`Found ${files.length} files to analyze...\n`)

  const results = files.map(analyzeFile).filter((result) => result !== null)

  formatOutput(results)

  // Exit with error code if untranslated strings found
  process.exit(results.length > 0 ? 1 : 0)
}

// Run the script
main()
