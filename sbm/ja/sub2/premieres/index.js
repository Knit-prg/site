let authors=[];
(function(){
	for(let i=0;i<whole_data.length;i++){
		if(!authors.some(item=>item==whole_data[i][6])&&whole_data[i][6]!="反映されていません"){
			authors.push(whole_data[i][6]);
		}
	}
	authors.sort();
	for(let i=0;i<authors.length;i++){
		document.getElementById("author_name").insertAdjacentHTML("beforeend","<option id='author_select_"+authors[i]+"'value='"+authors[i]+"'>"+authors[i]+"</option>");
	}
})();
document.getElementById("release_time_is_now").onclick=function(){
	const c=document.getElementById("release_time_is_now");
	const d=document.getElementById("release_time_from");
	if(c.checked){
		d.disabled=true;
	}
	else{
		d.disabled=false;
	}
}
const table=document.getElementById("main");
function make_table(data){
	const border="</td><td>";
	const no_border="</td><td class='no_border'>";
	let text="";
	let date_first="";
	let date_span="";
	let author_span="";
	let genre="";
	let date_span_count=0;
	let author_span_count=0;
	let author_span_count_=0;
	let the_rest_of_date_span=0;
	let the_rest_of_author_span=0;
	let date_status=0;
	let author=status=0;
	for(let i=0;i<data.length;i++){
		if(data[i][10]==undefined){
			if((/全て.*。/.test(data[i][6])&&data[i][6]!="全てNYの所為です。")||data[i][6]=="Imitate Community"){
				genre="imitation";
			}
			else if(/.*置き場/.test(data[i][6])){
				genre="teiki";
			}
			else{
				genre="other";
			}
		}
		else{
			switch(data[i][10]){
				case "original":
					genre="other";
				break;
				case "imitation":
					genre="imitation";
				break;
				case "teiki":
				case "joke":
					genre="teiki";
				break;
				default:
					genre="other";
				break;
			}
		}
		let i_time=new Date(data[i][0],data[i][1]-1,data[i][2],data[i][3],data[i][4]).getTime();
		if(i+1!=data.length){
			if(the_rest_of_date_span==0&&i_time==new Date(data[i+1][0],data[i+1][1]-1,data[i+1][2],data[i+1][3],data[i+1][4]).getTime()){
				date_span_count=1;
				while(i_time==new Date(data[i+date_span_count][0],data[i+date_span_count][1]-1,data[i+date_span_count][2],data[i+date_span_count][3],data[i+date_span_count][4]).getTime()){
					date_span_count++;
					the_rest_of_date_span++;
					if(i+date_span_count==data.length){break;}
				}
				date_status=1;
			}
			else if(the_rest_of_date_span>0){
				date_status=2;
				the_rest_of_date_span--;
			}
			else{
				date_status=0;
			}
			if(the_rest_of_author_span==0&&data[i][6]==data[i+1][6]){
				author_span_count=1;
				author_span_count_=1;
				while(i+1!=data.length&&data[i][6]==data[i+author_span_count][6]){
					author_span_count++;
					the_rest_of_author_span++;
					if(i+author_span_count==data.length){break;}
				}
				author_span_count_=author_span_count;
				for(let j=0;j+1<author_span_count;j++){
					let remainder=(new Date(data[i+j+1][0],data[i+j+1][1]-1,data[i+j+1][2],data[i+j+1][3],data[i+j+1][4]).getTime()-new Date(data[i+j][0],data[i+j][1]-1,data[i+j][2],data[i+j][3],data[i+j][4]).getTime())/60000;
						if(remainder>60){
							author_span_count_++;
						}
					}
				author_status=1;
			}
			else if(the_rest_of_author_span>0){
				author_status=2;
				the_rest_of_author_span--;
			}
			else{
				author_status=0;
			}
		}
		else{
			if(the_rest_of_date_span>0){
				date_status=2;
			}
			else{
				date_status=0;
			}
			if(the_rest_of_author_span>0){
				author_status=2;
			}
			else{
				author_status=0;
			}
		}
		if(data[i-1]!=undefined){
			let remainder=-(new Date(data[i-1][0],data[i-1][1]-1,data[i-1][2],data[i-1][3],data[i-1][4]).getTime()-i_time)/60000;
			if(remainder>120){
				text+="<tr class='space'></tr>";
			}
			else if(remainder>60){
				text+="<tr class='small_space'></tr>";
			}
		}
		text+="<tr>";
		if(data[i][4]==0){
			switch(date_status){
				case 1:
					let temp="</td><td class='no_border bold' rowspan='"+date_span_count+"'>"
					text+="<td class='table_left bold' rowspan='"+date_span_count+"'>"+data[i][0]+temp+data[i][1]+temp+data[i][2]+temp+data[i][3]+temp+"</td>";
					break;
					case 2:
					break;
					default:
					text+="<td class='no_border'>"+data[i][0]+no_border+data[i][1]+no_border+data[i][2]+no_border+data[i][3]+no_border+"</td>";
					break;
				}
			}
		else{
			switch(date_status){
				case 1:
					let temp="</td><td class='no_border bold' rowspan='"+date_span_count+"'>"
					text+="<td class='table_left bold' rowspan='"+date_span_count+"'>"+data[i][0]+temp+data[i][1]+temp+data[i][2]+temp+data[i][3]+temp+data[i][4]+"</td>";
				break;
				case 2:
				break;
				default:
					text+="<td class='no_border'>"+data[i][0]+no_border+data[i][1]+no_border+data[i][2]+no_border+data[i][3]+no_border+data[i][4]+"</td>";
				break;
			}
		}
		if(data[i][5].length>15){
			text+="<td class='"+genre+"'>"+data[i][5].substr(0,15)+"...</td>";
		}
		else{
			text+="<td class='"+genre+"'>"+data[i][5]+"</td>";
		}
		if(data[i][6].length>15){
			switch(author_status){
				case 1:
					text+="<td class='bold "+genre+"' rowspan='"+author_span_count_+"'>"+data[i][6].substr(0,15)+"...</td>";
				break;
				case 2:
				break;
				default:
					text+="<td class='"+genre+"'>"+data[i][6].substr(0,15)+"...</td>";
				break;
			}
		}
		else{
			switch(author_status){
				case 1:
					text+="<td class='bold "+genre+"' rowspan='"+author_span_count_+"'>"+data[i][6]+"</td>";
				break;
				case 2:
				break;
				default:
					text+="<td class='"+genre+"'>"+data[i][6]+"</td>";
				break;
			}
		}

		switch(data[i][7]){
			case "premiere":
				text+="<td>プレミア公開</td>";
			break;
			case "instant_premiere":
				text+="<td>インスタントプレミア</td>";
			break;
			case "normal":
				text+="<td>公開</td>";
			break;
			case "live":
				text+="<td>生放送</td>";
			break;
			case "announce":
				text+="<td>お知らせ</td>";
			break;
			default:
				text+="<td>不明</td>";
			break;
		}
		switch(data[i][8]){
			case "youtube":
				text+="<td class='link'><a href='https://youtu.be/"+data[i][9]+"'>https://youtu.be/"+data[i][9]+"</a></tr>";
			default:break;
		}
	}
	document.getElementById("number").innerHTML=data.length;
	return text;
}
onload=function(){
	msg.innerText="検索中";
	const condition_raw=location.search.substr(1).split("&");
	let condition={
		release_time_from:0
		,release_time_to:0
		,author_names:[]
		,release_types:[]
		,genres:[]
	};
	let split_temp="";
	let key="";
	let value="";
	let temp="";
	let date=[];
	let time=[];
	for(let i=0;i<condition_raw.length;i++){
		split_temp=condition_raw[i].split("=");
		key=split_temp[0];
		value=split_temp[1];
		switch(key){
			case "release_time_from":
			if(value==""){break;}
			else if(value=="now"){
				let time_regulation=((-540)-(new Date().getTimezoneOffset()))*60*1000;
				condition.release_time_from=new Date(new Date()-time_regulation);
				document.getElementById("release_time_is_now").checked=true;
				document.getElementById("release_time_from").disabled=true;
			}
			else{
				temp=value.split("T");
				date=temp[0].split("-");
				time=temp[1].split("%3A");
				for(let j=0;j<date.length;j++){
					date[j]=Number(date[j]);
				}
				for(let j=0;j<time.length;j++){
					time[j]=Number(time[j]);
				}
				condition.release_time_from=new Date(date[0],date[1]-1,date[2],time[0],time[1]);
				document.getElementById("release_time_from").value=value.replace("%3A",":");
			}
			break;
			case "release_time_to":
			if(value==""){break;}
				temp=value.split("T");
				date=temp[0].split("-");
				time=temp[1].split("%3A");
				for(let j=0;j<date.length;j++){
					date[j]=Number(date[j]);
				}
				for(let j=0;j<time.length;j++){
					time[j]=Number(time[j]);
				}
				condition.release_time_to=new Date(date[0],date[1]-1,date[2],time[0],time[1]);
				document.getElementById("release_time_to").value=value.replace("%3A",":");
			break;
			case "author_name":
				condition.author_names.push(decodeURI(value).replaceAll("+"," ").replace("%2F","/"));
				document.getElementById("author_select_"+decodeURI(value).replaceAll("+"," ").replaceAll("%2F","/")).selected=true;
			break;
			case "release_type":
				condition.release_types.push(value);
				document.getElementById("release_type_"+value).checked=true;
			break;
			case "genre":
				condition.genres.push(value);
				document.getElementById("genre_"+value).checked=true;
			break;
		}
	}
	if(condition.release_time_from!=0&&condition.release_time_to!=0&&condition.release_time_from>condition.release_time_to){
		condition.release_time_from=0;
		condition.release_time_to=0;
	}
	let data=whole_data.concat();
	if(condition.release_time_from!=0){
		for(let i=0;i<data.length;i++){
			if(condition.release_time_from.getTime()>new Date(data[i][0],data[i][1]-1,data[i][2],data[i][3],data[i][4]).getTime()){
				data.splice(i,1);
				i--;
			}
		}
	}
	if(condition.release_time_to!=0){
		for(let i=0;i<data.length;i++){
			if(condition.release_time_to.getTime()<new Date(data[i][0],data[i][1]-1,data[i][2],data[i][3],data[i][4]).getTime()){
				data.splice(i,1);
				i--;
			}
		}
	}
	let data_1=[];
	if(condition.author_names.length!=0){
		for(let i=0;i<data.length;i++){
			for(let j=0;j<condition.author_names.length;j++){
				if(data[i][6]==condition.author_names[j]){
					data_1.push(data[i]);
					break;
				}
			}
		}
	}
	else{
		data_1=data;
	}
	let data_2=[];
	if(condition.release_types.length!=0){
		for(let i=0;i<data_1.length;i++){
			for(let j=0;j<condition.release_types.length;j++){
				if(data_1[i][7]==condition.release_types[j]){
					data_2.push(data_1[i]);
					break;
				}
			}
		}
	}
	else{
		data_2=data_1;
	}
	let data_3=[];
	let i_genre="";
	if(condition.genres.length!=0){
		for(let i=0;i<data_2.length;i++){
			if(data_2[i][10]==undefined){
				if((/全て.*。/.test(data_2[i][6])&&data_2[i][6]!="全てNYの所為です。")||data_2[i][6]=="Imitate Community"){
					i_genre="imitation";
				}
				else if(/.*置き場/.test(data_2[i][6])){
					i_genre="teiki";
				}
				else{
					i_genre="other";
				}
			}
			else{
				switch(data_2[i][10]){
					case "original":
						i_genre="other";
					break;
					case "imitation":
						i_genre="imitation";
					break;
					case "teiki":
						i_genre="teiki";
					break;
					default:
						i_genre="other";
					break;
				}
			}
			for(let j=0;j<condition.genres.length;j++){
				if(i_genre==condition.genres[j]){
					data_3.push(data_2[i]);
					break;
				}
			}
		}
	}
	else{
		data_3=data_2;
	}
	table.insertAdjacentHTML("beforeend",make_table(data_3));
	if(location.search=="?release_time_from=&release_time_to="){
		location.search="";
	}
	else if(location.search=="?release_time_from=now&release_time_to="){
		location.search="?release_time_from=now";
	}
	document.getElementById("msg").innerText="読込終了";
	end=new Date();
	document.getElementById("seconds").innerText=end-start;
};
