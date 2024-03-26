Game.Win('Third-party');
if(TestMod === undefined) var TestMod = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
TestMod.name="test mod";
TestMod.version="0.0.1";
TestMod.GameVersion="2.052";

TestMod.launch = function(){
  TestMod.init= function(){
    Game.Tiers[16]={name:'Ultimatium',unlock:650,achievUnlock:750,iconRow:21,color:'#0f0aa8',price:		50000000000000000000000000000000000000000000}
    Game.TieredUpgrade('More forwards from grandma','<q>RE:RE:RE:RE:thought you\'d get another kick out of this ;))</q>','Grandma',16);
    TestMod.isLoaded = 1;
		if (Game.prefs.popups) Game.Popup(TestMod.name + ' loaded!');
		else Game.Notify(TestMod.name + ' loaded!', '', '', 1, 1);
  }
  if(CCSE.ConfirmGameVersion(TestMod.name, TestMod.version, TestMod.GameVersion)) TestMod.init();
}

if(!TestMod.isLoaded){
	if(CCSE && CCSE.isLoaded){
		TestMod.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(TestMod.launch);
	}
}
