const puppeteer = require('puppeteer');

(async () => {
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({ headless: false }); // default is true
    const page = await browser.newPage();
    await page.goto('https://fastwork.co/me/services/d967c38a-f792-4b7e-af16-b3a48f49ae35/review');
    await page.screenshot({ path: 'example.png' });

    // await browser.close();

    // var cookie_Btn = '#app > div.modal-mask > div > div > div:nth-child(2) > div > div._tal-ct._dp-f._fdrt-cl._alit-ct > button';
    // await page.waitForSelector(cookie_Btn);
    // await page.waitFor(1000);
    // await page.click(cookie_Btn);
    // console.log("Wait :: " + cookie_Btn);

    var cookie_Btn = '#onesignal-popover-cancel-button';
    await page.waitForSelector(cookie_Btn);
    await page.waitFor(1000);
    await page.click(cookie_Btn);
    console.log("BTN :: " + cookie_Btn);

    var cookie_Btn = '#login-link > div';
    await page.waitForSelector(cookie_Btn);
    await page.waitFor(1000);
    await page.click(cookie_Btn);
    console.log("BTN :: " + cookie_Btn);

    await page.waitFor(1000);
    var Textbox_Email = '#authorize-request-Credential';
    await page.focus(Textbox_Email)
    page.keyboard.type('lapukdee@gmail.com')

    await page.waitFor(1000);
    var cookie_Btn = '#authorize-request-form > button';
    await page.waitForSelector(cookie_Btn);
    await page.waitFor(1000);
    await page.click(cookie_Btn);
    console.log("BTN :: " + cookie_Btn);

    await page.waitFor(1000);
    var Textbox_Email = '#signin-request-Password';
    await page.focus(Textbox_Email)
    page.keyboard.type('Orideconnm')

    await page.waitFor(1000);
    var cookie_Btn = '#signin-request-form > button';
    await page.waitForSelector(cookie_Btn);
    await page.waitFor(1000);
    await page.click(cookie_Btn);
    console.log("BTN :: " + cookie_Btn);
})();

