// checkbox events
var checkboxMsgMap = {
	"niaosu": "尿素增高：可见于大量出汗，脱水，高蛋白饮食，感染，严重外伤等，建议纠正外因后复查，如有肾脏病史，建议门诊治疗。",
	"jigan": "肌酐增高：代表肾脏功能，多见于慢性肾炎、肾功能不全者，建议门诊治疗。",
	"niaosuan": "尿酸增高：表明有“高尿酸血症”，平常多喝水、少进食海鲜、动物内脏等高蛋白高嘌呤食物，忌啤酒，少饮白酒，如有关节痛或尿酸大于550umol建议门诊治疗。",
	"xdt": '<label><input type="checkbox" name="CheckboxGroup8" value="checkbox" id="CheckboxGroup8_0" >T波改变</label><label><input type="checkbox" name="CheckboxGroup8" value="checkbox" id="CheckboxGroup8_1">ST改变</label><label><input type="checkbox" name="CheckboxGroup8" value="checkbox" id="CheckboxGroup8_2">ST-T改变</label>其他<input type="text"></p><strong><p>请参考以下建议：①观察心电图；     ②必要时药物治疗；  ③建议专科医院进一步检查、治疗。</p></strong>',
	"jzx": '<select style="width:auto"><option></option><option>左侧</option><option>右侧</option></select>结节；<select style="width:auto"><option></option><option>左侧</option><option>右侧</option></select>肿物；其他<input type="text">',
	"zhifanggan": '&bull; 脂肪肝：<label><input type="checkbox" name="CheckboxGroup9" value="checkbox" id="CheckboxGroup9_0">轻度</label><label><input type="checkbox" name="CheckboxGroup9" value="checkbox" id="CheckboxGroup9_1">中度</label><label><input type="checkbox" name="CheckboxGroup9" value="checkbox" id="CheckboxGroup9_2">重度</label><ul><strong>注意事项：①低脂肪、低胆固醇饮食。   ②禁酒    ③控制体重（超标者应减体重）。 ④适当增加身体锻炼。       ⑤必要时服降脂药。   ⑥有糖尿病者，应控制糖尿病。 </strong>',
	"gnghz": '&bull; 肝内钙化灶（胆管结石）：<input class="input-mini" style="text-align:center;" type="text">cm, <strong>建议：①定期复查  ②必要时肝胆外科处理</strong>',
	"gannangzhong": '&bull; 肝囊肿： 左肝，大小<input class="input-mini" style="text-align:center;" type="text">cm ； 右肝，大小<input class="input-mini" style="text-align:center;" type="text">cm <strong>建议：①观察，目前不需要处理；②≥10cm需专科处理。</strong>',
	"danjieshi": '&bull; 胆囊结石： 大小<input class="input-mini" style="text-align:center;" type="text"> cm；多发： 大者<input class="input-mini" style="text-align:center;" type="text">cm；<label><input type="checkbox" name="CheckboxGroup10" value="checkbox" id="CheckboxGroup10_0">泥沙型</label><label><input type="checkbox" name="CheckboxGroup10" value="checkbox" id="CheckboxGroup10_1">充满型</label><ul><strong>建议：①定期检查      ②清淡饮食    ③消炎利胆排石</strong>',
	"danzenghou": '&bull; 胆囊壁增厚性改变。<ul><strong>建议：①定期检查      ②清淡饮食    ③消炎利胆排石</strong>',
	"danxirou": '&bull; 胆囊壁息肉样改变：大小<input class="input-mini" style="text-align:center;" type="text">cm；多发： 大者<input class="input-mini" style="text-align:center;" type="text">cm；<strong>建议：①定期检查； ②≥1cm肝胆外科处理。 </strong> ',
	"danqiechu": '&bull; 胆囊切除术后，胆总管直径<input class="input-mini" style="text-align:center;" type="text">cm； <strong>建议：①定期检查； ②≥1cm肝胆外科处理。  </strong>',
	"shenjieshi": '&bull; 肾结石： 左侧，大小<input class="input-mini" style="text-align:center;" type="text">cm； 右侧，大小<input class="input-mini" style="text-align:center;" type="text">cm<strong>建议：①观察，定期复诊； ②多饮水、运动； ③药物治疗； ④必要时专科处理。</strong>',
	"shennangzhong": '&bull; 肾脏囊肿：左侧，大小<input class="input-mini" style="text-align:center;" type="text">cm； 右侧，大小<input  class="input-mini" style="text-align:center;" type="text">cm<strong>①观察，目前不需要处理②≥5cm需专科处理。</strong>',
	"xzUn": '肝脏异常项：<label><input type="checkbox" name="CheckboxGroup3" value="checkbox" id="CheckboxGroup3_0" onClick="OnChangeCheckbox(this, \'zhifanggan\')">脂肪肝</label><label><input type="checkbox" name="CheckboxGroup3" value="checkbox" id="CheckboxGroup3_1" onClick="OnChangeCheckbox(this, \'gnghz\')">肝内钙化灶</label><label><input type="checkbox" name="CheckboxGroup3" value="checkbox" id="CheckboxGroup3_2" onClick="OnChangeCheckbox(this, \'gannangzhong\')">肝囊肿</label></p><p id="zhifanggan"></p><p id="gnghz"></p><p id="gannangzhong"></p>胆囊：<label><input type="checkbox" name="CheckboxGroup4" value="checkbox" id="CheckboxGroup4_0" onClick="OnChangeCheckbox(this, \'danjieshi\')">胆囊结石</label><label><input type="checkbox" name="CheckboxGroup4" value="checkbox" id="CheckboxGroup4_1" onClick="OnChangeCheckbox(this, \'danzenghou\')">胆囊壁增厚性改变</label><label><input type="checkbox" name="CheckboxGroup4" value="checkbox" id="CheckboxGroup4_2" onClick="OnChangeCheckbox(this, \'danxirou\')">胆囊壁息肉样改变</label><label><input type="checkbox" name="CheckboxGroup4" value="checkbox" id="CheckboxGroup4_3" onClick="OnChangeCheckbox(this, \'danqiechu\')">胆囊术后</label><p id="danjieshi"></p><p id="danzenghou"></p><p id="danxirou"></p><p id="danqiechu"></p>肾脏异常项： <label><input type="checkbox" name="CheckboxGroup11" value="checkbox" id="CheckboxGroup11_0" onClick="OnChangeCheckbox(this, \'shenjieshi\')">肾结石</label><label><input type="checkbox" name="CheckboxGroup11" value="checkbox" id="CheckboxGroup11_1" onClick="OnChangeCheckbox(this, \'shennangzhong\')">肾脏囊肿</label><p id="shenjieshi"></p><p id="shennangzhong"></p>'
}

function OnChangeCheckbox(checkbox, id) {
	document.getElementById(id).innerHTML = checkbox.checked ? checkboxMsgMap[id] : "";
}

//weight
function getWeight() {
	var res;
	var weight=document.getElementById("weight").value;
	if (isNaN(weight)) {
		alert("请输入数值!");
	} else {
		if (weight<18) {
			res="过轻";
		}
		else if (weight>=18 && weight<=24) {
			res="正常";
		}
		else if (weight>24 && weight<=28) {
			res="超重";
		}
		else {
			res="肥胖";
		}
	}
	document.getElementById("weightRes").innerHTML=res;
}

//blood pressure
function getBldpressure() {
	var res;
	var bp=document.getElementById("bldpressure").value;
	var regex = /\d+/g;
	var matches = bp.match(regex)
	var len = matches.length;

	var bph = matches[0]
	var bpl = matches[1]
	
	if (bph >= 180 || bpl >= 110) {
		res = "血压≥180/110mmHg，为重度高血压，需积极治疗控制血压。 如原有高血压病史，目前血压仍高，应进行有效治疗，控制血压。 ";
	} else if (bph >= 140 || bpl >= 90) {
		res = "定期复查血压，如持续≥140/90mmHg应治疗。如原有高血压病史，目前血压仍高，应进行有效治疗，控制血压。";
	} else {
		res = "正常";
	}
	document.getElementById("bldpressureRes").innerHTML=res;
}

//blood sugar
function getBldsugar() {
	var res;
	var s=document.getElementById("bldsugar").value;
	if (isNaN(s)) {
		alert("请输入数值!");
	} else {
		if (s >= 7.0 ) {
			res="如血糖≥7.0 mmol/L，建议检查餐后2小时血糖并再次复查空腹血糖，糖尿病不除外。";
		}
		else if (s < 7.0 && s >= 6.1) {
			res="如血糖在6.1~7.0 mmol/L之间，建议检查餐后2小时血糖。";
		} else {
			res="正常";
		}
	}
	document.getElementById("bldsugarRes").innerHTML=res;
}

//总胆固醇
function getZongDGC() {
	var res;
	var v=document.getElementById("zongdgc").value;
	if (isNaN(v)) {
		alert("请输入数值!");
	} else {
		if (v >= 0 && v <= 5.2 ) {
			res="正常";
		}
		else {
			res="异常";
		}
	}
	document.getElementById("zongdgcRes").innerHTML=res;
}

//甘油三酯
function getGYSZ() {
	var res;
	var v=document.getElementById("gysz").value;
	if (isNaN(v)) {
		alert("请输入数值!");
	}
	else {
		if (v >= 0 && v <= 1.7 ) {
			res="正常";
		}
		else {
			res="异常";
		}
	}
	document.getElementById("gyszRes").innerHTML=res;
}

//低密度脂蛋白胆固醇
function getDiDGC() {
	var res;
	var v=document.getElementById("didgc").value;
	if (isNaN(v)) {
		alert("请输入数值!");
	}
	else {
		if (v >= 0 && v <= 3.36) {
			res="正常";
		} else {
			res="异常";
		}
	}
	document.getElementById("didgcRes").innerHTML=res;
}

//高密度脂蛋白胆固醇
function getGaoDGC()
{
	var res;
	var v=document.getElementById("gaodgc").value;
	if (isNaN(v)) {
		alert("请输入数值!");
	} else {
		if (v >= 0.9 && v <= 2.19 ) {
			res="正常";
		} else {
			res="异常";
		}
	}
	document.getElementById("gaodgcRes").innerHTML=res;
}

//血脂是否正常
function getGBZAM() {
	var res;
	var v=document.getElementById("gbzam").value;

	if (isNaN(v)) {
		alert("请输入数值!");
	}
	else {
		if (v < 40 ) {
			res="正常";
			res1="";
		} else {
			res="异常";
			res1= "建议：①两周后复查。     ②有脂肪肝者治疗脂肪肝。     ③禁酒。";
		}
	}
	document.getElementById("gbzamRes").innerHTML=res;
	document.getElementById("gbzamRes1").innerHTML=res1;
}

// 同型半脂氨酸
function getBZAS() {
	var res;
	var v=document.getElementById("bzas").value;

	if (isNaN(v)) {
		alert("请输入数值!");
	}
	else {
		if (v <= 15 && v >= 0) {
			res="正常";
		} else {
			res="升高提示心、脑血管风险度增高。高同型半脂氨酸血症建议服用小剂量叶酸预防心、脑血管疾病的发生。";
		}
	}
	document.getElementById("bzasRes").innerHTML=res;
}
