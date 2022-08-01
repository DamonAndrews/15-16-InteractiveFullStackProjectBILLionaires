const fs = require('fs');
const PDFDocument = require('pdfkit');

function createInvoice(invoice, path) {
	let doc = new PDFDocument({ margin: 50 });

	generateHeader(doc);
	generateCustomerInformation(doc, invoice);
	generateInvoiceTable(doc, invoice);
	generateFooter(doc); 

    function generateHeader(doc) {
        doc.image('', 50, 45, { width: 50 })  //filler - adding a logo
		.fillColor('#444444')
		.fontSize(20)
		.text('BILLionaires', 110, 57)
		.fontSize(10)
		.text('', 200, 65, { align: 'right' })
		.text('', 200, 80, { align: 'right' }) //address lines for OUR company
		.moveDown();
    }

    function generateFooter(doc) {
        doc.fontSize(
            20,
        ).text(
            'Please feel free to reach out with any questions or concerns.  Thank you for your business.',
            50,
            780,
            { align: 'center', width: 500 },
        );
    }
    

	doc.end();
	doc.pipe(fs.createWriteStream(path));
}