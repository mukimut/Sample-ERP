function hello() {
    console.log('Helllo');
}

function setSelectionList(id, inputList) {
    let string = document.getElementById(id).innerHTML;
    list = ['<option hidden disabled selected value> Select Type </option>'];
    if(inputList.length > 0) list = list.concat(inputList)
    list.forEach(element => string += '<option>' + element + '</option>');
    document.getElementById(id).innerHTML = string;
}

function getSelectedValues(selectList) {
    selectList.forEach(element => {
        const selector = document.getElementById(element);
        data[element] = selector.options[selector.selectedIndex].text;
    });
    return data;
}

function getSelectedText(id) {
    const selection = document.getElementById(id);
    return selection.options[selection.selectedIndex].innerHTML;
  }

function setSelectedValue(id, value) {
    const selection = document.getElementById(id);
    const options = selection.options;
    const length = options.length;

    for (let i = 0; i < length; i++) {
        if (options[i].innerHTML === value) {
            selection.selectedIndex = i;
            break;
        }
    }
}