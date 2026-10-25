@echo off
cd /d "c:\Users\MY Laptop\OneDrive\Desktop\PodMyth\PodGuide"
git add -A
git commit -m "feat(dashboard): major redesign with customisable courses and flexible learning paths"
git push origin main
del "%~f0"
