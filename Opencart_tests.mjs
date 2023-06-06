import Elements_page from "./Page object model/Elements_page.mjs";

// Test #1 - Search for a product
// Test #2 - Add product to cart
// Test #3 - Delete product from cart
// Test #4 - Compare two products
// Test #5 - Contact customer service

describe ('Opencart_tests', ()=> {
    it ('1_Search', async () => {
        await browser.url('/');
        await Elements_page.searchbox.waitForDisplayed();
        await Elements_page.searchbox.setValue("Mac Book");
        await Elements_page.entersearch.click();
        await expect(Elements_page.macbook).toBeExisting();
    });
    it ('2_Add_to_cart', async () => {
        await browser.url('/');
        await Elements_page.addiphone.waitForDisplayed();
        await Elements_page.addiphone.click();
        await Elements_page.cartlist.click();
        await expect(Elements_page.iphonecart).toBeExisting();
    });
    it ('3_Delete_from_cart', async () => {
        await browser.url('/');
        await Elements_page.addiphone.waitForDisplayed();
        await Elements_page.addiphone.click();
        await Elements_page.cartlist.click();
        await Elements_page.deletecart.click();
        await expect(Elements_page.emptycart).toBeExisting();
    });
    it ('4_Compare_products', async () => {
        await browser.url('/');
        await Elements_page.comparemac.waitForDisplayed();
        await Elements_page.comparemac.click();
        await Elements_page.compareiphone.click();
        await Elements_page.comparemenu.click();
        await expect(Elements_page.maccompared).toBeExisting();
        await expect(Elements_page.iphonecompared).toBeExisting();
    });
    it ('5_Contact_us', async () => {
        await browser.url('/');
        await Elements_page.contactlink.waitForDisplayed();
        await Elements_page.contactlink.click();
        await Elements_page.namefield.setValue("User");
        await Elements_page.emailfield.setValue("user@user.com");
        await Elements_page.enquiryfield.setValue("I need help to buy a product");
        await Elements_page.contactsubmit.click();
    });
});
