let machineamount=
{
    "water":400,
    "milk":540,
    "coffee":120,
    "cups":9,
    "money":550
}
const espresso = {
  water: "250",
  coffee: "16",
  money: "4",
  cup: "1"
}

const latte = {
  water: "350",
  milk: "75",
  coffee: "20",
  money: "7",
  cup: "1"
}

const cappuccino = {
  water: "200",
  milk: "100",
  coffee: "12",
  money: "6",
  cup: "1"
}


function buy(_coffee,_amount)
{
  console.log("I give you "+_coffee+" "+_amount);
}
function fill(_supply,_amount)
{
    console.log("Filling "+_supply+" for "+_amount);
}
function take()
{
  console.log("I gave you $"+machineamount.money)
  machineamount.money=0;
}
function remaining()
{
  console.log("The coffee machine has:")
  console.log(machineamount.water+" ml water");
  console.log(machineamount.milk+" ml milk");
  console.log(machineamount.coffee+" g coffee");
  console.log(machineamount.cups+" cups");
  console.log("$"+machineamount.water+" money");
}
function start(text1,text2,text3){
  
    res1=text1.split(" ");
    var func = res1 [0];
    var _amount = res1[2];

  //var _supply = null;
  
  {
    if(func=="remaining")
    {
        remaining();
    }
    if(func=="take")
    {
        take();
    }
    if(func=="buy")
    {
      var _coffee = res1[1];
        if(_coffee=="espresso")
        {
          if(machineamount.water<(espresso.water*_amount) || machineamount.coffee<(espresso.coffee*_amount) || machineamount.cups<(espresso.cup*_amount))
          {
           console.log("There is not enough material in the coffee machine");
          }
          else
          {
            buy(_coffee,_amount);
            machineamount.water=machineamount.water-(espresso.water*_amount);
            machineamount.coffee=machineamount.coffee-(espresso.coffee*_amount);
            machineamount.money=machineamount.money+(espresso.money*_amount);
            machineamount.cups=machineamount.cups-(espresso.cup*_amount);
          }
        }if(_coffee=="latte")
        {
          if(machineamount.water<(latte.water*_amount) || machineamount.milk<(latte.milk*_amount) || machineamount.coffee<(latte.coffee*_amount) || machineamount.cups<(latte.cup*_amount))
          {
           console.log("There is not enough material in the coffee machine");
          }
          else
          {
            buy(_coffee,_amount);
            machineamount.water=machineamount.water-(latte.water*_amount);
            machineamount.milk=machineamount.milk-(latte.milk*_amount);
            machineamount.coffee=machineamount.coffee-(latte.coffee*_amount);
            machineamount.money=machineamount.money+(latte.money*_amount);
            machineamount.cups=machineamount.cups-(latte.cup*_amount);
          }      
        }
        if(_coffee=="cappuccino")
        {
          if(machineamount.water<(cappuccino.water*_amount) || machineamount.milk<(cappuccino.milk*_amount) || machineamount.coffee<(cappuccino.coffee*_amount) || machineamount.cups<(cappuccino.cup*_amount))
          {
           console.log("There is not enough material in the coffee machine");
          }
          else
          {
            buy(_coffee,_amount);
            machineamount.water=machineamount.water-(cappuccino.water*_amount);
            machineamount.milk=machineamount.milk-(cappuccino.milk*_amount);
            machineamount.coffee=machineamount.coffee-(cappuccino.coffee*_amount);
            machineamount.money=machineamount.money+(cappuccino.money*_amount);
            machineamount.cups=machineamount.cups-(cappuccino.cup*_amount);
          }
         
      }

      
    }
    if(func=="fill"){     
     var _supply = res1[1];
       fill(_supply,_amount);
    }
}

res2=text2.split(" ");
    var func = res2 [0];
    var _amount = res2[2];

  //var _supply = null;
  
  {
    if(func=="remaining")
    {
        remaining();
    }
    if(func=="take")
    {
        take();
    }
    if(func=="buy")
    {
      var _coffee = res2[1];
        if(_coffee=="espresso")
        {
          if(machineamount.water<(espresso.water*_amount) || machineamount.coffee<(espresso.coffee*_amount) || machineamount.cups<(espresso.cup*_amount))
          {
           console.log("There is not enough material in the coffee machine");
          }
          else
          {
            buy(_coffee,_amount);
            machineamount.water=machineamount.water-(espresso.water*_amount);
            machineamount.coffee=machineamount.coffee-(espresso.coffee*_amount);
            machineamount.money=machineamount.money+(espresso.money*_amount);
            machineamount.cups=machineamount.cups-(espresso.cup*_amount);
          }
        }if(_coffee=="latte")
        {
          if(machineamount.water<(latte.water*_amount) || machineamount.milk<(latte.milk*_amount) || machineamount.coffee<(latte.coffee*_amount) || machineamount.cups<(latte.cup*_amount))
          {
           console.log("There is not enough material in the coffee machine");
          }
          else
          {
            buy(_coffee,_amount);
            machineamount.water=machineamount.water-(latte.water*_amount);
            machineamount.milk=machineamount.milk-(latte.milk*_amount);
            machineamount.coffee=machineamount.coffee-(latte.coffee*_amount);
            machineamount.money=machineamount.money+(latte.money*_amount);
            machineamount.cups=machineamount.cups-(latte.cup*_amount);
          }      
        }
        if(_coffee=="cappuccino")
        {
          if(machineamount.water<(cappuccino.water*_amount) || machineamount.milk<(cappuccino.milk*_amount) || machineamount.coffee<(cappuccino.coffee*_amount) || machineamount.cups<(cappuccino.cup*_amount))
          {
           console.log("There is not enough material in the coffee machine");
          }
          else
          {
            buy(_coffee,_amount);
            machineamount.water=machineamount.water-(cappuccino.water*_amount);
            machineamount.milk=machineamount.milk-(cappuccino.milk*_amount);
            machineamount.coffee=machineamount.coffee-(cappuccino.coffee*_amount);
            machineamount.money=machineamount.money+(cappuccino.money*_amount);
            machineamount.cups=machineamount.cups-(cappuccino.cup*_amount);
          }
         
      }

      
    }
    if(func=="fill"){     
     var _supply = res2[1];
       fill(_supply,_amount);
    }
}

res3=text3.split(" ");
    var func = res3 [0];
    var _amount = res3[2];

  //var _supply = null;
  
  {
    if(func=="remaining")
    {
        remaining();
    }
    if(func=="take")
    {
        take();
    }
    if(func=="buy")
    {
      var _coffee = res3[1];
        if(_coffee=="espresso")
        {
          if(machineamount.water<(espresso.water*_amount) || machineamount.coffee<(espresso.coffee*_amount) || machineamount.cups<(espresso.cup*_amount))
          {
           console.log("There is not enough material in the coffee machine");
          }
          else
          {
            buy(_coffee,_amount);
            machineamount.water=machineamount.water-(espresso.water*_amount);
            machineamount.coffee=machineamount.coffee-(espresso.coffee*_amount);
            machineamount.money=machineamount.money+(espresso.money*_amount);
            machineamount.cups=machineamount.cups-(espresso.cup*_amount);
          }
        }if(_coffee=="latte")
        {
          if(machineamount.water<(latte.water*_amount) || machineamount.milk<(latte.milk*_amount) || machineamount.coffee<(latte.coffee*_amount) || machineamount.cups<(latte.cup*_amount))
          {
           console.log("There is not enough material in the coffee machine");
          }
          else
          {
            buy(_coffee,_amount);
            machineamount.water=machineamount.water-(latte.water*_amount);
            machineamount.milk=machineamount.milk-(latte.milk*_amount);
            machineamount.coffee=machineamount.coffee-(latte.coffee*_amount);
            machineamount.money=machineamount.money+(latte.money*_amount);
            machineamount.cups=machineamount.cups-(latte.cup*_amount);
          }      
        }
        if(_coffee=="cappuccino")
        {
          if(machineamount.water<(cappuccino.water*_amount) || machineamount.milk<(cappuccino.milk*_amount) || machineamount.coffee<(cappuccino.coffee*_amount) || machineamount.cups<(cappuccino.cup*_amount))
          {
           console.log("There is not enough material in the coffee machine");
          }
          else
          {
            buy(_coffee,_amount);
            machineamount.water=machineamount.water-(cappuccino.water*_amount);
            machineamount.milk=machineamount.milk-(cappuccino.milk*_amount);
            machineamount.coffee=machineamount.coffee-(cappuccino.coffee*_amount);
            machineamount.money=machineamount.money+(cappuccino.money*_amount);
            machineamount.cups=machineamount.cups-(cappuccino.cup*_amount);
          }
         
      }

      
    }
    if(func=="fill"){     
     var _supply = res3[1];
       fill(_supply,_amount);
    }
}
}




start("fill water 100","fill coffee 200", "buy latte 2");