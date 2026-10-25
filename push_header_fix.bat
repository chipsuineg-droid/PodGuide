@echo off
cd /d "c:\Users\MY Laptop\OneDrive\Desktop\PodMyth\PodGuide"
git add -A
git commit -m "refactor(dashboard): simplify header to professional Dashboard title without casual greetings"
git push origin main
del "%~f0"
