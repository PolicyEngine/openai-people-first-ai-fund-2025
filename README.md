# OpenAI People-First AI Fund Application

PSL Foundation's application to OpenAI's People-First AI Fund on behalf of PolicyEngine (fiscally sponsored project).

## Grant Overview

- **Funder**: OpenAI
- **Fund**: People-First AI Fund
- **Total Fund Size**: $50 million
- **Grant Size**: Limited to 10% of operating budget (unrestricted)
- **Application Deadline**: October 8, 2025 (11:00 PM PT)
- **Grant Distribution**: By end of 2025
- **Application Period**: September 8 - October 8, 2025

## Focus Areas

The fund supports nonprofits and community-based organizations at every stage of AI adoption:

- **AI Literacy**: Building understanding and capacity around AI technologies
- **Community Innovation**: Using AI to address community needs
- **Economic Opportunity**: Creating economic opportunities through AI
- **AI Adoption**: From exploration to pilots to active deployment

## Eligibility

### Organization Requirements
- U.S.-based public charity with valid 501(c)(3) status
- Located in and primarily conducting work within 50 U.S. states or D.C.
- Annual operating budget: **$500,000 - $10 million**
- In compliance with 501(c)(3) requirements
- All proposed work must be U.S.-focused

### Important Restrictions
- No applications from programs/centers/departments within larger institutions
- Only one application per organization
- Must be completed in full via application portal

## Fiscal Sponsorship

**Applicant**: PSL Foundation (501(c)(3) fiscal sponsor)
**Fiscally Sponsored Project**: PolicyEngine

Since PolicyEngine is fiscally sponsored by PSL Foundation, PSL Foundation will be the legal applicant for this grant, with all work and funding supporting PolicyEngine's mission and operations.

## Grant Details

- **Type**: Unrestricted grants
- **Amount**: Up to 10% of your operating budget
- **Philosophy**: Supporting expertise of nonprofit and community-based organizations

## Repository Structure

```
openai-people-first-ai-fund-2025/
├── docs/                    # Application documents and responses
│   ├── application/        # Application responses
│   └── budget/             # Budget documentation
├── materials/               # Reference materials and fund documents
├── scripts/                 # Assembly and content management scripts
└── site/                   # React microsite for proposal review
```

## Development

### View the Application Site

```bash
cd site
npm install
npm run dev
```

Visit http://localhost:5173 to view the microsite.

### Update Content

Edit markdown files in `docs/` and run the sync script:

```bash
python3 scripts/sync_content.py
```

## Contact

- **Email**: peoplefirstfund@openai.com

## Key Dates

- **September 8, 2025**: Applications open
- **October 8, 2025, 11:00 PM PT**: Application deadline
- **End of 2025**: Grant distribution

## Links

- [People-First AI Fund Announcement](https://openai.com/index/people-first-ai-fund/)
- [OpenAI Nonprofit Support](https://openai.com/index/supporting-nonprofit-and-community-innovation/)
