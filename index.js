/*function isWin(element) {
    return (element.result === 'W');
}*/

function superbowlWin(record) {
    const win = record.find(element => element.result === 'W');
    if (win) {
        return win.year;
    } else {
        return undefined;
    }
}
