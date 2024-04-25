function toCase(text) {
   let firtext = text.trim()
    let convert = text.trim().toUpperCase();
    return(firtext + "-" + convert)
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
