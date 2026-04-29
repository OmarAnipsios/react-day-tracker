import Card from "../Card/Card";
import Quantity from "../Quantity/Quantity";

export default function Pizza({
  src,
  name,
  price,
  ingredients,
  available,
  id,
}: {
  src?: string;
  name: string;
  price: number;
  ingredients: string[];
  available: boolean;
  id: number;
}) {
  return (
    <Card disabled={!available}>
      <div className="h-full">
        <img
          src={src || "https://via.placeholder.com/150"}
          alt={`Pizza ${name}`}
          className="rounded-tl-xl rounded-tr-xl w-full h-50 min-w-50 object-cover"
        />
        <div className="p-4 w-auto">
          <div className="flex items-center mb-2 mt-4">
            <h2 className="text-lg font-semibold">{name || "Unnamed Pizza"}</h2>
            <p className="text-right mr-0 ml-auto">
              {price?.toFixed(2) || "0.00"}€
            </p>
          </div>
          <p>
            {ingredients?.map((ingredient, index) => (
              <span key={index}>
                {ingredient + (index < ingredients.length - 1 ? ", " : "")}
              </span>
            )) || "No ingredients listed"}
          </p>
          <Quantity pizza={{ src, name, price, ingredients, available, id }} />
          {available ? null : (
            <p className="text-gray-600 mt-4">❌ Not Available</p>
          )}
        </div>
      </div>
    </Card>
  );
}
