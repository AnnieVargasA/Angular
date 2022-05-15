/*
    ===== Código de TypeScript =====
        typescriptlang.org
*/

import { Product, calcISV } from "./06-DesestructuracionArgumentos";

const carritoCompras: Product[]=[
  {
    description: "Motorola",
    price: 2500
  },
  {
    description: "BlackBerry",
    price: 3000
  },
];

const [total, isv] = calcISV(carritoCompras);

console.log(`
  Total: ${total}
  ISV: ${isv}
`);
