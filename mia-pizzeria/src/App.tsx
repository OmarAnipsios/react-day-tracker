import "./App.css";
import Pizza from "./components/ui/Pizza/Pizza";

function App() {
  return (
    <div className="bg-olive-100 min-h-screen">
      <h1 className="text-center text-4xl font-bold my-6">
        Pizzeria Bella Torino 🍕
      </h1>
      <div className="flex flex-col md:flex-row justify-center p-4">
        <Pizza
          src="https://images.pexels.com/photos/12096782/pexels-photo-12096782.jpeg"
          name="Margherita"
          price={8.5}
          ingredients={["Tomato", "Mozzarella", "Basil"]}
          available={true}
        />
        <Pizza
          src="https://images.pexels.com/photos/29605927/pexels-photo-29605927.jpeg"
          name="Diavola"
          price={9.5}
          ingredients={["Tomato", "Mozzarella", "Spicy Salami"]}
          available={false}
        />
        <Pizza
          src="https://images.pexels.com/photos/5903101/pexels-photo-5903101.jpeg"
          name="Wurstel"
          price={9.5}
          ingredients={["Tomato", "Mozzarella", "Basil", "Wurstel"]}
          available={true}
        />
      </div>
    </div>
  );
}

export default App;
