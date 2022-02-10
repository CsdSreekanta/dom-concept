// const allButton= document.getElementsByClassName('button-test');
// // console.log(allButton);
// for(const button of allButton){
    
//    button.addEventListener('click', function(e){
  
//     // if(e.target.id== 'prime'){
//     //     document.getElementById('title').style.color="red";
//     // }
//     // else{
//     //     document.getElementById('title').style.color = "yellow"
//     // }
//    });
// }
// const prime = document.getElementById('prime').style;
// // console.log(prime).s;

let count = 0;
document.getElementById('add').addEventListener('click', function(e){
    count = count + 1;
document.getElementById('count').innerText = count;

 
});

document.getElementById('minus').addEventListener('click', function(e){
    count = count-1;
    // document.getElementById('count').innerText = count;
    if(count < 0 ){
       count=0;
        document.getElementById('count').innerText = 0;
       
     }
     else{
        document.getElementById('count').innerText = count;
     }

})

// function control(id){
//     document.getElementById(id).innerText = count;
// // }
// let count = 0;
// // document.getElementById('add').addEventListener('click', function(e){
// // count++;
// // control("count")
// // });
// function add(e){
//     count++;
//     control("count");
// }

// // document.getElementById('minus').addEventListener('click', function(e){
// //     count--;
// //     control('count');
// // })
// function minus(e){
//     count--;
//     control('count');
// }

// function control(id){
//     document.getElementById(id).innerText = count;
// }
// let count = 0;
// function add(e){
//     count++;
//     control("count");
// }
// function minus(e){
//     count--;
//     control('count');
// }

// function control(id){
//     document.getElementById(id).innerText = count;
// }
