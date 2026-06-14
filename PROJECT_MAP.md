# PrimeNest Global — Project Map

## 1. Production Folder
primenest-react/

## 2. Source Folder
primenest-react/src/

## 3. Netlify Project Name
primenest-global

## 4. Build Command
npm run build
(run inside primenest-react/)

## 5. Publish Directory
dist
(relative to base: primenest-react/ — do NOT write primenest-react/dist in netlify.toml)

## 6. Main Components
primenest-react/src/components/Hero.jsx            — Hero video section
primenest-react/src/components/WholesalePricing.jsx — Wholesale Products section
primenest-react/src/components/Compliance.jsx       — Certifications section
primenest-react/src/components/Analytics.jsx        — GA4 + image/video protection
primenest-react/src/data/products.js               — All product data and image references

## 7. Image Folders
primenest-react/public/    — source images (committed, copied to dist as-is)
primenest-react/dist/      — built output (must be committed to git)

## 8. Analytics ID
Google Analytics 4 — G-2BFKYCF30X
Tag location: primenest-react/index.html (static <head> tag)

## 9. Domain Name
https://primenestglobal.com.my
https://www.primenestglobal.com.my

## 10. Deployment Workflow
1. Edit source files in primenest-react/src/
2. Add images to primenest-react/public/ if needed
3. Run: cd primenest-react && npm run build
4. Stage output: git add -f primenest-react/dist/
5. Stage source: git add primenest-react/src/ primenest-react/public/
6. Commit: git commit -m "description"
7. Push: git push origin main
8. Netlify auto-builds from main branch and deploys to primenestglobal.com.my
9. Verify on live site — hard refresh (Ctrl+Shift+R) to bypass browser cache
