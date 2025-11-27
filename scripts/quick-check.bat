@echo off
REM Quick Check for Untranslated Strings
REM Double-click to run

echo.
echo ========================================
echo   Checking for untranslated strings...
echo ========================================
echo.

cd /d "%~dp0\.."
node scripts\find-untranslated.js

echo.
echo Press any key to exit...
pause > nul
