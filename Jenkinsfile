pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
    steps {
        sh '''
        cd $WORKSPACE
        npm install
        pkill -f node || true
        nohup node app.js > app.log 2>&1 &
        '''
    }
}

    }
}

