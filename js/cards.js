//variables
var cardList = [];

function newTip(ttl, dscrp, tg) {
    var cardObj = {
        title: ttl,
        descrip: dscrp,
        tag: tg
    };
    cardList.push(cardObj);
}

newTip('When to use FixtureNet?', 'FixtureNet is used to connect media servers, ArtNet nodes, E1.31(SACN), video switchers, and Visualizers.', 'networking'
);
newTip('When to use HogNet','HogNet is used to connect DP 8000\'s, OSC (Open Sound Control), and backup/tracking consoles.', 'networking');
