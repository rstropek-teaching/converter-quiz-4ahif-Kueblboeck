var convert = require('convert-units');
error = true;
number = -1
metric = 'flup';
result = 'flip';
if (process.argv[2] > 0) {
    number = process.argv[2];
    if (process.argv[3] === 'm' || process.argv[3] === 'cm' || process.argv[3] === 'mm') {
        metric = process.argv[3];
        if (process.argv[4] === 'to') {
            if (process.argv[5] === 'm' || process.argv[5] === 'cm' || process.argv[5] === 'mm') {
                result = process.argv[5];
                error=false;
            }
        }
    }else if(process.argv[3] === 'kg' || process.argv[3] === 'g'){
        metric = process.argv[3];
        if(process.argv[4] === 'to'){
            if (process.argv[5] === 'kg' || process.argv[5] === 'g'){
                result = process.argv[5];
                error=false;
            }
        }
    }
}


if(error === true){
    console.log("Invalid parameters");
}else{
console.log(number+" "+metric+" are "+convert(number).from(metric).to(result)+" "+result);
}

