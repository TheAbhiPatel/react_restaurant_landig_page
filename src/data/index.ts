export interface IProducts {
  title: string;
  discription: string;
  price: number;
  image: string;
}

export const products: IProducts[] = [
  {
    title: "Grilled Fillet",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae distinctio asperiores suscipit velit omnis quas similique some thing",
    price: 29.95,
    image: "vegitable-bowl.jpg",
  },
  {
    title: "Grilled Fillet",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae distinctio asperiores suscipit velit omnis quas similique some thing",
    price: 29.95,
    image: "news.jpg",
  },
  {
    title: "Grilled Fillet",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae distinctio asperiores suscipit velit omnis quas similique some thing",
    price: 29.95,
    image: "hero-banner.jpg",
  },
  {
    title: "Grilled Fillet",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae distinctio asperiores suscipit velit omnis quas similique some thing",
    price: 29.95,
    image: "vegitable-bowl.jpg",
  },
  {
    title: "Grilled Fillet",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae distinctio asperiores suscipit velit omnis quas similique some thing",
    price: 29.95,
    image: "vegitable-bowl.jpg",
  },
  {
    title: "Grilled Fillet",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae distinctio asperiores suscipit velit omnis quas similique some thing",
    price: 29.95,
    image: "vegitable-bowl.jpg",
  },
];

/** =================== Testimonial Data =================== */

export interface ITetimonials {
  name: string;
  titile: string;
  discription: string;
  rating: number;
}

export const testimonials: ITetimonials[] = [
  {
    name: "Divi",
    titile: "A Great Find",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero velolestiae unde praesentium aut?",
    rating: 5,
  },
  {
    name: "Monarch",
    titile: "Fabulous food & Flwaless service",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero velolestiae unde praesentium aut? leme le some",
    rating: 4,
  },
  {
    name: "Bloom",
    titile: "Another successful experience",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero velolestiae unde praesentium aut? ",
    rating: 5,
  },
  {
    name: "Extra",
    titile: "Speechless",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero velolestiae unde praesentium aut? something find extaordinary great.",
    rating: 4,
  },
];

/** =================== News Data =================== */

export interface INews {
  title: string;
  category: string;
  discription: string;
  image: string;
}
export const news: INews[] = [
  {
    title: "Something new in Mark",
    category: "Category",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae   fugit suscipit qui, doloremque beatae quo reprehenderit accusantium  voluptates totam",
    image: "news.jpg",
  },
  {
    title: "Something new in Mark",
    category: "Category",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae   fugit suscipit qui, doloremque beatae quo reprehenderit accusantium  voluptates totam",
    image: "news.jpg",
  },
  {
    title: "Something new in Mark",
    category: "Category",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae   fugit suscipit qui, doloremque beatae quo reprehenderit accusantium  voluptates totam something extra and the some anai ",
    image: "news.jpg",
  },
];
