import page from './Page.mjs';
class homepage extends page {
    // Searchbox
    get searchbox () {return $('[name="search"]');}
    get entersearch () {return $('//i[@class="fa fa-search"]');}
    get macbook () {return $('//a[normalize-space()="MacBook"]');}
    // Cart
    get addiphone () {return $('//html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[3]/button[1]');}
    get cartlist () {return $('//button[@class="btn btn-inverse btn-block btn-lg dropdown-toggle"]');}
    get iphonecart () {return $('//td[@class="text-left"]//a[contains(text(),"iPhone")]');}
    get deletecart () {return $('//i[@class="fa fa-times"]');} 
    get emptycart () {return $('//p[@class="text-center"]');}
    // Compare
    get comparemac () {return $('//div[@id="content"]//div[1]//div[1]//div[3]//button[3]//i[1]');}
    get compareiphone () {return $('/html[1]/body[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[3]/button[3]');}
    get comparemenu () {return $('//a[normalize-space()="product comparison"]');}
    get maccompared () {return $('//strong[normalize-space()="MacBook"]');}
    get iphonecompared () {return $('//strong[normalize-space()="iPhone"]');}
    // CS
    get contactlink () {return $('//a[normalize-space()="Contact Us"]');}
    get namefield () {return $('[name="name"]');}
    get emailfield () {return $('[name="email"]');}
    get enquiryfield () {return $('[name="enquiry"]')}
    get contactsubmit () {return $('//input[@value="Submit"]');}
    //Misc
    async open () {
        super.open('/')
    }
};
export default new homepage();