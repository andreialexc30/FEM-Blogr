// Elements from desktop
const dropdownP = document.getElementById('dropdownProduct')
const dropdownCm = document.getElementById('dropdownCompany')
const dropdownCn = document.getElementById('dropdownContact')
const dropdownProduct = document.getElementById('dropdownAnchorProduct')
const dropdownCompany = document.getElementById('dropdownAnchorCompany')
const dropdownContact = document.getElementById('dropdownAnchorConnect')
const desktopAnchors = document.getElementsByClassName('list--item_anchor')

// Elements from mobile
const burgerIcon = document.getElementById('burger_icon')
const closeIcon = document.getElementById('close_icon')
const mobileBtn = document.getElementById('mobileBtn')
const mobileMenu = document.getElementById('mobileMenu')
const mobileAnchorP = document.getElementById('mobileProductAnchor')
const mobileAnchorCm = document.getElementById('mobileCompanyAnchor')
const mobileAnchorCn= document.getElementById('mobileContactAnchor')
const mobileDropdownP = document.getElementById('mobileDropdownProduct')
const mobileDropdownCm = document.getElementById('mobileDropdownCompany')
const mobileDropdownCn = document.getElementById('mobileDropdownContact')
const mobileAnchors = document.getElementsByClassName('list-item_anchor')

// !Mobile related!
// Mobile burger menu switch
mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobileShow')
    burgerIcon.classList.toggle('iconShow')
    closeIcon.classList.toggle('closeShow')
})

// dropdown function
function toggleDropdown(dropdownA, dropdownB, dropdownState) {
    if (dropdownA.classList.contains(dropdownState) || dropdownB.classList.contains(dropdownState)) {
        dropdownA.classList.remove(dropdownState)
        dropdownB.classList.remove(dropdownState)
    }

}

// Mobile toggle dropdowns
const mobileState = 'mobile_dropdownActive'

for (let i = 0; i < mobileAnchors.length; i++) {
    let selectedAnchor = mobileAnchors[i]

    selectedAnchor.addEventListener('click', () => {
        if (selectedAnchor === mobileAnchorP) {
            toggleDropdown(mobileDropdownCm, mobileDropdownCn, mobileState)
            mobileDropdownP.classList.toggle(mobileState)
        } else if (selectedAnchor === mobileAnchorCm) {
            toggleDropdown(mobileDropdownP, mobileDropdownCn, mobileState)
            mobileDropdownCm.classList.toggle(mobileState)
        } else {
            toggleDropdown(mobileDropdownCm, mobileDropdownP, mobileState)
            mobileDropdownCn.classList.toggle(mobileState)
        }
    })
}

// !Desktop related!
// Toggle dropdowns
const desktopState = 'dropdownActive'

for (let i = 0; i < desktopAnchors.length; i++) {
    let selectedAnchor = desktopAnchors[i]

    selectedAnchor.addEventListener('click', () => {
        if (selectedAnchor === dropdownProduct) {
            toggleDropdown(dropdownCm, dropdownCn, desktopState)
            dropdownP.classList.toggle(desktopState)
        } else if (selectedAnchor === dropdownCompany) {
            toggleDropdown(dropdownP, dropdownCn, desktopState)
            dropdownCm.classList.toggle(desktopState)
        } else {
            toggleDropdown(dropdownCm, dropdownP, desktopState)
            dropdownCn.classList.toggle(desktopState)
        }
    })
    
}

// Close dropdown when clicking outside than on the anchor
const mobileAnchor = '.list-item_anchor'
const desktopAnchor = '.list--item_anchor'
window.onclick = function(event) {
    if (!event.target.matches(desktopAnchor)) {
        let dropdowns = document.getElementsByClassName('desktop_dropdown')

        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i]
            if (openDropdown.classList.contains(desktopState)) {
                openDropdown.classList.remove(desktopState)
            }
        }
    }
}