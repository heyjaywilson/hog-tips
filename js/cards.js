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
newTip('When to use HogNet','FixtureNet is used to connect media servers, ArtNet nodes, E1.31(SACN), video switchers, and Visualizers.', 'networking');
