let loaded_list={};
let loaded_channel_list={};
let number=1;
let next_id=1;
function init(num){
	document.getElementById("url_"+num).oninput=function(){load(document.getElementById("url_"+num).value,num,true);};
	const release_type_radio=document.getElementsByName("release_type_"+num);
	for(let i=0;i<release_type_radio.length;i++){
		release_type_radio[i].onchange=function(){load(document.getElementById("url_"+num).value,num,false);};
	}
	const type_radio=document.getElementsByName("type_"+num);
	for(let i=0;i<type_radio.length;i++){
		type_radio[i].onchange=function(){load(document.getElementById("url_"+num).value,num,false);};
	}
}
function load(url,num,is_new_URL){
	if(is_new_URL){
		if(/(https:\/\/www.)?youtube\.com\/watch\?.*v=(\d|\w|-){11}.*/.test(url)||/(https:\/\/)?youtu\.be\/(\d|\w|-){11}.*/.test(url)){
		if(loaded_list[url.match(/(\d|\w|-){11}/)[0]]==undefined){
				const data_url="https://www.googleapis.com/youtube/v3/videos?id="+url.match(/(\d|\w|-){11}/)[0]+"&part=snippet&fields=items(id,snippet(publishedAt,title,channelId))&key=AIzaSyCso6tb_OZt75eQ7GrxnLJgMN_EOKdqnbA";
				const request=new XMLHttpRequest();
				request.open("GET",data_url);
				request.responseType="json";
				request.send();
				request.onload=function(){
					loaded_list[url.match(/(\d|\w|-){11}/)[0]]=request.response;
					let author_id=loaded_list[url.match(/(\d|\w|-){11}/)[0]].items[0].snippet.channelId;
					if(loaded_channel_list[author_id]==undefined){
						const channel_url="https://www.googleapis.com/youtube/v3/channels?id="+author_id+"&part=snippet&fields=items/snippet/title&key=AIzaSyCso6tb_OZt75eQ7GrxnLJgMN_EOKdqnbA";
						const request_=new XMLHttpRequest();
						request_.open("GET",channel_url);
						request_.responseType="json";
						request_.send();
						request_.onload=function(){
							loaded_channel_list[author_id]=request_.response;
							display(url,num);
						}
					}
				}
			}
		}
	}
	display(url,num);
}
function display(url,num){
	let release_type="normal";
	let release_type_text="動画公開情報";
	let type="normal";
	let type_text="";
	let final_text="Error";
	let inputed_url=url.replace("https://www.youtube.com/watch?v=","https://youtu.be/");
	const release_type_radio=document.getElementsByName("release_type_"+num);
	for(let i=0;i<release_type_radio.length;i++){
		if(release_type_radio[i].checked){
			release_type=release_type_radio[i].value;
		}
	}
	const type_radio=document.getElementsByName("type_"+num);
	for(let i=0;i<type_radio.length;i++){
		if(type_radio[i].checked){
			type=type_radio[i].value;
		}
	}
	switch(release_type){
		case "normal":release_type_text="動画公開情報";break;
		case "premiere":release_type_text="プレミア公開設定情報";break;
		case "premiered":release_type_text="プレミア公開情報";break;
		case "new_imitation":release_type_text="新模倣情報";break;
		case "imitation_name_change":release_type_text="模倣名称変更情報";break;
		default:release_type_text="Error";break;
	}
	switch(release_type){
		case "normal":case "premiered":
			switch(type){
				case "normal":type_text="";break;
				case "imitation":type_text="(すべあな模倣系)";break;
				case "arrange":type_text="(アレンジ系)";break;
				case "subeana_arrange":type_text="(すべあなアレンジ系)";break;
				case "imitation_arrange":type_text="(すべあな模倣アレンジ系)";break;
				case "self_appointed":type_text="(自薦)";break;
				case "joke":type_text="(ネタ系)";break;
				case "deleted":type_text="(削除済)";break;
				default:type_text="(Error)";break;
			}
			let time,y,mo,d,h,mi,time_jst,title,author_name;
			try{
				const movie=loaded_list[url.match(/(\d|\w|-){11}/)[0]].items[0].snippet;
				time=new Date(movie.publishedAt);
				y=time.getYear();
				while(y>=100){y=y-100;}
				y=("00"+y).slice(-2);
				mo=("00"+(time.getMonth()+1)).slice(-2);
				d=("00"+time.getDate()).slice(-2);
				h=("00"+time.getHours()).slice(-2);
				mi=("00"+time.getMinutes()).slice(-2);
				time_jst=y+"."+mo+"."+d+" "+h+":"+mi+" JST";
				title=movie.title;
				author_name=loaded_channel_list[movie.channelId].items[0].snippet.title;
			}
			catch(e){
			}
			final_text=release_type_text+type_text+"\n"+time_jst+"\n"+title+"/"+author_name+"\n"+inputed_url;
		break;
		case "premiere":
		case "new_imitation":
		final_text=release_type_text+"\n"+inputed_url;
		break;
		case "imitation_name_change":
		final_text=release_type_text+"\n"+inputed_url;
		break;
		default:
		final_text="Error";
		break;
	}
	document.getElementById("result_"+num).innerText=final_text;
}
