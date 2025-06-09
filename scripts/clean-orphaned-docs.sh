#!/bin/bash

# Root docs directory
DOCS_DIR="docs"

# Supported source file extensions
EXTENSIONS=("ts" "tsx" "js" "jsx" "cjs" "mjs" "css")

# Make a temp file to store orphaned docs
ORPHANS=$(mktemp)

# Find all .md files under /docs
find "$DOCS_DIR" -type f -name "*.md" | while read -r mdfile; do
  # Remove .md extension to get the relative source path
  relative_path="${mdfile%.md}"
  found_match=false

  # Check if any matching source file exists
  for ext in "${EXTENSIONS[@]}"; do
    if [[ -f "${relative_path}.${ext}" ]]; then
      found_match=true
      break
    fi
  done

  # If no match was found, record this .md file as an orphan
  if [[ "$found_match" = false ]]; then
    echo "$mdfile" >> "$ORPHANS"
  fi
done

echo "The following orphaned docs will be removed:"
cat "$ORPHANS"
echo
read -p "Delete these files? (y/N): " confirm

if [[ "$confirm" == "y" ]]; then
  while read -r file; do
    rm "$file"
  done < "$ORPHANS"
  echo "✅ Orphaned docs deleted."
else
  echo "❌ Aborted. No files were deleted."
fi

# Clean up temp file
rm "$ORPHANS"
