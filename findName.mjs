/* import puppeteer from 'puppeteer-core';
(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
    });
    const page = await browser.newPage();
    await page.goto('https://www.azmarif.dev/', {
        waitUntil: 'networkidle2',
    });

    const name = await page.evaluate(() => {
        const myNameElement = document.querySelector('#nameid');
        const nameText = myNameElement.querySelector('.elementor-widget-container .elementor-heading-title').innerHTML;
        return nameText;
    });
    console.log(name);
    await browser.close();
})(); */

import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: false,
    defaultViewport: { width: 1920, height: 1000 },
    slowMo: 100,
    userDataDir: 'temporary',
});
const page = await browser.newPage();
await page.goto('https://www.duckduckgo.com/', {
    waitUntil: 'networkidle2',
});
const searchField = await page.waitForSelector('#searchbox_input');
await searchField.type('azmarifdev');
await page.keyboard.press('Enter');
await page.waitForSelector('[data-testid="result-title-a"]');







// await browser.close();
// id = 'searchbox_input';
// class="searchbox_searchButton__F5Bwq iconButton_button__6x_9C"
// data-testid="result-title-a"
// console.log(34);

console.log(await page.title());