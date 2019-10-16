const puppeteer = require('puppeteer');

async function auto() {
    console.log("Auto");
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    //   await page.screenshot({path: 'example.png'});

    //   await browser.close();
};

module.exports = { 
    auto,
    auto2: async () => {
        console.log("Auto2");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://example.com');
        await page.screenshot({path: 'example.png'});
    
        //   await browser.close();
    }
};