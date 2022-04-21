// function show siderbar
function ShowSidebar() {
  sidebar.classList.toggle('active')
}

// Show Modals Lists
function ShowModal(m) {
  const modalContainer = document.getElementById(m)
  modalContainer.classList.add('showModal')
}

function CloseModal(m) {
  const modal = document.getElementById(m)
  modal.classList.remove('showModal')
}


// Function hide/view nav

function HideSidebar(){
  sidebar.classList.toggle('hide')
  hideSidebar.classList.toggle('icon')
}