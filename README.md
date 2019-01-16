### What's this? ###

Basicly this is supposed to be a cheat-sheet for implementations of some 'classic' scenarios with protractor and cucumber.

## Installation ##

You should have node.js installed, latest and greatest version.

Also, install protractor globally with:

```npm install -g protractor```

Navigate to the project's folder in command prompt and run:

```npm install```

This will get all dependencies in place

### Run the tests ###

To download and extract browser driver run following in command prompt

```webdriver-manager update```
or
```npm run update```

To start the Selenium Server:

```webdriver-manager start ```
or
```npm start```

To run the tests you have to use custom command:
```npm run testEnv```

This will launch the test using all properties described in testEnv.conf.js
