let _knit={
	d:document
	,yt_movie_regexp_long:/(https:\/\/www\.)?youtube\.com\/watch\?.*v=(\d|\w|-){11}.*/
	,yt_movie_regexp_short:/(https:\/\/)?youtu\.be\/(\d|\w|-){11}.*/
	,yt_channel_regexp_long:/(https:\/\/www\.)?youtube\.com\/channel\/(\d|\w|-){24}.*/
	,is_yt_movie:function(url){return _knit.yt_movie_regexp_long.test(url)||_knit.yt_movie_regexp_short.test(url);}
	,yt_movie_url_to_id:function(url){return url.match(/(\d|\w|-){11}/)[0];}
	,is_yt_channel:function(url){return _knit.yt_channel_regexp_long.test(url);}
	,yt_channel_url_to_id:function(url){return url.match(/(\d|\w|-){24}/)[0];}
	,get:function(url,type,events){
		const request=new XMLHttpRequest();
		request.open("GET",url);
		request.responseType=type;
		request.onload=events.on_load;
		request.send();
	}
	,time_regulation:((-540)-(new Date().getTimezoneOffset()))*60*1000
	,get_regulated_time:function(time){
		return new Date((new Date(time))-_knit.time_regulation);
	}
	,show_header:function(prefix_A,prefix_B,name,lang){
		let old_headers=document.getElementsByTagName("header");
		let text;
		for(let i=0;i<old_headers.length;i++){old_headers[i].remove();}
		if(location.origin!="file://"&&location.origin!="https://knit-prg.github.io"){
			name="FAKE!";
			switch(lang){
				case "ja":text="このサイトは偽物です！本物は<a href='https://knit-prg.github.io/site/'>こちら</a>から";break;
				case "en":default:text="This site is fake! The geniune site is <a href='https://knit-prg.github.io/site/'>here</a>.";break;
			}
		}
		else{
			let d=new Date();
			let month=d.getMonth()+1
			let date=d.getDate();
			switch(lang){
				case "ja":
					if(month==1&&date<=5){text="新年明けましておめでとうございます。今年も宜しくお願いします。";}
					else if(month==1&&date==11){text="鏡開きです。管理人は餅が大好物です。";}
					else if(month==2&&date==14){text="バレンタインデーです...チョコ、貰えましたか...？";}
					else if(month==3&&date==3){text="雛祭です。桃食いてえ";}
					else if(month==3&&date==14){text="ホワイトデーです。お返しの必要が無くて楽だなぁ()";}
					else if(month==4&&date<=7){text="新年度スタート！";}
					else if((month==4&&date>=29)||(month==5&&date<5)){text="ゴールデンウィーク！！！";}
					else if(month==8&&date==11){text="今日は山の日です。管理人はインドア派です。";}
					else if(month==8&&date==15){text="🍆盆🍆";}
					else if(month==8&&date==31){text="明日8/32は管理人の誕生日です！";}
					else if(month==8&&date==32){text="Happy birthday to me!!";}
					else if(month==10&&date==31){text="ハロウィンです。お菓子おいしぃ(むしゃむしゃ";}
					else if(month==11&&date==3){text="今日は文化の日です。晴れやすい特異日でもあるそうです。どうですか？";}
					else if(month==11&&date==23){text="今日は勤労感謝の日です。<ruby>新嘗祭<rt>にいなめさい</rt></ruby>という収穫祭の日でもあるそうです。";}
					else if(month==12&&date==24){text="クリスマス・イブ！サンタさん！";}
					else if(month==12&&date==25){text="クリスマス！年末！";}
					else if(month==12&&date==28){text="鏡餅はお供えしましたか？";}
					else if(month==12&&date==31){text="よいお年を！";}
					else{text="何か祝い忘れている行事があったら下の方にあるGoogleフォームから教えて下さいね！";}
				break;
				case "en":default:
				if(month==1&&date==1){text="It's New Year's Day today!";}
				else if(month==1&&(date>=2&&date<=5)){text="Happy new year!";}
				else if(month==2&&date==14){text="It's Valentine's Day today! Where is chocolate...?";}
				else if(month==8&&date==31){text="Tomorrow, August 32th, is my birthday!";}
				else if(month==8&&date==32){text="Happy birthday to me!!";}
				else if(month==10&&date==31){text="TRICK OR TREAT!";}
				else if(month==12&&date==24){text="It's Christmas Eve! Will Santa Claus come...?";}
				else if(month==12&&date==25){text="It's Christmas! Did Santa Claus come?";}
				else if(month==12&&date>=26){text="Happy new year!";}
				else if(month==12&&date==31){text="It's New Year's Eve today!";}
				else{text="The administrator is Japanese and not familiar with foreign events. If you have the idea to display here, please tell me from Google form at the bottom!";}
			}
		}
		const inserts=`
			<header>
				<div id="_knit_header_top_line" class="_knit_`+name+`"></div>
				<div id="_knit_header_top_text">`+text+`</div>
				<div id="_knit_header_name">`+prefix_A+`Knit`+prefix_B+`<span id="_knit_header_firstname">`+name+`</span><span id="_knit_header_period">.</span></div>
			</header>
		`;
		document.body.insertAdjacentHTML("afterbegin",inserts);
	}
	,show_footer:function(first_y,y,m,d,name,lang){
		let old_footers=document.getElementsByTagName("footer");
		for(let i=0;i<old_footers.length;i++){old_footers[i].remove();}
		let link,msg,show_updated_time;
		switch(lang){
			case "ja":
				link="https://docs.google.com/forms/d/e/1FAIpQLScQpH2qQwRPI4FvHOiEtdqFUGLbRY5hM_1CLKpreXV8SYnXCg/viewform";
				msg="報告・提案はこちらから";
				show_updated_time=y+"年"+m+"月"+d+"日";
			break;
			case "en":default:
				link="https://docs.google.com/forms/d/e/1FAIpQLSdcZn212m7u46pcxcwHn8hC7kpLb2DxXUSMgUGrO6pyh7na1w/viewform";
				msg="Click here to report or propose";
				let month_table=["January","February","March","April","May","June","July","August","September","October","November","December"];
				let ordinal;
				if(d==1||d==21||d==31){ordinal="st";}
				else if(d==2||d==22||d==32){ordinal="nd";}
				else if(d==3||d==23){ordinal="rd";}
				else{ordinal="th";}
				show_updated_time=month_table[m-1]+" "+d+ordinal+", "+y;
			break;
		}
		const inserts=`
			<footer>
				<div><a href="`+link+`">`+msg+`</a></div>
				<div>Last update: <time datetime="`+y+`-`+m+`-`+d+`+09:00">`+show_updated_time+`</time></div>
				<div><small>© `+first_y+`-`+y+` Knit `+name+`.</small></div>
			</footer>
		`;
		document.body.insertAdjacentHTML("beforeend",inserts);
	}
}
