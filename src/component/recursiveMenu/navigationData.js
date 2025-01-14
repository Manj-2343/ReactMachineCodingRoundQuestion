export const NavigationData = [
  {
    id: 1,
    title: "Products",
    url: "/products",
    children: [
      {
        id: 11,
        title: "Electronics",
        url: "/products/electronics",
        children: [
          {
            id: 111,
            title: "Phones",
            url: "/products/electronics/phones",
          },
          {
            id: 112,
            title: "Laptops",
            url: "/products/electronics/laptops",
          },
        ],
      },
      {
        id: 12,
        title: "Clothing",
        url: "/products/clothing",
        children: [
          {
            id: 121,
            title: "Men",
            url: "/products/clothing/men",
          },
          {
            id: 122,
            title: "Women",
            url: "/products/clothing/women",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Services",
    url: "/services",
    children: [
      {
        id: 21,
        title: "Consulting",
        url: "/services/consulting",
      },
      {
        id: 22,
        title: "Support",
        url: "/services/support",
      },
    ],
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];
