"use strict";

class OneTest {

    constructor () {
        process.env.PATH = process.env.PATH + ':/Users/pankajparashar/Github/onetest/drivers/'
        this.webdriver = require('selenium-webdriver');        
        this.driver = new this.webdriver.Builder().
                          withCapabilities(this.webdriver.Capabilities.chrome()).
                          build();
    }

    method1 () {
        this.driver.get('http://www.google.com');
        this.driver.findElement(this.webdriver.By.name('q')).sendKeys('simple programmer');
        this.driver.findElement(this.webdriver.By.name('btnG')).click();
        this.driver.quit();
    }
}

let test = new OneTest()
test.method1()