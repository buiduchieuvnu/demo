*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}    http://192.168.208.100:8080/identity/login#/
${BROWSER}    chrome

*** Keywords ***
Open Chrome Browser With Options
    [Arguments]    ${url}
    ${chrome options}=    Evaluate    sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method    ${chrome options}    add_argument    --headless
    Call Method    ${chrome options}    add_argument    --no-sandbox
    Call Method    ${chrome options}    add_argument    --disable-dev-shm-usage
    Create WebDriver    Chrome    options=${chrome options}
    Go To    ${url}

*** Test Cases ***
Valid Login
    Open Chrome Browser With Options    ${URL}
    Input Text    id=username    user
    Input Text    id=password    user1
    Click Button    css:.btn.btn-lg.btn-primary.btn-block
    Page Should Contain    []
    Close Browser
