pipeline {
    
    agent any
    
    parameters {
        string(name: 'SPEC', defaultValue: 'cypress/e2e/webtests/**', description: 'Enter the script path that you want to execute')
        choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: 'Pick the web browser you want to use to run your scripts')
    }
    
    
    options {
        ansiColor('xterm')
    }


    stages {
        
        stage('Build'){
            
            steps {
                echo "Building the application"
            }
        }
        
        stage('Testing') {
            steps {
               
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }

    post {
        always {
            
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
        }
    }
}