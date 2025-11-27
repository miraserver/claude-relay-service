@echo off
REM Quick test localization - Start dev server
REM Double-click to run

echo.
echo ========================================
echo   Starting localization test...
echo ========================================
echo.
echo This will start the development server.
echo After it starts, open your browser at:
echo.
echo   http://localhost:5173
echo.
echo You can test language switching on:
echo   - Login page: http://localhost:5173/
echo   - API Stats: http://localhost:5173/api-stats
echo   - User Dashboard: http://localhost:5173/user
echo.
echo Press Ctrl+C to stop the server when done.
echo.
echo ========================================
echo.

cd /d "%~dp0\web\admin-spa"

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies first...
    echo This may take a few minutes...
    echo.
    call npm install
    echo.
    echo ========================================
    echo.
)

echo Starting development server...
echo.
call npm run dev

pause
