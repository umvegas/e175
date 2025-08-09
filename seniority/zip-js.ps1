function zip {
    $full = $args[0] + ".js"
    $min = $args[0] + "-min.js"
    $gz = $args[0] + ".js.gz"
    $fullExists = Test-Path $full
    $gzExists = Test-Path $gz
    $gzStale = $true

    if (!($fullExists)) {
        Write-Output "$full does not exist"
        return
    }

    if ($gzExists) {
        $fullFile = Get-ChildItem -Path $full
        $gzFile = Get-ChildItem -Path $gz
        if ($gzFile.LastWriteTime -lt $fullFile.LastWriteTime) {
            $gzStale = $true
        } else {
            $gzStale = $false
        }
    }
    if ($gzStale) {
        Write-Output "$gz out of date"
        Write-Output "...minify..."
        cmd.exe /c "jsmin < $full > $min"
        Write-Output "...delete old gz file..."
        cmd.exe /c "del $gz"
        Write-Output "...zip new minified file..."
        cmd.exe /c "7z a -tgzip $gz $min"
        Write-Output "...clean up..."
        cmd.exe /c "del $min"
    } else {
        Write-Output "$gz up-to-date"
    }
}

zip main
Read-Host -Prompt "Press Enter to finish"
