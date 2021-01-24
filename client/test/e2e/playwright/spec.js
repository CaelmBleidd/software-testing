const playwright = require('playwright');
const {expect} = require('chai')
var assert = require('chai').assert;


describe('Navigation', () => {
    it('Navigation test', async () => {
        for (const browserType of ['chromium', 'firefox']) {
            const browser = await playwright[browserType].launch();
            const page = await browser.newPage();

            await page.goto('http://localhost:8081/');

            const searchButton = await page.$("#searchButton");
            expect(searchButton).not.null;

            const moveToAdd = await page.$("#moveToAdd");
            expect(moveToAdd).not.null;
            await moveToAdd.click();

            // assert.exists(await page.$("#submitButton"));
            // assert.notExists(await page.$("#submitButton"));

            const moveToMainPage = await page.$("#moveToMainPage");
            await moveToMainPage.click();


            expect(await page.$("#submitButton")).null;
            expect(await page.$("#searchButton")).not.null;


            await page.close();
            await browser.close();
        }
    })
})

describe('add film page', () => {
    it('all element exist and visible', async () => {
        for (const browserType of ['chromium', 'firefox']) {
            const browser = await playwright[browserType].launch();
            const page = await browser.newPage();

            await page.goto('http://localhost:8081/add')
            expect(await page.$('text=Title')).not.null
            expect(await page.$('text=Description')).not.null
            expect(await page.$('text=Directors')).not.null
            expect(await page.$('text=Submit')).not.null

            expect(await page.$("#title")).not.null
            expect(await page.$("#description")).not.null
            expect(await page.$("#directors")).not.null
            expect(await page.$("#submitButton")).not.null
            expect(await page.$("#newFilmButton")).null

            await page.close();
            await browser.close();
        }
    })

    // Not currently available since there are no way to mock response
    it('add film', async () => {
        for (const browserType of ['chromium', 'firefox']) {
            const browser = await playwright[browserType].launch();
            const page = await browser.newPage();

            await page.goto('http://localhost:8081/add')

            await page.type('#title', 'Test film')
            await page.type('#description', 'Test film description')
            await page.type('#directors', 'Test film director')

            expect(await page.$('#newFilmButton')).null

            expect(await page.$eval('#title', el => el.value))
                .equals('Test film')

            // await page.route('/api/films', route => route.fulfill({
            //     status: 200,
            //     body: 'it worked'
            // }));
            //
            // await page.click('#submitButton')
            //
            // expect(await page.$('text=You submitted successfully!')).not.null
            // expect(await page.$("#newFilmButton")).not.null
            //
            // expect(await page.$('text=Title')).null
            // expect(await page.$('text=Description')).null
            // expect(await page.$('text=Directors')).null
            // expect(await page.$('text=Submit')).null
            // expect(await page.$("#title")).null
            // expect(await page.$("#description")).null
            // expect(await page.$("#directors")).null
            // expect(await page.$("#submitButton")).null
            //
            // await page.click('#newFilmButton')
            //
            // expect(await page.$('text=Title')).not.null
            // expect(await page.$('text=Description')).not.null
            // expect(await page.$('text=Directors')).not.null
            // expect(await page.$('text=Submit')).not.null
            // expect(await page.$("#title")).not.null
            // expect(await page.$("#description")).not.null
            // expect(await page.$("#directors")).not.null
            // expect(await page.$("#submitButton")).not.null

            // expect(await page.$eval('#title', el => el.value)).empty
            // expect(await page.$eval('#description', el => el.value)).empty
            // expect(await page.$eval('#directors', el => el.value)).empty

            await page.close();
            await browser.close();
        }
    })
})
