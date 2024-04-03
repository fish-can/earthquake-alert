# earthquake-alert

使用 Typescript 撰寫，並使用 bun 打包成執行檔。  
配合 地牛 Wake Up! 的連動功能，當地震發生時，會自動發送通知到 LINE。

## 安裝 地牛 Wake Up

URL: [https://eew.earthquake.tw/](https://eew.earthquake.tw/)

![地牛 Wake Up! - 主畫面](./medias/%E5%9C%B0%E7%89%9B_Wake_Up-home-page.png)

## 申請 LINE Notify

URL: [https://notify-bot.line.me/my/](https://notify-bot.line.me/my/)

![Generate Line-Notify access token](./medias/generate-line-notify-token.png)

## 使用說明

### 1. 下載專案

```bash
git clone https://github.com/fish-can/earthquake-alert.git
```

### 2. 安裝相依套件

```bash
bun install
```

> 若沒有安裝 bun，請先安裝 bun  
> URL: [https://bun.sh/](https://bun.sh/)

### 3. 輸入 LINE Notify 的 Access-Token

![Set Line-Notify token](./medias/set-line-notify-token.png)

### 4. 建置專案

```bash
bun run build
```

### 5. 連結 Wake Up!

設定頁面 / 其他 / 連動設定

![Connect Wake Up!](./medias/connect-wake-up.png)

選取建置好的執行檔

![Select executable file](./medias/select-executable-file.png)

### 6. 完成

![Complete](./medias/complete.png)

## 注意事項

- 請確保 Wake Up! 的連動設定是正確的
- 請確保 LINE Notify 的 Access-Token 是正確的

## 特別感謝

- 地牛 Wake Up!
- LINE Notify

## 其他

若有任何問題，歡迎提出 issue。
