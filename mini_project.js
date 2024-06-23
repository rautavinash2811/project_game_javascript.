let boxes = document.querySelectorAll(".box");

const winarray = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]

let turnx = true;   // starting from x 
boxes.forEach((box) =>
{
    box.addEventListener("click",() =>
    {
        if(turnx===true)
            {
                box.innerText = "X";
                turnx=false;
            }
        else
        {
            box.innerText = "Y";
            turnx=true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const topside = () =>
    {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }

let msg = document.querySelector(".congo");
let msgcont = document.querySelector(".msg-container");
let button1 = document.querySelector(".btn");
let button2 = document.querySelector(".new");

const newGame =() =>
    {
        resetBtn();
    }

const disablBtn =() =>
    {
        for(let one of boxes)
            {
                one.disabled=true;
            }
    }

    const enableBtn =() =>
        {
            for(let one of boxes)
                {
                    one.disabled=false;
                    one.innerText="";
                }
        }

        

    const isEmpty=()=>
    {
        let flag=0;
        for(box of boxes)
            {
                if(box.innerText==="")
                    {
                        flag++;
                    }
            }
            return flag;
    }

    const resetBtn = () =>
        {
            let count = isEmpty();
            if(count!=9)
                {

                    if(confirm("Do you want to Reset or New Game?"))
                        {
                            turnx=true;
                            enableBtn();
                            msgcont.classList.add("hide");
                        }
                        
                }
        }

const showwinner = (winner) =>
    {
        topside();
        msg.innerText = ` Congratulation Winner is ${winner}`;
        msgcont.classList.remove("hide");
        disablBtn();
    }

const checkwinner=()=>
    {
       for(let pattern of winarray)
        {
            position1 = boxes[pattern[0]].innerText;
            position2 = boxes[pattern[1]].innerText;
            position3 = boxes[pattern[2]].innerText;
        

       if((position1 !="") && (position2 !="" )&&( position3 !=""))
            {
                    if((position1===position2) && (position2===position3))
                        {
                            showwinner(position1)
                        }
            } 
        }
    };

    button1.addEventListener("click",resetBtn);
    button2.addEventListener("click",newGame);

