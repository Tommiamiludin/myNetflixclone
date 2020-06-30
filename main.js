const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e){
	//add border to current tab
	this.classList.add('tab-border');
}


tabItems.forEach(item => item.addEventListener('click', selectItem));