//credit-Sirmyself//
const secondsToRefresh = 10; //refreshes every 10 seconds, change value before running the script to refresh more or less often

function refreshList() {
	var btn = document.querySelectorAll(`.chat-view-container.chat-messages-container:not(.hide) .header-button.btn-user-list, .chat-view-container.chat-users-container:not(.hide) .header-button.btn-user-list.btn-return-to-chat`)[0]
	
	if (btn) {btn.click()};
}

window.setInterval(function() {
    var subTitle = document.getElementById("addedSh*t");
    if (!subTitle) {
        subTitle = document.createElement("div");
        subTitle = document.getElementsByClassName("video-title")[0].insertAdjacentElement("afterEnd", subTitle);
        subTitle.outerHTML = `<div class="video-title" id="addedSh*t">
    <span class="title-text" style="font-size:12px" id="viewCount">View count: test</span>
    </div>`;
    }

	refreshList();
    document.getElementById("viewCount").innerText = "View count: " + document.querySelectorAll(".chat-viewer-name.ng-star-inserted").length;
	refreshList();
    //console.log(document.querySelectorAll(".chat-viewer-name.ng-star-inserted").length);
}, secondsToRefresh * 1000);
