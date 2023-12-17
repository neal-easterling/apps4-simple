class Responder{
    constructor(actor, health){
        this.actor = actor;
        this.name = this.actor.toUpperCase();
        this.health = health;
        this.action = 'begin';   
    }
    get response(){
        let output, beginList, engageList, undermineList, ignoreList;
        if(this.actor == 'troll'){
            beginList = trollBeginTxt;
            engageList = trollEngageTxt;
            undermineList = trollUndermineTxt;
            ignoreList = trollIgnoreTxt;
        } else {
            beginList = ["Goonies never say die!"];
            engageList = playerEngageTxt;
            undermineList = playerUndermineTxt;
            ignoreList = playerIgnoreTxt;
        }
        if(this.action == 'begin'){
            output = beginList[Math.floor(Math.random() * (beginList.length - 1))];
        }else if(this.action == 'engage'){
            output = engageList[Math.floor(Math.random() * (engageList.length - 1))];
        }else if(this.action == 'undermine'){
            output = undermineList[Math.floor(Math.random() * (undermineList.length - 1))];
        }else if(this.action == 'ignore'){
            output = ignoreList[Math.floor(Math.random() * (ignoreList.length - 1))];
        }else{
            output = 'Johnny 5 is still alive!!!!!';
        }
        return output;
    } 
         
    set response(action){
        this.action = action;
    }
    speak(action){
        this.response = action;
        let message = this.response;
        let actor = this.actor;
        let index = 0;
        actor == 'troll' ? document.getElementById('trollTxtBox').innerHTML = '':
        document.getElementById('playerTxtBox').innerHTML = '';
        function type(input, actor){
            if (actor == 'troll'){ 
                document.getElementById('trollTxtBox').innerHTML += input[index];
            }else{
                document.getElementById('playerTxtBox').innerHTML += input[index];
            }
            index ++;
            if (index<input.length){
                setTimeout(function(){
                    type(input, actor)
                }, 100);
            }
        }
        type(message, actor);
    }
}