/*
    ===== Código de TypeScript =====
    typescriptlang.org
*/
export interface Product {
  description: string;
  price: number;
}

const cellphone: Product = {
  description: "Xiaomi",
  price: 3000,
};
const tablet: Product = {
  description: "AirPad",
  price: 15000,
};

export function calcISV(productos: Product[]): [number, number] {
  let total = 0;
  productos.forEach(({ price }) => {
    total += price;
  });
  return [total, total * 0.15];
}

const articulos = [cellphone, tablet];

const [total, isv] = calcISV(articulos);

console.log(`
    Total: ${total}
    ISV: ${isv}
`);
