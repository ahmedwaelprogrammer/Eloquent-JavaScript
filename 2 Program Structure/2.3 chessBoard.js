let XSize = 8;
let YSize = 8;
let CHR = '# ';
for (let count = 0; count < YSize; count++) {
    let seq = ""
    if (count % 2 == 0) seq += " ";
    else seq += "";
    for (let XCount = 0; XCount < XSize; XCount++) {
        seq += CHR;
    }
    console.log(seq)
}