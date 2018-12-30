function getFirstSelector(selector){
    return document.querySelector(selector)
}

function classFromId(idName, className){
    return function(){
        return document.querySelector(`#${idName} .${className}`);
    }
}

const nestedTarget = classFromId('nested', 'target');

function increaseRankBy(n){
    const lis = document.querySelectorAll(`ul.ranked-list li`);
    for(let li of lis){
        li.textContent = Number.parseInt(li.textContent) + n;
    }
}

function deepestChild(){
    const body = document.querySelector('body')
    const stack = [];
    const initialNum = -1;
    let deepestNode = {[initialNum]: "inconsequential"}
    const bodyChildren = body.children;
    for(let i = 0; i < bodyChildren.length; i++){
        stack.push({0: bodyChildren[i]})
    }
    while(stack.length > 0){
        const item = stack.pop();
        const place = Number.parseInt(Object.keys(item)[0]);
        const htmlItem = Object.values(item)[0];
        if(place > Number.parseInt(Object.keys(deepestNode)[0])){
            deepestNode = item;
        }
        const itemChildren = htmlItem.children;
        if(!!itemChildren){
            for(let i = 0; i < itemChildren.length; i++){
                stack.push({[place + 1]: itemChildren[i]})
            }
        }
    }
    return Object.values(deepestNode)[0];
}