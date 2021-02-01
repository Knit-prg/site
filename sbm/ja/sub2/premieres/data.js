const table=document.getElementById("main");
const d=document;
let authors=[];
let whole_data=[
	[2020,12,24,12,0,"これ以前の情報は","反映されていません","announce"]
	,[2020,12,24,13,33,"konecocoa ☆","けだるぎ","normal","youtube","YkYOJmAndiM"]
	,[2020,12,24,13,43,"1224","全てNYの所為です。","normal","youtube","FKF38i04v4w"]
	,[2020,12,24,19,0,"- Cover","彗 / sui","premiere","youtube","Jt9jmSdecGk"]
	,[2020,12,24,23,0,"Merry X'mas 2020","Science Ghost","premiere","youtube","LrnNTVbFErc"]
	,[2020,12,24,23,30,"名の無い星が空で爆ぜたら","全て彼方の所為です。","premiere","youtube","cFB4TSbKwzM"]
	,[2020,12,25,0,0,"【琴葉姉妹オリジナル曲】メリクリだってよ【クリスマスソング】","雪乃トケル","premiere","youtube","kBsR5VdQkyo","original"]
	,[2020,12,25,0,0,"感電してイキそうになる米津玄師","超定期置き場","normal","youtube","JUYiExs1KDg"]
	,[2020,12,25,10,6,".。","全てNYの所為です。","normal","youtube","ka7PQyMn3HA"]
	,[2020,12,25,18,0,"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀雲国奥木染","丶","premiere","youtube","AIgymglxoSw"]
	,[2020,12,25,18,0,"﹣【耳コピ】","くろみうむ","normal","youtube","rjvyBdVJj3Q","imitation"]
	,[2020,12,25,19,30,"特に予定もないのでボカロP28人でジングルベルアレンジしてみたしてみた","京極みやび","premiere","youtube","OysBhKWcjdw"]
	,[2020,12,25,20,0,"ヒロシゲ36号 〜NeoSuper Express アレンジ","全て希望の所為です。","premiere","youtube","NyfrXa9UOq4","other"]
	,[2020,12,25,20,4,"KING 歌ってみた","‌","normal","youtube","SCpuiy_fw14"]
	,[2020,12,25,21,0,"Happy Xmas!!/クリスマスメドレー","いろはもみじ【作曲】","premiere","youtube","XFs7D2A4XMc"]
	,[2020,12,25,21,0,"王朱██","全てが皆無な所為で。","premiere","youtube","KvGtPxCw094"]
	,[2020,12,25,21,18,"あ","wakanameko_生配信ch","normal","youtube","cpGbxm1vUCw"]
	,[2020,12,25,22,46,"詳細不明","定期置き場","normal","youtube","qjOkDF4T4mo"]
	,[2020,12,25,22,59,"深層ウェブ","定期置き場","normal","youtube","ApqFpGL-fQU"]
	,[2020,12,25,23,0,"×","Null. 404","premiere","youtube","5AcuS1_wZY0"]
	,[2020,12,25,23,2,"たゃ","全てNYの所為です。","normal","youtube","7sMGFmikVv4"]
	,[2020,12,25,23,30,"×××","全て希望の所為です。","premiere","youtube","xBwJLynGIrk"]
	,[2020,12,25,23,45,"∴","全てあなたの所以です。","premiere","youtube","K4bTTyh8iEY"]
	,[2020,12,25,23,53,"めちゃくちゃギリギリChristmas","わさひIl","normal","youtube","HfdO4kJlZns"]
	,[2020,12,26,0,0,"𝐈𝐈","全て大人の所為です。","premiere","youtube","KFcKKsDyRRw"]
	,[2020,12,26,0,0,"2020年12月25日","樹海","normal","youtube","uN7lI1DfcQA"]
	,[2020,12,26,11,5,"№2 疲弊","Water Metal","normal","youtube","e8Jo7iH3Fm0"]
	,[2020,12,26,17,40,"儚く","全てNYの所為です。","normal","youtube","AdHWlR5kRkk"]
	,[2020,12,26,21,6,"!1","そってぃー","normal","youtube","5UKk_SYxVeg"]
	,[2020,12,26,21,20,"嗜虐の限りを尽くす太刀","夏花","normal","youtube","LVvuzIGfpNw"]
	,[2020,12,26,21,40,"4","χ無","normal","youtube","Z88pMUfGdnc"]
	,[2020,12,26,22,38,"Don't archive","x髥莏","live","youtube","O9AY1lPG1OA"]
	,[2020,12,26,23,0,"【予告】Imitate Community Countdown","Imitate Community","premiere","youtube","bQh5fAm8CZk"]
	,[2020,12,27,0,33,"年の瀬合作の単品","ネジマキ【音MAD】","normal","youtube","dpOtyL4aqfU"]
	,[2020,12,27,0,51,"こんにちはー！年の瀬合作の単品でーっす！","乆","normal","youtube","8mgGFnlQvY8"]
	,[2020,12,27,3,9,"ここは.arrange","DevTheFox","normal","youtube","ZchqhgBV5KY"]
	,[2020,12,27,19,0,"”2","そってぃー","normal","youtube","BEzdQORFxE8"]
	,[2020,12,27,19,30,"練習曲です。34","Prince Restru","premiere","youtube","UZpFhq2n3OA"]
	,[2020,12,27,20,0,"全てあなたの所為です..GB","いずら17号","normal","youtube","Js7v2KLs8u8","imitation"]
	,[2020,12,27,21,0,"▇▇[short]","全て達磨の所為です。","premiere","youtube","Hl_GiwAOH1A"]
	,[2020,12,27,21,0,"\\","全てきみらの所為です。。","premiere","youtube","GePhd3Ja0kc"]
	,[2020,12,27,23,0,"気概","全てわたしの言の葉です。","premiere","youtube","uRwB4hwNq8Y"]
	,[2020,12,28,17,19,"?","定期置き場","normal","youtube","jp0G09e_2Vg"]
	,[2020,12,28,17,19,"大掃除をしたいgeniway","雑定期置き場","normal","youtube","JVtdTDVT-Uc"]
	,[2020,12,28,17,22,"珠玉(全てあの日の所為です。)を耳コピしようとするも音感を奪われてしまうgeniway","雑定期置き場","normal","youtube","lKX_ziHA4N0"]
	,[2020,12,28,17,25,"短いね","雑定期置き場","normal","youtube","xOzGoHqsgp8"]
	,[2020,12,28,17,28,"アルカリレットウセイ ピアノアレンジ","ٰ","normal","youtube","LkOO5SwOJPQ"]
	,[2020,12,28,17,41,"\\ [short]","全てきみらの所為です。","normal","youtube","czSyBWQRTIg"]
	,[2020,12,28,19,16,"無題","全て冬毛の所為です。","normal","youtube","yhHeYHR2Evs"]
	,[2020,12,28,23,30,"たわしは難しい","最定期置き場","premiere","youtube","BgYD329RyRc"]
	,[2020,12,28,23,45,"... 耳コピ","一眼","premiere","youtube","1bBKjHZrPLQ"]
	,[2020,12,29,0,0,"あかいくらげ","雪乃トケル","premiere","youtube","L4Wm4BpgHhA"]
	,[2020,12,29,14,40,"名の無い星が空で爆ぜたら","全て彼方の所為です。","normal","youtube","FAEDwBmx_Jc"]
	,[2020,12,29,15,53,"△ remix","雑定期置き場","normal","youtube","ZAEdgnOjhkw"]
	,[2020,12,30,0,0,"頭蓋の杭","雪乃トケル","normal","youtube","vqFplG2urN0"]
	,[2020,12,30,0,54,"耳コピ","虚空","normal","youtube","ae9xHYoTWWc"]
	,[2020,12,30,18,16,"学問[short]","全てが齟齬の所為です。","normal","youtube","0B6L7azez6s"]
	,[2020,12,30,21,0,"[音楽講座的な?]♯1.楽譜の読み方","sbm. Knit","premiere","youtube","N2j2c3iEan8"]
	,[2020,12,30,23,0,"カウントダウンに間に合わなかった奴.mp4","IwanttoKnow","premiere","youtube","FMWm3PN3O6M","imitation"]
	,[2020,12,31,0,0,"Imitate Community Countdown / 2020-12-31","Imitate Community","live","youtube","HOwrPkmTSHE"]
	,[2020,12,31,0,0,"コトブキのなみだはしおらしい","Geolyte Meteos","normal","youtube","rOpMB1N4Yuw"]
	,[2020,12,31,0,15,"抵抗値","雪乃トケル","premiere","youtube","biy9XEtLWZw","imitation"]
	,[2020,12,31,1,0,"Imitate Community Countdown【午前の部】","Imitate Community","live","youtube","A1u-rRO5ccg"]
	,[2020,12,31,4,50,"パ　ク　リ　カ　リ　メ　イ　ク","定期置き場","normal","youtube","9o675YQlOPg"]
	,[2020,12,31,13,1,"偽Tinkotate community Countdown","けだるぎ","normal","youtube","emzpzObgL2s","imitation"]
	,[2020,12,31,14,0,"\\","全てきみらの所為です。","premiere","youtube","T0Lkz16CO4w"]
	,[2020,12,31,14,45,"何が楽しいの","雑定期置き場","premiere","youtube","Iwvv25ObgA4"]
	,[2020,12,31,14,50,"ImitateCommunity 妨害 やり方","雑定期置き場","normal","youtube","dLvf2t7QxoA"]
	,[2020,12,31,15,0,"␣","全て空白の所為です。","premiere","youtube","VnwsAAcR4bs"]
	,[2020,12,31,16,0,"霙.arrange","樹海","premiere","youtube","xO9x5lLWVv8","imitation"]
	,[2020,12,31,17,45,"‪√‬nova","いろはもみじ【作曲】","premiere","youtube","u3uy35s6Efk"]
	,[2020,12,31,18,0,"お正月","まるろん","premiere","youtube","AbVpE1CQSBE"]
	,[2020,12,31,18,15,"オリジナル曲です。4096","樹海","premiere","youtube","_DbB06bDhsc"]
	,[2020,12,31,18,30,"練習曲です。35","Prince Restru","premiere","youtube","gMCebOZt1ow"]
	,[2020,12,31,18,45,"練習曲です。32","Prince Restru","premiere","youtube","Tm4sHjYpKfA"]
	,[2020,12,31,19,0,"p.h.アレンジ","Prince Restru","premiere","youtube","TuSD-mWumM4"]
	,[2020,12,31,19,15,"練習曲です。34","Prince Restru","premiere","youtube","nr32-Y68ct4"]
	,[2020,12,31,19,30,"Gensin Liyue Battle BGM Arrange","Prince Restru","premiere","youtube","ogJE7-En6xE"]
	,[2020,12,31,19,45,"Ini Mashup","井荷麻奈実","premiere","youtube","R5WN2gA4BNM"]
	,[2020,12,31,20,0,"否定 feat.唄音ウタ","bura mezi","premiere","youtube","NG7qda8zhA0"]
	,[2020,12,31,20,15,"WASAHI MUSIC-2020","わさひIl","premiere","youtube","7_ZVqcdAJZ0"]
	,[2020,12,31,20,30,"⋮ [short]","全て彼方の所為です。","premiere","youtube","1UB7rnp-Bf8"]
	,[2020,12,31,20,45,"珠玉","Imitate Community","premiere","youtube","45W_ulmUxNw"]
	,[2020,12,31,20,45,"TEST_47","想星","premiere","youtube","l2ue7CWGWVg"]
	,[2020,12,31,20,50,"全て虞美の所為です。- 無 (Nejimaki CXXXII Remix)","全てみんなの所為です。","instant_premiere","youtube","E3oYvt7Bukg"]
	,[2020,12,31,21,0,"エム","全て希望の所為です。","premiere","youtube","Y-KN80npOqU"]
	,[2020,12,31,21,15,"落 / 雨歌エル","夏花","premiere","youtube","NaP-Wn5IHXU"]
	,[2020,12,31,21,15,"幽冥","Imitate Community","premiere","youtube","I1idaE8ntz0"]
	,[2020,12,31,21,30,"ブイ","全て誰かの為に。","premiere","youtube","7nwjRb8oLBs"]
	,[2020,12,31,21,45,"*","全てが齟齬の所為です。","premiere","youtube","PNvW-XMjM2g"]
	,[2020,12,31,22,0,"雪が降り全てが白銀に染まれば","全て誰かの為に。","premiere","youtube","4poHmvoqOLk"]
	,[2020,12,31,22,10,"柊疼 - 桃音モモ&雪歌ユフ","井荷麻奈実","premiere","youtube","cEA-Zeptchs"]
	,[2020,12,31,22,15,"リンネテンセイ","Imitate Community","premiere","youtube","sebeM2YiFqI"]
	,[2020,12,31,22,30,"リコルディ(CXXXII Ver.)","Imitate Community","premiere","youtube","iw6EVWkP-NY"]
	,[2020,12,31,22,45,"エクス (type:forgery)","全てあなたの所以です。","premiere","youtube","Vq9Jli_8Oyc"]
	,[2020,12,31,23,0,"夜空とかはすきですか。","虚空","premiere","youtube","AfwmIlKM5Js"]
	,[2020,12,31,23,15,"アナル","未定期置き場","premiere","youtube","OOT_Q5y6D5U"]
	,[2020,12,31,23,15,"1","全て幻影の所為です。","premiere","youtube","Sc8ZHFux9rU"]
	,[2020,12,31,23,15,"墜落","全ては僕の為に。","premiere","youtube","cNb58iwT71M"]
	,[2020,12,31,23,30,"Imitate Community Countdown Medley 2020","Imitate Community","live","youtube","Idg8gi1znvU"]
	,[2021,1,1,0,0,"ルート","全て事象の所為です。","premiere","youtube","8gI_d6daYyE"]
	,[2021,1,1,0,0,"あけましておめでとうございます","ネジマキ【音MAD】","normal","youtube","AjmE9B7XuzY"]
	,[2021,1,1,0,0,"あけましておめでとうございます","ネジマキ【音MAD】","normal","youtube","Y-VMbGoRbE4"]
	,[2021,1,1,0,0,"あけましておめでとうございます","ネジマキ【音MAD】","normal","youtube","VIzSS5gCfNs"]
	,[2021,1,1,0,13,"メリークリスマス","χ無","normal","youtube","9eAAOCYr100"]
	,[2021,1,1,0,15,"練習曲です。33","Prince Restru","premiere","youtube","td9SDcfkQEc"]
	,[2021,1,1,0,18,"今後とも雑定期置き場をよろしくお願い致します。","雑定期置き場","normal","youtube","-c1I0O2v_8A"]
	,[2021,1,1,0,30,"奏蒼夕暮─wasahi ver.","わさひIl","premiere","youtube","SggETVWmY3c"]
	,[2021,1,1,0,30,"Box Solaris / 01.Solaris","Science Ghost","premiere","youtube","dN9Ux7n9bVQ"]
	,[2021,1,1,0,45,"V.","Prince Restru","premiere","youtube","y7DDc5YKCBk"]
	,[2021,1,1,1,0,"Ⅴ. W.M. Remix","Water Metal","premiere","youtube","KIBgOK7dtZc"]
	,[2021,1,1,1,15,"エス","全て我々の所為です。","premiere","youtube","Fnip6umGhE8"]
	,[2021,1,1,1,15,"1年","DevTheFox","premiere","youtube","hO2Bo3i7uDk"]
	,[2021,1,1,1,30,"1232","NY channel","premiere","youtube","ba4_1yF5eYA"]
	,[2021,1,1,1,45,"あねもねぐりっち【ゆっくり霊夢】【ゆっくり魔理沙】【UTAUカバー曲】【とりぴよ】","waka nameko","premiere","youtube","T9e9QRh_wr8"]
	,[2021,1,1,2,0,"１年間おつかれ","Prince Restru","premiere","youtube","WBB1jGjYTqQ"]
	,[2021,1,1,2,0,"〓[short]","幻想の所為の全てでした。","normal","youtube","AKuJDrQtoN8"]
	,[2021,1,1,2,15,"Desperationのお正月動画2021","Desperation","premiere","youtube","EttBK3vQOic"]
	,[2021,1,1,2,30,"新年","わさひIl","premiere","youtube","HdpQRLwsW6k"]
	,[2021,1,1,2,45,"珍珍","既定期置き場","premiere","youtube","P3bzCSi2PVE"]
	,[2021,1,1,3,0,"聞こえないはずの珍々亭油そば.mid","既定期置き場","premiere","youtube","FpwAuSrQGFk"]
	,[2021,1,1,3,15,"ここまで来たら意地","わさひIl","premiere","youtube","dIEr96H9b3Q"]
	,[2021,1,1,3,30,"最早嫌がらせ","Water Metal","premiere","youtube","qlBP3Y8EeQM"]
	,[2021,1,1,7,0,"【MARETU】ルマ（うみなおし style）","みやびのサブちゃん","premiere","youtube","ha_1WQ1r_eE"]
	,[2021,1,1,8,56,"Megalovania Remix","想星","instant_premiere","youtube","fnl6-JSu6Qk"]
	,[2021,1,1,11,40,"0_1","全て過去の所為でした。","normal","youtube","A-Vu5OnG_Oc"]
	,[2021,1,1,12,6,"Imitate Community Countdown【午後の部】","Imitate Community","normal","youtube","Idg8gi1znvU"]
	,[2021,1,1,12,37,"調声練習","雑定期置き場","normal","youtube","76A_JcZZ3yA"]
	,[2021,1,1,14,50,"静寂[short]","全て過去の所為でした。","normal","youtube","fbAaZiDOKZU"]
	,[2021,1,1,17,25,"理性を失う","全部あなたの所為にしちゃうからねっ!","normal","youtube","QDGPLC7gVAs","teiki"]
	,[2021,1,1,19,47,"全てあなたの所為です。『.』ファミコン風アレンジ","全て恋情の所為です。","normal","youtube","J1ZIZUQXlTo"]
	,[2021,1,1,22,0,"虚数","Green wisteria","premiere","youtube","uu0WikdqFm0"]
	,[2021,1,1,22,0,"英雄","Green wisteria","premiere","youtube","63v5TIy6knM"]
	,[2021,1,1,22,49,"夢見る頃の話は何時までも続いて.remix","そってぃー","normal","youtube","cPNKqdKnIoU","imitation"]
	,[2021,1,1,23,45,"ヴォカリーズ","いにまなみ","premiere","youtube","LE5BZWO-jIw"]
	,[2021,1,1,23,53,"東方夢時空より『Strawberry Crisis!!』ファミコン風アレンジ","全て恋情の所為です。","normal","youtube","8L_HAciq5Vs"]
	,[2021,1,2,0,0,"Alice【オリジナル曲】","Desperation","premiere","youtube","Mh_sKPJ7g7M"]
	,[2021,1,2,0,7,"⋮ [short] (off vocal)","全て彼方の所為です。","normal","youtube","B00Xm4yLUSg"]
	,[2021,1,2,0,15,"名のないアンチ","既定期置き場","premiere","youtube","l_eGc3vGpPI"]
	,[2021,1,2,0,26,"だめだね(おかど)","既定期置き場","normal","youtube","PtSFs3YrWNQ"]
	,[2021,1,2,0,30,"検証！geniwayはすべあななのか！？","既定期置き場","premiere","youtube","rXdzi4caJ34"]
	,[2021,1,2,0,42,"無題.9541","樹海","normal","youtube","R3n7CgqUZqw","imitation"]
	,[2021,1,2,1,0,"だめだね(すべあな)","既定期置き場","premiere","youtube","24RXd3AuCJY"]
	,[2021,1,2,1,45,"だめだね(髭)","既定期置き場","premiere","youtube","Gjf4fY9zveg"]
	,[2021,1,2,10,18,"👻","全て幽霊の所為です。","normal","youtube","GE1g2B-7HAc"]
	,[2021,1,2,10,20,"👻👻","全て幽霊の所為です。","normal","youtube","iJY6P1jTd3c"]
	,[2021,1,2,11,0,"おるすばん karu","Desperation","premiere","youtube","hnawWdqQjks"]
	,[2021,1,2,12,15,"幽冥","全て幽霊の所為です。","normal","youtube","wd-_8STrMCQ"]
	,[2021,1,2,13,0,"リンネテンセイ","全て幽霊の所為です。","premiere","youtube","RNARh-EbGZA"]
	,[2021,1,2,14,8,"Iphoneが勝手に作った","雑定期置き場","normal","youtube","EFnrM38u1IM"]
	,[2021,1,2,17,6,"_03","全て過去の所為でした。","normal","youtube","8uhrcfJj1Qk"]
	,[2021,1,2,19,0,"【完全版】Imitate Community Countdown Medley 2020","Imitate Community","premiere","youtube","PSFMtUNAD28"]
	,[2021,1,2,21,0,"2","​","premiere","youtube","KjIzJZGrz1c"]
	,[2021,1,3,1,23,"Among usを岡戸さんにやらせてみたww","雑定期置き場","normal","youtube","YSZ-RSJJ0oA"]
	,[2021,1,3,1,36,"確執[short]","全てあなたの所以です。","normal","youtube","9DeueolY1eg"]
	,[2021,1,3,1,58,"ImitateCommunity 親フラ","雑定期置き場","normal","youtube","hbXQY9CrFX0"]
	,[2021,1,3,10,3,"必至な先行優先","夏花","normal","youtube","t3cfAstQmVY"]
	,[2021,1,3,14,54,"返報繰救【初音ミクNT オリジナル曲】","雪乃トケル","normal","youtube","HsG5dt8sEtQ"]
	,[2021,1,3,17,37,"東方風神録 ２面ボス 鍵山雛のテーマ『運命のダークサイド』ファミコン風アレンジ","すべれんandファミコン風アレンジ垢","normal","youtube","bRjfBQXAXtg"]
	,[2021,1,3,20,0,"_??","Science Ghost","premiere","youtube","oacaG2-NN5k"]
	,[2021,1,4,17,44,"#えぬわい生誕祭2021アレンジ祭 Version:井荷麻奈実","いにまなみ","instant_premiere","youtube","EMaVX0ezPoQ"]
	,[2021,1,4,17,47,"NY おたんじょうび、おめでとう！","χ無","normal","youtube","sL-6-_xrCAQ"]
	,[2021,1,4,20,11,"2021年になったのでピアノ曲を作ってみました","干しいか","normal","youtube","Gi2lUwQib2k"]
	,[2021,1,4,22,0,"#えぬわい生誕祭2021アレンジ祭","まるろん","premiere","youtube","O0Fpak8M_Sg"]
	,[2021,1,4,23,30,"NAFKLMRSSVXXId√","最定期置き場","premiere","youtube","dXdqlkr5GQ8"]
	,[2021,1,4,23,41,"えぬわい生誕祭2021アレンジ祭　のやつ？","蟲","normal","youtube","fzrOE654rJk"]
	,[2021,1,5,0,0,"Eclipse","全て感情の所為です。","premiere","youtube","-5JHHKiQ1as"]
	,[2021,1,5,0,0,"臙脂","Science Ghost","premiere","youtube","FmrDpxvrbnQ"]
	,[2021,1,5,0,5,"#えぬわい生誕祭2021アレンジ祭","全部あなたの所為にしちゃうからねっ!","normal","youtube","0VRB4wLO3ss"]
	,[2021,1,5,0,45,"[ピアノアレンジ的な?]#えぬわい生誕祭2021アレンジ祭","sbm. Knit","normal","youtube","6HpAf4ILi1g"]
	,[2021,1,5,15,11,"まじゅつ","Null. 404","normal","youtube","S0qT_Ge7asg"]
	,[2021,1,5,16,45,"えぬわい生誕祭2021アレンジ祭","ふりゃば*","normal","youtube","XEle1yJpOwo"]
	,[2021,1,5,18,23,"教育ダンス","全部あなたの所為にしちゃうからねっ!","normal","youtube","Rs2u0ySNI_k"]
	,[2021,1,5,20,0,"...?","全ての所為はあなたに通ず。","normal","youtube","iVH1sOZtaYo"]
	,[2021,1,5,21,51,"イワシがつちからはえてくるんだ","ٰ","normal","youtube","BLYsecJYKH0"]
	,[2021,1,5,22,7,"SBKM-/","全てが皆無な所為で。","normal","youtube","Cc4r37nBpno"]
	,[2021,1,6,0,0,"ピリオド 耳コピ","ファミファロ","normal","youtube","PBlV6WtWsTc"]
	,[2021,1,6,2,32,"#えぬわい生誕祭2021アレンジ祭","樹海","normal","youtube","2gKXSVNfiwU"]
	,[2021,1,6,4,39,"教育CXXXll&オリジナル比較","非定期置き場","normal","youtube","LSd-BLTGu3I"]
	,[2021,1,6,17,28,"‥耳コピ","ファミファロ","live","youtube","BiQKTQ-JLXU"]
	,[2021,1,6,18,15,"‥耳コピ","ファミファロ","live","youtube","occgWxzshyA"]
	,[2021,1,6,21,0,"👻👻👻","全て幽霊の所為です。","premiere","youtube","leiS4x3dpyM"]
	,[2021,1,7,0,0,"…","全てあなたの所為?","premiere","youtube","PoK8NNhj7BI"]
	,[2021,1,7,1,3,"＿","全て欠片の所為です。","normal","youtube","DrBbTCyhwKI"]
	,[2021,1,7,2,17,"ツカレチャッタ","ネジマキ【音MAD】","normal","youtube","lTaabmotjbQ"]
	,[2021,1,7,16,35,"テツがふたたびやってきた","waka nameko","normal","youtube","OIJpw1__LYw","joke"]
	,[2021,1,7,10,25,"☃","わさひIl","normal","youtube","4TuqPMPXrz8"]
	,[2021,1,8,19,42,"心の雪が止んだ日.marulon","マギラウォッシュ","normal","youtube","FkQXH44MwUs"]
	,[2021,1,8,19,57,"威風","マギラウォッシュ","normal","youtube","Mfu3tbOrHx8"]
	,[2021,1,8,20,0,"ウスバ深窟[short]","一瀬止","normal","youtube","yxCZSYvbFjo"]
	,[2021,1,8,21,0,"リング / 初音ミク　feat.シャワーズ","フレン","premiere","youtube","yYle2ST9_AM"]
	,[2021,1,8,21,0,"夜に消える / 重音テト","梨","normal","youtube","U8io8HNePnU"]
	,[2021,1,8,21,11,"パープル・パラソルのパラドックス off vocal","いにまなみ","normal","youtube","zxZFphMJEbs"]
	,[2021,1,8,21,19,"柊疼 off vocal","いにまなみ","normal","youtube","qHyNj4IZSTs"]
	,[2021,1,8,23,12,"0108","全てNYの所為です。","normal","youtube","iL-hd0Mw4qE"]
	,[2021,1,8,23,0,"ᛜ","全て私達の魂です。","premiere","youtube","FJHNUNrse0E"]
	,[2021,1,9,0,0,"……","全てあなたの所為?","premiere","youtube","NBJICHQaZ8U"]
	,[2021,1,9,0,0,"自分の曲を演奏するロン毛兄貴.","全ての所為はあなたに通ず。","normal","youtube","voDoudoMCv4"]
	,[2021,1,9,3,30,"今日行かない","雑定期置き場","normal","youtube","XOmjLINrNJg"]
	,[2021,1,9,5,0,"?","DevTheFox","premiere","youtube","SRdcPjYmhgQ"]
	,[2021,1,9,16,42,"無題.1684","樹海","normal","youtube","-NsZCDR9crs"]
	,[2021,1,9,18,14,"BBがつちからはえてくるんだ","wakanameko_生配信ch","normal","youtube","CxMff7OXFDo"]
	,[2021,1,9,18,28,"\"ウスバ深窟\"視聴促進配信","一瀬止","live","youtube","pYrxWnhlc0g"]
	,[2021,1,9,19,0,"寒","全て冬の所為です。","normal","youtube","cB7zE62NhEE"]
	,[2021,1,9,21,3,"'耳コピ","ファミファロ","live","youtube","NMlpV8UBhkY"]
	,[2021,1,9,21,47,"𝐈[short]","全て大人の所為です。","normal","youtube","NmAj2bNZWKo"]
	,[2021,1,9,22,28,"＃3","そってぃー","normal","youtube","TO2vC8Hex94"]
	,[2021,1,9,23,0,"△△","全てあの日の所為です。","premiere","youtube","eSY3ATbQl8o"]
	,[2021,1,10,0,0,"イサナに魂を渡せども、届かぬ想いに身を焦がせども、軈て玉の緒が絶えてしまうことも、剰え幾星霜の時を経て天に昇ることも全て運命なら、艱難辛苦さえ受け入れ難く往く河の流れを下る寒々しい夜に煙る悠久の月影に","全て幽霊の所為です。","premiere","youtube","JNP51uNQTvs"]
	,[2021,1,10,0,0,"表育","全ての所為はあなたに通ず。","normal","youtube","uT6tFQ-V2jY"]
	,[2021,1,10,1,10,"＿","全て欠片の所為です。","normal","youtube","ppa7vSaCziY"]
	,[2021,1,10,12,33,"練習曲です。36","Prince Restru","normal","youtube","YrutNCiquiU"]
	,[2021,1,10,19,30,"' 耳コピ","ファミファロ","premiere","youtube","3YN1gyZhLu0"]
	,[2021,1,10,20,21,"無題.4740","樹海","normal","youtube","qXnzlnvlJRg"]
	,[2021,1,10,20,32,"briquette","Null. 404","normal","youtube","Taxc6AwT5XI"]
	,[2021,1,10,22,20,"日記.フランス語","DevTheFox","normal","youtube","YwMZwOulDKw"]
	,[2021,1,10,22,30,"威風","全てが皆無な所為で。","premiere","youtube","4qmX_qP0zXg"]
	,[2021,1,10,23,0,"✦","全て夢の様でした。","premiere","youtube","F6uuxvzUikA"]
	,[2021,1,10,23,26,"Untitled 1126","Desperation","normal","youtube","jaiv-y5_V8Y"]
	,[2021,1,10,23,50,"✋🏼🧔🏻","雑定期置き場","normal","youtube","DeTS69b46vg"]
	,[2021,1,10,23,51,"入害s","雑定期置き場","normal","youtube","WV62-jhOLU4"]
	,[2021,1,10,23,53,"0110","全てNYの所為です。","normal","youtube","OhXQbtIam-I"]
	,[2021,1,10,23,55,"Conflict with worries","Desperation","normal","youtube","EwPrDXVJFrk"]
	,[2021,1,11,0,0,"輪廻","全てみんなの所為です。","premiere","youtube","-xRzO_YyAYM"]
	,[2021,1,11,2,14,"[暗号未解読的な?]輪廻/全てみんなの所為です。","sbm. Knit","normal","youtube","FrJrfuVmmXs"]
	,[2021,1,11,11,30,"","全て誰かの所為で。","normal","youtube","ulob0ocOXhM"]
	,[2021,1,11,17,0,"眠くなるような曲を作りたかった。","Prince Restru","premiere","youtube","sC9vRXcYn04"]
	,[2021,1,11,19,19,"🔞","雑定期置き場","normal","youtube","sl46pR_vFRs"]
	,[2021,1,11,19,21,"未公開シーン","雑定期置き場","normal","youtube","jq17T_ZRHsA"]
	,[2021,1,11,19,23,"ピリオドの向こう側をそっと覗いただけなのに。","雑定期置き場","normal","youtube","-B83FqL-6fU"]
	,[2021,1,11,19,50,"パカパカ","乆","normal","youtube","pyiQQtXIAgw"]
	,[2021,1,11,20,14,"anyway - 得ぬ MV","雑定期置き場","normal","youtube","hMJtqnhCkGs"]
	,[2021,1,11,20,33,"故障","雑定期置き場","normal","youtube","-ja6mwzEAro"]
	,[2021,1,11,21,2,"悪い子おかど","雑定期置き場","normal","youtube","KNb6PaN5X7Y"]
	,[2021,1,11,21,41,"👌","雑定期置き場","normal","youtube","r1l80vMcQOU"]
	,[2021,1,11,22,0,"星月夜","NY channel","premiere","youtube","SNsXCm-A4Lc"]
	,[2021,1,11,22,12,"【ゐ合作単品】 片翼の天使","くろみうむ","normal","youtube","YuS_CtnQEoE"]
	,[2021,1,11,22,12,"【ゐ合作単品】 すーぱーマリオテクニッククラッシュ","くろみうむ","normal","youtube","TIH0BsUeSLYE"]
	,[2021,1,11,22,30,"確執","全てあなたの所以です。","premiere","youtube","CQ-PI8Pq8YM"]
	,[2021,1,11,22,55,"荒らしまくるAmong Us","定期置き場","normal","youtube","S_2bPldGB1k"]
	,[2021,1,11,23,30,"./全てあなたの所為です。をバラバラにしてみた","最定期置き場","premiere","youtube","H27ULz5a9gI"]
	,[2021,1,12,0,0,"木枯 Remix","全て事象の所為です。","premiere","youtube","o3_62DQ8WtQ"]
	,[2021,1,12,0,15,"それでよかった","雪乃トケル","premiere","youtube","8DwTrWUQ0OQ"]
	,[2021,1,12,0,25,"Pet the SB...","_mf","normal","youtube","oRELdpAgQZ0","joke"]
	,[2021,1,12,0,25,"練習_","_mf","normal","youtube","9OQVzoJCS4Q","joke"]
	,[2021,1,12,1,8,"？","海藻。","normal","youtube","mFcvVAoW66o","joke"]
	,[2021,1,12,1,15,"全てきみらの所為です。 - \ 解読","雑定期置き場","normal","youtube","k9A8WWyyykI"]
	,[2021,1,12,1,34,"ehind moon / Le☆S☆Ca (カバー)","のろ窓","normal","youtube","zJKsySDr4uI"]
	,[2021,1,12,19,35,"眠れる曲です。","樹海","normal","youtube","GtWToo5z1N8"]
	,[2021,1,13,19,5,"【フリーBGM】MicrochipTuning","フレン","normal","youtube","tvhpErZBRrs"]
	,[2021,1,13,21,0,"標識","Geolyte Meteos","premiere","youtube","u8fXYxpaW2g"]
	,[2021,1,13,22,5,"、、、耳コピ","ファミファロ","live","youtube","2Ra8JQODhpI"]
	,[2021,1,13,23,3,"PLANET","全て無垢の所為です。","normal","youtube","4P3kLe_795k"]
	,[2021,1,13,23,51,"Simple Sky","全て無垢の所為です。","normal","youtube","QjLxWqBfmJk"]
	,[2021,1,14,0,0,"⋮","全て彼方の所為です。","premiere","youtube","clgCOO0oP0k"]
	,[2021,1,14,1,0,"何かを見つけること｡そして映る｡","全て無垢の所為です。","normal","youtube","DL462T2f3PI"]
	,[2021,1,14,8,40,"≒","全て無垢の所為です。","normal","youtube","qBf_nVyD6zI"]
	,[2021,1,14,10,35,"迷路に","全て無垢の所為です。","normal","youtube","LbjmMgmzMGE"]
	,[2021,1,14,17,25,"開封","_mf","normal","youtube","d5_pfTu7OsM"]
	,[2021,1,14,18,6,"ツ","全て無垢の所為です。","normal","youtube","ihGynAkW3rc"]
	,[2021,1,14,19,0,"1/2","x髥莏","premiere","youtube","BvmeQTYlEUc"]
	,[2021,1,14,19,28,"うさぎを、さがしてた。","けだるぎ","normal","youtube","SHCz-YTIrMs"]
	,[2021,1,14,21,47,"ひかるどうくつ","全て無垢の所為です。","normal","youtube","tb7cegNmGtU"]
	,[2021,1,15,0,0,"⚡️","NY channel","premiere","youtube","R49WEoH7qGY"]
	,[2021,1,15,1,0,"鱤","全て囈語の所為です。","normal","youtube","cUsbNJDtcFw"]
	,[2021,1,15,1,25,"2021年1月15日","全てNYの所為です。","normal","youtube","SwoZd8XdvUQ"]
	,[2021,1,15,8,25,"カラフルパッション","けだるぎ","normal","youtube","_SUbG2a5sXI"]
	,[2021,1,15,20,38,"ウスバ深窟.wip","一瀬止","normal","youtube","7K0JDr9Qe1Q"]
	,[2021,1,15,21,0,"ブラインド","全てが皆無な所為で。","premiere","youtube","LZFIEPOwH08"]
	,[2021,1,15,23,30,"、、、 耳コピ","ファミファロ","premiere","youtube","MkWDlTA6aLM"]
	,[2021,1,16,0,0,"ᴺ","ネジマキ【音MAD】","premiere","youtube","QTke2uUyWzU"]
	,[2021,1,16,0,59,"χ無しねばかあほきえろ","雑定期置き場","normal","youtube","HYuCWGcYiEA"]
	,[2021,1,16,1,4,"..","定期置き場","normal","youtube","s0j2xzcLwMc"]
	,[2021,1,16,1,43,"サクラ","雪乃トケル","normal","youtube","f9ezL0OvyNs"]
	,[2021,1,16,4,27,"【新】新しいチャンネルつくった【しい】","電ǂ鯨","normal","youtube","0lmA0JGL8OQ"]
	,[2021,1,16,4,47,"【古】新しいチャンネル作りました【い】","【旧】【旧】電ǂ鯨","normal","youtube","ru4PAplcPrc"]
	,[2021,1,16,5,42,"コトノハンバーグ","電ǂ鯨","normal","youtube","NfuksufwZ5w"]
	,[2021,1,16,5,46,"夕焼け空の下で","電ǂ鯨","normal","youtube","rp4kbr8YPEU"]
	,[2021,1,16,5,49,"スープを盗む","電ǂ鯨","normal","youtube","ArlXrFmtDaQ"]
	,[2021,1,16,6,1,"そとろいど","電ǂ鯨","normal","youtube","lnnuu1EASfE"]
	,[2021,1,16,6,4,"おさんぽ","電ǂ鯨","normal","youtube","4RYxZvcJDGw"]
	,[2021,1,16,6,12,"さみしいひと","電ǂ鯨","normal","youtube","zxnmMQP9yaM"]
	,[2021,1,16,6,14,"おふとん","電ǂ鯨","normal","youtube","DkMIGfMtfWk"]
	,[2021,1,16,6,29,"土曜日の歌","電ǂ鯨","normal","youtube","80XD9Q3ZM-g"]
	,[2021,1,16,15,6,"は？？？？","同時再生置き場","normal","youtube","K43br_MjtaA"]
	,[2021,1,16,15,44,"DSC_0125_2.AVI","全て蝶々の所為です。","normal","youtube","VvU8X3NFtto"]
	,[2021,1,16,18,50,"【オリジナル曲】春の朝【初音ミクNT】","雪乃トケル","normal","youtube","Qtb1R2JApZc"]
	,[2021,1,16,19,30,"SEKAING / 京極みやび","京極みやび","normal","youtube","q-70aHNUEFY"]
	,[2021,1,16,19,34,"biotite","そってぃー","normal","youtube","btfTnTdGWM8"]
	,[2021,1,16,21,17,"【ヤツメ穴、ウミガメのなみだはしおらしい、運び屋さん、エヌ、水魅】のサビを同時再生してみました。","けだるぎ","normal","youtube","2y36CZcAYgg"]
	,[2021,1,16,22,0,"姉華","全て虞美の所為です。","premiere","youtube","mdxTqQ4z3ic"]
	,[2021,1,16,22,0,"妹華","全て虞美の所為です。","premiere","youtube","DkR6C1XYOm8"]
	,[2021,1,16,23,11,"火瓶","雑定期置き場","normal","youtube","9ogTdQpEhc8"]
	,[2021,1,17,1,11,"くらがりシティライフ","電ǂ鯨","normal","youtube","OeRYMeZk5vg"]
	,[2021,1,17,4,2,"Cö shu Nie/Lamp　耳コピ","ネジマキ【音MAD】","normal","youtube","oz-Dv_CEyH0"]
	,[2021,1,17,6,13,"廃盤ました。","DevTheFox","normal","youtube","_5VQJHFa6YA"]
	,[2021,1,17,9,18,"練習曲です。38","Prince Restru","normal","youtube","eXfWn-idjV0"]
	,[2021,1,17,10,10,"Jazzってなに？？？？？","想星","normal","youtube","9bBmKMFcfpQ"]
	,[2021,1,17,21,45,"なつかしいうたそってぃーRemix【ゆめにっき】","そってぃー","premiere","youtube","EfsFVntM9nU"]
	,[2021,1,17,22,0,"心音-03-","NY channel","premiere","youtube","eypsoN3443k"]
	,[2021,1,17,22,40,"2021年1月17日","全てNYの所為です。","normal","youtube","l_vZC_iir0s"]
	,[2021,1,17,22,46,"2021年1月17日 2","全てNYの所為です。","normal","youtube","M7NNE8CmHBc"]
	,[2021,1,17,22,58,"2021年1月17日 3","全てNYの所為です。","normal","youtube","4kwTLbRxkJQ"]
	,[2021,1,17,23,30,"†.Phantasm.† 【Very short.】","全て希望の所為です。","premiere","youtube","bivzPHj9_ms"]
	,[2021,1,18,0,20,"ジャズっぽくてカッコいいリリースカットピアノの曲","全てNYの所為です。","normal","youtube","Py5M6wMOpi4"]
	,[2021,1,18,15,57,"exterior mind, not corpse","Null. 404","normal","youtube","yvo089SHWLc"]
	,[2021,1,18,18,41,"姉妹華","全て冬毛の所為です。","normal","youtube","JcO2yQnYYpo"]
	,[2021,1,18,19,1,"Test_0001.avi","何色にも染まら不。","normal","youtube","fQWqqHqk4zY"]
	,[2021,1,18,23,30,"星彩×星彩(CXXXII)","最定期置き場","premiere","youtube","A3Q-U44imbg"]
	,[2021,1,19,0,0,"珠玉[remix,short]","全てすべわたの所為です。。","normal","youtube","S-ibe9TEN78"]
	,[2021,1,19,1,54,"人が集まらない；；","IwantedtoKnow","normal","youtube","WBZ8b7LqqaA"]
	,[2021,1,19,20,30,"人の所為にしちゃだめだよ。","全ての所為はあなたに通ず。","normal","youtube","bHGawdFFG_w"]
	,[2021,1,19,21,30,"推敲","無定期置き場","normal","youtube","DTVtoIDijhE"]
	,[2021,1,19,22,2,"#えぬわい生誕祭2021アレンジ祭","waka nameko","normal","youtube","1Q7G-mgMZI8"]
	,[2021,1,19,23,6,"無題.2566","樹海","normal","youtube","0pOQ3-7b7pU"]
	,[2021,1,19,23,36,"質問コーナー(反抗期)","海藻。","normal","youtube","0CAAfveKKoc"]
	,[2021,1,20,2,30,"01","全て___の所為です。","normal","youtube","FPkvN_vEIGo"]
	,[2021,1,20,17,0,"[short]","全てあなたの影です。","normal","youtube","BYAlmhEFtdg"]
	,[2021,1,20,18,15,"全て飛来の所為です。","同時再生置き場","normal","youtube","P3KdJNDDIuE"]
	,[2021,1,20,20,0,"【重音テト】星になりたい【オリジナル】","梨","premiere","youtube","GYCL7b29HmU"]
	,[2021,1,20,20,14,"終わりのないすべえい","ٰ","normal","youtube","aK3MsnjxvR0"]
	,[2021,1,20,20,49,"あめ","雪乃トケル","normal","youtube","2t3jargjGPE"]
	,[2021,1,20,20,54,"耳に綿棒を刺した話","雪乃トケル","normal","youtube","o9KwEQk3hC4"]
	,[2021,1,21,17,0,"寒すぎエナジー","わさひIl","normal","youtube","tmxpo47JMvk"]
	,[2021,1,21,17,35,"¿⃞᷉","全て莠コ髢の所為です¿⃞᷉","normal","youtube","gKtuj7djZMo"]
	,[2021,1,21,20,0,"練習曲です。39","Prince Restru","premiere","youtube","3sr-gmDulvM"]
	,[2021,1,21,22,30,"うわ、やけに首絞められてるなと思ったらパジャマ反対に着てた、パジャマに殺されかけた","まるろん","premiere","youtube","f9RKM2-MsTw"]
	,[2021,1,21,23,35,"【UTAUに歌わせてみた】「TRIGGER」 【wrwrd!】(未完成版)","IRO.月斗","normal","youtube","VpeKgt7Zo8I"]
	,[2021,1,22,0,0,"∬[short]","全て貴方々の所為だったのですが、","premiere","youtube","kUWTTKxj588"]
	,[2021,1,22,0,0,"‌","全て彼等の所為です。","normal","youtube","6_dr4Y4RC10"]
	,[2021,1,22,14,51,"蒼","むっくり","normal","youtube","7iYtfpx8NqY"]
	,[2021,1,22,22,30,"8-bitのハルカゼ","いろはもみじ【作曲】","premiere","youtube","LFmXtprqNwk"]
	,[2021,1,23,10,39,"エヌ　抽出　全てあなたの所為です　CXXXII","あいうえお","normal","youtube","Rf5tlJdpmro"]
	,[2021,1,22,23,0,"\\\\","全てきみらの所為です。","premiere","youtube","7z4QkQb_eOE"]
	,[2021,1,22,23,33,"テレサワルツ のようなもの","全てNYの所為です。","normal","youtube","MVFB7Ux9pu8"]
	,[2021,1,23,2,18,"02","全て___の所為です。","normal","youtube","fYLeUOCTXOQ"]
	,[2021,1,23,2,19,"03","全て___の所為です。","normal","youtube","CNoQTtoUnFM"]
	,[2021,1,23,14,6,"./全てあなたの所為です。 アレンジ","ふりゃば*","normal","youtube","LZIpHVV0X4k"]
	,[2021,1,23,17,37,"ヂナメプタ .arrange","しゃけ","normal","youtube","83aGPywzxI8"]
	,[2021,1,23,19,57,"04","全て___の所為です。","normal","youtube","e_VV-Uf2eqI"]
	,[2021,1,23,23,30,"【オリジナル曲】サカサマ【雪乃トケル】","雪乃トケル","premiere","youtube","Qowk4angXmw"]
	,[2021,1,24,0,0,"＾","全て人間の所為です。","premiere","youtube","zd6LOqChCxw"]
	,[2021,1,24,1,19,"・","全て数多の所為です。","normal","youtube","3foQfFt8LpQ"]
	,[2021,1,24,9,25,"＾[short](修正版)","全て人間の所為です。","normal","youtube","YGDwLDsujOk"]
	,[2021,1,24,10,56,"[ピアノアレンジ的な?未完成]エム/全て希望の所為です。(1番のみ)","sbm. Knit","normal","youtube","0aaVW-ckD5M"]
	,[2021,1,24,13,28,"｢けだるぎ｣おじさんのケツカレー","すこ。本当にすこ","normal","youtube","ZVJuCABRpyk"]
	,[2021,1,24,13,33,"はい。","すこ。本当にすこ","normal","youtube","1a-fTiQJVWA"]
	,[2021,1,24,13,34,"年末プレミア俺まとめ","すこ。本当にすこ","normal","youtube","V20cHjyVegU"]
	,[2021,1,24,16,12,"「あさやけもゆうやけもないんだ」をMSGS音源でならしてみた","ふりゃば*","normal","youtube","IXDqO2i_0ug"]
	,[2021,1,24,16,16,"ヂナメプタ .arrange 改","しゃけ","normal","youtube","jHwnzRvCnTc"]
	,[2021,1,24,16,23,"2021年1月24日","NY channel","normal","youtube","3s3zjzOT680"]
	,[2021,1,24,17,22,"Kill Everybody","乆","normal","youtube","Pzx_VOaKFg4"]
	,[2021,1,24,17,53,"証明","全て睥睨の所為です。","normal","youtube","08r5JnSdKdw"]
	,[2021,1,24,22,30,"Bad Apple!! feat.スベキボイド　(スベキボイド先行公開)","全て希望の所為です。","premiere","youtube","gWP4iGLxeEA"]
	,[2021,1,24,22,45,"教育 耳コピ","ファミファロ","premiere","youtube","qVOG4msAKP8"]
	,[2021,1,25,0,0,"記憶喪失","全ての所為はあなたに通ず。","premiere","youtube","-c8QkArraTE"]
	,[2021,1,25,0,0,"✦","全て夢の様でした。","normal","youtube","3kjFYNzvyTE"]
	,[2021,1,25,0,38,"憂愁","樹海","normal","youtube","KeK8ZhOkaxg"]
	,[2021,1,25,2,7,"蒼","全て蝶々の所為です。","normal","youtube","hEKGznknEFk"]
	,[2021,1,25,8,16,"名の無い星が空に堕ちたら　抽出　全てあなたの所為です　裏歌詞","あいうえお","normal","youtube","kJe5ZKF63wI"]
	,[2021,1,25,12,12,"蒼","全て蝶々の所為です。","normal","youtube","Yd3SowhuND0"]
	,[2021,1,25,23,30,"蒼-蒼（旧）","最定期置き場","premiere","youtube","bCGybW3U3ng"]
	,[2021,1,26,22,0,"✡︎ short.","全てデザイアの所為です。","normal","youtube","hqCjAlq-qeM"]
	,[2021,1,26,22,30,"全てみんなの所為です。 サビBB","waka nameko","premiere","youtube","tNhbIX_sffQ"]
	,[2021,1,26,23,0,"ノスタルジィ","全てあの日の所為です。","premiere","youtube","6gcH6IRZExc"]
	,[2021,1,26,23,12,"【UTAU11＋3人にUTAわせてみた】TRIGGER UTAUcover 【wrwrd】","IRO.月斗","normal","youtube","lt8j5ZInHbU"]
	,[2021,1,26,23,15,"Dominoで曲を作りました","ふりゃば*","normal","youtube","J-8K8TFRDxM"]
	,[2021,1,26,17,40,"草育","雑定期置き場","normal","youtube","EPTcESQqjas"]
	,[2021,1,27,18,0,"タヒ","梨","normal","youtube","1h1GHAPGexQ"]
	,[2021,1,27,22,36,"反蒭","Null. 404","normal","youtube","dYPSRFtiDb4"]
	,[2021,1,27,23,0,"俺が血液型でどういう特徴があるのかみたいなものを見てたら妹が「そんなの意味ないよ、じゃあ聞くけどお兄ちゃん、同じ誕生日、同じ血液型の人間が同じ性格、同じ考え方だと思う？」って言ってきて、全裸で正座した","まるろん","premiere","youtube","2JYnanA4LVc"]
	,[2021,1,28,0,0,"‌","ْ","premiere","youtube","3J7-UD9BnpY"]
	,[2021,1,28,1,49,"カッコよくてエモいjazz piano","NY channel","normal","youtube","hZUrQF2TOaU"]
	,[2021,1,28,2,12,"すべあなのｶｯｶｯｶｯｶｯっていう暗号の音はgeniwayの雨だまりからサンプリングできるよっていう動画","定期置き場","normal","youtube","iga7-wrdZVw"]
	,[2021,1,28,15,22,"13461D0","干しいか","normal","youtube","sJ_7kbZe8tw"]
	,[2021,1,28,19,47,"怪訝","いろはもみじ【作曲】","normal","youtube","QVZDIY5yf9c"]
	,[2021,1,28,22,30,"Re:△","全てあの日の所為です。","premiere","youtube","qJ92yc_lDSw"]
	,[2021,1,29,0,0,"∎∎[short]","全てあなたの影です。","normal","youtube","1mSSeMh2Ifw"]
	,[2021,1,29,16,43,"タヒ","梨","normal","youtube","AcvdzKRnIwo"]
	,[2021,1,29,18,30,"こういうイントロは好きですか？","NY channel","normal","youtube","6cmTLslH3sI"]
	,[2021,1,29,19,23,"傀lie","雑定期置き場","normal","youtube","FasyfbqqpiI"]
	,[2021,1,29,21,17,"スラント","全てすべあなの所為です?","normal","youtube","LAlw89B09rg"]
	,[2021,1,30,0,0,"全てみんなの所為です。「エル」 - Blue Ver.","ネジマキ","premiere","youtube","4DPrrtesrBc"]
	,[2021,1,30,0,32,"雨の降る街","いろはもみじ【作曲】","normal","youtube","4tu2175x5xI"]
	,[2021,1,30,13,17,"：|.arrange","全て悄然の所為です。","normal","youtube","KuWsSw8oCoI"]
	,[2021,1,30,10,59,"鬱向き加減","雑定期置き場","normal","youtube","7D1rvz1gsLo"]
	,[2021,1,30,18,21,"Take Five-Piano&Flute arrenge","ふりゃば*","normal","youtube","H4QKUVfzqYw"]
	,[2021,1,30,19,30,"欠損注意 / ゲキヤク","夏花","premiere","youtube","pZDLYL4o3tg"]
	,[2021,1,30,21,41,"”２remix","そってぃー","normal","youtube","bIoX0vW52wI"]
	,[2021,1,30,22,0,"君には他にやるべきことがあるんじゃないか？","Xeltica Ch.","live","youtube","8E-K_WSVz7w"]
	,[2021,1,30,23,30,"＾","全て人間の所為です。","premiere","youtube","q7H5sNc2vFM"]
	,[2021,1,30,23,30,"Box Solaris / 02.SpaceGarden","Science Ghost","premiere","youtube","xYSeAn6YfFI"]
	,[2021,1,30,23,45,"？","Imitate Community","premiere","youtube","N1zIL2tQkzI"]
	,[2021,1,30,23,53,"？？","Imitate Community","premiere","youtube","DH6CrijCyrM"]
	,[2021,1,31,0,0,"片道切符握りしめてまた逢おうよ、運命に身を任せ","全て希望の所為です。","premiere","youtube","qsqcxmQY_kk"]
	,[2021,1,31,1,30,"ように。","雪乃トケル","normal","youtube","bFOUq7CRDco"]
	,[2021,1,31,12,6,"練習曲です。40","Prince Restru","normal","youtube","Q0Iv-hpCzoM"]
	,[2021,1,31,12,12,"またまたまたまた又","雑定期置き場","normal","youtube","kQuIAICiC78"]
	,[2021,1,31,17,0,"あめうぐめ - 焔之神","あめうぐめ","premiere","youtube","tG01w8Si8Eo"]
	,[2021,1,31,18,3,"？？？？？？？","すこ。本当にすこ","normal","youtube","SN4KYseCyOE"]
	,[2021,1,31,18,45,"暁闇(ぎょうあん)【オリジナル曲】","PeroryitoのNoobチャンネル","premiere","youtube","aFOKI7A18xY"]
	,[2021,1,31,20,0,"【なんでも許せる人向け界隈MV】新曲どうですか？【SBAN】","すべすべすべえりざべす","premiere","youtube","hZ0UkIArM7c"]
	,[2021,1,31,20,0,"pakurion(確信)","無定期置き場","premiere","youtube","bpox4wDk5o0"]
	,[2021,1,31,20,3,"WasaWasa","乆","normal","youtube","0i_Pr54x9_A"]
	,[2021,1,31,21,3,"ちょっとした曲作り","ファミファロ","live","youtube","XKpNG_88d68"]
	,[2021,2,1,19,18,"?","雑定期置き場","normal","undefined",""]
	,[2021,2,2,22,0,"妹華","全て虞美の所為です。","premiere","youtube","yQSIucCV7xc"]
	,[2021,2,1,23,30,"既にあった...？","最定期置き場","premiere","youtube","zbcuj-G5JDo"]
	,[2021,2,2,0,0,"今冬だけど夏恋しいよねって歌","雪乃トケル","premiere","youtube","dLdkEpHDMpk"]
	,[2021,2,2,0,0,"╌","しずんだずがい","premiere","youtube","_01Lct0C05M"]
	,[2021,2,4,0,0,"湖畔","全て彼等の所為です。","premiere","youtube","z_qRbK4criM"]
];
