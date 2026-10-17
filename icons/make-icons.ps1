Add-Type -AssemblyName System.Drawing

$dir = "C:\Users\ICONS\Documents\Default Project\icons"
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir | Out-Null }

function New-Icon([int]$size) {
  $bmp = New-Object System.Drawing.Bitmap($size, $size)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  $f = [float]$size
  $rect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
  $c1 = [System.Drawing.Color]::FromArgb(255, 10, 61, 98)
  $c2 = [System.Drawing.Color]::FromArgb(255, 26, 188, 156)
  $grad = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $c1, $c2, 45)
  $g.FillRectangle($grad, $rect)

  $gold = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 249, 168, 38))
  $sand = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 241, 196, 120))
  $sun  = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 235, 190))

  # Sun
  $g.FillEllipse($sun, ($f * 0.66), ($f * 0.10), ($f * 0.20), ($f * 0.20))

  # Large pyramid
  $p1 = New-Object System.Drawing.PointF(($f * 0.50), ($f * 0.18))
  $p2 = New-Object System.Drawing.PointF(($f * 0.15), ($f * 0.72))
  $p3 = New-Object System.Drawing.PointF(($f * 0.85), ($f * 0.72))
  $pts = @($p1, $p2, $p3)
  $g.FillPolygon($gold, $pts)

  # Inner pyramid
  $q1 = New-Object System.Drawing.PointF(($f * 0.50), ($f * 0.42))
  $q2 = New-Object System.Drawing.PointF(($f * 0.36), ($f * 0.72))
  $q3 = New-Object System.Drawing.PointF(($f * 0.64), ($f * 0.72))
  $qpts = @($q1, $q2, $q3)
  $g.FillPolygon($sand, $qpts)

  # Sand base
  $g.FillRectangle($sand, 0, ($f * 0.72), $size, ($f * 0.28))

  $g.Dispose()
  $bmp.Save((Join-Path $dir "icon-$size.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Host "icon-$size.png done"
}

New-Icon 192
New-Icon 512
