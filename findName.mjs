import puppeteer from 'puppeteer-core';
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
})();
