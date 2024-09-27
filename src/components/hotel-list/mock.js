const initialHotels = [
  {
    id: 1,
    name: "Hotel Luxo",
    image:
      "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    city: "São Paulo",
    state: "SP",
    price: 350,
  },
  {
    id: 2,
    name: "Hotel Econômico",
    image:
      "https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3,
    city: "Rio de Janeiro",
    state: "RJ",
    price: 150,
  },
  {
    id: 3,
    name: "Hotel Premium",
    image:
      "https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    city: "Belo Horizonte",
    state: "MG",
    price: 250,
  },
  {
    id: 4,
    name: "Resort Maravilha",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    city: "Fortaleza",
    state: "CE",
    price: 600,
  },
  {
    id: 5,
    name: "Pousada Tranquila",
    image:
      "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    city: "Gramado",
    state: "RS",
    price: 200,
  },
  {
    id: 6,
    name: "Hotel Econômico Praia",
    image:
      "https://images.unsplash.com/photo-1649785181184-db56c56effcd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3,
    city: "Salvador",
    state: "BA",
    price: 120,
  },
  {
    id: 7,
    name: "Hostel Estilo",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    city: "Curitiba",
    state: "PR",
    price: 230,
  },
  {
    id: 8,
    name: "Hotel Vista Mar",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    city: "Natal",
    state: "RN",
    price: 500,
  },
  {
    id: 9,
    name: "Pousada da Montanha",
    image:
      "https://plus.unsplash.com/premium_photo-1673621247833-825a713a82fb?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3,
    city: "Campos do Jordão",
    state: "SP",
    price: 180,
  },
  {
    id: 10,
    name: "Hostel Charmoso",
    image:
      "https://plus.unsplash.com/premium_photo-1689062689862-e440a90af331?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    city: "Olinda",
    state: "PE",
    price: 270,
  },
  {
    id: 11,
    name: "Hotel Centro",
    image:
      "https://plus.unsplash.com/premium_photo-1693966067170-2835a8a17a18?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 2,
    city: "São Paulo",
    state: "SP",
    price: 100,
  },
  {
    id: 12,
    name: "Resort do Sol",
    image:
      "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    city: "Rio de Janeiro",
    state: "RJ",
    price: 700,
  },
  {
    id: 13,
    name: "Hotel da Praia",
    image:
      "https://images.unsplash.com/photo-1689737969303-a32ea2f78f0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    city: "Florianópolis",
    state: "SC",
    price: 350,
  },
  {
    id: 14,
    name: "Pousada Aconchego",
    image:
      "https://images.unsplash.com/photo-1635188033457-337dccee19fe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3,
    city: "São Miguel dos Milagres",
    state: "AL",
    price: 150,
  },
  {
    id: 15,
    name: "Hostel Cosmos",
    image:
      "https://images.unsplash.com/photo-1566402724517-a6a13a2f27a9?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    city: "Belo Horizonte",
    state: "MG",
    price: 400,
  },
  {
    id: 16,
    name: "Resort Verde",
    image:
      "https://plus.unsplash.com/premium_photo-1666379456166-ac1d8fe443b1?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    city: "Ilhéus",
    state: "BA",
    price: 350,
  },
  {
    id: 17,
    name: "Hotel Middle Age",
    image:
      "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3,
    city: "Petrópolis",
    state: "RJ",
    price: 170,
  },
  {
    id: 18,
    name: "Premier Inn",
    image:
      "https://images.unsplash.com/photo-1608022099316-02dbaebb4d7e?q=80&w=1012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    city: "São Paulo",
    state: "SP",
    price: 600,
  },
];

export default initialHotels;
