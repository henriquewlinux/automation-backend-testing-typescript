module.exports = {
    reporter: 'mochawesome',
    reporterOptions: 'json=false,reportDir=../../report,reportFilename=APITestsReport,reportTitle=RestFul-booker,charts=true,code=false',
    spec: ["build/test/*.js"]
}