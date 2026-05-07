# Playwrightautomation-CursorAI

## Summary
This repo contains a minimal **Playwright** setup and a short end-to-end test for the DemoQA practice form:
- **Target**: `https://demoqa.com/automation-practice-form`
- **Test**: `tests/demoqa-automation-practice-form.spec.ts` (fills the form, uploads a file, submits, and asserts the success modal)

## Requirements
- Node.js (npm)

## Install
```bash
npm install
npx playwright install
```

## Run tests
```bash
npm test
```

Optional:
```bash
npm run test:headed
npm run test:ui
npm run report
```
