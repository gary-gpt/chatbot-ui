#!/bin/bash

# === Verify Documentation Coverage ===
# Checks if all relevant source files have been documented.

echo "🧪 Verifying documentation coverage..."

# 1. Collect all relevant source files (excluding tests, node_modules, etc.)
echo "🔍 Scanning source files..."
find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.json" \) \
  ! -path "./node_modules/*" \
  ! -path "./.next/*" \
  ! -path "./docs/*" \
  ! -path "./scripts/*" \
  ! -name "*.d.ts" \
  | sort > .all-source-files.txt

# 2. Collect all .md documentation files
echo "📄 Scanning markdown documentation..."
find docs/dev-notes -type f -name "*.md" | sort > .all-docs-generated.txt

# 3. Extract documented source filenames from index.json (if it exists)
if [ -f docs/dev-notes/index.json ]; then
  echo "🧠 Scanning index.json..."
  jq -r '.[].file' docs/dev-notes/index.json | sort > .indexed-files.txt
else
  echo "⚠️ index.json not found!"
  touch .indexed-files.txt
fi

# 4. Compare
missing_docs=$(comm -23 .all-source-files.txt .indexed-files.txt)
extra_docs=$(comm -13 .all-source-files.txt .all-docs-generated.txt)

echo ""
echo "📊 Documentation Summary:"
echo "----------------------------"
echo "Source files scanned: $(wc -l < .all-source-files.txt)"
echo "Markdown docs found : $(wc -l < .all-docs-generated.txt)"
echo "Indexed entries     : $(wc -l < .indexed-files.txt)"

# Show missing or extra documentation
echo ""
if [ -n "$missing_docs" ]; then
  echo "❌ Missing Documentation:"
  echo "$missing_docs"
else
  echo "✅ All source files are documented."
fi

if [ -n "$extra_docs" ]; then
  echo ""
  echo "⚠️ Orphan Markdown Docs (no matching source file):"
  echo "$extra_docs"
fi

# Cleanup
rm -f .all-source-files.txt .all-docs-generated.txt .indexed-files.txt

echo ""
echo "✅ Verification complete."
