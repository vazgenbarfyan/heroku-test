const http = require('http');
const puppeteer = require('puppeteer-extra')
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')



function delay(time) {
	return new Promise(function(resolve) {
		setTimeout(resolve, time)
	});
}

async function main() {
  // const browser = await puppeteer.launch({
  //   headless: true,
  //   args: ["--no-sandbox"]
  // });
  // const tab = await browser.newPage();
  // const text = await (await tab.goto("http://example.com/")).text();
  // console.log(text);
  // console.log("done");
  // browser.close();

  puppeteer.use(AdblockerPlugin())

  // http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  //         resp.on('data', function(ip) {
  //             console.log(ip.toString());
  //         });
  //         resp.on('error', (err)=>{
  //           console.log(err);
  //         });
  //     });

 	console.log('started')
  const browser = await puppeteer.launch({ headless: true,args: ["--no-sandbox"] });
	const page = await browser.newPage();
	const proxy = ""//'https://proxybot.io/api/v1/scQtru84pDPeiB4jcNXa0FaCLdG3?geolocation_code=eu&url=';
	const url = 'https://ouo.io/CPksTe';
	const pageUrl = url;

	await page.goto(pageUrl);

	console.log('Start Loading')
	console.log(page.url());
	console.log(typeof page.url());
	console.time('v');
	await delay(4000)
	await page.waitForSelector('#btn-main');
	const btn = await page.$('#btn-main');
	await btn.evaluate(btn => btn.click());
	console.timeEnd('v')

	await delay(4000)
	console.log('I am human clicked')
	console.log(page.url());
	console.log(typeof page.url());

	await delay(4000)

	console.log('Get link clicked')
	await page.waitForSelector('#btn-main');
	const submitBtn = await page.$('#btn-main');
	await submitBtn.evaluate(submitBtn => submitBtn.click());

	await delay(4000)

	const expectedURl = "https://www.youtube.com/watch?v=7LzF-JU04vs&list=RD7LzF-JU04vs&start_radio=1"
	console.log("expected Url : " + expectedURl)
	console.log(page.url());
	console.log("isSame URls: ", page.url() === expectedURl)
	console.log(typeof page.url());

	await browser.close();
}


main();





