import * as $ from "jquery"; 
import * as a1lib from "@alt1/base";

//Credits to https://runescape.wiki/w/Module:Rotations/Merchant
//and to Elessar2 (https://runescape.wiki/w/User_talk:Elessar2)

require("!file-loader?name=[name].[ext]!./index.html");
require("!file-loader?name=[name].[ext]!./appconfig.json");

enum Skills {
    Attack = 0,
    Defence,
    Strength,
    Constitution,
    Ranged,
    Prayer,
    Magic,
    Cooking,
    Woodcutting,
    Fletching,
    Fishing,
    Firemaking,
    Crafting,
    Smithing,
    Mining,
    Herblore,
    Agility,
    Thieving,
    Slayer,
    Farming,
    Runecrafting,
    Hunter,
    Construction,
    Summoning,
    Dungeoneering,
    Divination,
    Invention,
    Archaeology
}

export function start() {
    var _hidden = window.localStorage.getItem('xp_calc_settings');
    
    let skillSelect = document.getElementById('skills');
    var enumNames = [];
    for (var skill in Skills) {
        if (isNaN(Number(skill))) {
            enumNames.push(skill);
        }
    }

    enumNames.forEach(skill => {
        const opt = document.createElement('option');
        opt.value = skill;
        opt.innerHTML = skill;
        skillSelect.appendChild(opt);
    });

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
