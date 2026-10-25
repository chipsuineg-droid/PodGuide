@echo off
cd /d "c:\Users\MY Laptop\OneDrive\Desktop\PodMyth\PodGuide"
git add -A
git commit -m "feat: seamless login, Google OAuth, mailing list opt-in, Resend email"
git push origin main
del "%~f0"
