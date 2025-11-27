@echo off
REM Start backend server
REM Double-click to run

echo.
echo ========================================
echo   Starting backend server...
echo ========================================
echo.

cd /d "%~dp0"

REM Check if Redis is running
echo Checking Redis connection...
echo.

REM Check if .env exists
if not exist ".env" (
    echo WARNING: .env file not found!
    echo You need to configure backend first.
    echo.
    echo Run: npm run setup
    echo.
    pause
    exit /b 1
)

REM Start backend
echo Starting backend on http://localhost:3001
echo.
call npm start

pause
