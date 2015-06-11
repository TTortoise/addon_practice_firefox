
/** PRACTICE PRACTICE PRACTICE */

var tabs = require("sdk/tabs");
var buttons = require("sdk/ui/button/action");
var ui = require("sdk/ui");
var self = require("sdk/self");
var preferences = require("sdk/simple-prefs").prefs;

buttons.ActionButton({
  id: "addon-practice-01",
  label: "Addon Practice",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: runPracticeAddon
});

var sidebarWorker;
var sidebar = ui.Sidebar({
  id: "practice-sidebar",
  title: "Practice Sidebar",
  url: require
  onAttach: function(worker) {
    
  }
});

function runPracticeAddon() {
  
}