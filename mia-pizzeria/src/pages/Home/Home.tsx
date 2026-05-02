import Pizza from "../../components/ui/Pizza/Pizza";

export function Home() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold my-6">
        Pizzeria Bella Torino 🍕
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center p-4">
        <Pizza
          src="https://images.pexels.com/photos/12096782/pexels-photo-12096782.jpeg"
          name="Margherita"
          price={8.5}
          ingredients={["Tomato", "Mozzarella", "Basil"]}
          available={true}
          id={1}
        />
        <Pizza
          src="https://images.pexels.com/photos/29605927/pexels-photo-29605927.jpeg"
          name="Diavola"
          price={9.5}
          ingredients={["Tomato", "Mozzarella", "Spicy Salami"]}
          available={false}
          id={2}
        />
        <Pizza
          src="https://images.pexels.com/photos/5903101/pexels-photo-5903101.jpeg"
          name="Wurstel"
          price={9.5}
          ingredients={["Tomato", "Mozzarella", "Basil", "Wurstel"]}
          available={true}
          id={3}
        />
        <Pizza
          src="https://images.pexels.com/photos/5903101/pexels-photo-5903101.jpeg"
          name="Wurstel"
          price={9.5}
          ingredients={["Tomato", "Mozzarella", "Basil", "Wurstel"]}
          available={true}
          id={4}
        />
      </div>
    </>
  );
}
