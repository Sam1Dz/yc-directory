export interface IDummyPost {
  _id: number;
  _createdAt: string;
  author: {
    _id: number;
    name: string;
  };
  title: string;
  description: string;
  category: string;
  image: string;
  views: number;
}
export const DummyPost: IDummyPost[] = [
  {
    _id: 1,
    _createdAt: '2024-10-15',
    author: { _id: 1, name: 'HoYoverse' },
    title: 'NYC Pop-up Store',
    description:
      'Come visit the Genshin Impact pop-up store in New York from October 18th to November 3rd. We look forward to seeing you there!',
    category: 'Genshin Impact',
    image:
      'https://media.licdn.com/dms/image/v2/D5622AQGtyWDMmOg2ig/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729891306290?e=1733356800&v=beta&t=utH3hlMk6F2dbBUp3cqoLDNWV1iCZRFJWFZQmGTphKM',
    views: 55,
  },
  {
    _id: 2,
    _createdAt: '2024-10-15',
    author: { _id: 1, name: 'HoYoverse' },
    title: 'NYC Pop-up Store',
    description:
      'Come visit the Genshin Impact pop-up store in New York from October 18th to November 3rd. We look forward to seeing you there!',
    category: 'Genshin Impact',
    image:
      'https://media.licdn.com/dms/image/v2/D5622AQGtyWDMmOg2ig/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729891306290?e=1733356800&v=beta&t=utH3hlMk6F2dbBUp3cqoLDNWV1iCZRFJWFZQmGTphKM',
    views: 55,
  },
  {
    _id: 3,
    _createdAt: '2024-10-15',
    author: { _id: 1, name: 'HoYoverse' },
    title: 'NYC Pop-up Store',
    description:
      'Come visit the Genshin Impact pop-up store in New York from October 18th to November 3rd. We look forward to seeing you there!',
    category: 'Genshin Impact',
    image:
      'https://media.licdn.com/dms/image/v2/D5622AQGtyWDMmOg2ig/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729891306290?e=1733356800&v=beta&t=utH3hlMk6F2dbBUp3cqoLDNWV1iCZRFJWFZQmGTphKM',
    views: 55,
  },
  {
    _id: 4,
    _createdAt: '2024-10-15',
    author: { _id: 1, name: 'HoYoverse' },
    title: 'NYC Pop-up Store',
    description:
      'Come visit the Genshin Impact pop-up store in New York from October 18th to November 3rd. We look forward to seeing you there!',
    category: 'Genshin Impact',
    image:
      'https://media.licdn.com/dms/image/v2/D5622AQGtyWDMmOg2ig/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729891306290?e=1733356800&v=beta&t=utH3hlMk6F2dbBUp3cqoLDNWV1iCZRFJWFZQmGTphKM',
    views: 55,
  },
  {
    _id: 5,
    _createdAt: '2024-10-15',
    author: { _id: 1, name: 'HoYoverse' },
    title: 'NYC Pop-up Store',
    description:
      'Come visit the Genshin Impact pop-up store in New York from October 18th to November 3rd. We look forward to seeing you there!',
    category: 'Genshin Impact',
    image:
      'https://media.licdn.com/dms/image/v2/D5622AQGtyWDMmOg2ig/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729891306290?e=1733356800&v=beta&t=utH3hlMk6F2dbBUp3cqoLDNWV1iCZRFJWFZQmGTphKM',
    views: 55,
  },
  {
    _id: 6,
    _createdAt: '2024-10-15',
    author: { _id: 1, name: 'HoYoverse' },
    title: 'NYC Pop-up Store',
    description:
      'Come visit the Genshin Impact pop-up store in New York from October 18th to November 3rd. We look forward to seeing you there!',
    category: 'Genshin Impact',
    image:
      'https://media.licdn.com/dms/image/v2/D5622AQGtyWDMmOg2ig/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729891306290?e=1733356800&v=beta&t=utH3hlMk6F2dbBUp3cqoLDNWV1iCZRFJWFZQmGTphKM',
    views: 55,
  },
];
