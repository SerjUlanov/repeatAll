//Chapter 4
/*
Код ниже, представляет из себя игру в кости ( Корона и Якорь ) со случайными
ставками на конкретные события. События "выпадают" на костях
и в зависимости от выпавших событий игрок получает выигрыш
*/

//возвращает случайное целое число в диапозоне [m,n](включительно)
//где m - нижняя граница (вкл), а n - верхняя (вкл)
function rand(m, n) {
   return m + Math.floor((n - m + 1) * Math.random());
}
console.log(rand(0, 10));// случайное число от 0 до 10
//случайно возвращает строку, представляющую одну из шести граней Короны и Якоря
function randFace() {
   return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}
console.log(randFace(rand(0, 5)));//случайное значение первого( 0-го ) элемента массива
let funds = 50; //начальные условия ( деньги )
let round = 0; //количество циклов ( игр )
while (funds > 0 && funds < 100) {
   round++;
   console.log(`round ${round}`)
   console.log(`\tStarting cash: ${funds} pence.`)
   //размещение ставок
   let bets = {
      crown: 0,
      anchor: 0,
      heart: 0,
      spade: 0,
      club: 0,
      diamond: 0,
   };
   let totalBet = rand(1, funds);
   //Если случайно "достал" 7 монет
   if (totalBet === 7) {
      totalBet = funds;
      bets.heart = totalBet;
   } else {
      //Распределение всех ставок
      let remaining = totalBet;
      do {
         let bet = rand(1, remaining);
         let face = randFace();
         console.log(`${face} = ${bet}`)//выбор случайной грани на случайные деньги
         bets[face] = bets[face] + bet;
         remaining = remaining - bet;
      } while (remaining > 0)
   }
   funds = funds - totalBet;
   console.log((`\tBets: ` + Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(", ")));
   console.log(`\tTotal: ${totalBet} pence; `)
   //бросок костей
   const hand = [];
   for (let i = 0; i < 3; i++) {
      hand.push(randFace());
   };
   console.log(`\tHand: ${hand.join(`, `)}`);

   let winnings = 0;
   for (let i = 0; i < hand.length; i++) {
      let face = hand[i];
      if (bets[face] > 0) winnings = winnings + bets[face];
   }
   funds = funds + winnings;
   console.log(`\tWinnings: ${winnings}`)
}
console.log(`\tEnding funds: ${funds}`);
