module.exports = {
  default: {
    require: [
      './UI_Framework/step_definitions/*.ts',
      './UI_Framework/hooks/*.ts',
      './API_Framework/step_definitions/*.ts',
      './API_Framework/hooks/*.ts'
    ],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],
    paths: [
      './API_Framework/features/*.feature',
      './UI_Framework/features/*.feature'
    ],
    requireModule: ['ts-node/register']
  }




}