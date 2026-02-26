@echo off
setlocal enabledelayedexpansion
echo Converting images to WebP...
echo.

set COUNT=0

for /r %%f in (*.jpg *.jpeg *.png *.bmp *.tiff) do (
    echo Converting: %%~nxf
    "C:\Users\John Elison Duero\Downloads\libwebp-1.6.0-windows-x64\libwebp-1.6.0-windows-x64\bin\cwebp.exe" -q 80 "%%f" -o "%%~dpnf.webp"
    set /a COUNT+=1
)

echo.
echo Done! Converted !COUNT! image(s) to WebP.
pause
