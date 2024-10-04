function zip {
    $full = $args[0] + ".txt"
    $gz = $args[0] + ".txt.gz"
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
        cmd.exe /c "del $gz"
        cmd.exe /c "7z a -tgzip $gz $full"
    } else {
        Write-Output "$gz up-to-date"
    }
}

zip sv-bank
zip oral-a
zip oral-b
Read-Host -Prompt "Press Enter to finish"
