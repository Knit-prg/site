function data_processer(){
	const w=whole_data;
	const a=authors
	for(let i=0;i<w.length;i++){
		if(!a.some(item=>item==w[i][6])&&w[i][6]!="反映されていません"){
			authors.push(w[i][6]);
		}
		/*if(w[i][8]=="youtube"&&w[i][9].length!=11){
			console.warn("This ID may be wrong!\ndatetime:"+w[i][0]+"."+w[i][1]+"."+w[i][2]+" "+w[i][3]+":"+w[i][4]);
		}*/
	}
	a.sort();
	for(let i=0;i<a.length;i++){
		d.getElementById("author_name").insertAdjacentHTML("beforeend","<option id='author_select_"+a[i]+"'value='"+a[i]+"'>"+a[i]+"</option>");
	}
}
d.getElementById("release_time_is_now").onclick=function(){
	const is_now=d.getElementById("release_time_is_now");
	const from=d.getElementById("release_time_from");

	if(is_now.checked){from.disabled=true;}
	else{is_now.disabled=false;}
}
function make_table(data){
	const border="</td><td>";
	const no_border="</div></td><td class='no_border'><div class='td_time'>";
	const l=data.length;
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
	let author_status=0;
	let remainder=0;
	let data_i;
	let data_i_1;
	let data_ip1;
	let data_i_j;
	let data_i_j_1;
	let data_y=0;
	let data_mo=0;
	let data_d=0;
	let data_h=0;
	let data_mi=0;
	let data_author="";
	let data_genre="";
	for(let i=0;i<l;i++){
		data_i=data[i];
		data_y=data_i[0];
		data_mo=data_i[1];
		data_d=data_i[2];
		data_h=data_i[3];
		data_mi=data_i[4];
		data_author=data_i[6]
		data_genre=data_i[10];
		if(data_genre==undefined){
			if(
				(/全て.*。/.test(data_author)&&data_author!="全てNYの所為です。"&&data_author!="全て無垢の所為です。")
				||data_author=="全てすべあなの所為です?"
				||data_author=="全て貴方々の所為だったのですが、"
				||data_author=="Imitate Community"
				||data_author=="ファミファロ"
				||data_author=="一眼"){
				genre="imitation";
			}
			else if(/.*置き場/.test(data_author)){genre="teiki";}
			else{genre="other";}
		}
		else{
			switch(data_genre){
				case "original":genre="other";break;
				case "imitation":genre="imitation";break;
				case "teiki":case "joke":genre="teiki";break;
				default:genre="other";break;
			}
		}
		let i_time=new Date(data_y,data_mo-1,data_d,data_h,data_mi).getTime();
		if(i+1!=l){
			data_ip1=data[i+1];
			if(the_rest_of_date_span==0&&i_time==new Date(data_ip1[0],data_ip1[1]-1,data_ip1[2],data_ip1[3],data_ip1[4]).getTime()){
				date_span_count=1;
				while(i_time==new Date(data[i+date_span_count][0],data[i+date_span_count][1]-1,data[i+date_span_count][2],data[i+date_span_count][3],data[i+date_span_count][4]).getTime()){
					date_span_count++;
					the_rest_of_date_span++;
					if(i+date_span_count==l){break;}
				}
				date_status=1;
			}
			else if(the_rest_of_date_span>0){
				date_status=2;
				the_rest_of_date_span--;
			}
			else{date_status=0;}
			if(the_rest_of_author_span==0&&data_author==data_ip1[6]){
				author_span_count=1;
				author_span_count_=1;
				while(i+1!=l&&data_author==data[i+author_span_count][6]){
					author_span_count++;
					the_rest_of_author_span++;
					if(i+author_span_count==l){break;}
				}
				author_span_count_=author_span_count;
				for(let j=0;j+1<author_span_count;j++){
					data_i_j=data[i+j];
					data_i_j_1=data[i+j+1];
					remainder=(new Date(data_i_j_1[0],data_i_j_1[1]-1,data_i_j_1[2],data_i_j_1[3],data_i_j_1[4]).getTime()-new Date(data_i_j[0],data_i_j[1]-1,data_i_j[2],data_i_j[3],data_i_j[4]).getTime())/60000;
						if(remainder>60){author_span_count_++;}
					}
				author_status=1;
			}
			else if(the_rest_of_author_span>0){
				author_status=2;
				the_rest_of_author_span--;
			}
			else{author_status=0;}
		}
		else{
			if(the_rest_of_date_span>0){date_status=2;}
			else{date_status=0;}
			if(the_rest_of_author_span>0){author_status=2;}
			else{author_status=0;}
		}
		if(i!=0){
			data_i_1=data[i-1];
			remainder=-(new Date(data_i_1[0],data_i_1[1]-1,data_i_1[2],data_i_1[3],data_i_1[4]).getTime()-i_time)/60000;
			if(remainder>120){text+="<tr class='space'></tr>";}
			else if(remainder>60){text+="<tr class='small_space'></tr>";}
		}
		text+="<tr>";
		if(data_mi==0){
			switch(date_status){
				case 1:
					let temp="</div></td><td class='no_border bold' rowspan='"+date_span_count+"'><div class='td_time'>";
					text+="<td class='table_left bold' rowspan='"+date_span_count+"'><div class='td_time'>"+data_y+temp+data_mo+temp+data_d+temp+data_h+temp+"</div></td>";
					break;
					case 2:break;
					default:text+="<td class='no_border'><div class='td_time'>"+data_y+no_border+data_mo+no_border+data_d+no_border+data_h+no_border+"</div></td>";break;
				}
			}
		else{
			switch(date_status){
				case 1:
					let temp="</td><td class='no_border bold' rowspan='"+date_span_count+"'>"
					text+="<td class='table_left bold' rowspan='"+date_span_count+"'>"+data_y+temp+data_mo+temp+data_d+temp+data_h+temp+data_mi+"</td>";
				break;
				case 2:break;
				default:text+="<td class='no_border'>"+data_y+no_border+data_mo+no_border+data_d+no_border+data_h+no_border+data_mi+"</td>";break;
			}
		}
		text+="<td class='"+genre+"'><div class='shorten td_title'><span>"+data_i[5]+"</span></div></td>";
		switch(author_status){
			case 1:text+="<td class='bold "+genre+"' rowspan='"+author_span_count_+"'><div class='shorten td_author'><span>"+data_author+"</span></div></td>";
			break;
			case 2:break;
			default:text+="<td class='"+genre+"'><div class='shorten td_author'><span>"+data_author+"</span></div></td>";break;
		}
		text+="<td><div class='shorten td_type'><span>";
		switch(data_i[7]){
			case "premiere":text+="プレミア公開";break;
			case "instant_premiere":text+="インスタントプレミア";break;
			case "normal":text+="公開";break;
			case "live":text+="生放送";break;
			case "announce":text+="お知らせ";break;
			default:text+="不明";break;
		}
		text+="</span></div></td>";
		switch(data_i[8]){
			case "youtube":text+="<td class='link'><div class='shorten td_link'><span><a href='https://youtu.be/"+data_i[9]+"'>https://youtu.be/"+data_i[9]+"</a></span></div></td></tr>";break;
			default:break;
		}
	}
	d.getElementById("number").innerHTML=l;
	return text;
}
function display(){
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
	let raw_l=condition_raw.length;
	for(let i=0;i<raw_l;i++){
		split_temp=condition_raw[i].split("=");
		key=split_temp[0];
		value=split_temp[1];
		switch(key){
			case "release_time_from":
			if(value==""){break;}
			else if(value=="now"){
				let time_regulation=((-540)-(new Date().getTimezoneOffset()))*60*1000;
				condition.release_time_from=new Date(new Date()-time_regulation);
				d.getElementById("release_time_is_now").checked=true;
				d.getElementById("release_time_from").disabled=true;
			}
			else{
				temp=value.split("T");
				date=temp[0].split("-");
				time=temp[1].split("%3A");
				for(let j=0;j<date.length;j++){date[j]=Number(date[j]);}
				for(let j=0;j<time.length;j++){time[j]=Number(time[j]);}
				condition.release_time_from=new Date(date[0],date[1]-1,date[2],time[0],time[1]);
				d.getElementById("release_time_from").value=value.replace("%3A",":");
			}
			break;
			case "release_time_to":
			if(value==""){break;}
				temp=value.split("T");
				date=temp[0].split("-");
				time=temp[1].split("%3A");
				for(let j=0;j<date.length;j++){date[j]=Number(date[j]);}
				for(let j=0;j<time.length;j++){time[j]=Number(time[j]);}
				condition.release_time_to=new Date(date[0],date[1]-1,date[2],time[0],time[1]);
				d.getElementById("release_time_to").value=value.replace("%3A",":");
			break;
			case "author_name":
				condition.author_names.push(decodeURI(value).replaceAll("+"," ").replace("%2F","/"));
				d.getElementById("author_select_"+decodeURI(value).replaceAll("+"," ").replaceAll("%2F","/")).selected=true;
			break;
			case "release_type":
				condition.release_types.push(value);
				d.getElementById("release_type_"+value).checked=true;
			break;
			case "genre":
				condition.genres.push(value);
				d.getElementById("genre_"+value).checked=true;
			break;
		}
	}
	if(condition.release_time_from!=0&&condition.release_time_to!=0&&condition.release_time_from>condition.release_time_to){
		condition.release_time_from=0;
		condition.release_time_to=0;
	}
	let data=whole_data.concat();
	if(condition.release_time_from!=0){
		let data_i;
		for(let i=0;i<data.length;i++){
			data_i=data[i];
			if(condition.release_time_from.getTime()>new Date(data_i[0],data_i[1]-1,data_i[2],data_i[3],data_i[4]).getTime()){
				data.splice(i,1);
				i--;
			}
		}
	}
	if(condition.release_time_to!=0){
		let data_i;
		for(let i=0;i<data.length;i++){
			data_i=data[i];
			if(condition.release_time_to.getTime()<new Date(data_i[0],data_i[1]-1,data_i[2],data_i[3],data_i[4]).getTime()){
				data.splice(i,1);
				i--;
			}
		}
	}
	let data_1=[];
	if(condition.author_names.length!=0){
		let data_i;
		for(let i=0;i<data.length;i++){
			data_i=data[i];
			for(let j=0;j<condition.author_names.length;j++){
				if(data_i[6]==condition.author_names[j]){
					data_1.push(data_i);
					break;
				}
			}
		}
	}
	else{data_1=data;}
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
	else{data_2=data_1;}
	let data_3=[];
	let i_genre="";
	if(condition.genres.length!=0){
		for(let i=0;i<data_2.length;i++){
			if(data_2[i][10]==undefined){
				if(
					(/全て.*。/.test(data_2[i][6])&&data_2[i][6]!="全てNYの所為です。"&&data_2[i][6]!="全て無垢の所為です。")
					||data_2[i][6]=="全てすべあなの所為です?"
					||data_2[i][6]=="全て貴方々の所為だったのですが、"
					||data_2[i][6]=="Imitate Community"
					||data_2[i][6]=="ファミファロ"
					||data_2[i][6]=="一眼"
				){i_genre="imitation";}
				else if(/.*置き場/.test(data_2[i][6])){i_genre="teiki";}
				else{i_genre="other";}
			}
			else{
				switch(data_2[i][10]){
					case "original":i_genre="other";break;
					case "imitation":i_genre="imitation";break;
					case "teiki":case "joke":i_genre="teiki";break;
					default:i_genre="other";break;
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
	else{data_3=data_2;}
	table.insertAdjacentHTML("beforeend",make_table(data_3));
	if(location.search=="?release_time_from=&release_time_to="||location.search=="?release_time_to="){history.replaceState("","",location.pathname);}
	else if(location.search=="?release_time_from=now&release_time_to="){history.replaceState("","",location.pathname+"?release_time_from=now");}
	d.getElementById("msg").innerText="読込終了";
}
async function shorten(){
	const shorten=document.getElementsByClassName("shorten");
	let div,span,result,shorten_i;
	for(let i=0;i<shorten.length;i++){
		shorten_i=shorten[i];
		shorten_i.style.transform="";
		div=shorten_i.offsetWidth;
		span=shorten_i.children[0].offsetWidth;
		result=div/span;
		if(result<1){await shorten_(shorten[i],result);}
	}
}
function shorten_(shorten_i,result){shorten_i.style.transform="scaleX("+result+")";}
