const fs = require('fs');
const PDFDocument = require('pdfkit');

function createInvoice(invoice, path) {
	let doc = new PDFDocument({ margin: 50 });

	generateHeader(doc);
	generateCustomerInformation(doc, invoice);
	generateInvoiceTable(doc, invoice);
	generateFooter(doc); 

    doc.end();
	doc.pipe(fs.createWriteStream(invoice.pdf));
}
function generateHeader(doc) {
    doc.image('billionaire-logo.jpg', 50, 45, { width: 50 })
	.fillColor('#444444')
	.fontSize(20)
	.text('BILLionaires', 110, 57)
	.fontSize(10)
    .text("Billionaires", 200, 50, { align: "right" })
	.text('8450 NE Loop 410', 200, 65, { align: 'right' })
	.text('San Antonio, TX, 78154', 200, 80, { align: 'right' })
	.moveDown();
}

function generateCustomerInformation(doc, customerData) {
    doc
        .fillColor("#444444")
        .fontSize(20)
        .text("Invoice", 50, 160);
          
    generateHr(doc, 185);
          
    const custInfoBase = 200;
          
    doc
        .fontSize(10)
        .text("Invoice Number:", 50, custInfoBase)
        .font("Helvetica-Bold")
        .text('', 150, custInfoBase) //need invoice number function
        .font("Helvetica")
        .text("Invoice Date:", 50, custInfoBase + 15)
        .text(formatDate(new Date()), 150, custInfoBase + 15)
        .text("Email Address:", 50, custInfoBase + 30)
        .text(customerData.email, 150, custInfoBase + 30)
          
        .font("Helvetica-Bold")
        .text(customerData.company_name, 300, custInfoBase)
        .font("Helvetica")
        .text(customerData.company_address, 300, custInfoBase + 15)
        .text(customerData.company_phone_number, 300, custInfoBase + 30)
        .moveDown();
          
        generateHr(doc, 252);
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

function generateHr(doc, y) {
    doc
        .strokeColor("#aaaaaa")
        .lineWidth(1)
        .moveTo(50, y)
        .lineTo(550, y)
        .stroke();
      }

module.exports = {
    createInvoice
};
