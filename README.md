# 短網址產生器(URL_Shortener)
輸入網頁網址後，即可產生短網址，並提供使用者前往該網頁之連結及複製該網址之功能。

### 網頁外觀
![image](https://github.com/cayangtuu/URL_Shortener/blob/main/public/photos/%E5%B0%81%E9%9D%A2.png)

### 功能描述 (features)
- 輸入網站網址，點擊shorten按鈕後，將產生5位字符之短網址
- 顯示短網址產生成功之提示
- 提供短網址超連結，可透過按下短網址連至原網站網頁
- 可透過複製網址，進行短網址複製
- 網頁伺服器出現問題時，將於網頁畫面中顯示錯誤訊息

### 安裝與執行步驟 (installation and execution)
1. 打開終端機(Terminal)，將專案clone至本機位置
```
git clone https://github.com/cayangtuu/URL_Shortener.git
```
2. 進入專案資料夾
```
cd URL_Shortener
```
3. 安裝專案所需npm套件
```
npm install
```
4. 將種子資料匯入mongodb中
```
npm run seed
```
終端機顯示```mongodb connect!!!```及```URL Data Insert Successfully!```即代表成功匯入種子資料  
按下Ctrl+C退回終端機輸入指令狀態

5. 完成後，即可開始執行程式
```
npm run dev
```
終端機出現```App is running on http://localhost:3000```字樣即代表伺服器正常啟動

6. 開啟任一瀏覽器並於網址中輸入下列網址，即可連至網頁
```
http://localhost:3000
```

### 環境建置與需求(prerequisites)
##### Code編輯器
- Visual Studio Code
##### Node環境及套件
- Node.js-16.18.0
- express-4.16.4
- express-handlebars-3.0.0
- mongoose-5.9.7
- mongoose-type-url-2.1.0
- nodemon-2.0.20
- dotenv-16.0.3
##### 資料庫
- MongoDB
