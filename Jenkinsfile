pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t techshop-app .'
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker run -d -p 3000:3000 techshop-app'
                }
            }
        }
    }
}
