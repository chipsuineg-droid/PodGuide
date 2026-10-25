@echo off
cd /d "c:\Users\MY Laptop\OneDrive\Desktop\PodMyth\PodGuide"
git add -A
git commit -m "fix(auth): clarify email placeholders and add Google signup hint for password login"
git push origin main
del "%~f0"
