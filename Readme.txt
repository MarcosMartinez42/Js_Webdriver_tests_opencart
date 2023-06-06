A few demo automation tests I wrote for http://opencart.abstracta.us/
They're simple and short, and I wrote them to practice a little with WebdriverIO / Javascript
In the PDF you can find some information regarding each test, and the testcases written in gherkin syntax as well

To run these tests, you'll need to have wdio installed in your IDE, and you need to replace the wdio.config file with the one provided here. Also, you'll have to open the file and edit the "Specs" section, to ensure the Opencart_tests.mjs file is in the right place to run the test