for (let i = 0; i < 15; i++) {
    var first = Math.floor((Math.random() * 6) + 1);
    var second = Math.floor((Math.random() * 6) + 1);
    if (i === 8 || i === 13) {
     continue;
    }
    console.log(i);
}