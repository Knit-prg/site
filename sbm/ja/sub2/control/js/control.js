const tr=`
	<tr id="item_*">
		<td>
			<div>URL:<input type="url" id="url_*" placeholder="URL"></div>
			<div><input type="radio" name="release_type_*" value="normal" checked>Normal<input type="radio" name="release_type_*" value="premiere">Premiere</div>
			<div><input type="checkbox" id="is_premiere_start_*">Premiere start info</div>
			<div><input type="radio" name="release_type_*" value="premiered">Premiered<input type="radio" name="release_type_*" value="live">Live</div>
			<div><input type="radio" name="release_type_*" value="new_imitation">New imitation<input type="radio" name="release_type_*" value="imitation_name_change">Imitation name change</div>
			<div>Type</div>
			<div><input type="radio" name="type_*" value="normal" checked>Normal<input type="radio" name="type_*" value="imitation">Imitation</div>
			<div><input type="radio" name="type_*" value="arrange">Arrange<input type="radio" name="type_*" value="subeana_arrange">Subeana Arrange</div>
			<div><input type="radio" name="type_*" value="imitation_arrange">Imitation Arrange<input type="radio" name="type_*" value="self_appointed">Self-appointed</div>
			<div><input type="radio" name="type_*" value="joke">Joke<input type="radio" name="type_*" value="deleted">Deleted</div>
			<div>Details</div>
			<div>Premiere start time:<input type="datetime-local" id="premiere_start_time_*"></div>
			<div>Imitation old name:<input id="old_name_*" placeholder="The old name"></div>
			<div>Deleted title:<input id="deleted_title_*" placeholder="Title"></div>
			<div>Deleted author:<input id="deleted_author_*" placeholder="channel name"></div>
		</td>
		<td><div id="result_*"></div><div class="database" id="database_*"></div></td>
		<td>
			<div><button id="add_on_*">Add the new on this</button></div>
			<div><button id="delete_*">Delete this</button></div>
			<div><button id="raise_*">Raise this</button></div>
			<div><button id="lower_*">Lower this</button></div>
			<div><button id="copy_*">Copy this</button></div>
			<div><button id="copy_database_*">Copy as database</div>
			<div><button id="add_below_*">Add the new below this</button></div>
		</td>
	</tr>
`;
let loaded_list={};
let loaded_channel_list={};
let number=0;
let next_id=0;
function add(){
	document.getElementById("main_table").insertAdjacentHTML("beforeend",tr.replaceAll("*",next_id));
	init(next_id);
	load(next_id,false);
	next_id++;
	number++;
	display_number();
}
function display_number(){document.getElementById("number_display").innerText=number;}
function init(num){
	document.getElementById("url_"+num).oninput=function(){load(num,true);};
	const release_type_radio=document.getElementsByName("release_type_"+num);
	for(let i=0;i<release_type_radio.length;i++){
		release_type_radio[i].onchange=function(){load(num,false);};
	}
	const type_radio=document.getElementsByName("type_"+num);
	for(let i=0;i<type_radio.length;i++){
		type_radio[i].onchange=function(){load(num,false);};
	}
	document.getElementById("is_premiere_start_"+num).onclick=function(){load(num,false);}
	document.getElementById("premiere_start_time_"+num).onchange=function(){load(num,false);};
	document.getElementById("old_name_"+num).oninput=function(){load(num,false);};
	document.getElementById("deleted_title_"+num).oninput=function(){load(num,false);}
	document.getElementById("deleted_author_"+num).oninput=function(){load(num,false);}
	document.getElementById("add_on_"+num).onclick=function(){
	document.getElementById("item_"+num).insertAdjacentHTML("beforebegin",tr.replaceAll("*",next_id));
		init(next_id);
		load(next_id,false);
		next_id++;
		number++;
		display_number();
	};
	document.getElementById("delete_"+num).onclick=function(){
	document.getElementById("item_"+num).remove();
		number--;
		display_number();
	};
	document.getElementById("raise_"+num).onclick=function(){
		const previous_element=document.getElementById("item_"+num).previousElementSibling;
		if(previous_element!=null){
			document.getElementById("item_"+num).insertAdjacentElement("afterend",previous_element);
		}
	};
	document.getElementById("lower_"+num).onclick=function(){
		const next_element=document.getElementById("item_"+num).nextElementSibling;
		if(next_element!=null){
			document.getElementById("item_"+num).insertAdjacentElement("beforebegin",next_element);
		}
	};
	document.getElementById("copy_"+num).onclick=function(){
		const dummy_textarea=document.getElementById("dummy_textarea");
		dummy_textarea.value=document.getElementById("result_"+num).innerText;
		dummy_textarea.select();
		document.execCommand("copy");
	}
	document.getElementById("copy_database_"+num).onclick=function(){
		const dummy_textarea=document.getElementById("dummy_textarea");
		dummy_textarea.value=document.getElementById("database_"+num).textContent;
		dummy_textarea.select();
		document.execCommand("copy");
	}
	document.getElementById("add_below_"+num).onclick=function(){
		document.getElementById("item_"+num).insertAdjacentHTML("afterend",tr.replaceAll("*",next_id));
		init(next_id);
		load(next_id,false);
		next_id++;
		number++;
		display_number();
	}
}
function load(num,is_new_URL){
	const url=document.getElementById("url_"+num).value;
	if(is_new_URL){
		if(_knit.is_yt_movie(url)){
			const movie_id=_knit.yt_movie_url_to_id(url);
			if(loaded_list[movie_id]==undefined){
				const data_url="https://www.googleapis.com/youtube/v3/videos?id="+movie_id+"&part=snippet&fields=items(id,snippet(publishedAt,title,channelId))&key=AIzaSyCso6tb_OZt75eQ7GrxnLJgMN_EOKdqnbA";
				const video_get_event={
					on_load:function(){
						loaded_list[movie_id]=this.response;
						const author_id=loaded_list[movie_id].items[0].snippet.channelId;
						if(loaded_channel_list[author_id]==undefined){
							const channel_url="https://www.googleapis.com/youtube/v3/channels?id="+author_id+"&part=snippet&fields=items/snippet(title,publishedAt)&key=AIzaSyCso6tb_OZt75eQ7GrxnLJgMN_EOKdqnbA";
							channel_get_event={
								on_load:function(){
									loaded_channel_list[author_id]=this.response;
									display(url,num);
								}
							};
							_knit.get(channel_url,"json",channel_get_event);
						}
					}
				};
				_knit.get(data_url,"json",video_get_event);
			}
		}
		else if(_knit.is_yt_channel(url)){
			const channel_id=_knit.yt_channel_url_to_id(url);
			if(loaded_channel_list[channel_id]==undefined){
				const channel_url="https://www.googleapis.com/youtube/v3/channels?id="+channel_id+"&part=snippet&fields=items/snippet/title&key=AIzaSyCso6tb_OZt75eQ7GrxnLJgMN_EOKdqnbA";
				const channel_get_event={
					on_load:function(){
						loaded_channel_list[channel_id]=this.response;
						display(url,num);
					}
				};
				_knit.get(channel_url,"json",channel_get_event);
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
	let databased="error";
	let inputed_url=url;
	let platform="";
	if(_knit.is_yt_movie(url)){platform="youtube";}
	inputed_url=url
		.replace("https://www.youtube.com/watch?v=","https://youtu.be/")
		.replace("&featured","")
		.replace("/videos","")
		.replace("/playlists","")
		.replace("/community","")
		.replace("/channels","")
		.replace("/about","")
		.replace("/featured","");
	const release_type_radio=document.getElementsByName("release_type_"+num);
	for(let i=0;i<release_type_radio.length;i++){
		if(release_type_radio[i].checked){release_type=release_type_radio[i].value;}
	}
	const type_radio=document.getElementsByName("type_"+num);
	for(let i=0;i<type_radio.length;i++){
		if(type_radio[i].checked){type=type_radio[i].value;}
	}
	switch(release_type){
		case "normal":release_type_text="動画公開情報";break;
		case "premiere":release_type_text="プレミア公開設定情報";break;
		case "premiered":release_type_text="プレミア公開情報";break;
		case "live":release_type_text="生配信情報";break;
		case "new_imitation":release_type_text="新模倣情報";break;
		case "imitation_name_change":release_type_text="模倣名称変更情報";break;
		default:release_type_text="Error";break;
	}
	switch(release_type){
		case "normal":case "premiere":case "premiered":case "live":
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
			if(type=="deleted"){
				time_jst="";
				title=document.getElementById("deleted_title_"+num).value;
				author_name=document.getElementById("deleted_author_"+num).value;
				databased="					";
			}
			//このへんまで見直し済み
			else{
				try{
					const movie=loaded_list[_knit.yt_movie_url_to_id(url)].items[0].snippet;
					time=_knit.get_regulated_time(movie.publishedAt);
					let y=time.getYear();
					while(y>=100){y=y-100;}
					y=("0"+y).slice(-2);
					mo=("0"+(time.getMonth()+1)).slice(-2);
					d=("0"+time.getDate()).slice(-2);
					h=("0"+time.getHours()).slice(-2);
					mi=("0"+time.getMinutes()).slice(-2);
					databased=time.getFullYear()+"	"+(time.getMonth()+1)+"	"+time.getDate()+"	"+time.getHours()+"	"+time.getMinutes()+"	";
					time_jst=y+"."+mo+"."+d+" "+h+":"+mi+" JST";
					title=movie.title;
					author_name=loaded_channel_list[movie.channelId].items[0].snippet.title;
				}
				catch(e){
					time_jst="YY.MM.DD hh:mm JST";
					title="タイトル";
					author_name="作者";
				}
			}
			if(release_type=="premiere"){
					let start_time=new Date(document.getElementById("premiere_start_time_"+num).value);
					let start_y=start_time.getYear();
					while(start_y>=100){start_y=start_y-100;}
					start_y=("0"+start_y).slice(-2);
					let start_mo=("0"+(start_time.getMonth()+1)).slice(-2);
					let start_d=("0"+start_time.getDate()).slice(-2);
					let start_h=("0"+start_time.getHours()).slice(-2);
					let start_mi=("0"+start_time.getMinutes()).slice(-2);
					databased=start_time.getFullYear()+"	"+(start_time.getMonth()+1)+"	"+start_time.getDate()+"	"+start_time.getHours()+"	"+start_time.getMinutes()+"	";
					let start_time_text=start_y+"."+start_mo+"."+start_d+" "+start_h+":"+start_mi+" JST";
					if(document.getElementById("is_premiere_start_"+num).checked){
						release_type_text="プレミア公開開始情報";
						final_text=release_type_text+type_text+"\n"+start_time_text+"\n"+title+"/"+author_name+"\n"+inputed_url;
					}
					else{
						final_text=release_type_text+type_text+"\n設定:"+time_jst+"\n開始:"+start_time_text+"\n"+title+"/"+author_name+"\n"+inputed_url;
					}
			}
			else{
				final_text=release_type_text+type_text+"\n"+time_jst+"\n"+title+"/"+author_name+"\n"+inputed_url;
			}
			databased+=title+"	"+author_name+"	";
			if(release_type=="premiered"){databased+="premiere";}
			else{databased+=release_type;}
			databased+="	"+platform+"	";
			if(platform=="youtube"){databased+=url.match(/(\d|\w|-){11}/)[0];}
		break;
		case "new_imitation":
		let channel_title;
		try{
			channel_title=loaded_channel_list[url.match(/(\d|\w|-){24}/)[0]].items[0].snippet.title;
		}
		catch(e){
			channel_title="チャンネル名";
		}
		final_text=release_type_text+"\n"+channel_title+"\n"+inputed_url;
		break;
		case "imitation_name_change":
		let channel_title_;
		try{
			channel_title_=loaded_channel_list[url.match(/(\d|\w|-){24}/)[0]].items[0].snippet.title;
		}
		catch(e){
			channel_title_="チャンネル名";
		}
		final_text=release_type_text+"\n"+document.getElementById("old_name_"+num).value+"\n↓\n"+channel_title_+"\n"+inputed_url;
		break;
		default:
		final_text="Error";
		break;
	}
	document.getElementById("result_"+num).innerText=final_text;
	document.getElementById("database_"+num).innerText=databased;
}
