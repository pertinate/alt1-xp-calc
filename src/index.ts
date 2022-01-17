import * as $ from "jquery"; 
import * as a1lib from "@alt1/base";

//Credits to https://runescape.wiki/w/Module:Rotations/Merchant
//and to Elessar2 (https://runescape.wiki/w/User_talk:Elessar2)

require("!file-loader?name=[name].[ext]!./index.html");
require("!file-loader?name=[name].[ext]!./appconfig.json");

export function start() {
	var _hidden = window.localStorage.getItem('merchant_settings');
}

if (window.alt1) {
	alt1.identifyAppUrl("./appconfig.json");
}

export function openTab(event: any, tabName: string) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}
