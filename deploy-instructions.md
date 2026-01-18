# 🚀 Deployment Instructions for FIRE Calculator

## Step 1: GitHub Setup

### Option A: If you completed GitHub CLI authentication
Run this command:
```bash
gh repo create fire-calculator --public --source=. --remote=origin --push
```

### Option B: Manual GitHub Setup
1. Go to https://github.com/new
2. Create a new repository named `fire-calculator`
3. Make it public
4. DON'T initialize with README (we already have code)
5. After creating, run these commands:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/fire-calculator.git

# Push the code
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "Add New..." → "Project"
4. Import your `fire-calculator` repository
5. Vercel will automatically detect Next.js settings
6. Click "Deploy"

## Step 3: Wait for Deployment

- Deployment takes 2-3 minutes
- Vercel will provide you with a URL like: `fire-calculator.vercel.app`
- All features will work automatically:
  - All 6 calculators
  - Blog articles
  - Monte Carlo simulations
  - Mobile responsive design

## Optional: Custom Domain

After deployment, you can:
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain (e.g., firecalculator.com)
4. Follow Vercel's DNS configuration instructions

## Build Settings (Already Configured)

- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Node Version: 20.x

## No Environment Variables Needed

This project runs without any environment variables.

## Verify Deployment

After deployment, test these URLs:
- `/` - Main FIRE Calculator
- `/coast-fire-calculator` - Coast FIRE Calculator
- `/barista-fire-calculator` - Barista FIRE Calculator
- `/lean-fire-calculator` - Lean FIRE Calculator
- `/fat-fire-calculator` - Fat FIRE Calculator
- `/fire-calculator-couples` - Couples Calculator
- `/blog` - Blog section
- `/sitemap.xml` - SEO sitemap
- `/robots.txt` - Search engine instructions

All should work perfectly!