import puppeteer, { Browser, Page } from "puppeteer";

const isDebugging = () => {
  const debuggingMode = {
    devtools: true,
    headless: false,
    ignoreHTTPSErrors: true,
    slowMo: 250,
  };

  return process.env.NODE_ENV === "debug" ? debuggingMode : {};
};

let browser: Browser;
let page: Page;
beforeAll(async () => {
  browser = await puppeteer.launch(isDebugging());

  page = await browser.newPage();
  await page.goto("https://rvitruk-mac.levi9.com:3000/");
  page.setViewport({
    height: 568,
    width: 320,
  });

});
describe("on page load", () => {
  test("Main page is loaded", async () => {
    const html = await page.$eval("main", (e) => e.innerHTML);

    expect(html).toBe("This is the home page");
  }, 16000);

  test("nav loads correctly", async () => {
      const navbar = await page.$("header nav");
      expect(navbar).not.toBe(null);
  });
});

afterAll(async () => {
  if (isDebugging()) {
    browser.close();
  }
});
