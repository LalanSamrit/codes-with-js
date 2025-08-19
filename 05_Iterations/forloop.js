// for

for(let i=0; i<=10; i++) {
    const ele = i;
    console.log(ele);
}

for (let i = 1; i <= 5; i++) {
    console.log(`outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value : ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );
          
    }
}



for (let i = 0; i < 10; i++) {
    const element = i;
    if(i == 5) {
        break;
    }
    console.log(element);
}


let arr = ["ram", "sham", "tejas", "suchit", "lalan"];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
}

for (let i = 0; i < 10; i++) {
    const element = i;
    if(i == 5) {
        continue;
    }
    console.log(element);
}
