/**
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Search developers.google.com/web for articles tagged
 * "Headless Chrome" and scrape results from the results page.
 */

'use strict';

const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch({ headless: false }); // default is true
    // const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://my.xm.com/th/member/login');


    await page.waitForSelector('#cookieModal', {
        visible: true
    });

    var cookie_Btn = '#cookieModal > div > div > div.cookie-modal__defaultBlock > div.modal-body > div > div > button';

    await page.waitForSelector(cookie_Btn, {
        visible: true
    });
    console.log('found1');
    await page.waitFor(2000);
    await page.click(cookie_Btn);
    console.log('found2');

    await page.waitForSelector('#login_user');
    await page.type('#login_user', '43043660');

    await page.type('#login_pass', 'Wdasqwe123');

    await page.waitFor(2000);
    await page.waitForSelector('body > div.page-wrapper > div > section > div > div:nth-child(3) > div > form > div.row > div.col-sm-auto > button');
    await page.waitFor(2000);
    await page.click('body > div.page-wrapper > div > section > div > div:nth-child(3) > div > form > div.row > div.col-sm-auto > button');

    /*
    await page.waitFor(2000);
    const page2 = await browser.newPage();
    await page2.goto('https://my.xm.com/th/payment/transfer/internal');

    await page2.waitForSelector('#other_accounts');
    await page2.type('#other_accounts', '32153992');

    await page2.waitForSelector('#amount');
    await page2.type('#amount', '5');

    await page2.waitForSelector('#interaccount');
    await page2.click('#interaccount');
*/

    // await browser.close();
})();