pipeline {
    agent {
        label 'deployment'
    }

    environment {
        TELEGRAM_TOKEN = '7412112427:AAGHiKy0jxpuCZyBhkyjLSLvUiFgvMTTQ1U'
        CHAT_ID = '-4248349911'
        REGISTRY_URL = "hiepvh8"
        HOST_URL = "192.168.208.100"
        SONAR_LOGIN = "squ_cd5655c0079ddf20cc9ef934779bceb06841621e"
        REGISTRY_PROJECT = "hiepvh8_hospital"
        PROCESS_NAME_BACKEND = "backend-hospital"
        PROCESS_NAME_FRONTEND = "frontend-hospital"
        DOCKER_IMAGE_BASE_BACKEND = "${REGISTRY_URL}/${PROCESS_NAME_BACKEND}"
        DOCKER_IMAGE_BASE_FRONTEND = "${REGISTRY_URL}/${PROCESS_NAME_FRONTEND}"
        REGISTRY_USER = "hiepvh8@gmail.com"
        REGISTRY_PASSWORD = "Zmxncbv2002"
        DOCKER_FILE_BUILD_BACKEND = "Dockerfile-build"
        PATH_PROJECT = "/var/lib/jenkins/workspace/Action_Hospital/hospital"
        REPORT_DIR = 'robot-test'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/thuctap/longmh']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/buiduchieuvnu/demo.git']])

                    // Lấy commit hash hiện tại
                script {
                    // Lấy mã commit
                    def commitHash = sh(script: 'git rev-parse HEAD | cut -c1-7', returnStdout: true).trim()
                    env.COMMIT_HASH = commitHash
                }
            }
        }
        
        stage('Scan Sonarqube') {
            steps {
                script {
                    sh " docker build -f ${PROCESS_NAME_BACKEND}/${DOCKER_FILE_BUILD_BACKEND} -t ${PROCESS_NAME_BACKEND}-build ${PROCESS_NAME_BACKEND}/ "
                    sh """ docker run --rm -v "${PATH_PROJECT}/${PROCESS_NAME_BACKEND}:/app" -w /app ${PROCESS_NAME_BACKEND}-build:latest mvn clean install """
                    
                    //sonar backend
                    sh """ 
                        docker run --rm \
                        -v "${PATH_PROJECT}/${PROCESS_NAME_BACKEND}:/usr/src" \
                        -w /usr/src sonarsource/sonar-scanner-cli \
                        sonar-scanner \
                        -Dsonar.projectKey=${PROCESS_NAME_BACKEND} \
                        -Dsonar.sources=src \
                        -Dsonar.java.binaries=target/classes \
                        -Dsonar.host.url=http://${HOST_URL}:9001 \
                        -Dsonar.login=${SONAR_LOGIN} 
                        """
                    sh " docker rmi -f ${PROCESS_NAME_BACKEND}-build:latest"
                    
                    //sonar frontend
                    sh """ 
                        docker run --rm \
                            -v "${PATH_PROJECT}/${PROCESS_NAME_FRONTEND}:/usr/src" \
                            -w /usr/src sonarsource/sonar-scanner-cli \
                            sonar-scanner \
                            -Dsonar.projectKey=${PROCESS_NAME_FRONTEND} \
                            -Dsonar.sources=src \
                            -Dsonar.java.binaries=src/app \
                            -Dsonar.host.url=http://${HOST_URL}:9001 \
                            -Dsonar.login=${SONAR_LOGIN} 
                        """
                }
            }
        }
        
        stage('Build Image') {
            steps {
                script {
                    sh " docker build -t '${DOCKER_IMAGE_BASE_BACKEND}:${COMMIT_HASH}' ${PROCESS_NAME_BACKEND}/."
                    sh " docker build -t '${DOCKER_IMAGE_BASE_FRONTEND}:${COMMIT_HASH}' ${PROCESS_NAME_FRONTEND}/."
                }
            }
        }
        
        stage('Push Image') {
            steps {
                script {
                    sh ''' echo "$REGISTRY_PASSWORD" | docker login -u $REGISTRY_USER --password-stdin '''
                    sh "docker push ${DOCKER_IMAGE_BASE_BACKEND}:${COMMIT_HASH}"
                    sh "docker push ${DOCKER_IMAGE_BASE_FRONTEND}:${COMMIT_HASH}"
                }
            }
        }
        
        stage('Pull and Deploy') {
            steps {
                script {
                    sh "docker pull ${DOCKER_IMAGE_BASE_BACKEND}:${COMMIT_HASH}"
                    sh "docker pull ${DOCKER_IMAGE_BASE_FRONTEND}:${COMMIT_HASH}"
                    sh "docker rm -f ${PROCESS_NAME_BACKEND}"
                    sh "docker rm -f ${PROCESS_NAME_FRONTEND}"
                    sh "docker run -dp 8080:8080 --name ${PROCESS_NAME_BACKEND} ${DOCKER_IMAGE_BASE_BACKEND}:${COMMIT_HASH}"
                    sh "docker run -dp 3000:80 --name ${PROCESS_NAME_FRONTEND} ${DOCKER_IMAGE_BASE_FRONTEND}:${COMMIT_HASH}"
                    sleep 30
                    sh """
                        docker images | grep -E '${DOCKER_IMAGE_BASE_BACKEND}|${DOCKER_IMAGE_BASE_FRONTEND}' | grep -v '${COMMIT_HASH}' | awk '{print \$1 ":" \$2}' | xargs -r docker rmi -f
                    """
                }
            }
        }
        
        stage('Robot Test') {
            steps {
                script {
                    sh "robot --outputdir ${PATH_PROJECT}/${PROCESS_NAME_BACKEND}/${REPORT_DIR}/ ${PATH_PROJECT}/${PROCESS_NAME_BACKEND}/${REPORT_DIR}/login_test.robot"
                    sleep 30
                }
            }
        }
        
        stage('Send Reports to Telegram') {
            steps {
                script {
                    def reportFile = "${PATH_PROJECT}/${PROCESS_NAME_BACKEND}/${REPORT_DIR}/report.html"
                    def logFile = "${PATH_PROJECT}/${PROCESS_NAME_BACKEND}/${REPORT_DIR}/log.html"
                    def outputFile = "${PATH_PROJECT}/${PROCESS_NAME_BACKEND}/${REPORT_DIR}/output.xml"

                    def sendMessage = { message ->
                        sh "curl -X POST https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage -F chat_id=${CHAT_ID} -F text='${message}'"
                    }

                    def sendFile = { file ->
                        echo "Sending file: ${file}"
                        def response = sh(script: "curl -v -X POST https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendDocument -F chat_id=${CHAT_ID} -F document=@${file}", returnStdout: true).trim()
                        echo "Response from Telegram API: ${response}"
                    }
                    
                    sendMessage("Robot test completed. Here are the reports:")

                    sendFile(reportFile)
                    sendFile(logFile)
                    sendFile(outputFile)
                }
            }
        }
    }
}
