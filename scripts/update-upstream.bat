@echo off
REM Update from Upstream Repository
REM Double-click to run

echo.
echo ========================================
echo   Updating from upstream...
echo ========================================
echo.

cd /d "%~dp0\.."
powershell -ExecutionPolicy Bypass -File scripts\update-from-upstream.ps1

echo.
echo Press any key to exit...
pause > nul
