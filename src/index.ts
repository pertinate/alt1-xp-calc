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

interface Item {
    name: string;
    img: string;
}

const items = {
    'Uncut Sapphire': {
        name: 'Uncut Sapphire',
        img: require('./imgs/gems/Uncut_sapphire.png')
    },
    'Sapphire': {
        name: 'Sapphire',
        img: require('./imgs/gems/Sapphire.png'),
    }
}

interface Action extends Item {
    xp: number;
    materials: Material[];
}

interface Material extends Item {
    amount: number;
}

const actions: Action[] = [
    {
        ...items['Sapphire'],
        xp: 20,
        materials: [
            {
                ...items['Uncut Sapphire'],
                amount: 1
            }
        ]
    }
]

const playerItems: Material[] = Object.keys(items).map(entry => ({ ...items[entry as keyof typeof items], amount: 0 }));

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
    console.log(playerItems);
    const index = playerItems.findIndex(entry => entry.name === 'Uncut Sapphire');
    playerItems[index].amount = 5673

    const action = actions[0];

    console.log('XP:', processCalcuation(action));
}

if (window.alt1) {
	alt1.identifyAppUrl("./appconfig.json");
}

function processCalcuation(action: Action) {
    const itemsForAction = action.materials.map(material => playerItems.find(playerItem => playerItem === material));

    const actionsAvailablePerItem = itemsForAction.map((item) => {
        const material = action.materials.find(material => material === item);

        return item.amount / material.amount;
    }).sort();

    return {
        availableToCraft: actionsAvailablePerItem[0],
        craftCounts: actionsAvailablePerItem
    }
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
