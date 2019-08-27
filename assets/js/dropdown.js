function hello() {
    console.log('Helllo');
}

function setSelectionList(id, list) {
    let string = document.getElementById(id).innerHTML;
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