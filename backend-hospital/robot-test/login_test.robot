*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}    http://192.168.208.100:8080/identity/login#/
${BROWSER}    chrome

*** Test Cases ***
Valid Login
    Open Browser    ${URL}    ${BROWSER}
    Input Text    id=username    user
    Input Text    id=password    user1
    Click Button    css:.btn.btn-lg.btn-primary.btn-block
    Page Should Contain    Swagger
    Close Browser

Invalid Login
    Open Browser    ${URL}    ${BROWSER}
    Input Text    id=username    -.-/
    Input Text    id=password    /;).
    Click Button    css:.btn.btn-lg.btn-primary.btn-block
    Page Should Contain    không hợp lệ
    Close Browser
