const data = [
  {
    "OBJECTID": 1,
    "NAME": "SOMERSET",
    "ADDRESS": "300 REFINERY ROAD",
    "CITY": "SOMERSET",
    "STATE": "KY",
    "TYPE": "VERY SMALL REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 34,
    "COUNTY": "PULASKI",
    "LATITUDE": 37.07113,
    "LONGITUDE": -84.60951,
    "WEBSITE": "http://www.continentalrefiningco.com",
    "OWNER": "CONTINENTAL REFINING CO LLC",
    "OPERNAME": "CONTINENTAL REFINING COMPANY LLC",
    "CAPACITY": 5500,
    "US_RANK": 134,
    "CRUDE": 5500,
    "URL": "https://drive.google.com/uc?id=1ry_aDJNOTRsWp0aYv4q7Aq8UcYON2iFm"
  },
  {
    "OBJECTID": 2,
    "NAME": "WOODS CROSS",
    "ADDRESS": "2355 SOUTH 1100 WEST",
    "CITY": "WOODS CROSS",
    "STATE": "UT",
    "TYPE": "VERY SMALL SIMPLE REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 45,
    "COUNTY": "DAVIS",
    "LATITUDE": 40.86776,
    "LONGITUDE": -111.91,
    "WEBSITE": "http://silvereagleenergy.com",
    "OWNER": "SILVER EAGLE REFINING INC",
    "OPERNAME": "SILVER EAGLE REFINING",
    "CAPACITY": 15000,
    "US_RANK": 122,
    "CRUDE": 15000,
    "URL": "https://drive.google.com/uc?id=1r6yLIb9_pLLFhtV1_Z3d4BHaN8YqTmSD"
  },
  {
    "OBJECTID": 3,
    "NAME": "COMMERCE CITY EAST",
    "ADDRESS": "5801 BRIGHTON BLVD",
    "CITY": "COMMERCE CITY",
    "STATE": "CO",
    "TYPE": "SMALL SIMPLE REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 420,
    "COUNTY": "ADAMS",
    "LATITUDE": 39.80175,
    "LONGITUDE": -104.94518,
    "WEBSITE": "http://www.suncor.com",
    "OWNER": "SUNCOR ENERGY INC",
    "OPERNAME": "SUNCOR ENERGY (USA) INC",
    "CAPACITY": 36000,
    "US_RANK": 107,
    "CRUDE": 36000,
    "URL": "https://drive.google.com/uc?id=1WytDZWQOPkbOXcbM0CQvnfmLs8Ul15fR"
  },
  {
    "OBJECTID": 4,
    "NAME": "SAN ANTONIO",
    "ADDRESS": "7811 S PRESA STREET",
    "CITY": "SAN ANTONIO",
    "STATE": "TX",
    "TYPE": "SMALL LUBRICANTS REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 50,
    "COUNTY": "BEXAR",
    "LATITUDE": 29.34757,
    "LONGITUDE": -98.46019,
    "WEBSITE": "http://www.calumetspecialty.com",
    "OWNER": "CALUMET SPECIALTY PRODUCTS PARTNERS, L.P.",
    "OPERNAME": "CALUMET LUBRICANTS CO",
    "CAPACITY": 20000,
    "US_RANK": 117,
    "CRUDE": 20000,
    "URL": "https://drive.google.com/uc?id=1CjOUqZR2XolRmj6Z4X4W26jjwKll6pBW"
  },
  {
    "OBJECTID": 5,
    "NAME": "PAULSBORO",
    "ADDRESS": "800 BILLINGSPORT ROAD",
    "CITY": "PAULSBORO",
    "STATE": "NJ",
    "TYPE": "LARGE HIGHLY COMPLEX REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 427,
    "COUNTY": "GLOUCESTER",
    "LATITUDE": 39.84038,
    "LONGITUDE": -75.25681,
    "WEBSITE": "http://www.pbfenergy.com",
    "OWNER": "PBF ENERGY CO LLC",
    "OPERNAME": "PAULSBORO REFINING CO LLC",
    "CAPACITY": 160000,
    "US_RANK": 44,
    "CRUDE": 160000,
    "URL": "https://drive.google.com/uc?id=18to-xjaj-Vp3NMEZYfxRYQKd_9tgnDfz"
  },
  {
    "OBJECTID": 6,
    "NAME": "TEXAS CITY",
    "ADDRESS": "1301 LOOP 197 SOUTH",
    "CITY": "TEXAS CITY",
    "STATE": "TX",
    "TYPE": "LARGE COMPLEX REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 509,
    "COUNTY": "GALVESTON",
    "LATITUDE": 29.36763,
    "LONGITUDE": -94.90828,
    "WEBSITE": "http://www.valero.com",
    "OWNER": "VALERO ENERGY CORP",
    "OPERNAME": "VALERO REFINING CO TEXAS LP",
    "CAPACITY": 225000,
    "US_RANK": 32,
    "CRUDE": 225000,
    "URL": "https://drive.google.com/uc?id=1xA6wCQjpRpZ0FRWB7eo6Jpw-Mnoa04sv"
  },
  {
    "OBJECTID": 7,
    "NAME": "TEXAS CITY",
    "ADDRESS": "502 10TH STREET SOUTH",
    "CITY": "TEXAS CITY",
    "STATE": "TX",
    "TYPE": "SMALL MEDIUM COMPLEXITY REFINERY THAT PROCESSES SWEET CRUDE",
    "STATUS": "IN SERVICE",
    "POPULATION": 276,
    "COUNTY": "GALVESTON",
    "LATITUDE": 29.37542,
    "LONGITUDE": -94.90798,
    "WEBSITE": "https://www.marathonpetroleum.com",
    "OWNER": "MARATHON PETROLEUM CORP",
    "OPERNAME": "MARATHON PETROLEUM CO LP",
    "CAPACITY": 86000,
    "US_RANK": 73,
    "CRUDE": 86000,
    "URL": "https://drive.google.com/uc?id=1jSD9cUZb7laGJGzKO_mINdR28FBy8kIG"
  },
  {
    "OBJECTID": 8,
    "NAME": "BAYTOWN",
    "ADDRESS": "2800 DECKER DR/4500 BAYWAY DRIVE",
    "CITY": "BAYTOWN",
    "STATE": "TX",
    "TYPE": "VERY LARGE AND HIGHLY COMPLEX REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 1307,
    "COUNTY": "HARRIS",
    "LATITUDE": 29.74285,
    "LONGITUDE": -95.01026,
    "WEBSITE": "http://www.exxonmobilchemical.com",
    "OWNER": "EXXON MOBIL CORP",
    "OPERNAME": "EXXONMOBIL REFINING & SUPPLY CO",
    "CAPACITY": 560500,
    "US_RANK": 2,
    "CRUDE": 560500,
    "URL": "https://drive.google.com/uc?id=14QB6hIKqkCMwp497fr3g3mqSvGaDWnU5"
  },
  {
    "OBJECTID": 9,
    "NAME": "CHALMETTE",
    "ADDRESS": "500 WEST ST. BERNARD HWY",
    "CITY": "CHALMETTE",
    "STATE": "LA",
    "TYPE": "LARGE COMPLEX REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 625,
    "COUNTY": "ST. BERNARD",
    "LATITUDE": 29.93358,
    "LONGITUDE": -89.96916,
    "WEBSITE": "http://corporate.exxonmobil.com",
    "OWNER": "PBF ENERGY CO LLC",
    "OPERNAME": "CHALMETTE REFINING LLC",
    "CAPACITY": 190000,
    "US_RANK": 37,
    "CRUDE": 190000,
    "URL": "https://drive.google.com/uc?id=1Wadf3nQyhN4InZcG3CFWG2unTysYoyxM"
  },
  {
    "OBJECTID": 10,
    "NAME": "TOLEDO",
    "ADDRESS": "4001 CEDAR POINT ROAD",
    "CITY": "OREGON",
    "STATE": "OH",
    "TYPE": "MEDIUM COMPLEX REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 465,
    "COUNTY": "LUCAS",
    "LATITUDE": 41.67947,
    "LONGITUDE": -83.45156,
    "WEBSITE": "http://www.huskyenergy.com",
    "OWNER": "BP HUSKY REFINING LLC",
    "OPERNAME": "BP-HUSKY REFINING LLC",
    "CAPACITY": 153000,
    "US_RANK": 48,
    "CRUDE": 153000,
    "URL": "https://drive.google.com/uc?id=1BJ_RRlvX0pQKQy8TyDoywLnO1nM8pvKZ"
  },
  {
    "OBJECTID": 11,
    "NAME": "THREE RIVERS",
    "ADDRESS": "301 LEROY STREET",
    "CITY": "THREE RIVERS",
    "STATE": "TX",
    "TYPE": "MEDIUM SIZED MEDIUM COMPLEXITY REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 302,
    "COUNTY": "LIVE OAK",
    "LATITUDE": 28.45728,
    "LONGITUDE": -98.18771,
    "WEBSITE": "http://www.valero.com",
    "OWNER": "VALERO ENERGY CORP",
    "OPERNAME": "VALERO ENERGY CORPORATION",
    "CAPACITY": 89000,
    "US_RANK": 71,
    "CRUDE": 89000,
    "URL": "https://drive.google.com/uc?id=18NM1-XN2oCN0i6zmLKAcY1nsxT6fG_2J"
  },
  {
    "OBJECTID": 12,
    "NAME": "HOUSTON",
    "ADDRESS": "9701 MANCHESTER",
    "CITY": "HOUSTON",
    "STATE": "TX",
    "TYPE": "LARGE COMPLEX REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 340,
    "COUNTY": "HARRIS",
    "LATITUDE": 29.72181,
    "LONGITUDE": -95.2536,
    "WEBSITE": "http://www.valero.com",
    "OWNER": "VALERO ENERGY CORP",
    "OPERNAME": "VALERO REFINING CO TEXAS LP",
    "CAPACITY": 191000,
    "US_RANK": 36,
    "CRUDE": 191000,
    "URL": "https://drive.google.com/uc?id=1IZa-Uno28T_YgNIIwqH5jPUh_wqR4Dss"
  },
  {
    "OBJECTID": 13,
    "NAME": "SINCLAIR",
    "ADDRESS": "100 E LINCOLN AVENUE (EAST LINCOLN HIGHWAY)",
    "CITY": "SINCLAIR",
    "STATE": "WY",
    "TYPE": "MEDIUM COMPLEX REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 332,
    "COUNTY": "CARBON",
    "LATITUDE": 41.78212,
    "LONGITUDE": -107.10722,
    "WEBSITE": "http://www.sinclairoil.com",
    "OWNER": "SINCLAIR OIL CORP",
    "OPERNAME": "SINCLAIR WYOMING REFINING CO",
    "CAPACITY": 85000,
    "US_RANK": 76,
    "CRUDE": 85000,
    "URL": "https://drive.google.com/uc?id=1Y5Ix-v9nt9zcN8bV4bMLZNt9V7KACxlF"
  },
  {
    "OBJECTID": 14,
    "NAME": "TYLER",
    "ADDRESS": "1702 E COMMERCE STREET",
    "CITY": "TYLER",
    "STATE": "TX",
    "TYPE": "MEDIUM SIZED MEDIUM COMPLEXITY REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 254,
    "COUNTY": "SMITH",
    "LATITUDE": 32.36172,
    "LONGITUDE": -95.2797,
    "WEBSITE": "http://www.delekus.com",
    "OWNER": "DELEK GROUP LTD",
    "OPERNAME": "DELEK REFINING LTD",
    "CAPACITY": 72000,
    "US_RANK": 86,
    "CRUDE": 72000,
    "URL": "https://drive.google.com/uc?id=1XSGIoHnmm1q18Kh-fIA-QPn48SJr6_yb"
  },
  {
    "OBJECTID": 15,
    "NAME": "MARTINEZ",
    "ADDRESS": "3485 PACHECO BLVD",
    "CITY": "MARTINEZ",
    "STATE": "CA",
    "TYPE": "LARGE HIGHLY COMPLEX REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 774,
    "COUNTY": "CONTRA COSTA",
    "LATITUDE": 38.01844,
    "LONGITUDE": -122.11327,
    "WEBSITE": "http://www.shell.us",
    "OWNER": "ROYAL DUTCH/SHELL GROUP",
    "OPERNAME": "SHELL OIL PRODUCTS US",
    "CAPACITY": 156400,
    "US_RANK": 47,
    "CRUDE": 156400,
    "URL": "https://drive.google.com/uc?id=1Sn3HlimgjXqeQC2dfUngSzhRBvZNfKh4"
  },
  {
    "OBJECTID": 16,
    "NAME": "SUNRAY",
    "ADDRESS": "6701 FM 119",
    "CITY": "SUNRAY",
    "STATE": "TX",
    "TYPE": "MEDIUM COMPLEX REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 435,
    "COUNTY": "MOORE",
    "LATITUDE": 35.95528,
    "LONGITUDE": -101.88038,
    "WEBSITE": "http://www.valero.com",
    "OWNER": "VALERO ENERGY CORP",
    "OPERNAME": "VALERO ENERGY CORPORATION",
    "CAPACITY": 195000,
    "US_RANK": 35,
    "CRUDE": 195000,
    "URL": "https://drive.google.com/uc?id=10EInuOepaeGGvxMpsGOi4ADEojGWlRxS"
  },
  {
    "OBJECTID": 17,
    "NAME": "PASADENA",
    "ADDRESS": "111 RED BLUFF ROAD",
    "CITY": "PASADENA",
    "STATE": "TX",
    "TYPE": "MEDIUM SIZED COMPLEX REFINERY WITH A HIGH GASOLINE YIELD",
    "STATUS": "IN SERVICE",
    "POPULATION": 345,
    "COUNTY": "HARRIS",
    "LATITUDE": 29.7231,
    "LONGITUDE": -95.20804,
    "WEBSITE": "http://www.petrobras.com",
    "OWNER": "PETROBRAS AMERICA INC",
    "OPERNAME": "PASADENA REFINING SYSTEMS INC",
    "CAPACITY": 112229,
    "US_RANK": 61,
    "CRUDE": 112229,
    "URL": "https://drive.google.com/uc?id=1FwVJm8S0BY_vZfcSvwGr4C3i7voWeJGm"
  },
  {
    "OBJECTID": 18,
    "NAME": "LAKE CHARLES",
    "ADDRESS": "1601 HWY 108 E",
    "CITY": "SULPHUR",
    "STATE": "LA",
    "TYPE": "MODERN DEEP-CONVERSION FACILITY",
    "STATUS": "IN SERVICE",
    "POPULATION": 1183,
    "COUNTY": "CALCASIEU",
    "LATITUDE": 30.17866697,
    "LONGITUDE": -93.33023518,
    "WEBSITE": "http://citgorefining.com",
    "OWNER": "PDV AMERICA INC",
    "OPERNAME": "CITGO PETROLEUM CORP",
    "CAPACITY": 425000,
    "US_RANK": 6,
    "CRUDE": 425000,
    "URL": "https://drive.google.com/uc?id=1QixJBHR9UiyQEZfUVhCh7hFGhkxt49Bd"
  },
  {
    "OBJECTID": 19,
    "NAME": "RODEO (SAN FRANCISCO)",
    "ADDRESS": "1380 SAN PABLO AVENUE",
    "CITY": "RODEO",
    "STATE": "CA",
    "TYPE": "MEDIUM COMPLEX REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 445,
    "COUNTY": "CONTRA COSTA",
    "LATITUDE": 38.04457,
    "LONGITUDE": -122.25522,
    "WEBSITE": "http://www.phillips66.com",
    "OWNER": "PHILLIPS 66 COMPANY",
    "OPERNAME": "PHILLIPS 66 COMPANY",
    "CAPACITY": 120200,
    "US_RANK": 58,
    "CRUDE": 120200,
    "URL": "https://drive.google.com/uc?id=1AdUV-_F-RywbRPkCckJ0fLxIqUGA86Js"
  },
  {
    "OBJECTID": 20,
    "NAME": "TULSA WEST",
    "ADDRESS": "1700 S UNION AVE",
    "CITY": "TULSA",
    "STATE": "OK",
    "TYPE": "MEDIUM SIZED MEDIUM COMPLEXITY REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 285,
    "COUNTY": "TULSA",
    "LATITUDE": 36.1389,
    "LONGITUDE": -96.02106,
    "WEBSITE": "http://www.hollyfrontier.com",
    "OWNER": "HOLLYFRONTIER CORP",
    "OPERNAME": "HOLLYFRONTIER TULSA REFINING LLC",
    "CAPACITY": 85000,
    "US_RANK": 75,
    "CRUDE": 85000,
    "URL": "https://drive.google.com/uc?id=1kYAyn7jskWjFYrBgkcyJfbosFAPi8yMN"
  },
  {
    "OBJECTID": 21,
    "NAME": "PARAMOUNT",
    "ADDRESS": "14700 DOWNEY AVENUE",
    "CITY": "PARAMOUNT",
    "STATE": "CA",
    "TYPE": "SMALL LOW COMPLEXITY REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 155,
    "COUNTY": "LOS ANGELES",
    "LATITUDE": 33.89872,
    "LONGITUDE": -118.14659,
    "WEBSITE": "http://www.ppcla.com",
    "OWNER": "ALON ISRAEL OIL COMPANY LTD",
    "OPERNAME": "PARAMOUNT PETROLEUM CORPORATION",
    "CAPACITY": 84500,
    "US_RANK": 77,
    "CRUDE": 0,
    "URL": "https://drive.google.com/uc?id=1u6PnW9BK1_Nddld4-db_BAHd-Gujo1T8"
  },
  {
    "OBJECTID": 22,
    "NAME": "TULSA EAST",
    "ADDRESS": "902 W 25TH STREET",
    "CITY": "TULSA",
    "STATE": "OK",
    "TYPE": "LARGE COMPLEX REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 409,
    "COUNTY": "TULSA",
    "LATITUDE": 36.11992,
    "LONGITUDE": -96.00072,
    "WEBSITE": "https://www.hollyfrontier.com",
    "OWNER": "HOLLYFRONTIER CORP",
    "OPERNAME": "HOLLYFRONTIER TULSA REFINING LLC",
    "CAPACITY": 70300,
    "US_RANK": 87,
    "CRUDE": 0,
    "URL": "https://drive.google.com/uc?id=14exyojSyo0WDVDzHz44aKjSEMySURH6d"
  },
  {
    "OBJECTID": 23,
    "NAME": "MOUNT VERNON",
    "ADDRESS": "1200 REFINERY ROAD",
    "CITY": "MOUNT VERNON",
    "STATE": "IN",
    "TYPE": "MEDIUM SIZED COMPLEX REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 190,
    "COUNTY": "POSEY",
    "LATITUDE": 37.94216,
    "LONGITUDE": -87.91082,
    "WEBSITE": "http://www.countrymark.com",
    "OWNER": "COUNTRYMARK COOP INC",
    "OPERNAME": "COUNTRYMARK COOPERATIVE INC",
    "CAPACITY": 28200,
    "US_RANK": 110,
    "CRUDE": 28200,
    "URL": "https://drive.google.com/uc?id=1lnJBsu6kj0WVO3xePClQ_itiHPR4KB7K"
  },
  {
    "OBJECTID": 24,
    "NAME": "NEWELL",
    "ADDRESS": "9995 OHIO RIVER BOULEVARD",
    "CITY": "NEWELL",
    "STATE": "WV",
    "TYPE": "SMALL MEDIUM COMPLEXITY REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 180,
    "COUNTY": "HANCOCK",
    "LATITUDE": 40.61127,
    "LONGITUDE": -80.62966,
    "WEBSITE": "http://www.ergon.com/",
    "OWNER": "ERGON INC",
    "OPERNAME": "ERGON WEST VIRGINIA INC",
    "CAPACITY": 22300,
    "US_RANK": 116,
    "CRUDE": 22300,
    "URL": "https://drive.google.com/uc?id=1_hhUEK-lcUaC7b8Ufi7bjOnNTheMpAS_"
  },
  {
    "OBJECTID": 25,
    "NAME": "WESTLAKE",
    "ADDRESS": "2800 OLD SPANISH TRAIL",
    "CITY": "WESTLAKE",
    "STATE": "LA",
    "TYPE": "MEDIUM LUBRICANTS REFINERY",
    "STATUS": "IN SERVICE",
    "POPULATION": 98,
    "COUNTY": "CALCASIEU",
    "LATITUDE": 30.24224,
    "LONGITUDE": -93.28476,
    "WEBSITE": "http://www.fhr.com",
    "OWNER": "EXCEL PARALUBES",
    "OPERNAME": "EXCEL PARALUBES",
    "CAPACITY": 0,
    "US_RANK": 139,
    "CRUDE": 0,
    "URL": "https://drive.google.com/uc?id=15pw7OoQVRQeCv3rYqBa_nXghNC3iFhj2"
  }
]

const dataset = JSON.parse(JSON.stringify(data))

console.log(dataset)

const cardContainer = document.getElementById('card-container');

function renderData(dataset) {
    for (let i = 0; i < dataset.length; i++){
      const card = document.createElement("div");
      card.classList.add("card");

      const hoverContainer = document.createElement("div");
      hoverContainer.classList.add("hoverWrapper");

      const image = document.createElement("img");
      image.setAttribute("src", dataset[i].URL);

      const title = document.createElement("p");
      title.textContent = `${dataset[i].NAME} REFINERY`;

      hoverContainer.appendChild(image)
      hoverContainer.appendChild(title)

      card.appendChild(hoverContainer)
      
      cardContainer.appendChild(card);
    }
}

renderData(dataset);