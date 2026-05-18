
function launchBrowser() {
    let browserName = "chrome";

    if (browserName === "chrome") {
        console.log("expected browser launched");
    } else {
        console.log("expected browser not launched");
    }
}
launchBrowser();
function runTests() {
let testType = "smoke";
    switch (testType) {

        case "smoke":
            console.log("Running Smoke Tests");
            break;

        case "sanity":
            console.log("Running Sanity Tests");
            break;

        case "regression":
            console.log("Running Regression Tests");
            break;

        default:
            console.log("Running Smoke Tests");
    }
}
runTests();
