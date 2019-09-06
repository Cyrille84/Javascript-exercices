function frenchDate(dateDuJour) {
	let jr = dateDuJour.getDay();
    let day = dateDuJour.getDate();
    let month = dateDuJour.getMonth();
    let year = dateDuJour.getFullYear();

    let jours = new Map();
    jours.set(1, 'Lundi');
    jours.set(2, 'mardi');
    jours.set(3, 'mercredi');
    jours.set(4, 'Jeudi');
    jours.set(5, 'vendredi');
    jours.set(6, 'samedi');
    jours.set(7, 'dimanche');

    let mois = new Map();
    mois.set(0, 'Janvier');
    mois.set(1, 'Février');
    mois.set(2, 'Mars');
    mois.set(3, 'Avril');
    mois.set(4, 'Mai');
    mois.set(5, 'Juin');
    mois.set(6, 'Juillet');
    mois.set(7, 'Aout');
    mois.set(8, 'Septembre');
    mois.set(9, 'Octobre');
    mois.set(10, 'Novembre');
    mois.set(11, 'Décembre');
    return `${jours.get(jr)}, le ${day} ${mois.get(month)} ${year}.`;
}

console.log(frenchDate(new Date()));