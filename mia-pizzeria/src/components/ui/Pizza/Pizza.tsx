import Card from "../Card/Card";

export default function Pizza({
  src,
  name,
  price,
  ingredients,
  available,
}: {
  src?: string;
  name: string;
  price: number;
  ingredients: string[];
  available: boolean;
}) {
  return (
    <Card disabled={!available}>
      <div className="w-full bg-center">
        <img
          src={src || "https://via.placeholder.com/150"}
          alt={`Pizza ${name}`}
          className="rounded-tl-xl rounded-tr-xl h-48 w-full object-cover"
        />
      </div>
      <div className="p-4">
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
        {available ? null : (
          <p className="text-gray-600 mt-4">❌ Not Available</p>
        )}
      </div>
    </Card>
  );
}
