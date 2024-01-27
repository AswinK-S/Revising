const days = (date) => {
    return date === '26/1/2024' ? 'Happy Republic Day' : 'Normal Day';
   }
   
   const date = new Date();
   const todaysDate = date.toLocaleDateString();
   console.log(todaysDate);
  console.log( days(todaysDate));