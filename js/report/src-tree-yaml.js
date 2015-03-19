/**
 * @type {string}
 */
sahagin.srcTreeYamlStr = (function(){/*
rootClassTable:
  classes:
  - methodKeys: [com.tridentqa.webdriver.appium.AndroidBrowserTest.問い合わせが成功すること-void]
    key: com.tridentqa.webdriver.appium.AndroidBrowserTest
    qname: com.tridentqa.webdriver.appium.AndroidBrowserTest
  - methodKeys: [com.tridentqa.webdriver.appium.AndroidNativeTest.連絡先の登録が成功すること-void]
    key: com.tridentqa.webdriver.appium.AndroidNativeTest
    qname: com.tridentqa.webdriver.appium.AndroidNativeTest
  - methodKeys: [com.tridentqa.webdriver.appium.IOSNativeTest.計算処理が正しく行われること-void]
    key: com.tridentqa.webdriver.appium.IOSNativeTest
    qname: com.tridentqa.webdriver.appium.IOSNativeTest
  - methodKeys: [com.tridentqa.webdriver.selendroid.SelendroidTest.問い合わせが成功すること-void]
    key: com.tridentqa.webdriver.selendroid.SelendroidTest
    qname: com.tridentqa.webdriver.selendroid.SelendroidTest
formatVersion: '0.6'
rootMethodTable:
  methods:
  - name: 問い合わせが成功すること
    classKey: com.tridentqa.webdriver.appium.AndroidBrowserTest
    codeBody:
    - endLine: 70
      startLine: 70
      code:
        args:
        - {original: '"http://www-demo.trident-qa.com/contact/"', type: string, value: 'http://www-demo.trident-qa.com/contact/'}
        methodKey: org.openqa.selenium.WebDriver.get
        childInvoke: true
        original: driver.get("http://www-demo.trident-qa.com/contact/");
        type: method
        thisInstance: {original: driver, type: unknown}
    - endLine: 71
      startLine: 71
      code: {original: ContactPage contact=new ContactPage(driver);, type: unknown}
    - endLine: 72
      startLine: 72
      code:
        args:
        - {original: '"テストユーザー"', type: string, value: テストユーザー}
        methodKey: com.tridentqa.webdriver.pages.ContactPage.setName-String
        original: contact.setName("テストユーザー");
        type: method
        thisInstance: {original: contact, type: unknown}
    - endLine: 73
      startLine: 73
      code:
        args:
        - {original: '"***@***.com"', type: string, value: '***@***.com'}
        methodKey: com.tridentqa.webdriver.pages.ContactPage.setMail-String
        original: contact.setMail("***@***.com");
        type: method
        thisInstance: {original: contact, type: unknown}
    - endLine: 74
      startLine: 74
      code:
        args:
        - {original: '"TRIDENT"', type: string, value: TRIDENT}
        methodKey: com.tridentqa.webdriver.pages.ContactPage.setOrganization-String
        original: contact.setOrganization("TRIDENT");
        type: method
        thisInstance: {original: contact, type: unknown}
    - endLine: 75
      startLine: 75
      code:
        args:
        - {original: '"テスト"', type: string, value: テスト}
        methodKey: com.tridentqa.webdriver.pages.ContactPage.setSubject-String
        original: contact.setSubject("テスト");
        type: method
        thisInstance: {original: contact, type: unknown}
    - endLine: 76
      startLine: 76
      code:
        args:
        - {original: '"テスト送信です"', type: string, value: テスト送信です}
        methodKey: com.tridentqa.webdriver.pages.ContactPage.setMessage-String
        original: contact.setMessage("テスト送信です");
        type: method
        thisInstance: {original: contact, type: unknown}
    - endLine: 77
      startLine: 77
      code:
        methodKey: com.tridentqa.webdriver.pages.ContactPage.send-void
        original: contact.send();
        type: method
        thisInstance: {original: contact, type: unknown}
    key: com.tridentqa.webdriver.appium.AndroidBrowserTest.問い合わせが成功すること-void
  - name: 連絡先の登録が成功すること
    classKey: com.tridentqa.webdriver.appium.AndroidNativeTest
    codeBody:
    - endLine: 50
      startLine: 50
      code:
        methodKey: org.openqa.selenium.WebElement.click
        original: driver.findElement(By.name("Add Contact")).click();
        type: method
        thisInstance:
          args:
          - args:
            - {original: '"Add Contact"', type: string, value: Add Contact}
            methodKey: org.openqa.selenium.By.name
            original: By.name("Add Contact")
            type: method
            thisInstance: {original: By, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          childInvoke: true
          original: driver.findElement(By.name("Add Contact"))
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 51
      startLine: 51
      code:
        args:
        - {original: '"sample user"', type: string, value: sample user}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: driver.findElementById("com.example.android.contactmanager:id/contactNameEditText").sendKeys("sample user");
        type: method
        thisInstance:
          args:
          - {original: '"com.example.android.contactmanager:id/contactNameEditText"',
            type: string, value: 'com.example.android.contactmanager:id/contactNameEditText'}
          methodKey: org.openqa.selenium.remote.RemoteWebDriver.findElementById
          original: driver.findElementById("com.example.android.contactmanager:id/contactNameEditText")
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 52
      startLine: 52
      code:
        args:
        - {original: '"000000000"', type: string, value: '000000000'}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: driver.findElementById("com.example.android.contactmanager:id/contactPhoneEditText").sendKeys("000000000");
        type: method
        thisInstance:
          args:
          - {original: '"com.example.android.contactmanager:id/contactPhoneEditText"',
            type: string, value: 'com.example.android.contactmanager:id/contactPhoneEditText'}
          methodKey: org.openqa.selenium.remote.RemoteWebDriver.findElementById
          original: driver.findElementById("com.example.android.contactmanager:id/contactPhoneEditText")
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 53
      startLine: 53
      code:
        args:
        - {original: '"***.com"', type: string, value: '***.com'}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: driver.findElementById("com.example.android.contactmanager:id/contactEmailEditText").sendKeys("***.com");
        type: method
        thisInstance:
          args:
          - {original: '"com.example.android.contactmanager:id/contactEmailEditText"',
            type: string, value: 'com.example.android.contactmanager:id/contactEmailEditText'}
          methodKey: org.openqa.selenium.remote.RemoteWebDriver.findElementById
          original: driver.findElementById("com.example.android.contactmanager:id/contactEmailEditText")
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 54
      startLine: 54
      code:
        methodKey: org.openqa.selenium.WebElement.click
        original: driver.findElementById("com.example.android.contactmanager:id/contactSaveButton").click();
        type: method
        thisInstance:
          args:
          - {original: '"com.example.android.contactmanager:id/contactSaveButton"',
            type: string, value: 'com.example.android.contactmanager:id/contactSaveButton'}
          methodKey: org.openqa.selenium.remote.RemoteWebDriver.findElementById
          original: driver.findElementById("com.example.android.contactmanager:id/contactSaveButton")
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 55
      startLine: 55
      code:
        args:
        - {original: ScreenOrientation.LANDSCAPE, type: unknown}
        methodKey: org.openqa.selenium.Rotatable.rotate
        childInvoke: true
        original: driver.rotate(ScreenOrientation.LANDSCAPE);
        type: method
        thisInstance: {original: driver, type: unknown}
    key: com.tridentqa.webdriver.appium.AndroidNativeTest.連絡先の登録が成功すること-void
  - name: 計算処理が正しく行われること
    classKey: com.tridentqa.webdriver.appium.IOSNativeTest
    codeBody:
    - endLine: 45
      startLine: 45
      code:
        args:
        - {original: '"123"', type: string, value: '123'}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: driver.findElementByAccessibilityId("IntegerA").sendKeys("123");
        type: method
        thisInstance:
          args:
          - {original: '"IntegerA"', type: string, value: IntegerA}
          methodKey: io.appium.java_client.AppiumDriver.findElementByAccessibilityId
          original: driver.findElementByAccessibilityId("IntegerA")
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 46
      startLine: 46
      code:
        args:
        - {original: '"456"', type: string, value: '456'}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: driver.findElementByAccessibilityId("IntegerB").sendKeys("456");
        type: method
        thisInstance:
          args:
          - {original: '"IntegerB"', type: string, value: IntegerB}
          methodKey: io.appium.java_client.AppiumDriver.findElementByAccessibilityId
          original: driver.findElementByAccessibilityId("IntegerB")
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 47
      startLine: 47
      code:
        methodKey: org.openqa.selenium.WebElement.click
        original: driver.findElementByAccessibilityId("ComputeSumButton").click();
        type: method
        thisInstance:
          args:
          - {original: '"ComputeSumButton"', type: string, value: ComputeSumButton}
          methodKey: io.appium.java_client.AppiumDriver.findElementByAccessibilityId
          original: driver.findElementByAccessibilityId("ComputeSumButton")
          type: method
          thisInstance: {original: driver, type: unknown}
    - endLine: 48
      startLine: 48
      code:
        args:
        - methodKey: org.openqa.selenium.WebElement.getText
          original: driver.findElementByAccessibilityId("Answer").getText()
          type: method
          thisInstance:
            args:
            - {original: '"Answer"', type: string, value: Answer}
            methodKey: io.appium.java_client.AppiumDriver.findElementByAccessibilityId
            original: driver.findElementByAccessibilityId("Answer")
            type: method
            thisInstance: {original: driver, type: unknown}
        - args:
          - {original: '"579"', type: string, value: '579'}
          methodKey: org.hamcrest.CoreMatchers.is-Object
          original: is("579")
          type: method
        methodKey: org.junit.Assert.assertThat-Object,org.hamcrest.Matcher
        original: assertThat(driver.findElementByAccessibilityId("Answer").getText(),is("579"));
        type: method
    key: com.tridentqa.webdriver.appium.IOSNativeTest.計算処理が正しく行われること-void
  - name: 問い合わせが成功すること
    classKey: com.tridentqa.webdriver.selendroid.SelendroidTest
    codeBody:
    - endLine: 37
      startLine: 37
      code:
        args:
        - {original: '"http://www-demo.trident-qa.com/contact/"', type: string, value: 'http://www-demo.trident-qa.com/contact/'}
        methodKey: org.openqa.selenium.WebDriver.get
        original: driver.get("http://www-demo.trident-qa.com/contact/");
        type: method
        thisInstance: {original: driver, type: unknown}
    - endLine: 38
      startLine: 38
      code: {original: ContactPage contact=new ContactPage(driver);, type: unknown}
    - endLine: 39
      startLine: 39
      code:
        args:
        - {original: '"テストユーザー"', type: string, value: テストユーザー}
        methodKey: com.tridentqa.webdriver.pages.ContactPage.setName-String
        original: contact.setName("テストユーザー");
        type: method
        thisInstance: {original: contact, type: unknown}
    - endLine: 40
      startLine: 40
      code:
        args:
        - {original: '"***@***.com"', type: string, value: '***@***.com'}
        methodKey: com.tridentqa.webdriver.pages.ContactPage.setMail-String
        original: contact.setMail("***@***.com");
        type: method
        thisInstance: {original: contact, type: unknown}
    - endLine: 41
      startLine: 41
      code:
        args:
        - {original: '"TRIDENT"', type: string, value: TRIDENT}
        methodKey: com.tridentqa.webdriver.pages.ContactPage.setOrganization-String
        original: contact.setOrganization("TRIDENT");
        type: method
        thisInstance: {original: contact, type: unknown}
    - endLine: 42
      startLine: 42
      code:
        args:
        - {original: '"テスト"', type: string, value: テスト}
        methodKey: com.tridentqa.webdriver.pages.ContactPage.setSubject-String
        original: contact.setSubject("テスト");
        type: method
        thisInstance: {original: contact, type: unknown}
    - endLine: 43
      startLine: 43
      code:
        args:
        - {original: '"テスト送信です"', type: string, value: テスト送信です}
        methodKey: com.tridentqa.webdriver.pages.ContactPage.setMessage-String
        original: contact.setMessage("テスト送信です");
        type: method
        thisInstance: {original: contact, type: unknown}
    - endLine: 44
      startLine: 44
      code:
        methodKey: com.tridentqa.webdriver.pages.ContactPage.send-void
        original: contact.send();
        type: method
        thisInstance: {original: contact, type: unknown}
    key: com.tridentqa.webdriver.selendroid.SelendroidTest.問い合わせが成功すること-void
subMethodTable:
  methods:
  - name: setName
    testDoc: 名前に「{name}」をセットする
    classKey: com.tridentqa.webdriver.pages.ContactPage
    argVariables: [name]
    codeBody:
    - endLine: 18
      startLine: 18
      code:
        args:
        - {original: name, type: arg, argIndex: 0}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: driver.findElement(By.name("your-name")).sendKeys(name);
        type: method
        thisInstance:
          args:
          - args:
            - {original: '"your-name"', type: string, value: your-name}
            methodKey: org.openqa.selenium.By.name
            original: By.name("your-name")
            type: method
            thisInstance: {original: By, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          original: driver.findElement(By.name("your-name"))
          type: method
          thisInstance: {original: driver, type: unknown}
    key: com.tridentqa.webdriver.pages.ContactPage.setName-String
  - name: setMail
    testDoc: メールアドレスに「{email}」をセットする
    classKey: com.tridentqa.webdriver.pages.ContactPage
    argVariables: [email]
    codeBody:
    - endLine: 23
      startLine: 23
      code:
        args:
        - {original: email, type: arg, argIndex: 0}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: driver.findElement(By.name("your-email")).sendKeys(email);
        type: method
        thisInstance:
          args:
          - args:
            - {original: '"your-email"', type: string, value: your-email}
            methodKey: org.openqa.selenium.By.name
            original: By.name("your-email")
            type: method
            thisInstance: {original: By, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          original: driver.findElement(By.name("your-email"))
          type: method
          thisInstance: {original: driver, type: unknown}
    key: com.tridentqa.webdriver.pages.ContactPage.setMail-String
  - name: setOrganization
    testDoc: 組織に「{organization}」をセットする
    classKey: com.tridentqa.webdriver.pages.ContactPage
    argVariables: [organization]
    codeBody:
    - endLine: 28
      startLine: 28
      code:
        args:
        - {original: organization, type: arg, argIndex: 0}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: driver.findElement(By.name("your-organization")).sendKeys(organization);
        type: method
        thisInstance:
          args:
          - args:
            - {original: '"your-organization"', type: string, value: your-organization}
            methodKey: org.openqa.selenium.By.name
            original: By.name("your-organization")
            type: method
            thisInstance: {original: By, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          original: driver.findElement(By.name("your-organization"))
          type: method
          thisInstance: {original: driver, type: unknown}
    key: com.tridentqa.webdriver.pages.ContactPage.setOrganization-String
  - name: setSubject
    testDoc: 件名に「{subject}」をセットする
    classKey: com.tridentqa.webdriver.pages.ContactPage
    argVariables: [subject]
    codeBody:
    - endLine: 33
      startLine: 33
      code:
        args:
        - {original: subject, type: arg, argIndex: 0}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: driver.findElement(By.name("your-subject")).sendKeys(subject);
        type: method
        thisInstance:
          args:
          - args:
            - {original: '"your-subject"', type: string, value: your-subject}
            methodKey: org.openqa.selenium.By.name
            original: By.name("your-subject")
            type: method
            thisInstance: {original: By, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          original: driver.findElement(By.name("your-subject"))
          type: method
          thisInstance: {original: driver, type: unknown}
    key: com.tridentqa.webdriver.pages.ContactPage.setSubject-String
  - name: setMessage
    testDoc: 問い合わせ内容に「{message}」をセットする
    classKey: com.tridentqa.webdriver.pages.ContactPage
    argVariables: [message]
    codeBody:
    - endLine: 38
      startLine: 38
      code:
        args:
        - {original: message, type: arg, argIndex: 0}
        methodKey: org.openqa.selenium.WebElement.sendKeys
        original: driver.findElement(By.name("your-message")).sendKeys(message);
        type: method
        thisInstance:
          args:
          - args:
            - {original: '"your-message"', type: string, value: your-message}
            methodKey: org.openqa.selenium.By.name
            original: By.name("your-message")
            type: method
            thisInstance: {original: By, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          original: driver.findElement(By.name("your-message"))
          type: method
          thisInstance: {original: driver, type: unknown}
    key: com.tridentqa.webdriver.pages.ContactPage.setMessage-String
  - name: send
    testDoc: 問い合わせを送信する
    classKey: com.tridentqa.webdriver.pages.ContactPage
    codeBody:
    - endLine: 43
      startLine: 43
      code:
        methodKey: org.openqa.selenium.WebElement.click
        original: driver.findElement(By.cssSelector("input.wpcf7-submit")).click();
        type: method
        thisInstance:
          args:
          - args:
            - {original: '"input.wpcf7-submit"', type: string, value: input.wpcf7-submit}
            methodKey: org.openqa.selenium.By.cssSelector
            original: By.cssSelector("input.wpcf7-submit")
            type: method
            thisInstance: {original: By, type: unknown}
          methodKey: org.openqa.selenium.WebDriver.findElement
          original: driver.findElement(By.cssSelector("input.wpcf7-submit"))
          type: method
          thisInstance: {original: driver, type: unknown}
    key: com.tridentqa.webdriver.pages.ContactPage.send-void
  - {name: is, testDoc: '「{0}」に等しい', capture: none, classKey: org.hamcrest.core.Is,
    key: org.hamcrest.core.Is.is-Object}
  - {name: is, testDoc: '{0}', capture: none, classKey: org.hamcrest.core.Is, key: org.hamcrest.core.Is.is-org.hamcrest.Matcher}
  - {name: not, testDoc: '「{0}」と異なる', capture: none, classKey: org.hamcrest.core.IsNot,
    key: org.hamcrest.core.IsNot.not-Object}
  - {name: not, testDoc: '「{0}」と異なる', capture: none, classKey: org.hamcrest.core.IsNot,
    key: org.hamcrest.core.IsNot.not-org.hamcrest.Matcher}
  - {name: is, testDoc: '「{0}」に等しい', capture: none, classKey: org.hamcrest.CoreMatchers,
    key: org.hamcrest.CoreMatchers.is-Object}
  - {name: is, testDoc: '{0}', capture: none, classKey: org.hamcrest.CoreMatchers,
    key: org.hamcrest.CoreMatchers.is-org.hamcrest.Matcher}
  - {name: not, testDoc: '「{0}」と異なる', capture: none, classKey: org.hamcrest.CoreMatchers,
    key: org.hamcrest.CoreMatchers.not-Object}
  - {name: not, testDoc: '「{0}」と異なる', capture: none, classKey: org.hamcrest.CoreMatchers,
    key: org.hamcrest.CoreMatchers.not-org.hamcrest.Matcher}
  - {name: assertEquals, testDoc: '「{0}」が「{1}」に等しいことをチェック', classKey: org.junit.Assert,
    key: 'org.junit.Assert.assertEquals-double,double'}
  - {name: assertEquals, testDoc: '「{0}」が「{1}」に等しいことをチェック', classKey: org.junit.Assert,
    key: 'org.junit.Assert.assertEquals-long,long'}
  - {name: assertEquals, testDoc: '「{0}」が「{1}」に等しいことをチェック', classKey: org.junit.Assert,
    key: 'org.junit.Assert.assertEquals-Object,Object'}
  - {name: assertEquals, testDoc: '「{0}」が「{1}」に等しいことをチェック', classKey: org.junit.Assert,
    key: 'org.junit.Assert.assertEquals-Object[],Object[]'}
  - {name: assertThat, testDoc: '「{0}」が{1}ことをチェック', classKey: org.junit.Assert, key: 'org.junit.Assert.assertThat-Object,org.hamcrest.Matcher'}
  - {name: assertThat, testDoc: '「{1}」が{2}ことをチェック', classKey: org.junit.Assert, key: 'org.junit.Assert.assertThat-String,Object,org.hamcrest.Matcher'}
  - {name: get, testDoc: '「{this}」の{0}番目', capture: none, classKey: java.util.List,
    key: java.util.List.get}
  - {name: className, testDoc: 'クラス名 = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.className}
  - {name: cssSelector, testDoc: 'css = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.cssSelector}
  - {name: id, testDoc: 'id = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.id}
  - {name: linkText, testDoc: 'テキスト = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.linkText}
  - {name: name, testDoc: 'name = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.name}
  - {name: partialLinkText, testDoc: 'テキスト = {0}(部分一致)', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.partialLinkText}
  - {name: tagName, testDoc: 'タグ名 = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.tagName}
  - {name: xpath, testDoc: 'xpath = {0}', capture: none, classKey: org.openqa.selenium.By,
    key: org.openqa.selenium.By.xpath}
  - {name: findElementByClassName, testDoc: '要素「クラス名 = {0}」', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName}
  - {name: findElementByCssSelector, testDoc: '要素「css = {0}」', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector}
  - {name: findElementById, testDoc: '要素「id = {0}」', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementById}
  - {name: findElementByLinkText, testDoc: '要素「テキスト = {0}」', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText}
  - {name: findElementByName, testDoc: '要素「name = {0}」', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementByName}
  - {name: findElementByPartialLinkText, testDoc: '要素「テキスト = {0}(部分一致)」', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementByPartialLinkText}
  - {name: findElementByTagName, testDoc: '要素「タグ名 = {0}」', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementByTagName}
  - {name: findElementByXPath, testDoc: '要素「xpath = {0}」', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath}
  - {name: findElementsByClassName, testDoc: '「クラス名 = {0}」を満たす全要素', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByClassName}
  - {name: findElementsByCssSelector, testDoc: '「css = {0}」を満たす全要素', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector}
  - {name: findElementsById, testDoc: '「id = {0}」を満たす全要素', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementsById}
  - {name: findElementsByLinkText, testDoc: '「テキスト = {0}」を満たす全要素', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByLinkText}
  - {name: findElementsByName, testDoc: '「name = {0}」を満たす全要素', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByName}
  - {name: findElementsByPartialLinkText, testDoc: '「テキスト = {0}(部分一致)」を満たす全要素', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByPartialLinkText}
  - {name: findElementsByTagName, testDoc: '「タグ名 = {0}」を満たす全要素', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByTagName}
  - {name: findElementsByXPath, testDoc: '「xpath = {0}」を満たす全要素', classKey: org.openqa.selenium.remote.RemoteWebDriver,
    key: org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath}
  - {name: getOrientation, testDoc: スクリーンの向き, classKey: org.openqa.selenium.Rotatable,
    key: org.openqa.selenium.Rotatable.getOrientation}
  - {name: rotate, testDoc: 'スクリーンの向きを{0}に回転', classKey: org.openqa.selenium.Rotatable,
    key: org.openqa.selenium.Rotatable.rotate}
  - {name: close, testDoc: 現在のウィンドウを閉じる, classKey: org.openqa.selenium.WebDriver,
    key: org.openqa.selenium.WebDriver.close}
  - {name: findElement, testDoc: '要素「{0}」', classKey: org.openqa.selenium.WebDriver,
    key: org.openqa.selenium.WebDriver.findElement}
  - {name: findElements, testDoc: '「{0}」を満たす全要素', classKey: org.openqa.selenium.WebDriver,
    key: org.openqa.selenium.WebDriver.findElements}
  - {name: get, testDoc: '「{0}」にページ遷移', classKey: org.openqa.selenium.WebDriver, key: org.openqa.selenium.WebDriver.get}
  - {name: getCurrentUrl, testDoc: 現在のURL, classKey: org.openqa.selenium.WebDriver,
    key: org.openqa.selenium.WebDriver.getCurrentUrl}
  - {name: getTitle, testDoc: ページタイトル, classKey: org.openqa.selenium.WebDriver, key: org.openqa.selenium.WebDriver.getTitle}
  - {name: quit, testDoc: ブラウザを閉じる, classKey: org.openqa.selenium.WebDriver, key: org.openqa.selenium.WebDriver.quit}
  - {name: back, testDoc: 前ページに戻る, classKey: org.openqa.selenium.WebDriver$Navigation,
    key: org.openqa.selenium.WebDriver$Navigation.back}
  - {name: forward, testDoc: 次ページに進む, classKey: org.openqa.selenium.WebDriver$Navigation,
    key: org.openqa.selenium.WebDriver$Navigation.forward}
  - {name: refresh, testDoc: ページ再読み込み, classKey: org.openqa.selenium.WebDriver$Navigation,
    key: org.openqa.selenium.WebDriver$Navigation.refresh}
  - {name: to, testDoc: '「{0}」にページ遷移', classKey: org.openqa.selenium.WebDriver$Navigation,
    key: org.openqa.selenium.WebDriver$Navigation.to}
  - {name: clear, testDoc: '{this}のテキストをクリア', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.clear}
  - {name: click, testDoc: '{this}をクリック', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.click}
  - {name: getAttribute, testDoc: '{this}の属性「{0}」', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.getAttribute}
  - {name: getText, testDoc: '{this}の表示テキスト', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.getText}
  - {name: isDisplayed, testDoc: '{this}が表示されているか', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.isDisplayed}
  - {name: isEnabled, testDoc: '{this}が有効になっているか', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.isEnabled}
  - {name: isSelected, testDoc: '{this}が選択されているか', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.isSelected}
  - {name: sendKeys, testDoc: '{this}に「{0}」を入力', classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.sendKeys}
  - {name: submit, testDoc: フォームのデータを送信, classKey: org.openqa.selenium.WebElement,
    key: org.openqa.selenium.WebElement.submit}
  - {name: findElementByAndroidUIAutomator, testDoc: '要素「Android UiAutomator = {0}」',
    classKey: io.appium.java_client.android.AndroidDriver, key: io.appium.java_client.android.AndroidDriver.findElementByAndroidUIAutomator}
  - {name: findElementsByAndroidUIAutomator, testDoc: '「Android UiAutomator = {0}」を満たす全要素',
    classKey: io.appium.java_client.android.AndroidDriver, key: io.appium.java_client.android.AndroidDriver.findElementsByAndroidUIAutomator}
  - {name: isLocked, testDoc: 画面がロックされているか, classKey: io.appium.java_client.android.AndroidDriver,
    key: io.appium.java_client.android.AndroidDriver.isLocked}
  - {name: findElementByAccessibilityId, testDoc: '要素「アクセシビリティID = {0}」', classKey: io.appium.java_client.AppiumDriver,
    key: io.appium.java_client.AppiumDriver.findElementByAccessibilityId}
  - {name: findElementsByAccessibilityId, testDoc: '「アクセシビリティID = {0}」を満たす全要素', classKey: io.appium.java_client.AppiumDriver,
    key: io.appium.java_client.AppiumDriver.findElementsByAccessibilityId}
  - {name: hideKeyboard, testDoc: キーボードを隠す, classKey: io.appium.java_client.AppiumDriver,
    key: io.appium.java_client.AppiumDriver.hideKeyboard}
  - {name: lockScreen, testDoc: '{0}秒間画面をロック', classKey: io.appium.java_client.AppiumDriver,
    key: io.appium.java_client.AppiumDriver.lockScreen}
  - {name: pinch, testDoc: '(x:{0}, y:{1})をピンチインで縮小', classKey: io.appium.java_client.AppiumDriver,
    key: 'io.appium.java_client.AppiumDriver.pinch-int,int'}
  - {name: pinch, testDoc: '{0}をピンチインで縮小', classKey: io.appium.java_client.AppiumDriver,
    key: io.appium.java_client.AppiumDriver.pinch-org.openqa.selenium.WebElement}
  - {name: swipe, testDoc: '(x:{0}, y:{1})から(x:{2}, y:{3})へ、{4}ミリ秒間でスワイプ', classKey: io.appium.java_client.AppiumDriver,
    key: io.appium.java_client.AppiumDriver.swipe}
  - {name: tap, testDoc: '(x:{1}, y:{2})を、{0}本指で{3}ミリ秒間タップ', classKey: io.appium.java_client.AppiumDriver,
    key: 'io.appium.java_client.AppiumDriver.tap-int,int,int,int'}
  - {name: tap, testDoc: '{1}を{0}本指で{2}ミリ秒間タップ', classKey: io.appium.java_client.AppiumDriver,
    key: 'io.appium.java_client.AppiumDriver.tap-int,org.openqa.selenium.WebElement,int'}
  - {name: zoom, testDoc: '(x:{0}, y:{1})をピンチアウトで拡大', classKey: io.appium.java_client.AppiumDriver,
    key: 'io.appium.java_client.AppiumDriver.zoom-int,int'}
  - {name: zoom, testDoc: '{0}をピンチアウトで拡大', classKey: io.appium.java_client.AppiumDriver,
    key: io.appium.java_client.AppiumDriver.zoom-org.openqa.selenium.WebElement}
  - {name: findElementByIosUIAutomation, testDoc: '要素「iOS UIAutomation = {0}」', classKey: io.appium.java_client.ios.IOSDriver,
    key: io.appium.java_client.ios.IOSDriver.findElementByIosUIAutomation}
  - {name: findElementsByIosUIAutomation, testDoc: '「iOS UIAutomation = {0}」を満たす全要素',
    classKey: io.appium.java_client.ios.IOSDriver, key: io.appium.java_client.ios.IOSDriver.findElementsByIosUIAutomation}
  - {name: shake, testDoc: 端末をシェイク, classKey: io.appium.java_client.ios.IOSDriver,
    key: io.appium.java_client.ios.IOSDriver.shake}
  - {name: AccessibilityId, testDoc: 'アクセシビリティID = {0}', capture: none, classKey: io.appium.java_client.MobileBy,
    key: io.appium.java_client.MobileBy.AccessibilityId}
  - {name: AndroidUIAutomator, testDoc: 'Android UiAutomator = {0}', capture: none,
    classKey: io.appium.java_client.MobileBy, key: io.appium.java_client.MobileBy.AndroidUIAutomator}
  - {name: IosUIAutomation, testDoc: 'iOS UIAutomation = {0}', capture: none, classKey: io.appium.java_client.MobileBy,
    key: io.appium.java_client.MobileBy.IosUIAutomation}
  - {name: with, testDoc: '{this}に「{0}」を入力', classKey: org.fluentlenium.core.action.FillConstructor,
    key: org.fluentlenium.core.action.FillConstructor.with}
  - {name: clear, testDoc: '{this}のテキストをクリア', classKey: org.fluentlenium.core.domain.FluentList,
    key: org.fluentlenium.core.domain.FluentList.clear}
  - {name: click, testDoc: '{this}をクリック', classKey: org.fluentlenium.core.domain.FluentList,
    key: org.fluentlenium.core.domain.FluentList.click}
  - {name: getAttribute, testDoc: '{this}の属性「{0}」', classKey: org.fluentlenium.core.domain.FluentList,
    key: org.fluentlenium.core.domain.FluentList.getAttribute}
  - {name: getText, testDoc: '{this}の表示テキスト', classKey: org.fluentlenium.core.domain.FluentList,
    key: org.fluentlenium.core.domain.FluentList.getText}
  - {name: getValue, testDoc: '{this}の値', classKey: org.fluentlenium.core.domain.FluentList,
    key: org.fluentlenium.core.domain.FluentList.getValue}
  - {name: clear, testDoc: '{this}のテキストをクリア', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.clear}
  - {name: click, testDoc: '{this}をクリック', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.click}
  - {name: getAttribute, testDoc: '{this}の属性「{0}」', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.getAttribute}
  - {name: getText, testDoc: '{this}の表示テキスト', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.getText}
  - {name: getValue, testDoc: '{this}の値', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.getValue}
  - {name: isDisplayed, testDoc: '{this}が表示されているか', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.isDisplayed}
  - {name: isEnabled, testDoc: '{this}が有効になっているか', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.isEnabled}
  - {name: isSelected, testDoc: '{this}が選択されているか', classKey: org.fluentlenium.core.domain.FluentWebElement,
    key: org.fluentlenium.core.domain.FluentWebElement.isSelected}
  - {name: withClass, testDoc: 'class = {0}', capture: none, classKey: org.fluentlenium.core.filter.FilterConstructor,
    key: org.fluentlenium.core.filter.FilterConstructor.withClass-String}
  - {name: withName, testDoc: 'name = {0}', capture: none, classKey: org.fluentlenium.core.filter.FilterConstructor,
    key: org.fluentlenium.core.filter.FilterConstructor.withName-String}
  - {name: withText, testDoc: 'text = {0}', capture: none, classKey: org.fluentlenium.core.filter.FilterConstructor,
    key: org.fluentlenium.core.filter.FilterConstructor.withText-String}
  - {name: $, testDoc: '要素「{0}{if:1} ({1}){end}」', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: 'org.fluentlenium.core.Fluent.$-String,org.fluentlenium.core.filter.Filter[]'}
  - {name: $, testDoc: '「{0}{if:2} ({2}){end}」の{1}番目の要素', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 2, key: 'org.fluentlenium.core.Fluent.$-String,java.lang.Integer,org.fluentlenium.core.filter.Filter[]'}
  - {name: clear, testDoc: '要素「{0}{if:1} ({1}){end}」のテキストをクリア', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: org.fluentlenium.core.Fluent.clear}
  - {name: click, testDoc: '要素「{0}{if:1} ({1}){end}」をクリック', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: org.fluentlenium.core.Fluent.click}
  - {name: executeScript, testDoc: 'JavaScript「{0}」を実行', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: org.fluentlenium.core.Fluent.executeScript}
  - {name: fill, testDoc: '要素「{0}{if:1} ({1}){end}」', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: org.fluentlenium.core.Fluent.fill}
  - {name: find, testDoc: '要素「{0}{if:1} ({1}){end}」', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: 'org.fluentlenium.core.Fluent.find-String,org.fluentlenium.core.filter.Filter[]'}
  - {name: find, testDoc: '「{0}{if:2} ({2}){end}」の{1}番目の要素', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 2, key: 'org.fluentlenium.core.Fluent.find-String,java.lang.Integer,org.fluentlenium.core.filter.Filter[]'}
  - {name: findFirst, testDoc: '「{0}{if:1} ({1}){end}」の最初の要素', classKey: org.fluentlenium.core.Fluent,
    varLengthArgIndex: 1, key: 'org.fluentlenium.core.Fluent.findFirst-String,org.fluentlenium.core.filter.Filter[]'}
  - {name: goTo, testDoc: '「{0}」にページ遷移', classKey: org.fluentlenium.core.Fluent, key: org.fluentlenium.core.Fluent.goTo-String}
  - {name: goTo, testDoc: '「{0}」にページ遷移', classKey: org.fluentlenium.core.Fluent, key: org.fluentlenium.core.Fluent.goTo-org.fluentlenium.core.FluentPage}
  - {name: takeScreenShot, testDoc: '画面キャプチャを「{0}」に保存', classKey: org.fluentlenium.core.Fluent,
    key: org.fluentlenium.core.Fluent.takeScreenShot-String}
  - {name: title, testDoc: '{this}のページタイトル', classKey: org.fluentlenium.core.Fluent,
    key: org.fluentlenium.core.Fluent.title}
  - {name: go, testDoc: '{this}にページ遷移', classKey: org.fluentlenium.core.FluentPage,
    key: org.fluentlenium.core.FluentPage.go}
  - {name: isAt, testDoc: '{this}へのページ遷移が成功したことをチェック', classKey: org.fluentlenium.core.FluentPage,
    key: org.fluentlenium.core.FluentPage.isAt}
subClassTable:
  classes:
  - testDoc: 問い合わせページ
    methodKeys: [com.tridentqa.webdriver.pages.ContactPage.setName-String, com.tridentqa.webdriver.pages.ContactPage.setMail-String,
      com.tridentqa.webdriver.pages.ContactPage.setOrganization-String, com.tridentqa.webdriver.pages.ContactPage.setSubject-String,
      com.tridentqa.webdriver.pages.ContactPage.setMessage-String, com.tridentqa.webdriver.pages.ContactPage.send-void]
    type: page
    key: com.tridentqa.webdriver.pages.ContactPage
    qname: com.tridentqa.webdriver.pages.ContactPage
  - {key: org.hamcrest.core.Is, qname: org.hamcrest.core.Is}
  - {key: org.hamcrest.core.IsNot, qname: org.hamcrest.core.IsNot}
  - {key: org.hamcrest.CoreMatchers, qname: org.hamcrest.CoreMatchers}
  - {key: org.junit.Assert, qname: org.junit.Assert}
  - {key: java.util.List, qname: java.util.List}
  - {key: org.openqa.selenium.By, qname: org.openqa.selenium.By}
  - {key: org.openqa.selenium.remote.RemoteWebDriver, qname: org.openqa.selenium.remote.RemoteWebDriver}
  - {key: org.openqa.selenium.Rotatable, qname: org.openqa.selenium.Rotatable}
  - {key: org.openqa.selenium.WebDriver, qname: org.openqa.selenium.WebDriver}
  - {key: org.openqa.selenium.WebDriver$Navigation, qname: org.openqa.selenium.WebDriver$Navigation}
  - {key: org.openqa.selenium.WebElement, qname: org.openqa.selenium.WebElement}
  - {key: io.appium.java_client.android.AndroidDriver, qname: io.appium.java_client.android.AndroidDriver}
  - {key: io.appium.java_client.AppiumDriver, qname: io.appium.java_client.AppiumDriver}
  - {key: io.appium.java_client.ios.IOSDriver, qname: io.appium.java_client.ios.IOSDriver}
  - {key: io.appium.java_client.MobileBy, qname: io.appium.java_client.MobileBy}
  - {key: org.fluentlenium.core.action.FillConstructor, qname: org.fluentlenium.core.action.FillConstructor}
  - {key: org.fluentlenium.core.domain.FluentList, qname: org.fluentlenium.core.domain.FluentList}
  - {key: org.fluentlenium.core.domain.FluentWebElement, qname: org.fluentlenium.core.domain.FluentWebElement}
  - {key: org.fluentlenium.core.filter.FilterConstructor, qname: org.fluentlenium.core.filter.FilterConstructor}
  - {key: org.fluentlenium.core.Fluent, qname: org.fluentlenium.core.Fluent}
  - {key: org.fluentlenium.core.FluentPage, qname: org.fluentlenium.core.FluentPage}

*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];