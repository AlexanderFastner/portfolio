@echo off
REM Batch deployment script for Next.js portfolio
REM Builds the static site and deploys to Firebase Hosting

echo Building Next.js static site...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo Build failed!
    exit /b 1
)

echo Deploying to Firebase Hosting...
call firebase deploy --only hosting

if %ERRORLEVEL% NEQ 0 (
    echo Deployment failed!
    exit /b 1
)

echo Deployment completed successfully!

