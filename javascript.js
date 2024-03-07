const questions=[
    {
        'que':'Which of the following is the Markup Language',
        'a':'HTML',
        'b':'PHP',
        'c':'Javascript',
        'd':'C++',
        'correct':'a'
    },
    {
        'que':'What stand for CSS',
        'a':'Hyper Text markup ',
        'b':'Cascading Style sheet',
        'c':'Both a and b',
        'd':'Cascading sheet style',
        'correct':'b'
    },
    {
        'que':'The Php is ',
        'a':'Server side scripting ',
        'b':'Client side ',
        'c':'both',
        'd':'None',
        'correct':'a'
    }
];
let index=0;
let total=questions.length;
let right=0, wrong=0;
const quebox=document.getElementById('QueBox');
const inputopt=document.querySelectorAll(".options");
const loadquestion=() =>{
    if(index==total){
        return quizend();
    }
    reset();
    const data=questions[index];
    quebox.innerText=`${index+1})${data.que}`;
    inputopt[0].previousElementSibling.innerText=data.a;
    inputopt[1].previousElementSibling.innerText=data.b;
    inputopt[2].previousElementSibling.innerText=data.c;
    inputopt[3].previousElementSibling.innerText=data.d;
    console.log(data)


}
const submitquiz=()=>{
    const data=questions[index];
    const ans=answerchecked();
    if(ans===data.correct){
        right++;

    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;

}
const answerchecked=()=>{
    let answer;
    inputopt.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
            
        }
    )
    return answer;
}
const reset=()=>{
    inputopt.forEach(
        (input)=>{
           input.checked=false
            
        }
    )
}
const quizend=()=>{
    document.getElementById('box').innerHTML=`
    <h1>Your Answer </h1>
    <h1> ${right}/${total} are correct</h1>`
}

loadquestion();

