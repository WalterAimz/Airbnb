export async function GET(request) {
  const exploreData = [
    {
      id: 1,
      img: "/manu.jpg",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      id: 2,
      img: "/london.jpeg",
      location: "London",
      distance: "45-minute drive",
    },
    {
      id: 3,
      img: "/ny.jpg",
      location: "NewYork",
      distance: "4-hour drive",
    },
    {
      id: 4,
      img: "/cf.jpeg",
      location: "Cardiff",
      distance: "45-minute drive",
    },
    {
      id: 8,
      img: "/yk.jpeg",
      location: "York",
      distance: "4.5-hour drive",
    },
    {
      id: 5,
      img: "/bk.jpg",
      location: "Birkenhead",
      distance: "4.5-hour drive",
    },
    {
      id: 6,
      img: "/nq.jpeg",
      location: "Newquasy",
      distance: "6-hour drive",
    },
    {
      id: 7,
      img: "/mv.jpg",
      location: "Move",
      distance: "2-hour drive",
    },
  ];
  return Response.json(exploreData);
}

