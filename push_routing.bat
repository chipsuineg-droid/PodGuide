@echo off
cd /d "c:\Users\MY Laptop\OneDrive\Desktop\PodMyth\PodGuide"
git add -A
git commit -m "feat(routing): enforce canonical www.podguide.org.zw domain across all OAuth callbacks and vercel.app proxies"
git push origin main
del "%~f0"
