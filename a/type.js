// console.log('A'+1);
// console.log(1+'1');
// console.log('A'+'-1'+1);
// console.log(2+'2'+-2);


const days = (date) => {
    return date === '26/1/2024' ? 'Happy Republic Day' : 'Normal Day';
}
    
console.log( days(new Date().toLocaleDateString()));