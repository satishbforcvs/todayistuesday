## Code Quality Integrations
Template repo contains basic unit tests framework with code coverage.
To run tests execute next command:
- npm run test
Once test run is completed you will see next table:
  ---------------------|---------|----------|---------|---------|-------------------
  File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
  ---------------------|---------|----------|---------|---------|-------------------
  All files            |     100 |      100 |     100 |     100 |                   
  controllers          |     100 |      100 |     100 |     100 |                   
  demo-controller.js   |     100 |      100 |     100 |     100 |                   
  routes               |     100 |      100 |     100 |     100 |                   
  demo-router.js       |     100 |      100 |     100 |     100 |                   
  ---------------------|---------|----------|---------|---------|-------------------

To configure code coverage for Sonar Cloud you can use sonar-project.properties or 'exclude' section of package.json
Sonar Cloud Quality Gate rule demands at least 85% code coverage.