import puppeteer from 'puppeteer-core';
const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: false,
    defaultViewport: { width: 1920, height: 1000 },
    slowMo: 250,
    userDataDir: 'temporary',
});
const page = await browser.newPage();
await page.goto('https://www.example.com/', {
    waitUntil: 'networkidle2',
    timeout: 60000,
});
console.log(await page.title());
await page.screenshot({ path: 'example.com.png' });
await browser.close();
