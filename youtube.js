var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playerInfoList = [{
    id: 'player1',
    height: '175',
    width: '300',
    videoId: 'dOy7vPwEtCw'
}, {
    id: 'player2',
   height: '175',
    width: '300',
    videoId: 'QWtsV50_-p4'
}, {
    id: 'player3',
    height: '175',
    width: '300',
    videoId: 'y-JqH1M4Ya8'
}, {
    id: 'player4',
    height: '175',
    width: '300',
    videoId: 'gH7dMBcg-gE'
}, {
    id: 'player5',
    height: '175',
    width: '300',
    videoId: '7wL9NUZRZ4I'
}, {
    id: 'player6',
    height: '175',
    width: '300',
    videoId: 'S4R8HTIgHUU'
}];

function onYouTubeIframeAPIReady() {
    if (typeof playerInfoList === 'undefined') return;

    for (var i = 0; i < playerInfoList.length; i++) {
        var curplayer = createPlayer(playerInfoList[i]);
        players[i] = curplayer;
    }
}

var players = new Array();

function createPlayer(playerInfo) {
    return new YT.Player(playerInfo.id, {
        height: playerInfo.height,
        width: playerInfo.width,
        videoId: playerInfo.videoId,
    });
}

$(document).ready(function () {
    $('#stop').click(function () {
        $(players).each(function (i) {
            this.stopVideo();
        });
    });
})
