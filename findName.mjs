import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
});
const page = await browser.newPage();
await page.goto('https://www.duckduckgo.com/', {
    waitUntil: 'networkidle2',
});
const searchField = await page.waitForSelector('#searchbox_input');
await searchField.type('azmarifdev portfolio');
await page.keyboard.press('Enter');
const firstWebsite = await page.waitForSelector('[data-testid="result-title-a"]');

await firstWebsite.click();

await page.waitForSelector('.elementor-heading-title');

const name = await page.evaluate(() => {
    const myNameElement = document.querySelector('#nameid');
    const nameText = myNameElement.querySelector('.elementor-widget-container .elementor-heading-title').innerHTML;
    return nameText;
});
console.log(name);

await browser.close();
