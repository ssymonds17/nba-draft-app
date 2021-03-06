const players = [
  {
    id: 1,
    name: 'Chauncey Billups',
    first_name: 'Chauncey',
    last_name: 'Billups',
    position: 'PG',
    rating: 12,
    year_from: 1998,
    year_to: 2014
  },
  {
    id: 2,
    name: 'Maurice Cheeks',
    first_name: 'Maurice',
    last_name: 'Cheeks',
    position: 'PG',
    rating: 10,
    year_from: 1979,
    year_to: 1993
  },
  {
    id: 3,
    name: 'Bob Cousy',
    first_name: 'Bob',
    last_name: 'Cousy',
    position: 'PG',
    rating: 8,
    year_from: 1951,
    year_to: 1970
  },
  {
    id: 4,
    name: 'Stephen Curry',
    first_name: 'Stephen',
    last_name: 'Curry',
    position: 'PG',
    rating: 17,
    year_from: 2010,
    year_to: 2020
  },
  {
    id: 5,
    name: 'Walt Frazier',
    first_name: 'Walt',
    last_name: 'Frazier',
    position: 'PG',
    rating: 15,
    year_from: 1968,
    year_to: 1980
  },
  {
    id: 6,
    name: 'Allen Iverson',
    first_name: 'Allen',
    last_name: 'Iverson',
    position: 'PG',
    rating: 10,
    year_from: 1997,
    year_to: 2010
  },
  {
    id: 7,
    name: 'Magic Johnson',
    first_name: 'Magic',
    last_name: 'Johnson',
    position: 'PG',
    rating: 19,
    year_from: 1980,
    year_to: 1996
  },
  {
    id: 8,
    name: 'Kevin Johnson',
    first_name: 'Kevin',
    last_name: 'Johnson',
    position: 'PG',
    rating: 8,
    year_from: 1988,
    year_to: 2000
  },
  {
    id: 9,
    name: 'Jason Kidd',
    first_name: 'Jason',
    last_name: 'Kidd',
    position: 'PG',
    rating: 12,
    year_from: 1995,
    year_to: 2013
  },
  {
    id: 10,
    name: 'Damian Lillard',
    first_name: 'Damian',
    last_name: 'Lillard',
    position: 'PG',
    rating: 8,
    year_from: 2013,
    year_to: 2020
  },
  {
    id: 11,
    name: 'Kyle Lowry',
    first_name: 'Kyle',
    last_name: 'Lowry',
    position: 'PG',
    rating: 8,
    year_from: 2007,
    year_to: 2020
  },
  {
    id: 12,
    name: 'Steve Nash',
    first_name: 'Steve',
    last_name: 'Nash',
    position: 'PG',
    rating: 8,
    year_from: 1997,
    year_to: 2014
  },
  {
    id: 13,
    name: 'Chris Paul',
    first_name: 'Chris',
    last_name: 'Paul',
    position: 'PG',
    rating: 13,
    year_from: 2006,
    year_to: 2020
  },
  {
    id: 14,
    name: 'Gary Payton',
    first_name: 'Gary',
    last_name: 'Payton',
    position: 'PG',
    rating: 10,
    year_from: 1991,
    year_to: 2007
  },
  {
    id: 15,
    name: 'Terry Porter',
    first_name: 'Terry',
    last_name: 'Porter',
    position: 'PG',
    rating: 8,
    year_from: 1986,
    year_to: 2002
  },
  {
    id: 16,
    name: 'Oscar Robertson',
    first_name: 'Oscar',
    last_name: 'Robertson',
    position: 'PG',
    rating: 16,
    year_from: 1961,
    year_to: 1974
  },
  {
    id: 17,
    name: 'John Stockton',
    first_name: 'John',
    last_name: 'Stockton',
    position: 'PG',
    rating: 15,
    year_from: 1985,
    year_to: 2003
  },
  {
    id: 18,
    name: 'Isiah Thomas',
    first_name: 'Isiah',
    last_name: 'Thomas',
    position: 'PG',
    rating: 14,
    year_from: 1982,
    year_to: 1994
  },
  {
    id: 19,
    name: 'Russell Westbrook',
    first_name: 'Russell',
    last_name: 'Westbrook',
    position: 'PG',
    rating: 12,
    year_from: 2009,
    year_to: 2020
  },
  {
    id: 20,
    name: 'Gus Williams',
    first_name: 'Gus',
    last_name: 'Williams',
    position: 'PG',
    rating: 11,
    year_from: 1976,
    year_to: 1987
  },
  {
    id: 21,
    name: 'Ray Allen',
    first_name: 'Ray',
    last_name: 'Allen',
    position: 'SG',
    rating: 11,
    year_from: 1997,
    year_to: 2014
  },
  {
    id: 22,
    name: 'Kobe Bryant',
    first_name: 'Kobe',
    last_name: 'Bryant',
    position: 'SG',
    rating: 18,
    year_from: 1997,
    year_to: 2016
  },
  {
    id: 23,
    name: 'Vince Carter',
    first_name: 'Vince',
    last_name: 'Carter',
    position: 'SG',
    rating: 8,
    year_from: 1999,
    year_to: 2020
  },
  {
    id: 24,
    name: 'Clyde Drexler',
    first_name: 'Clyde',
    last_name: 'Drexler',
    position: 'SG',
    rating: 14,
    year_from: 1984,
    year_to: 1998
  },
  {
    id: 25,
    name: 'George Gervin',
    first_name: 'George',
    last_name: 'Gervin',
    position: 'SG',
    rating: 8,
    year_from: 1973,
    year_to: 1986
  },
  {
    id: 26,
    name: 'Manu Ginóbili',
    first_name: 'Manu',
    last_name: 'Ginóbili',
    position: 'SG',
    rating: 12,
    year_from: 2003,
    year_to: 2018
  },
  {
    id: 27,
    name: 'James Harden',
    first_name: 'James',
    last_name: 'Harden',
    position: 'SG',
    rating: 15,
    year_from: 2010,
    year_to: 2020
  },
  {
    id: 28,
    name: 'Ron Harper',
    first_name: 'Ron',
    last_name: 'Harper',
    position: 'SG',
    rating: 5,
    year_from: 1987,
    year_to: 2001
  },
  {
    id: 29,
    name: 'Hersey Hawkins',
    first_name: 'Hersey',
    last_name: 'Hawkins',
    position: 'SG',
    rating: 5,
    year_from: 1989,
    year_to: 2001
  },
  {
    id: 30,
    name: 'Jeff Hornacek',
    first_name: 'Jeff',
    last_name: 'Hornacek',
    position: 'SG',
    rating: 7,
    year_from: 1987,
    year_to: 2000
  },
  {
    id: 31,
    name: 'Dennis Johnson',
    first_name: 'Dennis',
    last_name: 'Johnson',
    position: 'SG',
    rating: 6,
    year_from: 1977,
    year_to: 1990
  },
  {
    id: 32,
    name: 'Sam Jones',
    first_name: 'Sam',
    last_name: 'Jones',
    position: 'SG',
    rating: 11,
    year_from: 1958,
    year_to: 1969
  },
  {
    id: 33,
    name: 'Eddie Jones',
    first_name: 'Eddie',
    last_name: 'Jones',
    position: 'SG',
    rating: 6,
    year_from: 1995,
    year_to: 2008
  },
  {
    id: 34,
    name: 'Michael Jordan',
    first_name: 'Michael',
    last_name: 'Jordan',
    position: 'SG',
    rating: 20,
    year_from: 1985,
    year_to: 2002
  },
  {
    id: 35,
    name: 'Dan Majerle',
    first_name: 'Dan',
    last_name: 'Majerle',
    position: 'SG',
    rating: 4,
    year_from: 1989,
    year_to: 2002
  },
  {
    id: 36,
    name: 'Reggie Miller',
    first_name: 'Reggie',
    last_name: 'Miller',
    position: 'SG',
    rating: 12,
    year_from: 1988,
    year_to: 2005
  },
  {
    id: 37,
    name: 'Sidney Moncrief',
    first_name: 'Sidney',
    last_name: 'Moncrief',
    position: 'SG',
    rating: 6,
    year_from: 1980,
    year_to: 1991
  },
  {
    id: 38,
    name: 'Jason Terry',
    first_name: 'Jason',
    last_name: 'Terry',
    position: 'SG',
    rating: 5,
    year_from: 2000,
    year_to: 2018
  },
  {
    id: 39,
    name: 'Dwyane Wade',
    first_name: 'Dwyane',
    last_name: 'Wade',
    position: 'SG',
    rating: 16,
    year_from: 2004,
    year_to: 2019
  },
  {
    id: 40,
    name: 'Jerry West',
    first_name: 'Jerry',
    last_name: 'West',
    position: 'SG',
    rating: 16,
    year_from: 1961,
    year_to: 1974
  },
  {
    id: 41,
    name: 'Rick Barry',
    first_name: 'Rick',
    last_name: 'Barry',
    position: 'SF',
    rating: 11,
    year_from: 1966,
    year_to: 1980
  },
  {
    id: 42,
    name: 'Elgin Baylor',
    first_name: 'Elgin',
    last_name: 'Baylor',
    position: 'SF',
    rating: 13,
    year_from: 1959,
    year_to: 1972
  },
  {
    id: 43,
    name: 'Larry Bird',
    first_name: 'Larry',
    last_name: 'Bird',
    position: 'SF',
    rating: 19,
    year_from: 1980,
    year_to: 1992
  },
  {
    id: 44,
    name: 'Jimmy Butler',
    first_name: 'Jimmy',
    last_name: 'Butler',
    position: 'SF',
    rating: 8,
    year_from: 2012,
    year_to: 2020
  },
  {
    id: 45,
    name: 'Bob Dandridge',
    first_name: 'Bob',
    last_name: 'Dandridge',
    position: 'SF',
    rating: 7,
    year_from: 1970,
    year_to: 1982
  },
  {
    id: 46,
    name: 'Adrian Dantley',
    first_name: 'Adrian',
    last_name: 'Dantley',
    position: 'SF',
    rating: 6,
    year_from: 1977,
    year_to: 1991
  },
  {
    id: 47,
    name: 'Kevin Durant',
    first_name: 'Kevin',
    last_name: 'Durant',
    position: 'SF',
    rating: 17,
    year_from: 2008,
    year_to: 2019
  },
  {
    id: 48,
    name: 'Alex English',
    first_name: 'Alex',
    last_name: 'English',
    position: 'SF',
    rating: 6,
    year_from: 1977,
    year_to: 1991
  },
  {
    id: 49,
    name: 'Julius Erving',
    first_name: 'Julius',
    last_name: 'Erving',
    position: 'SF',
    rating: 18,
    year_from: 1972,
    year_to: 1987
  },
  {
    id: 50,
    name: 'Paul George',
    first_name: 'Paul',
    last_name: 'George',
    position: 'SF',
    rating: 8,
    year_from: 2011,
    year_to: 2020
  },
  {
    id: 51,
    name: 'Cliff Hagan',
    first_name: 'Cliff',
    last_name: 'Hagan',
    position: 'SF',
    rating: 12,
    year_from: 1957,
    year_to: 1970
  },
  {
    id: 52,
    name: 'John Havlicek',
    first_name: 'John',
    last_name: 'Havlicek',
    position: 'SF',
    rating: 13,
    year_from: 1963,
    year_to: 1978
  },
  {
    id: 53,
    name: 'Andre Iguodala',
    first_name: 'Andre',
    last_name: 'Iguodala',
    position: 'SF',
    rating: 5,
    year_from: 2005,
    year_to: 2020
  },
  {
    id: 54,
    name: 'LeBron James',
    first_name: 'LeBron',
    last_name: 'James',
    position: 'SF',
    rating: 20,
    year_from: 2004,
    year_to: 2020
  },
  {
    id: 55,
    name: 'Kawhi Leonard',
    first_name: 'Kawhi',
    last_name: 'Leonard',
    position: 'SF',
    rating: 14,
    year_from: 2012,
    year_to: 2020
  },
  {
    id: 56,
    name: 'Shawn Marion',
    first_name: 'Shawn',
    last_name: 'Marion',
    position: 'SF',
    rating: 7,
    year_from: 2000,
    year_to: 2015
  },
  {
    id: 57,
    name: 'Tracy McGrady',
    first_name: 'Tracy',
    last_name: 'McGrady',
    position: 'SF',
    rating: 9,
    year_from: 1998,
    year_to: 2013
  },
  {
    id: 58,
    name: 'Paul Pierce',
    first_name: 'Paul',
    last_name: 'Pierce',
    position: 'SF',
    rating: 12,
    year_from: 1999,
    year_to: 2017
  },
  {
    id: 59,
    name: 'Scottie Pippen',
    first_name: 'Scottie',
    last_name: 'Pippen',
    position: 'SF',
    rating: 17,
    year_from: 1988,
    year_to: 2004
  },
  {
    id: 60,
    name: 'Dominique Wilkins',
    first_name: 'Dominique',
    last_name: 'Wilkins',
    position: 'SF',
    rating: 7,
    year_from: 1983,
    year_to: 1999
  },
  {
    id: 61,
    name: 'Giannis Antetokounmpo',
    first_name: 'Giannis',
    last_name: 'Antetokounmpo',
    position: 'PF',
    rating: 8,
    year_from: 2014,
    year_to: 2020
  },
  {
    id: 62,
    name: 'Charles Barkley',
    first_name: 'Charles',
    last_name: 'Barkley',
    position: 'PF',
    rating: 13,
    year_from: 1985,
    year_to: 2000
  },
  {
    id: 63,
    name: 'Anthony Davis',
    first_name: 'Anthony',
    last_name: 'Davis',
    position: 'PF',
    rating: 9,
    year_from: 2013,
    year_to: 2020
  },
  {
    id: 64,
    name: 'Tim Duncan',
    first_name: 'Tim',
    last_name: 'Duncan',
    position: 'PF',
    rating: 18,
    year_from: 1998,
    year_to: 2016
  },
  {
    id: 65,
    name: 'Kevin Garnett',
    first_name: 'Kevin',
    last_name: 'Garnett',
    position: 'PF',
    rating: 13,
    year_from: 1996,
    year_to: 2016
  },
  {
    id: 66,
    name: 'Pau Gasol',
    first_name: 'Pau',
    last_name: 'Gasol',
    position: 'PF',
    rating: 12,
    year_from: 2002,
    year_to: 2019
  },
  {
    id: 67,
    name: 'Draymond Green',
    first_name: 'Draymond',
    last_name: 'Green',
    position: 'PF',
    rating: 12,
    year_from: 2013,
    year_to: 2020
  },
  {
    id: 68,
    name: 'Elvin Hayes',
    first_name: 'Elvin',
    last_name: 'Hayes',
    position: 'PF',
    rating: 8,
    year_from: 1969,
    year_to: 1984
  },
  {
    id: 69,
    name: 'Al Horford',
    first_name: 'Al',
    last_name: 'Horford',
    position: 'PF',
    rating: 7,
    year_from: 2008,
    year_to: 2020
  },
  {
    id: 70,
    name: 'Robert Horry',
    first_name: 'Robert',
    last_name: 'Horry',
    position: 'PF',
    rating: 12,
    year_from: 1993,
    year_to: 2008
  },
  {
    id: 71,
    name: 'Bobby Jones',
    first_name: 'Bobby',
    last_name: 'Jones',
    position: 'PF',
    rating: 10,
    year_from: 1975,
    year_to: 1986
  },
  {
    id: 72,
    name: 'Jerry Lucas',
    first_name: 'Jerry',
    last_name: 'Lucas',
    position: 'PF',
    rating: 7,
    year_from: 1964,
    year_to: 1974
  },
  {
    id: 73,
    name: 'Karl Malone',
    first_name: 'Karl',
    last_name: 'Malone',
    position: 'PF',
    rating: 15,
    year_from: 1986,
    year_to: 2004
  },
  {
    id: 74,
    name: 'Kevin McHale',
    first_name: 'Kevin',
    last_name: 'McHale',
    position: 'PF',
    rating: 10,
    year_from: 1981,
    year_to: 1993
  },
  {
    id: 75,
    name: 'Dirk Nowitzki',
    first_name: 'Dirk',
    last_name: 'Nowitzki',
    position: 'PF',
    rating: 15,
    year_from: 1999,
    year_to: 2019
  },
  {
    id: 76,
    name: 'Bob Pettit',
    first_name: 'Bob',
    last_name: 'Pettit',
    position: 'PF',
    rating: 13,
    year_from: 1955,
    year_to: 1965
  },
  {
    id: 77,
    name: 'Dolph Schayes',
    first_name: 'Dolph',
    last_name: 'Schayes',
    position: 'PF',
    rating: 12,
    year_from: 1950,
    year_to: 1964
  },
  {
    id: 78,
    name: 'Rasheed Wallace',
    first_name: 'Rasheed',
    last_name: 'Wallace',
    position: 'PF',
    rating: 6,
    year_from: 1996,
    year_to: 2013
  },
  {
    id: 79,
    name: 'Chris Webber',
    first_name: 'Chris',
    last_name: 'Webber',
    position: 'PF',
    rating: 6,
    year_from: 1994,
    year_to: 2008
  },
  {
    id: 80,
    name: 'James Worthy',
    first_name: 'James',
    last_name: 'Worthy',
    position: 'PF',
    rating: 11,
    year_from: 1983,
    year_to: 1994
  },
  {
    id: 81,
    name: 'Kareem Abdul-Jabbar',
    first_name: 'Kareem',
    last_name: 'Abdul-Jabbar',
    position: 'C',
    rating: 19,
    year_from: 1970,
    year_to: 1989
  },
  {
    id: 82,
    name: 'Wilt Chamberlain',
    first_name: 'Wilt',
    last_name: 'Chamberlain',
    position: 'C',
    rating: 19,
    year_from: 1960,
    year_to: 1973
  },
  {
    id: 83,
    name: 'Dave Cowens',
    first_name: 'Dave',
    last_name: 'Cowens',
    position: 'C',
    rating: 9,
    year_from: 1971,
    year_to: 1983
  },
  {
    id: 84,
    name: 'Patrick Ewing',
    first_name: 'Patrick',
    last_name: 'Ewing',
    position: 'C',
    rating: 12,
    year_from: 1986,
    year_to: 2002
  },
  {
    id: 85,
    name: 'Marc Gasol',
    first_name: 'Marc',
    last_name: 'Gasol',
    position: 'C',
    rating: 7,
    year_from: 2009,
    year_to: 2020
  },
  {
    id: 86,
    name: 'Artis Gilmore',
    first_name: 'Artis',
    last_name: 'Gilmore',
    position: 'C',
    rating: 11,
    year_from: 1972,
    year_to: 1988
  },
  {
    id: 87,
    name: 'Dwight Howard',
    first_name: 'Dwight',
    last_name: 'Howard',
    position: 'C',
    rating: 7,
    year_from: 2005,
    year_to: 2020
  },
  {
    id: 88,
    name: 'Dan Issel',
    first_name: 'Dan',
    last_name: 'Issel',
    position: 'C',
    rating: 6,
    year_from: 1971,
    year_to: 1985
  },
  {
    id: 89,
    name: 'Nikola Jokić',
    first_name: 'Nikola',
    last_name: 'Jokić',
    position: 'C',
    rating: 7,
    year_from: 2016,
    year_to: 2020
  },
  {
    id: 90,
    name: 'Bill Laimbeer',
    first_name: 'Bill',
    last_name: 'Laimbeer',
    position: 'C',
    rating: 6,
    year_from: 1981,
    year_to: 1994
  },
  {
    id: 91,
    name: 'Bob Lanier',
    first_name: 'Bob',
    last_name: 'Lanier',
    position: 'C',
    rating: 7,
    year_from: 1971,
    year_to: 1984
  },
  {
    id: 92,
    name: 'Moses Malone',
    first_name: 'Moses',
    last_name: 'Malone',
    position: 'C',
    rating: 11,
    year_from: 1975,
    year_to: 1995
  },
  {
    id: 93,
    name: 'George Mikan',
    first_name: 'George',
    last_name: 'Mikan',
    position: 'C',
    rating: 14,
    year_from: 1949,
    year_to: 1956
  },
  {
    id: 94,
    name: "Shaquille O'Neal",
    first_name: 'Shaquille',
    last_name: "O'Neal",
    position: 'C',
    rating: 18,
    year_from: 1993,
    year_to: 2011
  },
  {
    id: 95,
    name: 'Hakeem Olajuwon',
    first_name: 'Hakeem',
    last_name: 'Olajuwon',
    position: 'C',
    rating: 17,
    year_from: 1985,
    year_to: 2002
  },
  {
    id: 96,
    name: 'Robert Parish',
    first_name: 'Robert',
    last_name: 'Parish',
    position: 'C',
    rating: 6,
    year_from: 1977,
    year_to: 1997
  },
  {
    id: 97,
    name: 'David Robinson',
    first_name: 'David',
    last_name: 'Robinson',
    position: 'C',
    rating: 16,
    year_from: 1990,
    year_to: 2003
  },
  {
    id: 98,
    name: 'Bill Russell',
    first_name: 'Bill',
    last_name: 'Russell',
    position: 'C',
    rating: 19,
    year_from: 1957,
    year_to: 1969
  },
  {
    id: 99,
    name: 'Wes Unseld',
    first_name: 'Wes',
    last_name: 'Unseld',
    position: 'C',
    rating: 11,
    year_from: 1969,
    year_to: 1981
  },
  {
    id: 100,
    name: 'Ben Wallace',
    first_name: 'Ben',
    last_name: 'Wallace',
    position: 'C',
    rating: 9,
    year_from: 1997,
    year_to: 2012
  }
];

export default players;
