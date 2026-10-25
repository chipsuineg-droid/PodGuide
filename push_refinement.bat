@echo off
cd /d "c:\Users\MY Laptop\OneDrive\Desktop\PodMyth\PodGuide"
git add -A
git commit -m "refactor(dashboard): refine UI to strict black red white palette, separate Academic and Self-Development, and fix course selection behavior"
git push origin main
del "%~f0"
