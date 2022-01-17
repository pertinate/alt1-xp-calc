import * as $ from "jquery"; 
import * as a1lib from "@alt1/base";

require("!file-loader?name=[name].[ext]!./index.html");
require("!file-loader?name=[name].[ext]!./appconfig.json");

const Skills = [
    "Attack",
    "Defence",
    "Strength",
    "Constitution",
    "Ranged",
    "Prayer",
    "Magic",
    "Cooking",
    "Woodcutting",
    "Fletching",
    "Fishing",
    "Firemaking",
    "Crafting",
    "Smithing",
    "Mining",
    "Herblore",
    "Agility",
    "Thieving",
    "Slayer",
    "Farming",
    "Runecrafting",
    "Hunter",
    "Construction",
    "Summoning",
    "Dungeoneering",
    "Divination",
    "Invention",
    "Archaeology"
]

interface Action {
    name: string;
    xp: number;
    img: string;
    materials: Material[];
}

interface Material {
    name: string;
    img: string;
    amount: number;
}

const actions: Action[] = [
    {
        name: 'Sapphire',
        xp: 20,
        img: require('./imgs/gems/Sapphire.png'),
        materials: [
            {
                name: 'Uncut Sapphire',
                img: require('./imgs/gems/Uncut_sapphire.png'),
                amount: 1
            }
        ]
    }
]

export function start() {
    // var _hidden = window.localStorage.getItem('xp_calc_settings');
    
    let skillSelect = document.getElementById('skills');

    Skills.forEach(skill => {
        const opt = document.createElement('option');
        opt.value = skill;
        opt.innerHTML = skill;
        skillSelect.appendChild(opt);
    });

    const sapphires = 5673;

    const action = actions[0];

    const actionAmt = sapphires / action.materials[0].amount;
    console.log('XP:', actionAmt * action.xp);
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
