# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository organizes PSL Foundation's application to OpenAI's People-First AI Fund on behalf of PolicyEngine (fiscally sponsored project) - a $50 million initiative supporting nonprofits and community-based organizations at every stage of AI adoption.

## Fiscal Sponsorship

**Important**: PolicyEngine is fiscally sponsored by PSL Foundation. Therefore:
- **Applicant**: PSL Foundation (the 501(c)(3) organization)
- **Fiscally Sponsored Project**: PolicyEngine
- **Application Focus**: PolicyEngine's work using AI to make policy analysis accessible

The application will be submitted by PSL Foundation, with all work and funding supporting PolicyEngine's operations and mission.

## Grant Details

- **Total Fund**: $50 million
- **Grant Size**: Up to 10% of operating budget (unrestricted grants)
- **Application Deadline**: October 8, 2025 (11:00 PM PT)
- **Grant Distribution**: By end of 2025
- **Application Period**: September 8 - October 8, 2025

## Eligibility Requirements

### Organization
- U.S.-based public charity with valid 501(c)(3) status
- Located in 50 U.S. states or D.C.
- Annual operating budget: $500,000 - $10 million
- Primarily conducting work within the U.S.
- All proposed work must be U.S.-focused

### Important Restrictions
- No applications from programs/centers/departments within larger institutions
- Only one application per organization
- Must be submitted via application portal

## Repository Structure

- `docs/`: Application documents and responses
  - `application/`: Application responses
  - `budget/`: Budget documentation
- `materials/`: Reference materials including fund guidelines
- `scripts/`: Python scripts for content assembly and site synchronization
- `site/`: React + Vite microsite for reviewing application progress

## Key Commands

### Site Development
```bash
# From site/ directory
npm install                     # Install dependencies
npm run dev                     # Start development server
npm run build                   # Build for production
```

### Content Assembly
```bash
# From root directory
python3 scripts/sync_content.py  # Sync content to site
```

## Development Workflow

1. Edit application sections in `docs/`
2. Run sync script to update site content
3. Review progress using the local development site
4. Commit changes and push

## Grant Focus Areas

This application should emphasize:

**AI Literacy**:
- Building understanding and capacity around AI technologies
- Democratizing access to AI knowledge
- Training and education programs

**Community Innovation**:
- Using AI to address community needs
- Participatory approach to AI development
- Community-driven solutions

**Economic Opportunity**:
- Creating economic opportunities through AI
- Workforce development
- Economic mobility and inclusion

**AI Adoption Stages**:
- Exploration: Learning about AI potential
- Pilots: Testing AI solutions
- Active Deployment: Implementing AI at scale

## Content Development Guidelines

- Focus on U.S. impact and U.S.-based work
- Emphasize community-centered approach
- Demonstrate expertise and track record
- Show clear connection to AI literacy, innovation, or economic opportunity
- Highlight unrestricted nature of grant (flexibility in use)
- Address stage of AI adoption (exploration, pilots, or deployment)

## PolicyEngine Context

PolicyEngine is a nonprofit organization that builds open-source tools to analyze the impacts of public policy on society. Our work directly aligns with the People-First AI Fund priorities:

- **AI Literacy**: Making complex policy analysis accessible through AI-powered tools
- **Community Innovation**: Democratizing policy analysis for all communities
- **Economic Opportunity**: Analyzing policies that affect economic mobility
- **Technology for Good**: Using AI to improve evidence-based policymaking

## Grant Philosophy

OpenAI emphasizes:
- **Unrestricted funding**: Supporting organizational expertise and flexibility
- **Community-first**: Centering community needs and voices
- **AI for all**: Making AI accessible across different adoption stages
- **Nonprofit capacity**: Building long-term capacity, not just project funding

## Site Navigation

The review site includes these key sections:
- **Home**: Overview and fund summary
- **Application**: Complete application responses
- **Budget**: Budget details (up to 10% of operating budget)
- **Impact**: Expected impact and outcomes
- **AI Strategy**: Current and planned AI usage

## Assessment Criteria

Applications likely assessed on:
- Alignment with fund priorities (literacy, innovation, opportunity)
- Organizational capacity and track record
- Community impact potential
- Thoughtful approach to AI adoption
- Budget appropriateness
- Sustainability beyond grant period

## Deployment

- Site auto-deploys to GitHub Pages on pushes to `main`
- CI/CD validates builds on pull requests

This repository provides a foundation for developing a comprehensive application to OpenAI's People-First AI Fund.
