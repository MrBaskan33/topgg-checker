- # Yüklemek için 
```
npm install topgg-checker@latest
```
___
- # Nasıl kullanılır
```javascript
const { TopGG } = require("topgg-checker")
const topgg = new TopGG("dbl_token", "bot_id")

function voteControl(userId) {
  topgg.isVoted(userId).then(voted => {
    console.log(voted)
  })
}
voteControl("user_id")
```
