function runTest(envName ='qa'){

 switch(envName.trim().toLowerCase()) {
       case 'qa':
              console.log('Running tests in QA environment');
              break;
    
        case 'staging':
              console.log('Running tests in Staging environment');
              break;

         case 'production':
              console.log('Running tests in Production environment');
              break;

        case 'development':
              console.log('Running tests in Development environment');
              break;

        default:
              console.log('Unknown environment: ' + envName + ', running tests in default mode');
              break;

}}

runTest('pga');     

