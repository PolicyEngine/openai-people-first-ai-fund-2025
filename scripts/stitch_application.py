#!/usr/bin/env python3
"""
Stitch individual question markdown files into a complete application document.
"""

import re
from pathlib import Path
from datetime import datetime


def extract_question_content(filepath):
    """Extract the question number, prompt, and draft response."""
    content = filepath.read_text()

    # Extract question number from filename
    match = re.search(r'question-(\d+)', filepath.name)
    if not match:
        return None

    question_num = match.group(1)

    # Extract word limit
    word_limit_match = re.search(r'\*\*Word Limit\*\*: Maximum (\d+) words', content)
    word_limit = word_limit_match.group(1) if word_limit_match else "Unknown"

    # Extract word count
    word_count_match = re.search(r'\*\*Word Count\*\*: (\d+) words', content)
    word_count = word_count_match.group(1) if word_count_match else "TBD"

    # Extract prompt
    prompt_match = re.search(r'## Prompt\n(.*?)\n\n', content, re.DOTALL)
    prompt = prompt_match.group(1).strip() if prompt_match else "No prompt found"

    # Extract draft response
    draft_match = re.search(r'## Draft Response\n\n(.*?)\n---', content, re.DOTALL)
    draft = draft_match.group(1).strip() if draft_match else "No draft found"

    return {
        'number': question_num,
        'word_limit': word_limit,
        'word_count': word_count,
        'prompt': prompt,
        'draft': draft,
    }


def generate_complete_application(questions, output_path):
    """Generate a complete application document."""

    output = []
    output.append("# OpenAI People-First AI Fund Application")
    output.append("")
    output.append("**Organization**: PSL Foundation")
    output.append("**Primary Project**: PolicyEngine")
    output.append("**Deadline**: October 8, 2025 (11:00 PM PT)")
    output.append(f"**Generated**: {datetime.now().strftime('%B %d, %Y')}")
    output.append("")
    output.append("---")
    output.append("")

    # Add each question
    for q in questions:
        output.append(f"## Question {q['number']}")
        output.append("")
        output.append(f"**Word Limit**: {q['word_limit']} words")
        output.append(f"**Current Count**: {q['word_count']} words")
        output.append("")
        output.append("### Prompt")
        output.append("")
        output.append(q['prompt'])
        output.append("")
        output.append("### Response")
        output.append("")
        output.append(q['draft'])
        output.append("")
        output.append("---")
        output.append("")

    # Summary
    total_count = sum(int(q['word_count']) for q in questions if q['word_count'] != 'TBD')
    total_limit = sum(int(q['word_limit']) for q in questions)

    output.append("## Summary")
    output.append("")
    output.append(f"**Total Words**: {total_count}/{total_limit}")
    output.append(f"**Available**: {total_limit - total_count} words")
    output.append("")

    # Write output
    output_path.write_text('\n'.join(output))

    return total_count, total_limit


def main():
    """Stitch application questions into complete document."""
    print("=" * 60)
    print("OpenAI People-First AI Fund - Application Stitcher")
    print("=" * 60)

    project_root = Path(__file__).parent.parent
    application_dir = project_root / "docs" / "application"
    output_path = application_dir / "complete-application.md"

    # Find all question files
    question_files = sorted(application_dir.glob("question-*.md"))

    if not question_files:
        print(f"\n⚠️  No question files found in {application_dir}")
        return 1

    print(f"\nFound {len(question_files)} question files")

    # Extract content from each
    questions = []
    for filepath in question_files:
        q = extract_question_content(filepath)
        if q:
            questions.append(q)
            print(f"  ✓ Question {q['number']}: {q['word_count']}/{q['word_limit']} words")

    # Generate complete application
    print(f"\nGenerating: {output_path}")
    total_count, total_limit = generate_complete_application(questions, output_path)

    print("\n" + "=" * 60)
    print(f"Complete application generated: {output_path.name}")
    print(f"Total: {total_count}/{total_limit} words")
    print(f"Available: {total_limit - total_count} words")
    print("=" * 60)

    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main())
