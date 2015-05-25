/*
Language v1.0.5
Date: 2014-10-25
(c) 2013 Gustavo Isensee
License: MIT
*/
function calculateAge() {
    var ageDif = Date.now() - new Date('1988-08-22').getTime();
    var ageDate = new Date(ageDif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function LangPage () {
	var _ptBR = {
		lang: 'ptBR',
		menuHome: 'Início',
		menuProject: 'Projetos',
		menuContact: 'Contato',
		menuLangPtBR: 'Português',
		menuLangEnUS: 'English',
		developer: 'Desenvolvedor Web',
		myDescription: "Eu sou Gustavo, tenho " + calculateAge() + " anos de idade, formado como técnico de programação pelo colégio SENAI. Atualmente estou cursando a 9ª fase de Sistemas de Informação na UNISUL. Trabalhei em duas empresas privadas, particípo de projetos open source no GitHub, sou um grande entusiasta Javascript, certificado MCSD pela Microsoft e atualmente estou trabalhando no LabTrans, Laboratório de Transportes e Logística da Universidade Federal de Santa Catarina, Brasil.",

		legendTitleCurrentProjet: 'Projeto corrente',
		legendTitleFinishedProjet: 'Projeto finalizado',
		goToProject: 'Ir para Projetos',
		project: 'Projetos',
		noLink: 'Sem link'
	},

		_enUS = {
			lang: 'enUS',
			menuHome: 'Home',
			menuProject: 'Projects',
			menuContact: 'Contact',
			menuLangPtBR: 'Portuguese',
			menuLangEnUS: 'English',
			developer: 'Web Developer',
			myDescription: "I am Gustavo, I'm " + calculateAge() + " years old, Graduated in technical programming at the college SENAI. I'm currently studying the 9th stage of Information Systems at UNISUL. I worked in two private companies, participate in open source projects on GitHub, I'm a great enthusiast Javascript, MCSD certified by Microsoft and I'm currently working on LabTrans, Transportation and Logistics Laboratory of the Federal University of Santa Catarina, Brazil.",

			legendTitleCurrentProjet: 'Current project',
			legendTitleFinishedProjet: 'Finished project',
			goToProject: 'Go to Projects',
			project: 'Projects',
			noLink: 'No link'
		};

	return {
		ptBR: _ptBR,
		enUS: _enUS
	};
}
var langPage = new LangPage();