function pdfReport(pdfData, title, pageOrientation, description, fontSize) {
  const printData = pdfData.map((element, row) => {
    return element.map((text) => {
      let isBold = false;
      if(row === 0) isBold = true;
      const style = {bold: isBold, fontSize: fontSize};
      return {text: text, style: style};
    });
  });

  // const width = new Array(pdfData.length).fill('auto');

  const docDefinition = {
    info: {
      title: title +  '.pdf', subject: title,
    },
    pageOrientation: pageOrientation,
    pageSize: 'A4',
    content: [
      {text: 'Goinnovvior Technologies', fontSize: 16, alignment: 'center', bold: false, margin: [0, 0, 0, 4]},
      {text: title, fontSize: fontSize + 8, alignment: 'center', bold: true, margin: [0, 0, 0, 4]},
      {text: description, fontSize: fontSize + 6, alignment: 'center', bold: false, margin: [0, 0, 0, 2]},
      // {text: '', fontSize: fontSize + 6, alignment: 'center', bold: false, margin: [0, 20, 0, 0]},
      {table: {headerRows: 1, widths: '*', body: printData }, margin: [0, 25, 0, 0]}
    ]
  };
  createPdf(docDefinition).open();
}
