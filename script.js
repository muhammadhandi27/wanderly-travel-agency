// ===== DATA - DESTINATIONS =====
const destinationsData = [
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "asia",
    price: "$499",
    tourCount: "24 experiences",
    cardImage: "images/destination/bali.png",
    heroImage: "images/destination/bali-hero.jpg",
    gallery: [
      "images/destination/bali-1.jpg",
      "images/destination/bali-2.jpg",
      "images/destination/bali-3.jpg",
      "images/destination/bali-4.jpg"
    ],
    shortDesc: "Beaches, food, culture, and activity options easily tailored to various travel styles.",
    about: [
      `Bali offers a combination rarely found in a single place: beaches, rice fields, a vibrant living culture, and a diverse range of food options. Most areas are easily accessible, so you don't have to spend too much time traveling on the road.`,
      `For first-time visitors, southern areas like Seminyak and Uluwatu are ideal for beach activities, while Ubud offers a more tranquil atmosphere, surrounded by rice fields and art galleries.`
    ],
    whatToExpect: `The weather in Bali tends to be warm year-round, with a dry season that generally lasts from April to October. Most destinations are accessible by road, and many accommodations offer airport transfer services.`
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    region: "asia",
    price: "$899",
    tourCount: "18 experiences",
    cardImage: "images/destination/kyoto.jpg",
    heroImage: "images/destination/kyoto.jpg",
    gallery: [],
    shortDesc: "A city with historic temples, quiet side streets, and culture that is still felt in everyday life.",
    about: [
      `Kyoto was once the capital of Japan, and that history is still visible in its temples, shrines, and traditional wooden houses. Unlike Tokyo, the pace here is slower, with many areas still following rhythms shaped by the changing seasons.`,
      `Districts like Gion and Higashiyama are good starting points for first-time visitors, with narrow streets, tea houses, and shops that have operated for generations. Arashiyama, a little further out, is known for its bamboo grove and riverside views.`
    ],
    whatToExpect: `Kyoto has four distinct seasons, with cherry blossoms in spring and autumn foliage drawing the largest crowds. The city is well served by buses and a small subway network, though many of the older districts are best explored on foot.`
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    region: "europe",
    price: "$1,299",
    tourCount: "15 experiences",
    cardImage: "images/destination/swiss-alps.jpg",
    heroImage: "images/destination/swiss-alps.jpg",
    gallery: [],
    shortDesc: "Mountains, small villages, and travel routes with scenery that is hard to miss.",
    about: [
      `The Swiss Alps cover a large part of the country, with small villages built into the mountainsides and train lines that connect them with notable reliability. Towns like Interlaken and Zermatt serve as common bases for exploring the surrounding peaks.`,
      `Travel here is often centered around train journeys as much as the destinations themselves, with routes such as the Glacier Express offering extended views of valleys, lakes, and glaciers along the way.`
    ],
    whatToExpect: `Conditions vary significantly by season. Summer (June to September) is suited for hiking, while winter brings snow sports to many of the same areas. Public transport, including trains and cable cars, covers most tourist routes.`
  },
  {
    id: "raja-ampat",
    name: "Raja Ampat",
    country: "Indonesia",
    region: "asia",
    price: "$899",
    tourCount: "12 experiences",
    cardImage: "images/destination/raja-ampat.jpg",
    heroImage: "images/destination/raja-ampat.jpg",
    gallery: [],
    shortDesc: "Crystal-clear waters, small islands, and one of the best destinations to enjoy underwater life.",
    about: [
      `Raja Ampat is an archipelago in eastern Indonesia, made up of hundreds of small islands surrounded by clear water. It is widely regarded as one of the richest marine areas in the world, making it a frequent destination for diving and snorkeling.`,
      `Most trips here are organized around boats, either as day trips from a base island or as longer liveaboard journeys that move between dive sites. Travel between islands typically takes longer than in more developed destinations, so itineraries tend to allow extra time.`
    ],
    whatToExpect: `Access to Raja Ampat usually involves a flight to Sorong followed by a boat transfer, so travel days should be planned for. Facilities on the smaller islands are simpler than in more developed destinations, which is part of what keeps the area well preserved.`
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    region: "europe",
    price: "$1,099",
    tourCount: "16 experiences",
    cardImage: "images/destination/santorini.jpg",
    heroImage: "images/destination/santorini.jpg",
    gallery: [],
    shortDesc: "White architecture, the Aegean Sea, and an island atmosphere best enjoyed without rushing.",
    about: [
      `Santorini is shaped by its volcanic history, with white buildings set along the edge of a caldera overlooking the Aegean Sea. Towns like Oia and Fira are known for this architecture, along with narrow streets that are best explored slowly.`,
      `Beyond the caldera views, the island also has beaches with black and red volcanic sand, along with vineyards that take advantage of the mineral-rich soil. Many visitors choose to split their time between the main towns and quieter villages further inland.`
    ],
    whatToExpect: `Santorini can get busy during peak summer months, particularly around sunset viewing spots in Oia. Renting a car or scooter is common, as it allows more flexibility to visit beaches and villages outside the main towns.`
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    country: "New Zealand",
    region: "oceania",
    price: "$1,499",
    tourCount: "21 experiences",
    cardImage: "images/destination/new-zealand.jpg",
    heroImage: "images/destination/new-zealand.jpg",
    gallery: [],
    shortDesc: "Expansive landscapes, lakes, mountains, and road trips — perfect for those who want to explore extensively.",
    about: [
      `New Zealand is made up of two main islands, each with a different character. The North Island has a milder climate and more geothermal activity, while the South Island is known for mountains, lakes, and glaciers.`,
      `Because the landscape changes significantly from one region to the next, many visitors choose to travel by car, moving between towns like Queenstown, Wanaka, and Rotorua over the course of a longer trip.`
    ],
    whatToExpect: `Driving distances between destinations can be longer than expected, so itineraries benefit from allowing extra time between stops. Weather can shift quickly, particularly in mountain areas, so it's worth checking conditions before longer drives or hikes.`
  }
];

// ===== DATA - TOUR PACKAGES =====
const tourPackagesData = [
  {
    id: "japan-01",
    category: "CULTURE",
    categoryKey: "cultural",
    title: "Japan, One City at a Time",
    location: "Tokyo & Kyoto, Japan",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    reviews: 128,
    price: "$1,199",
    cardImage: "images/tourpackages/japan.jpg",
    heroImage: "images/tourpackages/japan-hero.jpg",
    shortDesc: "A combination of two cities with contrasting rhythms: starting with bustling Tokyo, then moving on to Kyoto for a more tranquil atmosphere.",
    overview: "A combination of two cities with contrasting paces: starting in bustling Tokyo and moving on to Kyoto for a more tranquil atmosphere. The itinerary is designed so you don't have to change cities every day, ensuring you have ample time to explore.",
    itinerary: [
      { day: "Day 1", title: "Arrival in Tokyo", desc: "Arrive at Narita Airport, transfer to the hotel in the Shinjuku area. The rest of the day is for resting." },
      { day: "Day 2", title: "Central Tokyo", desc: "Visit Shibuya, Harajuku, and Meiji Shrine. The evening is free for independent exploration." },
      { day: "Day 3", title: "Asakusa & Tokyo Skytree", desc: "Visit Sensoji Temple in Asakusa, followed by the Tokyo Skytree area in the afternoon." },
      { day: "Day 4", title: "Travel to Kyoto", desc: "Travel to Kyoto via Shinkansen. Check in at the hotel, followed by a leisurely walk in the Gion area." },
      { day: "Day 5", title: "Temples of Kyoto", desc: "Visiting Fushimi Inari Shrine and Kinkaku-ji (Golden Pavilion)." },
      { day: "Day 6", title: "Arashiyama", desc: "Visit the Bamboo Grove and the area around the Katsura River. The evening is free for souvenir shopping." },
      { day: "Day 7", title: "Departure", desc: "Transfer to Kansai Airport for the return flight." }
    ],
    included: [
      "6-night accommodation (3-4 star hotels)",
      "Intercity transportation (Shinkansen)",
      "Airport transfers (arrival & departure)",
      "Indonesian-speaking local guide"
    ],
    notIncluded: [
      "International flight tickets",
      "Lunch & dinner (unless otherwise specified)",
      "Travel insurance",
      "Personal expenses"
    ]
  },
  {
    id: "raja-ampat-02",
    category: "ADVENTURE",
    categoryKey: "adventure",
    title: "Raja Ampat by Sea",
    location: "Raja Ampat, Indonesia",
    duration: "6 Days / 5 Nights",
    rating: 4.8,
    reviews: 94,
    price: "$899",
    cardImage: "images/tourpackages/raja-ampat-sea.jpg",
    heroImage: "images/tourpackages/raja-ampat-sea.jpg",
    shortDesc: "A sea voyage to explore several islands, go snorkling, and enjoy more time out on the water.",
    overview: "This trip moves between islands mostly by boat, with each day built around time in and around the water. The pace stays relaxed , with no need to pack several land activities into a single day.",
    itinerary: [
      { day: "Day 1", title: "Arrival & Transfer", desc: "Arrive in Sorong, then transfer by boat to the homestay base in Raja Ampat." },
      { day: "Day 2", title: "Reef Snorkling", desc: "Snorkeling at reefs close to the homestay, followed by a relaxedafternoon." },
      { day: "Day 3", title: "Piaynemo Viewpoint", desc: "Boat trip to Piaynemo, including the climb to the karstviewpoint overlooking the islands." },
      { day: "Day 4", title: "Manta Point", desc: "Snorkeling at a site known for manta ray sightings, weather andconsitions permitting." },
      { day: "Day 5", title: "Local Village Visit", desc: "Visit a nearby village to see daily life, followed by free time for swimming or resting." },
      { day: "Day 6", title: "Departure", desc: "Transfer back to Sorong for the return flight." }
    ],
    included: [
      "5-night accommodation (homestay)",
      "Boat transport between islands",
      "Snorkeling equipment",
      "Local guide"
    ],
    notIncluded: [
      "Domestic & International flight tickets",
      "Meals beyond breakfast",
      "Diving certification courses",
      "Personal expenses"
    ]
  },
  {
    id: "bali-03",
    category: "BEACH",
    categoryKey: "beach",
    title: "Slow Days in Bali",
    location: "Bali, Indonesia",
    duration: "5 Days / 4 Nights",
    rating: 4.9,
    reviews: 156,
    price: "$649",
    cardImage: "images/tourpackages/bali-slow.jpg",
    heroImage: "images/tourpackages/bali-slow.jpg",
    shortDesc: "A combination of beaches, local food, and a few place to visit without making the itinerary feel packed.",
    overview: "This itinerary leaves extra time between activities so the days don't feel rushed. A mix of beach time, local food, and a few cultural visits are spread across the trip without filling every hour.",
    itinerary: [
      { day: "Day 1", title: "Arrival", desc: "Arrive in Bali, transfer to the hotel, and rest for the remainder of the day." },
      { day: "Day 2", title: "Beach Day", desc: "Free day around Seminyak or Uluwatu, with time for the baech and nearby cafes." },
      { day: "Day 3", title: "Ubud & Rice Terraces", desc: "Visit the Tegallalang rice teraaces, followed by lunch at a local restaurant." },
      { day: "Day 4", title: "Free Day", desc: "Open day, with an optional spa or massage session avaible on request." },
      { day: "Day 5", title: "Departure", desc: "Transfer to the airport for the return flight." }
    ],
    included: [
      "4-night accommodation",
      "Airport transfers (arrival & departure)",
      "Daily breakfast",
      "One guided day trip (Ubud)"
    ],
    notIncluded: [
      "International flight tickets",
      "Lunch & dinner (unless otherwise specified)",
      "Travel insurance",
      "Personal expenses"
    ]
  }
];

// ===== DATA - BLOG ARTICLES =====
const blogData = [
  {
    id: "japan-first-trip",
    category: "TRAVEL GUIDE",
    categoryKey: "travel-guide",
    title: "Planning Your First Trip to Japan",
    date: "2026-09-12",
    dateDisplay: "September 12, 2026",
    readTime: "8 min read",
    cardImage: "images/blog/japan-guide.jpg",
    heroImage: "images/blog/japan-guide-hero.jpg",
    excerpt: "Things to consider before you go, ranging from city choice to planning a realistic itinerary.",
    relatedPackageId: "japan-01",
    body: [
      {
        paragraphs: [
          "Japan often feels like a country with an overwhelming number of choices: bustling cities, historic temples, mountains, and seasons that each offer a distinct atmosphere. For a first trip, trying to visit too many places in a short time can make the journey feel rushed."
        ]
      },
      {
        heading: "Choose One or Two Cities as a Base",
        paragraphs: [
          "Tokyo and Kyoto make for a common combination for a first-time trip, one representing the modern side, the other the traditional. Staying in one area for several days, rather than moving between cities every day, allows more time for genuine exploration."
        ]
      },
      {
        heading: "Consider the Season Before Setting a Date",
        paragraphs: [
          "Spring (March-April) and autumn (October-November) are the most sought-after seasons, so prices for accommodation and train tickets tend to be higher. Summer and winter are usually quieter, yet offer experiences that are just as appealing, depending on your interests."
        ]
      },
      {
        heading: "Make the most of train transport.",
        paragraphs: [
          "Japan's railway network is known for its punctuality and for reaching almost all major tourist areas. For intercity travel—such as from Tokyo to Kyoto—the Shinkansen is the most practical choice in terms of both time and comfort.",
          `If you are interested in an itinerary that combines Tokyo and Kyoto without having to plan the schedule yourself, the <a href="tourpackage-detail.html?id=japan-01">Japan, One City at a Time</a> package could serve as a useful starting point for comparison with your own plans.`
        ]
      }
    ]
  },
  {
    id: "bali-slow-way",
    category: "DESTINATION",
    categoryKey: "destination",
    title: "A Slower Way to Explore Bali",
    date: "2026-09-08",
    dateDisplay: "September 8, 2026",
    readTime: "6 min read",
    cardImage: "images/blog/bali-slow.jpg",
    heroImage: "images/blog/bali-slow.jpg",
    excerpt: "A few ways to enjoy Bali without filling every day with a packed schedule.",
    relatedPackageId: "bali-03",
    body: [
      {
        paragraphs: [
          "Bali is often associated with long lists of things to see, but it doesn't have to be experienced that way. A slower pace, with fewer stops per day, tends to leave more room to actually enjoy each place."
        ]
      },
      {
        heading: "Pick a Base, Not a Route",
        paragraphs: [
          "Instead of changing accommodation every few days, staying in one area - Seminyak, Ubud, or Uluwatu, for example - and taking day trips from there usually means less time spent packing and traveling between hotels."
        ]
      },
      {
        heading: "Leave Gaps in the Schedule",
        paragraphs: [
          "An itinerary with no free time can start to feel like a checklist. Leaving at least one open afternoon every few days gives room to rest, revisit a place you liked, or simply slow down.",
          `For a pre-arranged itinerary built around this pace, the <a href="tourpackage-detail.html?id=bali-03">Slow Days in Bali</a> package follows a similar approach.`
        ]
      }
    ]
  },
  {
    id: "itinerary-tips",
    category: "TRAVEL TIPS",
    categoryKey: "travel-tips",
    title: "How to Build an Itinerary That Isn't Exhausting",
    date: "2026-09-04",
    dateDisplay: "September 4, 2026",
    readTime: "7 min read",
    cardImage: "images/blog/itinerary-tips.jpg",
    heroImage: "images/blog/itinerary-tips.jpg",
    excerpt: "Not every place needs to be visited in one trip. Here's how to build a more realistic schedule.",
    relatedPackageId: null,
    body: [
      {
        paragraphs: [
          "A common mistake when planning a trip is trying to fit in everything a destination has to offer. This often results in days that start early and end late, with little time left to actually enjoy each stop."
        ]
      },
      {
        heading: "Start With a Short List, Not a Long One",
        paragraphs: [
          "Picking 2-3 priorities per day, rather than listing everything that looks interesting, makes it easier to build a schedule that's realistic to follow."
        ]
      },
      {
        heading: "Account for Travel Time Between Stops",
        paragraphs: [
          "Distances that look short on a map can take longer than expected, especially in unfamiliar cities. Adding buffer time between activities helps prevent a single delay from affecting the rest of the day."
        ]
      }
    ]
  },
  {
    id: "raja-ampat-guide",
    category: "INDONESIA",
    categoryKey: "indonesia",
    title: "Before You Visit Raja Ampat",
    date: "2026-08-28",
    dateDisplay: "August 28, 2026",
    readTime: "5 min read",
    cardImage: "images/blog/raja-ampat-guide.jpg",
    heroImage: "images/blog/raja-ampat-guide.jpg",
    excerpt: "A few practical things worth knowing before planning a trip to Raja Ampat.",
    relatedPackageId: "raja-ampat-02",
    body: [
      {
        paragraphs: [
          "Raja Ampat is further off the usual travel route than many other Indonesian destinations, which is part of what keeps it well preserved. A short amount of planning ahead makes the trip considerably smoother."
        ]
      },
      {
        heading: "Getting There Takes More Than One Step",
        paragraphs: [
          "Most trips involve a flight to Sorong, followed by a boat transfer to the islands. Both legs should be factored into the overall travel time, rather than treated as a quick connection."
        ]
      },
      {
        heading: "Facilities Are Simpler Than You Might Expect",
        paragraphs: [
          "Accommodation on the smaller islands is usually homestay-style, with basic but adequate facilities. Bringing cash, a reliable power bank, and reef-safe sunscreen is worth doing in advance, since options for buying these on-site are limited."
        ]
      }
    ]
  }
];

// ===== DATA - EXPERIENCES =====
const experiencesData = [
  {
    id: "adventure",
    category: "ADVENTURE",
    title: "Go Further",
    image: "images/experiences/adventure.jpg",
    shortDesc: "For a trip with more activities, new routes, and a bit more of a challenge.",
    relatedPackageId: "raja-ampat-02",
    body: [
      {
        heading: "What Adventure Trips Look Like",
        paragraphs: [
          "Wanderly's adventure-themed trips are designed for those who want to stay active — whether hiking, exploring new trails, or trying activities that are a bit off the beaten path. These itineraries typically strike a balance between physical activity and downtime, ensuring the experience remains enjoyable without leaving you exhausted.",
          "Destinations such as Raja Ampat and the Swiss Alps are often chosen for this category, as they offer terrain and scenery that support outdoor activities."
        ]
      },
      {
        heading: "Good to Know Before You Go",
        paragraphs: [
          "Most adventure packages require a basic to moderate level of fitness. Specific details — such as difficulty level, required gear, and estimated distance — are outlined on each package's respective page."
        ]
      }
    ]
  },
  {
    id: "beach",
    category: "BEACH ESCAPE",
    title: "Take It Slow",
    image: "images/experiences/beach.jpg",
    shortDesc: "The beach, good food, and enough time not to check the clock every few minutes.",
    relatedPackageId: "bali-03",
    body: [
      {
        heading: "What Beach Escape Trips Look Like",
        paragraphs: [
          "This category is built around having fewer stops per day, not more. Beach time, local food, and a slower pace take priority over trying to see everything a destination has to offer.",
          "Destinations like Bali and Santorini are common choices, as both offer a mix of coastline and places to simply sit and take in the view."
        ]
      },
      {
        heading: "Good to Know Before You Go",
        paragraphs: [
          "Beach Escape itineraries usually leave at least one free afternoon per few days. Specific activities, if any, are listed on each package's page."
        ]
      }
    ]
  },
  {
    id: "cultural",
    category: "CULTURAL JOURNEY",
    title: "See How People Live",
    image: "images/experiences/cultural.jpg",
    shortDesc: "Get to know a new place through its food, history, neighborhoods, and daily life.",
    relatedPackageId: "japan-01",
    body: [
      {
        heading: "What Cultural Journey Trips Look Like",
        paragraphs: [
          "This category focuses on everyday life as much as landmarks — markets, neighborhoods, food, and the small details that make a place feel distinct. Itineraries are paced to allow time for walking around rather than rushing between sights.",
          "Destinations such as Kyoto are often chosen for this category, given how closely tradition is still woven into daily life there."
        ]
      },
      {
        heading: "Good to Know Before You Go",
        paragraphs: [
          "Some Cultural Journey activities, such as visiting temples or local ceremonies, may have dress codes or etiquette worth knowing in advance. These details are noted on each package's page where relevant."
        ]
      }
    ]
  },
  {
    id: "family",
    category: "FAMILY VACATION",
    title: "Easy Days Together",
    image: "images/experiences/family.jpg",
    shortDesc: "Travel options featuring a more flexible itinerary and activities that can be enjoyed together.",
    relatedPackageId: null,
    body: [
      {
        heading: "What Family Vacation Trips Look Like",
        paragraphs: [
          "This category prioritizes flexibility — shorter travel days, activities suited to a range of ages, and enough downtime to avoid tiring younger (or older) travelers out.",
          "We don't currently have a tour package built specifically around this category, but our team can help adjust an existing itinerary to better fit a family trip."
        ]
      },
      {
        heading: "Good to Know Before You Go",
        paragraphs: [
          "If you have a family trip in mind, reaching out directly lets us tailor pacing, accommodation, and activities to your group's needs."
        ]
      }
    ]
  },
  {
    id: "honeymoon",
    category: "HONEYMOON",
    title: "Just the Two of You",
    image: "images/experiences/honeymoon.jpg",
    shortDesc: "A trip for two featuring a more balanced mix of hotels, activities, and leisure time.",
    relatedPackageId: null,
    body: [
      {
        heading: "What Honeymoon Trips Look Like",
        paragraphs: [
          "Honeymoon itineraries tend to favor comfort and quieter moments over a packed schedule — a mix of nicer accommodation, a few shared activities, and plenty of unstructured time.",
          "We don't currently have a tour package built specifically around this category, but existing itineraries can often be adapted for a couple's trip on request."
        ]
      },
      {
        heading: "Good to Know Before You Go",
        paragraphs: [
          "If you have a destination or occasion in mind, let us know directly and we can help shape a plan around it."
        ]
      }
    ]
  },
  {
    id: "luxury",
    category: "LUXURY TRAVEL",
    title: "Travel a Little Better",
    image: "images/experiences/luxury.jpg",
    shortDesc: "Selected hotels, a more comfortable journey, and services that help reduce technical hassles.",
    relatedPackageId: null,
    body: [
      {
        heading: "What Luxury Travel Trips Look Like",
        paragraphs: [
          "This category focuses on comfort throughout the trip — selected accommodation, smoother transfers, and fewer logistics left for you to manage directly.",
          "We don't currently have a tour package built specifically around this category, but our team can help put together a more tailored plan on request."
        ]
      },
      {
        heading: "Good to Know Before You Go",
        paragraphs: [
          "Reach out with your preferred destination and travel dates, and we can help shape a plan with a more premium level of service."
        ]
      }
    ]
  }
];

// ===== 1. NAVBAR TOGGLE =====
function initNavbarToggle() {
  const toggle = document.querySelector(".navbar__toggle");
  const navbar = document.querySelector(".navbar");

  if (!toggle || !navbar) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  document.addEventListener("click", (event) => {
    const  isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (!isOpen) return;

    const clickedInsideNavbar = event.target.closest(".navbar");
    if (!clickedInsideNavbar) {
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  navbar.addEventListener("click", (event) => {
    const clickedLink = event.target.closest(".navbar__menu a");
    if (clickedLink) {
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ===== 2. FAQ ACCORDION =====
function initFaqAccordion() {
  const questions = document.querySelectorAll(".faq-item__question");
  if (!questions.length) return;

  questions.forEach((button) => {
    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";

      // Tutup semua FAQ lain
      questions.forEach((otherButton) => {
        if (otherButton === button) return;

        otherButton.setAttribute("aria-expanded", "false");
        const otherAnswer = document.getElementById(otherButton.getAttribute("aria-controls"));
        if (otherAnswer) otherAnswer.hidden = true;
      });

      // Toggle FAQ yang diklik 
      const answer = document.getElementById(button.getAttribute("aria-controls"));
      button.setAttribute("aria-expanded", String(!isOpen));
      if (answer) answer.hidden = isOpen;
    });
  });
}

// ===== 3. SLIDER (Testimonials & Experience)
function initSliders() {
  const sliders = document.querySelectorAll("[data-slider]");

  sliders.forEach((slider) => {
    const track = slider.querySelector(".slider__track");
    const prevBtn = slider.querySelector(".slider__btn--prev");
    const nextBtn = slider.querySelector(".slider__btn--next");
    const dotsContainer = slider.querySelector(".slider__dots");

    if (!track) return;

    const slides = Array.from(track.children);
    let snapOffsets = [];
    let activeIndex = 0;

    function isScrollable() {
      return track.scrollWidth > track.clientWidth + 1;
    }

    function getMaxScroll() {
      return Math.max(0, track.scrollWidth - track.clientWidth);
    }

    function calculateSnapOffsets() {
      const maxScroll = getMaxScroll();
      const raw = slides.map((slide) => Math.min(slide.offsetLeft - track.offsetLeft, maxScroll));

      const unique = [];
      raw.forEach((offset) => {
        const alreadyExists = unique.some((existing) => Math.abs(existing - offset) < 1);
        if (!alreadyExists) unique.push(offset);
      });

      return unique;
    }

    function goToSlide(index) {
      const clamped = Math.max(0, Math.min(index, snapOffsets.length - 1));
      track.scrollTo({ left: snapOffsets[clamped], behavior: "smooth"} );
    }

    function buildDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = "";
      snapOffsets.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "slider__dot";
        dot.setAttribute("aria-label", `Ke slide ${index + 1}`);
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });
    }

    function updateActiveState() {
      let closestIndex = 0;
      let closestDistance = Infinity;

      snapOffsets.forEach((offset, index) => {
        const distance = Math.abs(offset - track.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      activeIndex = closestIndex;

      if (dotsContainer) {
        dotsContainer.querySelectorAll(".slider__dot").forEach((dot, index) => {
          if (index === activeIndex) {
            dot.setAttribute("aria-current", "true");
          } else {
            dot.removeAttribute("aria-current");
          }
        });
      }

      if (prevBtn) prevBtn.disabled = activeIndex === 0;
      if (nextBtn) nextBtn.disabled = activeIndex === snapOffsets.length - 1;    
    }

    function refresh() {
      if (isScrollable()) {
        snapOffsets = calculateSnapOffsets();
        slider.classList.add("is-ready");
        track.setAttribute("tabindex", "0");
        buildDots();
        updateActiveState();
      } else {
        snapOffsets = [];
        slider.classList.remove("is-ready");
        track.removeAttribute("tabindex");
        if (dotsContainer) dotsContainer.innerHTML = "";
      }
    }

    if (prevBtn) prevBtn.addEventListener("click", () => goToSlide(activeIndex - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => goToSlide(activeIndex + 1));

    let scrollTimeout;
    track.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateActiveState, 100);
    });

    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(refresh, 200);
    });

    refresh();
  });
}

// ===== 4. FILTER & SEARCH =====
function initFilterToolbar() {
  const toolbar = document.querySelector(".destinations-toolbar");
  if (!toolbar) return;

  toolbar.addEventListener("submit", (event) => event.preventDefault());

  const searchInput = toolbar.querySelector("input[type='search']");
  const chips = Array.from(toolbar.querySelectorAll(".filter-bar__chip"));
  const section = toolbar.nextElementSibling;
  if (!section) return;

  const cards = Array.from(section.querySelectorAll("[data-region], [data-category]"));
  const emptyState = section.querySelector('[class*="__empty-state"]');

  let activeFilter = "all";

  function matchesFilter(card) {
    if (activeFilter === "all") return true;
    const value = card.dataset.region || card.dataset.category;
    return value === activeFilter;
  }

  function matchesSearch(card) {
    const term = searchInput ? searchInput.value.trim().toLowerCase() : "";
    if (!term) return true;

    const titleEl = card.querySelector('[class*="__title"]');
    const title = titleEl ? titleEl.textContent.toLowerCase() : "";
    return title.includes(term);
  }

  function applyFilters() {
    let visibleCount = 0;

    cards.forEach((card) => {
      const shouldShow = matchesFilter(card) && matchesSearch(card);
      card.hidden = !shouldShow;
      if (shouldShow) visibleCount += 1;
    });

    if (emptyState) emptyState.hidden = visibleCount > 0;
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("filter-bar__chip--active"));
      chip.classList.add("filter-bar__chip--active");
      activeFilter = chip.dataset.filter;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  applyFilters();
}

// ===== 4.5.a. RENDER DESTINATION DETAIL PAGE =====
function initDestinationDetailPage() {
  const page = document.querySelector(".destination-detail");
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const destination = destinationsData.find((item) => item.id ===id);

  if (!destination) {
    renderNotFound(page, {
      title: "Destination not found",
      message: "The destination you are looking for does not exist or may have been moved.",
      backHref: "destination.html",
      backLabel: "Back to Destinations"
    });
    return;
  }

  document.title = `${destination.name}, ${destination.country} - Wanderly`;

  // Breadcrumb 
  const breadcrumdCurrent = document.querySelector(".breadcrumb__list li[aria-current='page']");
  if (breadcrumdCurrent) breadcrumdCurrent.textContent = destination.name;

  // Hero
  const heroImage = document.querySelector(".destination-hero__image");
  if (heroImage) {
    heroImage.src = destination.heroImage;
    heroImage.alt = `${destination.name}, ${destination.country}`;
  }

  const heroCountry = document.querySelector(".destination-hero__country");
  if (heroCountry) heroCountry.textContent = destination.country;

  const heroTitle = document.querySelector(".destination-hero__title");
  if (heroTitle) heroTitle.textContent = destination.name;

  // Content (About + What to Expect)
  const content = document.querySelector(".destination-detail__content");
  if (content) {
    const aboutHtml = destination.about.map((paragraph) => `<p>${paragraph}</p>`).join("");
    content.innerHTML = `
      <h2>About ${destination.name}</h2>
      ${aboutHtml}
      <h2>What to Expect</h2>
      <p>${destination.whatToExpect}</p>
    `;
  }

  // Sidebar
  const priceEl = document.querySelector(".info-card__price");
  if (priceEl) priceEl.innerHTML = `${destination.price} <span>per person</span>`;

  const tourCountEl = document.querySelector(".info-card__tour-count");
  if (tourCountEl) tourCountEl.textContent = `${destination.tourCount} available`;

  const bookingCta = document.querySelector(".info-card__cta");
  if (bookingCta) bookingCta.href = `booking.html?destination=${destination.id}`;

  const saveBtn = document.querySelector(".info-card__save");
  if (saveBtn) saveBtn.dataset.destinationId = destination.id;

  // Photo Gallery 
  const gallerySection = document.querySelector(".destination-gallery");
  if (gallerySection) {
    if (destination.gallery.length === 0) {
      gallerySection.hidden = true;
    } else {
      gallerySection.hidden = false;
      const galleryGrid = gallerySection.querySelector(".destination-gallery__grid");
      if (galleryGrid) {
        galleryGrid.innerHTML = destination.gallery
          .map((src) => `<img src="${src}" alt="${destination.name} photo">`)
          .join("");
      }
    }
  }

  // Related Packages (Title Only)
  const relatedHeading = document.querySelector(".related-package .section-heading__title");
  if (relatedHeading) relatedHeading.textContent = `Available Tours for ${destination.name}`;

  // CTA Banner
  const promoTitle = document.querySelector(".promo-banner__title");
  if (promoTitle) promoTitle.textContent = `Ready to Visit ${destination.name}?`;

  const promoCta = document.querySelector(".promo-banner .button");
  if (promoCta) promoCta.href = `booking.html?destination=${destination.id}`;
}

// ===== HELPER - Build HTML Tour Package Card =====
function buildTourPackageCardHTML(pkg) {
  return `
    <article class="tour-package-card" data-category="${pkg.categoryKey}">
      <div class="tour-package-card__media">
        <img src="${pkg.cardImage}" alt="${pkg.title}" class="tour-package-card__image">
        <span class="tour-package-card__category">${pkg.category}</span>
        <div class="tour-package-card__info-bar">
          <span><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${pkg.location}</span>
          <span><i class="fa-regular fa-clock" aria-hidden="true"></i> ${pkg.duration}</span>
        </div>
      </div>
      <div class="tour-package-card__body">
        <div class="tour-package-card__meta-row">
          <span class="tour-package-card__rating">
            <i class="fa-solid fa-star" aria-hidden="true"></i>
            ${pkg.rating} <span class="tour-package-card__reviews">(${pkg.reviews} reviews)</span>
          </span>
          <span class="tour-package-card__price">${pkg.price} <span>/ person</span></span>
        </div>
        <h3 class="tour-package-card__title">${pkg.title}</h3>
        <p class="tour-package-card__desc">${pkg.shortDesc}</p>
        <a href="tourpackage-detail.html?id=${pkg.id}" class="button button--dark tour-package-card__cta">
          View Details
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  `;
}

// ===== HELPER - Build HTML from Body Structure (Heading + Paragraph) =====
function buildArticleBodyHTML(body) {
  return body
    .map((section) => {
      const headingHtml = section.heading ? `<h2>${section.heading}</h2>` : "";
      const paragraphsHtml = section.paragraphs.map((p) => `<p>${p}</p>`).join("");
      return headingHtml + paragraphsHtml;
    })
    .join("");
}

// ===== 4.5.b. RENDER TOUR PACKAGE DETAIL PAGE =====
function initPackageDetailPage() {
  const page = document.querySelector(".package-detail");
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const pkg = tourPackagesData.find((item) => item.id === id);

  if (!pkg) {
    renderNotFound(page, {
      title: "Tour package not found",
      message: "The tour package you are looking for does not exist or may have been moved.",
      backHref: "tourpackage.html",
      backLabel: "Back to Tour Packages"
    });
    return;
  }

  document.title = `${pkg.title} - Wanderly`;

  const breadcrumbCurrent = document.querySelector(".breadcrumb__list li[aria-current='page']");
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = pkg.title;

  const heroImage = document.querySelector(".package-hero__image");
  if (heroImage) heroImage.src = pkg.heroImage;

  const heroCategory = document.querySelector(".package-hero__category");
  if (heroCategory) heroCategory.textContent = pkg.category;

  const heroTitle = document.querySelector(".package-hero__title");
  if (heroTitle) heroTitle.textContent = pkg.title;

  const heroLocation = document.querySelector(".package-hero__location");
  if (heroLocation) heroLocation.textContent = pkg.location;

  const summary = document.querySelector(".package-detail__summary");
  if (summary) {
    summary.innerHTML = `
      <span class="package-detail__duration">${pkg.duration}</span>
      <span class="package-detail__rating">
        <i class="fa-solid fa-star" aria-hidden="true"></i>
        ${pkg.rating} <span>(${pkg.reviews} reviews)</span>
      </span>
    `;
  }

  const content = document.querySelector(".package-detail__content");
  if (content) {
    const itineraryHtml = pkg.itinerary
      .map(
        (item) => `
        <li class="itinerary-list__item">
          <span class="itinerary-list__day">${item.day}</span>
          <h3 class="itinerary-list__title">${item.title}</h3>
          <p class="itinerary-list__desc">${item.desc}</p>
        </li>
      `
      )
      .join("");

    const includedHtml = pkg.included.map((item) => `<dd><i class="fa-solid fa-check" aria-hidden="true"></i>${item}</dd>`).join("");
    const notIncludedHtml = pkg.notIncluded.map((item) => `<dd><i class="fa-solid fa-xmark" aria-hidden="true"></i>${item}</dd>`).join("");

    content.innerHTML = `
      <h2>Overview</h2>
      <p>${pkg.overview}</p>
      <h2>Itinerary</h2>
      <ol class="itinerary-list">${itineraryHtml}</ol>
      <h2>Package Details</h2>
      <dl class="package-includes">
        <div class="package-includes__group">
          <dt>What's Included</dt>
          ${includedHtml}
        </div>
        <div class="package-includes__group">
          <dt>Not Included</dt>
          ${notIncludedHtml}
        </div>
      </dl>
    `;
  }

  const priceEl = document.querySelector(".info-card__price");
  if (priceEl) priceEl.innerHTML = `${pkg.price} <span>per person</span>`;

  const durationEl = document.querySelector(".info-card__duration");
  if (durationEl) durationEl.textContent = pkg.duration;

  const bookingCta = document.querySelector(".info-card__cta");
  if (bookingCta) bookingCta.href = `booking.html?package=${pkg.id}`;

  const saveBtn = document.querySelector(".info-card__save");
  if (saveBtn) saveBtn.dataset.packageId = pkg.id;
}

// ===== 4.5.b. RENDER BLOG DETAIL PAGE =====
function  initBlogDetailPage() {
  const page = document.querySelector(".blog-article");
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const article = blogData.find((item) => item.id === id);

  if (!article) {
    renderNotFound(page, {
      title: "Article not found",
      message: "The article you are looking for does not exist or may have been moved.",
      backHref: "blog.html",
      backLabel: "Back to Blog"
    });
    return;
  }

  document.title = `${article.title} - Wanderly`;

  const breadcrumbCurrent = document.querySelector(".breadcrumb__list li[aria-current='page']");
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = article.title;

  const categoryEl = document.querySelector(".blog-article__category");
  if (categoryEl) categoryEl.textContent = article.category;

  const titleEl = document.querySelector(".blog-article__title");
  if (titleEl) titleEl.textContent = article.title;

  const metaEl = document.querySelector(".blog-article__meta");
  if (metaEl) {
    metaEl.innerHTML = `
      <time datetime="${article.date}">${article.dateDisplay}</time>
      <span>${article.readTime}</span>
    `;
  }

  const heroImage = document.querySelector(".blog-article__image");
  if (heroImage) heroImage.src = article.heroImage;

  const bodyEl = document.querySelector(".blog-article__body");
  if (bodyEl) bodyEl.innerHTML = buildArticleBodyHTML(article.body);

  const relatedSection = document.querySelector(".related-packages");
  if (relatedSection) {
    const relatedPkg = tourPackagesData.find((item) => item.id === article.relatedPackageId);
    if (relatedPkg) {
      relatedSection.hidden = false;
      const grid = relatedSection.querySelector(".tour-package-grid");
      if (grid) grid.innerHTML = buildTourPackageCardHTML(relatedPkg);
    } else {
      relatedSection.hidden = true;
    }
  }
}

// ===== 4.5.b RENDER EXPERIENCE DETAIL =====
function initExperienceDetailPage() {
  const page = document.querySelector(".experience-detail");
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const experience = experiencesData.find((item) => item.id === id);

  if (!experience) {
    renderNotFound(page, {
      title: "Experience not found",
      message: "The experience you are looking for does not exist or may have been moved.",
      backHref: "experiences.html",
      backLabel: "Back to Experiences"
    });
    return;
  }

  document.title = `${experience.title} - ${experience.category} Trips - Wanderly`;
  
  const breadcrumbCurrent = document.querySelector(".breadcrumb__list li[aria-current='page']");
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = experience.title;

  const heroImage = document.querySelector(".experience-hero__image");
  if (heroImage) heroImage.src = experience.image;

  const heroCategory = document.querySelector(".experience-hero__category");
  if (heroCategory) heroCategory.textContent = experience.category;

  const heroTitle = document.querySelector(".experience-hero__title");
  if (heroTitle) heroTitle.textContent = experience.title;

  // const page_ = document.querySelector(".experience-detail");
  // if (page_) page.innerHTML = buildArticleBodyHTML(experience.body);
  page.innerHTML = buildArticleBodyHTML(experience.body);

  const relatedSection = document.querySelector(".related-packages");
  if (relatedSection) {
    const relatedPkg = tourPackagesData.find((item) => item.id === experience.relatedPackageId);
    const headingEl = relatedSection.querySelector(".section-heading__title");
    const eyebrowEl = relatedSection.querySelector(".section-heading__eyebrow");
    const grid = relatedSection.querySelector(".tour-package-grid");

    if (relatedPkg) {
      relatedSection.hidden = false;
      if (headingEl) headingEl.textContent = "Packages for This Experience";
      if (eyebrowEl) eyebrowEl.textContent = `${experience.category}`;
      if (grid) grid.innerHTML = buildTourPackageCardHTML(relatedPkg);
    } else {
      relatedSection.hidden = false;
      if (headingEl) headingEl.textContent = "No Packages Yet for This Experience";
      if (eyebrowEl) eyebrowEl.textContent = `${experience.category}`;
      if (grid) {
        grid.innerHTML = `<p class="experience-detail__no-package">We don't have a tour package built specifically for this experience yet. <a href="contact.html">Contact Us</a> and we can help put together a plan.</p>`;
      }
    }
  }

  const promoTitle = document.querySelector(".promo-banner__title");
  if (promoTitle) promoTitle.textContent = `Ready for Your Next ${experience.title.includes("Together") || experience.title.includes("Two") ? "Trip" : experience.category.split(" ")[0]}?`;

  const promoCta = document.querySelector(".promo-banner .button");
  if (promoCta) promoCta.href = `tourpackage.html?category=${experience.id}`;
}

// ===== HELPER - SHOW "Not Found" MESSAGE on DETAIL PAGE =====
function renderNotFound(page, { title, message, backHref, backLabel }) {
  document.title = "Not Found - Wanderly";

  // Hide all section in main, except breadcrumb and thid page
  Array.from(page.parentElement.children).forEach((section) => {
    if (section !== page && !section.classList.contains("breadcrumb")) {
      section.hidden = true;
    }
  });

  page.innerHTML = `
    <div class="not-found">
      <h1 class="not-found__title">${title}</h1>
      <p class="not-found__text">${message}</p>
      <a href="${backHref}" class="button button--primary">${backLabel}</a>
    </div>
  `;
}

// ===== HELPER - Build HTML DESTINATION CARD =====
function buildDestinationCardHTML(dest) {
  return `
    <article class="destination-card" data-region="${dest.region}">
      <div class="destination-card__media">
        <img src="${dest.cardImage}" alt="${dest.name}, ${dest.country}" class="destination-card__image">
        <span class="destination-card__badge">${dest.tourCount}</span> 
      </div>
      <div class="destination-card__body">
        <div class="destination-card__heading">
          <h3 class="destination-card__title">${dest.name}</h3>
          <span class="destination-card__price">From ${dest.price}</span>
        </div>
        <p class="destination-card__country">${dest.country}</p>
        <p class="destination-card__desc">${dest.shortDesc}</p>
        <a href="destination-detail.html?id=${dest.id}" class="button button--ghost">Explore ${dest.name}</a>
      </div>
    </article>
  `;
}

// ===== HELPER - BUILD HTML BLOG CARD =====
function buildBlogCardHTML(article) {
  return `
    <article class="blog-card" data-category="${article.categoryKey}">
      <img src="${article.cardImage}" alt="${article.title}" class="blog-card__image">
      <div class="blog-card__body">
        <div class="blog-card__meta">
          <time datetime="${article.date}">${article.dateDisplay}</time>
          <span>${article.readTime}</span>
        </div>
        <h3 class="blog-card__title">${article.title}</h3>
        <p class="blog-card__excerpt">${article.excerpt}</p>
        <a href="blog-detail.html?id=${article.id}" class="button button--ghost blog-card__link">Read Article</a>
      </div>
    </article>
  `;
}

// ===== HELPER - BUILD HTML EXPERIENCE CARD =====
function buildExperienceCardHTML(exp) {
  return `
    <article class="experience-card">
      <img src="${exp.image}" alt="${exp.title}" class="experience-card__image">
      <div class="experience-card__overlay">
        <span class="experience-card__category">${exp.category}</span>
        <h3 class="experience-card__title">${exp.title}</h3>
        <p class="experience-card__desc">${exp.shortDesc}</p>
        <a href="experience-detail.html?id=${exp.id}" class="experience-card__link">Explore ${exp.category} &rarr;</a>
      </div>
    </article>
  `;
}

// ===== 4.5.c RERENDERING ALL CARD LISTING FROM DATA =====
function renderListingCards() {
  const destContainer = document.querySelector("#destinations .destination-grid");
  if (destContainer) {
    destContainer.innerHTML = destinationsData.map(buildDestinationCardHTML).join("");
  }

  const pkgContainer = document.querySelector("#tour-packages .tour-package-grid");
  if (pkgContainer) {
    pkgContainer.innerHTML = tourPackagesData.map(buildTourPackageCardHTML).join("");
  }

  const blogContainer = document.querySelector("#blog .blog-grid");
  if (blogContainer) {
    blogContainer.innerHTML = blogData.map(buildBlogCardHTML).join("");
  }

  const expContainer = 
    document.querySelector("#experiences .slider__track") ||
    document.querySelector("#experiences .experience-grid");
  if (expContainer) {
    expContainer.innerHTML = experiencesData.map(buildExperienceCardHTML).join("");
  }
}

// Inisialisasi - Jalankan semua fungsi setelah HTML siap
document.addEventListener("DOMContentLoaded", () => {
  renderListingCards();
  initNavbarToggle();
  initFaqAccordion();
  initSliders();
  initFilterToolbar();
  initDestinationDetailPage();
  initPackageDetailPage();
  initBlogDetailPage();
  initExperienceDetailPage();
});