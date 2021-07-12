// Elements
const dropdownP = document.getElementById('dropdownProduct')
const dropdownCm = document.getElementById('dropdownCompany')
const dropdownCn = document.getElementById('dropdownContact')
const dropdownProduct = document.getElementById('dropdownAnchorProduct')
const dropdownCompany = document.getElementById('dropdownAnchorCompany')
const dropdownContact = document.getElementById('dropdownAnchorConnect')
const burgerIcon = document.getElementById('burger_icon')
const closeIcon = document.getElementById('close_icon')
const mobileBtn = document.getElementById('mobileBtn')
const mobileMenu = document.getElementById('mobileMenu')

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobileShow')
    burgerIcon.classList.toggle('iconShow')
    closeIcon.classList.toggle('closeShow')
})

// TODO fix the dropdowns toggling when one is already toggled

// Toggle dropdowns

dropdownProduct.addEventListener('click', () => {
    if (dropdownCm.classList.contains('dropdownActive') || dropdownCn.classList.contains('dropdownActive')) {
        dropdownCm.classList.remove('dropdownActive')
        dropdownCn.classList.remove('dropdownActive')
    }

    dropdownP.classList.toggle('dropdownActive')
})

dropdownCompany.addEventListener('click', () => {
    if (dropdownP.classList.contains('dropdownActie') || dropdownCn.classList.contains('dropdownActive')) {
        dropdownP.classList.remove('dropdownActive')
        dropdownCn.classList.remove('dropdownActive')
    }

    dropdownCm.classList.toggle('dropdownActive')
})

dropdownContact.addEventListener('click', () => {
    if (dropdownCm.classList.contains('dropdownActie') || dropdownP.classList.contains('dropdownActive')) {
        dropdownP.classList.remove('dropdownActive')
        dropdownCm.classList.remove('dropdownActive')
    }

    dropdownCn.classList.toggle('dropdownActive')
})

// Close dropdown when clicking outside than on the anchor

window.onclick = function(event) {
    if (!event.target.matches('.list--item_anchor')) {
        let dropdowns = document.getElementsByClassName('desktop_dropdown')

        for(let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i]
            if (openDropdown.classList.contains('dropdownActive')) {
                openDropdown.classList.remove('dropdownActive')
            }
        }
    }
}