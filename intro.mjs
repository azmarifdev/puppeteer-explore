import puppeteer from 'puppeteer-core';
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
await page.type('#searchbox_input', 'azmarifdev');
await page.keyboard.press('Enter');
await page.waitForSelector('[data-testid="result-title-a"]');
await page.screenshot({ path: 'duckduckgo.png' });

console.log(await page.title());
// await page.screenshot({ path: 'example.com.png' });
await browser.close();

// id = 'searchbox_input';
// class="searchbox_searchButton__F5Bwq iconButton_button__6x_9C"
// data-testid="result-title-a"
