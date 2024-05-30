import puppeteer from 'puppeteer-core';
// const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({
            // executablePath
            executablePath: '/usr/bin/google-chrome',
            headless: false,
        });

        // search engine
        const page = await browser.newPage();
        await page.goto('https://www.duckduckgo.com/', {
            waitUntil: 'networkidle2',
        });

        // search field type
        const searchField = await page.waitForSelector('#searchbox_input');
        await searchField.type('azmarifdev portfolio');
        await page.keyboard.press('Enter');

        // first website click
        await page.waitForSelector('[data-testid="result-title-a"]');
        const firstWebsite = await page.$('[data-testid="result-title-a"]');
        await firstWebsite.click();

        // wait for page
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        await page.waitForSelector('.elementor-heading-title');

        //  evaluate
        const name = await page.evaluate(() => {
            const myNameElement = document.querySelector('#nameid .elementor-widget-container .elementor-heading-title');
            return myNameElement ? myNameElement.innerHTML : 'Name not found';
        });

        console.log(name);

        await browser.close();
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
