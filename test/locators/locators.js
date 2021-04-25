export default {
    uid: '[id="email"]',
    pwd: '[id="passwd"]',
    login: '[id="SubmitLogin"]',
    title: '//*[contains(text(),"My account")]',

    tshirt: '(//*[@title="T-shirts"])[2]',
    tshirt_1: '(//*[@title="Faded Short Sleeve T-shirts"])[1]',
    addtocart: '//*[contains(text(),"Add to cart")]',
    proceedto_checkout: '[title="Proceed to checkout"]',
    proceedto_checkout_1: '(//*[contains(text(),"Proceed to checkout")])[2]',

    agree: '[id="cgv"]',
    pay_by_bank: '//*[@class="bankwire"]',
    order_btn: '(//*[@type="submit"])[2]',
    completion_message: '//*[contains(text(),"Your order on My Store is complete.")]',
    order_confirmation: '[class="box"]',
    back_to_order: '[title="Back to orders"]',


    personal_info: '[title="View my customer account"]',
    information: '[title="Information"]',
    firstname: '[id="firstname"]',
    oldPassword: '[id="old_passwd"]',
    save: '(//*[@type="submit"])[2]',
    verification_message_information: '//*[contains(text(),"Your personal information has been successfully updated.")]',


};
