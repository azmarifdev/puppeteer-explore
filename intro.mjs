/* import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: false,
    defaultViewport: { width: 1920, height: 1000 },
    slowMo: 250,
    userDataDir: 'temporary',
});
const page = await browser.newPage();
await page.goto('https://www.duckduckgo.com/', {
    waitUntil: 'networkidle2',
});
await page.waitForSelector('#searchbox_input');
await page.type('#searchbox_input', 'devconfbd');
await page.keyboard.press('Enter');
await page.waitForSelector('[data-testid="result-title-a"]');
await page.screenshot({ path: 'duckduckgo.png' });

console.log(await page.title());
// await page.screenshot({ path: 'example.com.png' });
await browser.close();

// id = 'searchbox_input';
// class="searchbox_searchButton__F5Bwq iconButton_button__6x_9C"
// data-testid="result-title-a"
console.log(34) */

import puppeteer from 'puppeteer-core';
(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        headless: true,
        defaultViewport: { width: 1920, height: 1000 },
        slowMo: 250,
        userDataDir: 'temporary',
    });
    const page = await browser.newPage();
    await page.goto('https://azmarif.dev/');

    const name = await page.evaluate(() => {
        const myNameElement = document.querySelector('#nameid');
        // const quotes = [];

        // for (const nameElement of myNameElement)
        // {
        //     const nameText = nameElement.querySelector(selectors)
        // }
        const nameText = myNameElement.querySelector('.elementor-widget-container .elementor-heading-title').innerHTML;
        
        // console.log(nameText);
        return nameText
    });





    console.log(name);
    // await page.screenshot({ path: 'quotes.png' });
    // console.log(await page.content());
    await browser.close();
})();
