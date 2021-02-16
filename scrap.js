const puppeteer = require('puppeteer');

  async function fetchProductList(url, category) {
    try {
      //create a browser (instance of chrome)
      const browser = await puppeteer.launch();
      //create a page inside the browser (tab)
      const page = await browser.newPage();
      
      await page.setDefaultNavigationTimeout(0);
      
      //navigation
      await page.goto(url + category);

      //function that return the list of products
      const products = await page.evaluate(() => {

        //function that return the element's text
        const descFromObject = (object, classname) => {
          const obj = object.querySelector(`${classname}`);
          if (obj != null) {
            return obj.innerText.trim();
          }
          return '';
        };

        //function that return the product's image
        const imgFromObject = (object) => {
          const obj = object.querySelector('a > div > div > img');
          if (obj != null) {
            return obj.getAttribute('data-original'); // why there is a prb with .src
          }
          return '';
        };
  
        // selectors
        const PRODUCT_SELECTOR = '.listing-thumbs > .item';

        const data = [];
  
        // get all products div
        const productGrids = document.querySelectorAll(PRODUCT_SELECTOR);
        //looping into products
        for (const object of productGrids) {
          data.push({
            //product's description
            desc: descFromObject(
              object,
              'div.item-info.ctext1.mls.float-right > div > div > h2 > a'
            ),
            //product's price
            price: descFromObject(object, 'div.item-price > span > span'),
            //product's image
            image: imgFromObject(object),
          });
        }
  
        return data;
      });

      console.log("we receive "+products.length +" product successfully");
      return products;
      await browser.close();
      
    }
    catch (error) {
      console.log('error with scraping function ' + error);
    }
  }

module.exports = { fetchProductList }
