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
      <div className="flex md:block flex-row h-full">
        <img
          src={src || "https://via.placeholder.com/150"}
          alt={`Pizza ${name}`}
          className="rounded-tl-xl md:rounded-tr-xl md:w-full w-48 h-48 min-w-48 object-cover"
        />
        <div className="p-4 md:w-auto w-full">
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
      </div>
    </Card>
  );
}
