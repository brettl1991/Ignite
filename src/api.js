//Base url
const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  // console.log(month);
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// getCurrentMonth();

//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  // console.log(month);
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

console.log(currentDate);

//Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=0c06a84db972452cab2b761e3c81f18b
`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
console.log(popularGamesURL());
