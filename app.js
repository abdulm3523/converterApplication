/**
 * DATE: 24-08-2024
 * Converter Application
 * AUTHOR: ABDUL MALIK
 */

window.onload = ()=>{
    main()
}

const converter = {
    area : {
        name: 'Area',
        unit:{
            kilometre: 'Square kilometre',
            metre: 'Square metre',
            mile: 'Square mile',
        }
    },
    dataTransferRate : {
        name: 'Data Transfer Rate',
        unit:{
            bit: 'Bit per second',
            kilobit: 'Kilobit per second',
           kKilobyte: 'Kilobyte per second',
        }
    },
    
}
const categorySelector = document.getElementById('category__selector')
const leftSideSelector = document.getElementById('child__category_left')
const rightSideSelector = document.getElementById('child__category_right')
const inputFiled = document.getElementById('user__inputFiled')
const outputResult = document.getElementById('user__outputFiled')



function main(){

    const converterKey = Object.keys(converter).sort()
    

    // CATEGORY DISPLAY
    removeExistingDate(categorySelector)
    converterKey.forEach(items =>{
        createDomeOptions(categorySelector,{value:items, text:converter[items].name})
        // console.log(converter[items].name)
    });

    const categoryName = categorySelector.value
    const units = converter[categoryName].unit

    // DISPLAY LEFT SIDE OPTIONS
    removeExistingDate(leftSideSelector)
    const leftOptions = Object.keys(units)
    leftOptions.forEach(items =>{
        createDomeOptions(leftSideSelector,{value:items,text:units[items]})
    })

    // DISPLAY RIGHT SIDE OPTIONS
    removeExistingDate(rightSideSelector)
    const rightOptions = Object.keys(units)
    rightOptions.forEach(items =>{
        createDomeOptions(rightSideSelector,{value:items,text:units[items]})
    })



    rightSideSelector.getElementsByTagName('option')[1].selected = 'selected'
    

}


// console.log(converterKey.name)

// === DOM ELEMENTS

// CREATING DOM ELEMENTS
function createDomeOptions(parent, option){
    const optElement = document.createElement('option')
    optElement.setAttribute('value',option.value)
    optElement.innerHTML = option.text
    parent.appendChild(optElement)

}

//=========UILITIES

// function commonFunction(){
    
// }

// REMOVE EXISTING OPTION ELEMENTS
function removeExistingDate(parent){
    while(parent.firstChild){
        parent.firstChild.remove()
    }
}