export async function GET(request) {
  const cardData = [
    {
      img: '/Outdoors.jpeg',
      title: 'Outdoor getaways',
    },
    {
      img: '/uniqueStaysss.jpeg',
      title: 'Unique stays',
    },
    {
      img: '/entireHouse.jpeg',
      title: 'Entire homes',
    },
    {
      img: '/petAllowed.jpeg',
      title: 'Pet allowed',
    },
  ];

  return Response.json(cardData);
}
