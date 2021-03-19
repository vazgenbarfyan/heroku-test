const puppeteer = require("puppeteer");
const http = require('http');

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



  http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
          resp.on('data', function(ip) {
              console.log(ip.toString());
          });
          resp.on('error', (err)=>{
            console.log(err);
          });
      });
}


main();
