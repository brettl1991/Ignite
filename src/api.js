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
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${process.env.REACT_APP_API_KEY}
`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${process.env.REACT_APP_API_KEY}`;

const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=${process.env.REACT_APP_API_KEY}`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

// console.log(popularGamesURL());

//  GAME DETAILS

export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;

//GAMES SCREENSHOTS
export const gameScreenShotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;

//SEARCHED GAME
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9&key=${process.env.REACT_APP_API_KEY}`;
