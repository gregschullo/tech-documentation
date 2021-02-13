---
id: cypress-overview
title: Cypress Overview
---

Cypress is an opensource test runner that makes setup, writing, running, and recording tests simpler, easier, and faster than ever before.  

Cypress is helpful for testing various logins, drag and drop operations, waiting for dynamic content to load, and making sure things look good on a mobile platform.  

With Cypress, you can programmatically control UI widgets such as tree views and multiselects, as well as wait for the results of an autocomplete to finish. You can even stub out network requests to control how the responses are returned to easily test edge cases such as when no results are returned or test what happens when the server is down.  

Cypress executes your tests and changes to provide near real time, visual feedback when run. It also provides helpful debugging output when commands are selected. Often, based on the type of command, Cypress allows for interaction with it.

[How it Works - Cypress Vendor Documentation](https://www.cypress.io/how-it-works/)  
[Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices.html)  

## Getting Started

### Installing Cypress

[Installing Cypress - Cypress Vendor Documentation](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)  

Requirements:

- macOS 10.9 and above (64-bit only)
- Node.js 10 or 12 and above

Navigate to your project.  
`cd </path/to/project>`  

Run npm init to create a new `package.json` file.  
`npm init`  
Populate the fields with appropriate information regarding your application.  
If you wish to populate an empty `package.json` file, run:  
`npm init -y`  

Install Cypress locally as a dev dependency for your project with npm.  
`npm install cypress --save-dev`  
Cypress is now installed in the /node_modules/.bin folder.  

## Open Cypress

Long command to open Cypress: `./node_modules/.bin/cypress open`  
Shortcut command to open Cypress: `npx cypress open`  

[npx documentation](https://www.npmjs.com/package/npx)  

## Environment Variables

Name | Description
---- | -----------
CYPRESS_INSTALL_BINARY | [Destination of Cypress binary that's downloaded and installed](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Install-binary)  
CYPRESS_DOWNLOAD_MIRROR | [Downloads the Cypress binary though a mirror server](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Mirroring)  
CYPRESS_CACHE_FOLDER | [Changes the Cypress binary cache location](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Binary-cache)  
CYPRESS_RUN_BINARY | [Location of Cypress binary at run-time](https://docs.cypress.io/guides/getting-started/installing-cypress.html#Run-binary)  

## Writing Your First Test

Open a new file called `sample_spec.js` in your project under cypress -> integration.

Paste the following code to get a simple working test.  

```javascript
describe('My First Test', function () {
    it('Does not do much', function () {
        expect(true).to.equal(true)
    })
})
```

Running this test will give you an idea of what a successful test looks like in Cypress.  

A solid test generally covers 3 phases:  

1. Arrange - "Given"
1. Act - "When"
1. Assert - "Then" e.g. in Cypress `.should()`

You should not test apps you don't control. They are liable to change at any time, resulting in breaking tests. They may do A/B testing, which makes it impossible to get consistent results. They may detect you are a script and block you. They may have security features enabled which prevent Cypress from working.  
Cypress is to be a tool used to test **your own applications**.  

## Testing Strategies

Only you know your application, so a specific outline on the best testing strategies is special to your application.  
What to test, where the edge cases and seams are, what regressions may come up, etc. are entirely up to you, your application, and your team.  

That said, modern web testing has a few common experiences. Some scenarios likely to be encountered are listed below.  

### Seeding Data

### Stubbing the Server

### Logging In
