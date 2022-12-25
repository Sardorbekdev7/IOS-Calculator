let btn = document.querySelectorAll('button')
let p = document.querySelector('p')
let numbers = document.querySelectorAll('.numbers')
let clear = document.querySelector('.clear')
let plus_minus = document.querySelector('.plus_minus')
let parsent = document.querySelector('.parsent')
let split = document.querySelector('.split')

clear.addEventListener('click', ()=>{
    p.innerHTML = 0
})

numbers.forEach((item, key)=>{
    item.addEventListener('click', son=()=>{
        if (p.innerHTML === '0') {
            p.innerHTML = Number(item.innerHTML)
        }else if (item.innerHTML == '.') {
            p.innerHTML += item.innerHTML
        }else{
            p.innerHTML += Number(item.innerHTML)
        }
        a = p.innerHTML
    })
})

plus_minus.addEventListener('click', ()=>{
    p.innerHTML = p.innerHTML * (-1)
})

parsent.addEventListener('click', ()=>{
    p.innerHTML = p.innerHTML / 100
})

split.addEventListener('click', ()=>{
    p.innerHTML = '0'
    son
})

