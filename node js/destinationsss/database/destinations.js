const ele = [
{
  name: "Waitomo Glowworm Caves",
  location: "Waitomo",
  country: "New Zealand",
  continent: "Oceania",
  is_open_to_public: true,
  uuid: "place-001",
  details: [
    {
      fun_fact: "The glowworms create a starry sky effect inside the cave."
    },
    {
      description: "A limestone cave system famous for glowing ceilings."
    }
  ]
},
{
  name: "The Door to Hell",
  location: "Darvaza",
  country: "Turkmenistan",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-002",
  details: [
    {
      fun_fact: "The crater has been burning continuously since 1971."
    },
    {
      description: "A natural gas crater known for its eternal flames."
    }
  ]
},
{
  name: "Machu Picchu",
  location: "Cusco Region",
  country: "Peru",
  continent: "South America",
  is_open_to_public: true,
  uuid: "place-003",
  details: [
    {
      fun_fact: "It remained largely unknown to the outside world until 1911."
    },
    {
      description: "Ancient Incan citadel high in the Andes Mountains."
    }
  ]
},
{
  name: "Salar de Uyuni",
  location: "Uyuni",
  country: "Bolivia",
  continent: "South America",
  is_open_to_public: true,
  uuid: "place-004",
  details: [
    {
      fun_fact: "The world's largest salt flat."
    },
    {
      description: "A vast reflective landscape during the rainy season."
    }
  ]
},
{
  name: "Pamukkale",
  location: "Denizli",
  country: "Turkey",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-005",
  details: [
    {
      fun_fact: "Its terraces were formed by mineral-rich thermal waters."
    },
    {
      description: "White travertine pools cascading down a hillside."
    }
  ]
},
{
  name: "Antelope Canyon",
  location: "Arizona",
  country: "United States",
  continent: "North America",
  is_open_to_public: true,
  uuid: "place-006",
  details: [
    {
      fun_fact: "Sunlight beams create spectacular photo opportunities."
    },
    {
      description: "A narrow sandstone slot canyon."
    }
  ]
},
{
  name: "Mount Roraima",
  location: "Gran Sabana",
  country: "Venezuela",
  continent: "South America",
  is_open_to_public: true,
  uuid: "place-007",
  details: [
    {
      fun_fact: "Inspired the novel The Lost World."
    },
    {
      description: "A dramatic tabletop mountain above the clouds."
    }
  ]
},
{
  name: "Lake Baikal",
  location: "Siberia",
  country: "Russia",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-008",
  details: [
    {
      fun_fact: "The deepest freshwater lake on Earth."
    },
    {
      description: "Known for crystal-clear ice during winter."
    }
  ]
},
{
  name: "Socotra Island",
  location: "Socotra",
  country: "Yemen",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-009",
  details: [
    {
      fun_fact: "Over a third of its plant species exist nowhere else."
    },
    {
      description: "An island famous for alien-looking Dragon Blood Trees."
    }
  ]
},
{
  name: "Chocolate Hills",
  location: "Bohol",
  country: "Philippines",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-010",
  details: [
    {
      fun_fact: "Over 1,200 cone-shaped hills."
    },
    {
      description: "A unique geological formation."
    }
  ]
},
{
  name: "Petra",
  location: "Ma'an",
  country: "Jordan",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-011",
  details: [
    { fun_fact: "Petra was carved directly into rose-colored rock cliffs." },
    { description: "An ancient city and UNESCO World Heritage Site." }
  ]
},
{
  name: "Angkor Wat",
  location: "Siem Reap",
  country: "Cambodia",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-012",
  details: [
    { fun_fact: "It is the world's largest religious monument." },
    { description: "A vast temple complex built in the 12th century." }
  ]
},
{
  name: "Great Wall of China",
  location: "Beijing",
  country: "China",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-013",
  details: [
    { fun_fact: "It stretches for thousands of kilometers." },
    { description: "A series of ancient fortifications across China." }
  ]
},
{
  name: "Mount Fuji",
  location: "Honshu",
  country: "Japan",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-014",
  details: [
    { fun_fact: "Japan's highest mountain stands at 3,776 meters." },
    { description: "A famous snow-capped volcanic peak." }
  ]
},
{
  name: "Victoria Falls",
  location: "Livingstone",
  country: "Zambia",
  continent: "Africa",
  is_open_to_public: true,
  uuid: "place-015",
  details: [
    { fun_fact: "Locals call it 'The Smoke That Thunders'." },
    { description: "One of the world's largest waterfalls." }
  ]
},
{
  name: "Uluru",
  location: "Northern Territory",
  country: "Australia",
  continent: "Oceania",
  is_open_to_public: true,
  uuid: "place-016",
  details: [
    { fun_fact: "Uluru changes color throughout the day." },
    { description: "A massive sandstone monolith in central Australia." }
  ]
},
{
  name: "Raja Ampat",
  location: "West Papua",
  country: "Indonesia",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-017",
  details: [
    { fun_fact: "Home to some of the richest marine biodiversity on Earth." },
    { description: "A tropical archipelago with crystal-clear waters." }
  ]
},
{
  name: "Iguazu Falls",
  location: "Misiones",
  country: "Argentina",
  continent: "South America",
  is_open_to_public: true,
  uuid: "place-018",
  details: [
    { fun_fact: "It consists of about 275 separate waterfalls." },
    { description: "A spectacular waterfall system on the Argentina-Brazil border." }
  ]
},
{
  name: "Blue Lagoon",
  location: "Grindavik",
  country: "Iceland",
  continent: "Europe",
  is_open_to_public: true,
  uuid: "place-019",
  details: [
    { fun_fact: "The water is naturally heated by geothermal activity." },
    { description: "A famous geothermal spa surrounded by lava fields." }
  ]
},
{
  name: "Torres del Paine",
  location: "Patagonia",
  country: "Chile",
  continent: "South America",
  is_open_to_public: true,
  uuid: "place-020",
  details: [
    { fun_fact: "Known for its dramatic granite peaks." },
    { description: "A breathtaking national park in southern Chile." }
  ]
},
{
  name: "Bora Bora",
  location: "Society Islands",
  country: "French Polynesia",
  continent: "Oceania",
  is_open_to_public: true,
  uuid: "place-021",
  details: [
    { fun_fact: "Its lagoon is protected by a coral reef." },
    { description: "A luxury island paradise in the South Pacific." }
  ]
},
{
  name: "Stonehenge",
  location: "Wiltshire",
  country: "United Kingdom",
  continent: "Europe",
  is_open_to_public: true,
  uuid: "place-022",
  details: [
    { fun_fact: "Some stones were transported over 200 km." },
    { description: "A prehistoric stone circle shrouded in mystery." }
  ]
},
{
  name: "Grand Canyon",
  location: "Arizona",
  country: "United States",
  continent: "North America",
  is_open_to_public: true,
  uuid: "place-023",
  details: [
    { fun_fact: "The canyon is over 440 km long." },
    { description: "A vast gorge carved by the Colorado River." }
  ]
},
{
  name: "Santorini",
  location: "Cyclades",
  country: "Greece",
  continent: "Europe",
  is_open_to_public: true,
  uuid: "place-024",
  details: [
    { fun_fact: "Famous for its whitewashed buildings and blue domes." },
    { description: "A stunning volcanic island in the Aegean Sea." }
  ]
},
{
  name: "Great Blue Hole",
  location: "Lighthouse Reef",
  country: "Belize",
  continent: "North America",
  is_open_to_public: true,
  uuid: "place-025",
  details: [
    { fun_fact: "The sinkhole is over 120 meters deep." },
    { description: "A giant marine sinkhole popular with divers." }
  ]
},
{
  name: "Zhangjiajie",
  location: "Hunan",
  country: "China",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-026",
  details: [
    { fun_fact: "Inspired the floating mountains in Avatar." },
    { description: "A forest of towering sandstone pillars." }
  ]
},
{
  name: "Moai Statues",
  location: "Easter Island",
  country: "Chile",
  continent: "South America",
  is_open_to_public: true,
  uuid: "place-027",
  details: [
    { fun_fact: "Many statues weigh over 80 tons." },
    { description: "Ancient stone figures built by the Rapa Nui people." }
  ]
},
{
  name: "Banff National Park",
  location: "Alberta",
  country: "Canada",
  continent: "North America",
  is_open_to_public: true,
  uuid: "place-028",
  details: [
    { fun_fact: "Canada's oldest national park." },
    { description: "Known for turquoise lakes and mountain scenery." }
  ]
},
{
  name: "Wadi Rum",
  location: "Aqaba",
  country: "Jordan",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-029",
  details: [
    { fun_fact: "Often called the Valley of the Moon." },
    { description: "A vast desert landscape of sandstone mountains." }
  ]
},
{
  name: "Lençóis Maranhenses",
  location: "Maranhão",
  country: "Brazil",
  continent: "South America",
  is_open_to_public: true,
  uuid: "place-030",
  details: [
    { fun_fact: "Rainwater forms thousands of seasonal lagoons." },
    { description: "A unique desert filled with freshwater pools." }
  ]
},
{
  name: "Plitvice Lakes",
  location: "Lika-Senj",
  country: "Croatia",
  continent: "Europe",
  is_open_to_public: true,
  uuid: "place-031",
  details: [
    { fun_fact: "The park contains 16 interconnected lakes." },
    { description: "A stunning national park known for waterfalls and turquoise waters." }
  ]
},
{
  name: "Cappadocia",
  location: "Nevşehir",
  country: "Turkey",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-032",
  details: [
    { fun_fact: "Famous for hundreds of hot air balloons at sunrise." },
    { description: "A region of fairy chimneys and ancient cave dwellings." }
  ]
},
{
  name: "Ha Long Bay",
  location: "Quang Ninh",
  country: "Vietnam",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-033",
  details: [
    { fun_fact: "Contains nearly 2,000 limestone islands." },
    { description: "A UNESCO-listed bay with emerald waters." }
  ]
},
{
  name: "Komodo Island",
  location: "East Nusa Tenggara",
  country: "Indonesia",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-034",
  details: [
    { fun_fact: "Home of the world's largest lizard, the Komodo dragon." },
    { description: "A rugged island famous for unique wildlife." }
  ]
},
{
  name: "Mount Kilimanjaro",
  location: "Kilimanjaro Region",
  country: "Tanzania",
  continent: "Africa",
  is_open_to_public: true,
  uuid: "place-035",
  details: [
    { fun_fact: "Africa's highest mountain." },
    { description: "A free-standing volcanic mountain rising above the plains." }
  ]
},
{
  name: "Meteora",
  location: "Thessaly",
  country: "Greece",
  continent: "Europe",
  is_open_to_public: true,
  uuid: "place-036",
  details: [
    { fun_fact: "Monasteries were built atop towering rock pillars." },
    { description: "A breathtaking landscape of cliffs and monasteries." }
  ]
},
{
  name: "Bagan",
  location: "Mandalay Region",
  country: "Myanmar",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-037",
  details: [
    { fun_fact: "Over 2,000 ancient temples remain today." },
    { description: "An archaeological zone filled with Buddhist monuments." }
  ]
},
{
  name: "Dead Sea",
  location: "Jordan Rift Valley",
  country: "Jordan",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-038",
  details: [
    { fun_fact: "You can float easily due to its high salt content." },
    { description: "One of the saltiest bodies of water on Earth." }
  ]
},
{
  name: "Aogashima",
  location: "Tokyo Prefecture",
  country: "Japan",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-039",
  details: [
    { fun_fact: "An entire village lives inside a volcanic caldera." },
    { description: "A remote volcanic island in the Philippine Sea." }
  ]
},
{
  name: "Perito Moreno Glacier",
  location: "Patagonia",
  country: "Argentina",
  continent: "South America",
  is_open_to_public: true,
  uuid: "place-040",
  details: [
    { fun_fact: "One of the few glaciers still advancing." },
    { description: "A massive ice formation known for dramatic ice falls." }
  ]
},
{
  name: "Yosemite Valley",
  location: "California",
  country: "United States",
  continent: "North America",
  is_open_to_public: true,
  uuid: "place-041",
  details: [
    { fun_fact: "Home to El Capitan and Half Dome." },
    { description: "A granite valley with waterfalls and giant sequoias." }
  ]
},
{
  name: "Mount Bromo",
  location: "East Java",
  country: "Indonesia",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-042",
  details: [
    { fun_fact: "Sunrise views attract thousands of visitors annually." },
    { description: "An active volcano surrounded by a sea of sand." }
  ]
},
{
  name: "Sossusvlei",
  location: "Namib Desert",
  country: "Namibia",
  continent: "Africa",
  is_open_to_public: true,
  uuid: "place-043",
  details: [
    { fun_fact: "Some dunes exceed 300 meters in height." },
    { description: "A desert region famous for towering red sand dunes." }
  ]
},
{
  name: "Marble Caves",
  location: "Patagonia",
  country: "Chile",
  continent: "South America",
  is_open_to_public: true,
  uuid: "place-044",
  details: [
    { fun_fact: "The cave walls reflect blue shades from the lake." },
    { description: "A network of colorful marble formations." }
  ]
},
{
  name: "Reed Flute Cave",
  location: "Guilin",
  country: "China",
  continent: "Asia",
  is_open_to_public: true,
  uuid: "place-045",
  details: [
    { fun_fact: "Known as the Palace of Natural Arts." },
    { description: "A limestone cave illuminated with colorful lights." }
  ]
},
{
  name: "Lake Hillier",
  location: "Middle Island",
  country: "Australia",
  continent: "Oceania",
  is_open_to_public: true,
  uuid: "place-046",
  details: [
    { fun_fact: "The lake is naturally bright pink." },
    { description: "A unique saline lake surrounded by forest." }
  ]
},
{
  name: "Danakil Depression",
  location: "Afar Region",
  country: "Ethiopia",
  continent: "Africa",
  is_open_to_public: true,
  uuid: "place-047",
  details: [
    { fun_fact: "One of the hottest places on Earth." },
    { description: "A colorful geothermal landscape of salt and sulfur." }
  ]
},
{
  name: "Moeraki Boulders",
  location: "Otago",
  country: "New Zealand",
  continent: "Oceania",
  is_open_to_public: true,
  uuid: "place-048",
  details: [
    { fun_fact: "Some boulders measure over 2 meters in diameter." },
    { description: "Large spherical rocks scattered along a beach." }
  ]
},
{
  name: "Valley of Fire",
  location: "Nevada",
  country: "United States",
  continent: "North America",
  is_open_to_public: true,
  uuid: "place-049",
  details: [
    { fun_fact: "Named for its red sandstone formations." },
    { description: "A desert park with vibrant rock landscapes." }
  ]
},
{
  name: "Fairy Pools",
  location: "Isle of Skye",
  country: "Scotland",
  continent: "Europe",
  is_open_to_public: true,
  uuid: "place-050",
  details: [
    { fun_fact: "The crystal-clear pools are fed by mountain streams." },
    { description: "A series of beautiful waterfalls and natural pools." }
  ]
}
]

export async function getdata(){
  return ele;
}

