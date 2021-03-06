function hello() {
  console.log('Helllo');
}

function setSelectionList(id, inputList, title=null) {
	if(!title) title = 'Select Type';
	let string = '<option hidden disabled selected value>' + title + '</option>';
	inputList.forEach(element => string += '<option>' + element + '</option>');
	document.getElementById(id).innerHTML = string;
}

function getSelectedText(id) {
	return document.getElementById(id).value;
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

function getSelectedIndex(id) {
    return document.getElementById(id).selectedIndex;
}

function setLovData(link, id, title) {
    return new Promise((resolve, reject) => {
      $.get(link, (data) => {
        setSelectionList(id, data[0].values, title);
        resolve(data[0]);
      });
    });
}