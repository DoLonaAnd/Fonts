const tags = {
    pop: "ポップ系",
    techno: "テクノ系",
    horror: "ホラー系",
    cute: "キュート系",
    stylish: "スタイリッシュ系"
};

class font{
    constructor(name, link, tag){
        this.name = name;
        this.link = link;
        this.tag = tag;
    }
    set_table(){
        for(set in this.tag){
            
        }
    }
}

const fonts = [
    new font("ゆずポップ", "http://black-yuzunyan.lolipop.jp/fonts-yuzu-pop", [tags.pop, tags.cute]),
    new font("Makinas4", "https://moji-waku.com/makinas/", [tags.techno, tags.stylish])
]

// 起動
window.onload = function() {
};