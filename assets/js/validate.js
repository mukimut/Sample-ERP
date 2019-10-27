function isEmail(text = '') {
    return text.search(/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/) === 0;
}

function isPhone(text = '') {
    return text.search(/01\d+$/) === 0;
}