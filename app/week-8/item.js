export default function Item({name, quantity, category}) {
  return (
<section className="m-2 bg-blue-100">
<h3 className="text-2xl font-bold text-black">{name}</h3>
<p>Quantity {quantity}</p>
<p>Category: {category}</p>
</section>
  );
}