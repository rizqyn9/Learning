const puppeteer = require('puppeteer');

const link_target = require('./data.json')
// const link_target = 'https://www.tiktok.com/@jechnnc/video/6910679647629872385?lang=en'

const browserOptions = {
    headless : false,
    args: ['--no-sandbox']
}

const endPoint = 'https://musicallydown.com'

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}
const clickByText = async (page, text) => {
    const escapedText = await escapeXpathString(text);
    const linkHandlers = await page.$x(`//a[contains(text(), ${escapedText})]`);
    
    if (linkHandlers.length > 0) {
      await linkHandlers[0].click();
    } else {
      throw new Error(`Link not found: ${text}`);
    }
  };

const scrap = async() => {
    const browser = await puppeteer.launch(browserOptions);
    await console.log("Browser Launch");
    for(let i = 0; i < link_target.length ; i++){
        const page = await browser.newPage();
        await console.log(`Opening New Page ${i+1}`);
        await page.goto(endPoint);
        await page.waitForSelector('#link_url')
        await page.type('#link_url',link_target[i])
        await console.log(link_target[i]);
        await page.$eval('button[type="submit"]',el => el.click())
        await delay(2000)
        await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './'})
        const a = await page.$$eval('a',res => res[10].click())
        await console.log("Success Downloading");
        await page.close()
        await console.log(`Close Page ${i+1}`);

    }
    await console.log("All Dones");
    await browser.close()
}

scrap()

