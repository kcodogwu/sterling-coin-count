# Sterling Coin Count

Sterling Coin Count is an application that given a number of pennies will calculate the minimum number of pound sterling coins needed to make that amount.

The app accounts for only the common £2, £1, 50p, 20p, 10p, 5p, 2p and 1p coins.

## Illustration
Below are sample inputs and an idea of what the output should be:
* 123p = 1 x £1, 1 x 20p, 1 x 2p, 1 x 1p.
* £12.34 = 6 x £2, 1 x 20p, 1 x 10p, 2 x 2p.

## Instructions
See the various instructions below.

### Running the App
First of all, you need Node.js and npm installed on the system where you'll be running this app. To install both, [get the most recent installer for the LTS version of Node.js](https://nodejs.org/).

If Node.js and npm is installed properly, make sure the system is connected to the internet, then clone the repository & install all the required dependencies by running the command below in a terminal window or Windows Command Prompt:

```
git clone git@github.com:kcodogwu/sterling-coin-count.git
cd sterling-coin-count
npm install
```

After it's done installing all the dependencies, in the same terminal window or Windows Command Prompt, run this command:

```
npm start
````

Next, you open modern browser of choice, in the address bar, type:

```
http://localhost:8080
```
And then press enter.

### Testing the App
The app runs the test as part of it's start up process. To run this test manually, navigate to the root directory of the app in a terminal window or Windows Command Prompt, then run this command:
```
npm run test
```

### Stopping the Running App
To stop the running app, simply go to the terminal window or Windows Command Prompt where the app is running, and press the `Ctrl` plus the `C` keys at the same time. If prompted on stopping the running process, give the affirmative answer to end the process.

> ## NB
> This was done on the Windows operating system. If you plan to make use of this with [Bash unix shell](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29),
> in `package.json` file, in the `scripts` section, you would want to change the `clean` script to something like this:
> ```
> "clean": "rm -rf dist && mkdir dist/public/js",
> ```