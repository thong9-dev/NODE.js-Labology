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

  var sleep = require('system-sleep');
  const browser = await puppeteer.launch({ headless: false }); // default is true
 // const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://my.xm.com/th/member/login');


  

  var cookie_Btn = '.btn.btn--primary.btn-block.js-acceptDefaultCookie.gtm-acceptDefaultCookieFirstVisit';

  await page.waitForSelector(cookie_Btn);
  await page.click(cookie_Btn);

  
  await page.waitForSelector('#login_user');
  await page.type('#login_user', '43043660');

  await page.type('#login_pass', 'Wdasqwe123');

  sleep(5000); // 5 seconds
  await page.waitForSelector('body > div.page-wrapper > div > section > div > div:nth-child(3) > div > form > div.row > div.col-sm-auto > button');
  await page.click('body > div.page-wrapper > div > section > div > div:nth-child(3) > div > form > div.row > div.col-sm-auto > button');

  sleep(10000); // 5 seconds
  const page2 = await browser.newPage();
  await page2.goto('https://my.xm.com/th/payment/transfer/internal');

  await page2.waitForSelector('#other_accounts');
  await page2.type('#other_accounts', '32153992');

  await page2.waitForSelector('#amount');
  await page2.type('#amount', '5');

  await page2.waitForSelector('#interaccount');
  await page2.click('#interaccount');

  

/*
  // Type into search box.
  await page.type('#searchbox input', 'Headless Chrome');

  // Wait for suggest overlay to appear and click "show all results".
  const allResultsSelector = '.devsite-suggest-all-results';
  await page.waitForSelector(allResultsSelector);
  await page.click(allResultsSelector);

  // Wait for the results page to load and display the results.
  const resultsSelector = '.gsc-results .gsc-thumbnail-inside a.gs-title';
  await page.waitForSelector(resultsSelector);

  // Extract the results from the page.
  const links = await page.evaluate(resultsSelector => {
    const anchors = Array.from(document.querySelectorAll(resultsSelector));
    return anchors.map(anchor => {
      const title = anchor.textContent.split('|')[0].trim();
      return `${title} - ${anchor.href}`;
    });
  }, resultsSelector);
  console.log(links.join('\n'));*/

  //await browser.close();
})();
