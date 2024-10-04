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
        cmd.exe /c "jsmin < $full > $min"
        cmd.exe /c "del $gz"
        cmd.exe /c "7z a -tgzip $gz $min"
        cmd.exe /c "del $min"
    } else {
        Write-Output "$gz up-to-date"
    }
}

zip altitude-capability
zip approach-climb
zip ensure-HTTPS
zip flashcards
zip flows
zip landing-distance
zip mcdu
zip oral-base
zip ref-speeds
zip stab-trim
zip takeoff-bugs
zip yokenotes
Read-Host -Prompt "Press Enter to finish"
