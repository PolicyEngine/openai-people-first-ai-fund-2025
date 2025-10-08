#!/usr/bin/env python3
"""
Update word counts in application question markdown files.
Extracts draft responses and automatically updates word count fields.
"""

import re
from pathlib import Path


def extract_draft_response(content):
    """Extract the draft response section from markdown."""
    match = re.search(r'## Draft Response\n\n(.*?)\n---', content, re.DOTALL)
    if match:
        return match.group(1).strip()
    return None


def count_words(text):
    """Count words in text."""
    return len(text.split())


def update_word_count(content, word_count):
    """Update the word count line in the markdown content."""
    # Update the TBD line
    content = re.sub(
        r'\*\*Current Count\*\*: \[TBD\]',
        f'**Current Count**: {word_count} words',
        content
    )

    # Update the final word count line
    content = re.sub(
        r'\*\*Word Count\*\*: \d+ words ✓',
        f'**Word Count**: {word_count} words ✓',
        content
    )

    return content


def process_question_file(filepath):
    """Process a single question file and update word count."""
    print(f"\nProcessing: {filepath.name}")

    content = filepath.read_text()

    # Extract word limit
    word_limit_match = re.search(r'\*\*Word Limit\*\*: Maximum (\d+) words', content)
    if not word_limit_match:
        print(f"  ⚠️  No word limit found")
        return

    word_limit = int(word_limit_match.group(1))

    # Extract and count draft response
    draft = extract_draft_response(content)
    if not draft:
        print(f"  ⚠️  No draft response found")
        return

    word_count = count_words(draft)

    # Update content
    updated_content = update_word_count(content, word_count)
    filepath.write_text(updated_content)

    # Report
    status = "✓" if word_count <= word_limit else "⚠️  OVER LIMIT"
    available = word_limit - word_count
    print(f"  Word count: {word_count}/{word_limit} {status}")
    if word_count <= word_limit:
        print(f"  Available: {available} words")


def main():
    """Update word counts in all application question files."""
    print("=" * 60)
    print("OpenAI People-First AI Fund - Word Count Updater")
    print("=" * 60)

    project_root = Path(__file__).parent.parent
    application_dir = project_root / "docs" / "application"

    # Find all question markdown files
    question_files = sorted(application_dir.glob("question-*.md"))

    if not question_files:
        print(f"\n⚠️  No question files found in {application_dir}")
        return 1

    total_words = 0
    total_limit = 0

    for filepath in question_files:
        process_question_file(filepath)

        # Get counts for summary
        content = filepath.read_text()
        word_limit_match = re.search(r'\*\*Word Limit\*\*: Maximum (\d+) words', content)
        word_count_match = re.search(r'\*\*Word Count\*\*: (\d+) words', content)

        if word_limit_match and word_count_match:
            total_limit += int(word_limit_match.group(1))
            total_words += int(word_count_match.group(1))

    print("\n" + "=" * 60)
    print(f"Total: {total_words}/{total_limit} words")
    print(f"Available: {total_limit - total_words} words")
    print("=" * 60)

    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main())
