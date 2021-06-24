 function showOrHideChannelTabs() {
    var v = document.getElementByClass("channelTabs-tabContainer");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
 }
