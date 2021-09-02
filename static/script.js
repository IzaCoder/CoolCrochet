var pageNum = 1

function showPattern() {
    const patternFile = document.getElementById("pattern_file")
    const patternText = document.getElementById("pattern_text")
    
    if (patternFile.files.length != 0) {
        alert("File!") // dummy code, to be changed later
    } else if (patternText.value != "") {
        alert("Text!") // dommy code, to be changed later
    }
}
