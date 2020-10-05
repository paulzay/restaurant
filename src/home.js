const navBar = () =>{
	//create constants
	const header = document.createElement('header');	
	const ul = document.createElement('ul');
	const li = document.createElement('li');
	const logo = document.createElement('h1');
	const homeBtn = document.createElement('button');
	const menuBtn = document.createElement('button');
	const locationBtn = document.createElement('button');
	const aboutBtn = document.createElement('button');
	const contactBtn = document.createElement('button');

	logo.innerHTML = 'Zays Kitchen';
	li.appendChild(logo);
	ul.appendChild(li);
}