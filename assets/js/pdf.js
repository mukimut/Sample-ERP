function pdfReport(pdfData, title, pageOrientation, description) {
  const printData = pdfData.map((element, row) => {
    return element.map((text) => {
      let isBold = false;
      if(row === 0) isBold = true;
      const style = {bold: isBold, fontSize: 6};
      return {text: text, style: style};
    });
  });

  const docDefinition = {
    header: title + ' ' + description,
    info: {
      title: title +  '.pdf', subject: title,
    },
    pageOrientation: pageOrientation,
    pageSize: 'A4',
    content: [
      {text: title, fontSize: 14, alignment: 'center', bold: true, margin: [0, 0, 0, 4]},
      {text: description, fontSize: 12, alignment: 'center', bold: false, margin: [0, 0, 0, 2]},
      {table: {headerRows: 1, widths: 'auto', body: printData }}
    ]
  };
  // return docDefinition;
  createPdf(docDefinition).open();
}
