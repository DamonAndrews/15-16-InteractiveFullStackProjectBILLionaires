// not sure where to put this yet but i know it's all necessary for the pdf convert to work.
const puppeteer = require("puppeteer");
const handlebars = require("handlebars");

module.exports.html_to_pdf = async ({ templateHtml, dataBinding, options }) => {
  const template = handlebars.compile(templateHtml);
  const finalHtml = encodeURIComponent(template(dataBinding));

  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(`data:text/html;charset=UTF-8,${finalHtml}`, {
    waitUntil: "networkidle0",
  });
  await page.pdf(options);
  await browser.close();
};
// not sure where to put this yet but i know it's all necessary for the pdf convert to work