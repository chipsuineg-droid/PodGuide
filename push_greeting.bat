@echo off
cd /d "c:\Users\MY Laptop\OneDrive\Desktop\PodMyth\PodGuide"
git add -A
git commit -m "feat(dashboard): restore personalized time-of-day greeting in dashboard header"
git push origin main
del "%~f0"
