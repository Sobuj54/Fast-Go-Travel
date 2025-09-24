"use client";

import ItineraryCard from "./ItineraryCard";

const itineraryData = [
  {
    day: "1",
    title: "Arrival in London",
    description:
      "Arrive in London, meet your Tour Manager and check in to your hotel.\n" +
      "Overnight in London (Dinner included).",
    image: ["/images/london1.svg"],
  },
  {
    day: "2",
    title: "London Exploration",
    description:
      "Guided city tour of London with an expert local guide.\n" +
      "Visit landmarks including Big Ben, Houses of Parliament, Westminster Abbey, Trafalgar Square, Piccadilly Circus, Tower Bridge, and Thames River.\n" +
      "Witness the Changing of the Guard at Buckingham Palace (subject to operation).\n" +
      "Visit the legendary Lord’s Cricket Ground (time permitting).\n" +
      "Overnight in London (Breakfast, Lunch, Dinner included).",
    image: ["/images/london2.svg", "/images/london3.svg"],
  },
  {
    day: "3",
    title: "Arrival in Paris – The City of Romance, Lights, and Glamour",
    description:
      "Check out of your hotel and proceed to visit the renowned Madame Tussauds wax museum in London.\n" +
      "Travel by high-speed Eurostar train (approx. 3 hours) to Paris.\n" +
      "Upon arrival, enjoy the opportunity to explore Montmartre and Sacré-Cœur Basilica.\n" +
      "Overnight in Paris (Breakfast, Lunch, Dinner included).",
    image: ["/images/paris1.svg", "/images/paris2.svg"],
  },
  {
    day: "4",
    title: "Paris City Tour & Versailles Palace Visit",
    description:
      "Guided city tour of Paris with an expert local guide.\n" +
      "See Arc de Triomphe, Champs-Élysées, Place de la Concorde, Opera Garnier, Musée d’Orsay, Les Invalides, Pont Alexandre III, Louvre façade, and Notre Dame Cathedral.\n" +
      "Visit Versailles Palace — a symbol of absolute monarchy, UNESCO World Heritage Site.\n" +
      "Overnight in Paris (Breakfast, Lunch, Dinner included).",
    image: ["/images/paris3.svg", "/images/paris4.svg"],
  },
  {
    day: "5",
    title: "Disneyland® Paris Adventure & Romantic Seine River Cruise",
    description:
      "Choose between Disneyland® Paris or Walt Disney Studios® Park (full day).\n" +
      "Evening Seine River Cruise with views of Notre Dame, Eiffel Tower, and Louvre.\n" +
      "Overnight in Paris (Breakfast, Lunch, Dinner included).",
    image: ["/images/disney1.svg", "/images/disney2.svg"],
  },
  {
    day: "6",
    title: "Brussels & Netherlands Visit",
    description:
      "Journey to Brussels.\n" +
      "Visit the stunning Grand Place, Manneken Pis statue.\n" +
      "See Atomium (photo stop).\n" +
      "Drive to Netherlands — visit miniature park Madurodam.\n" +
      "Overnight in Netherlands (Breakfast, Lunch, Dinner included).",
    image: ["/images/brussels1.svg", "/images/brussels2.svg"],
  },
  {
    day: "7",
    title: "Amsterdam Exploration & Drive to Germany",
    description:
      "Explore Amsterdam with canal cruise.\n" +
      "Visit cheese farm and wooden shoe factory.\n" +
      "Drive to Germany, check into your hotel.\n" +
      "Overnight in Germany (Breakfast, Lunch, Dinner included).",
    image: ["/images/amsterdam.svg"],
  },
  {
    day: "8",
    title: "Heidelberg, Black Forest & Rhine Falls",
    description:
      "Visit Heidelberg Castle grounds.\n" +
      "Travel to the Black Forest region.\n" +
      "Explore Titisee village and visit Drubba cuckoo clock factory.\n" +
      "Continue to Schaffhausen to see the Rhine Falls.\n" +
      "Overnight in Central Switzerland (Breakfast, Lunch, Dinner included).",
    image: ["/images/heidelberg1.svg", "/images/heidelberg2.svg"],
  },
  {
    day: "9",
    title: "Interlaken Adventure & Jungfraujoch Excursion",
    description:
      "Excursion to Jungfraujoch – Top of Europe (highest railway station in Europe).\n" +
      "Enjoy panoramic views of the Aletsch Glacier.\n" +
      "Return via Lauterbrunnen or Grindelwald.\n" +
      "Overnight in Central Switzerland (Breakfast, Lunch, Dinner included).",
    image: ["/images/interlaken.svg"],
  },
  {
    day: "10",
    title: "Mt. Titlis Adventure, Lucerne Tour & Swiss Chocolate Experience",
    description:
      "Ride the world’s first rotating cable car to Mt. Titlis.\n" +
      "Walk across the Titlis Cliff Walk (Europe’s highest suspension bridge).\n" +
      "Explore Lucerne — see Lion Monument, Kapellbrücke (Chapel Bridge).\n" +
      "Visit Swiss Chocolate Adventure at Verkehrshaus.\n" +
      "Overnight in Central Switzerland (Breakfast, Lunch, Dinner included).",
    image: ["/images/titls1.svg", "/images/titls2.svg"],
  },
  {
    day: "11",
    title: "Vaduz Train Ride, Swarovski Crystal Museum & Innsbruck Orientation",
    description:
      "Scenic drive into Innsbruck via Vaduz (Liechtenstein).\n" +
      "Visit Swarovski Crystal World.\n" +
      "Orientation tour of Innsbruck — Golden Roof, Maria Theresien Strasse, Imperial Palace.\n" +
      "Overnight in Innsbruck/Seefeld (Breakfast, Lunch, Dinner included).",
    image: ["/images/vaduz.svg"],
  },
  {
    day: "12",
    title: "Venice Exploration",
    description:
      "Sail to St. Mark’s Square by private boat.\n" +
      "Visit St. Mark’s Basilica, Bell Tower, Clock Tower, Bridge of Sighs.\n" +
      "Enjoy romantic gondola ride.\n" +
      "Overnight in Padova/Bologna (Breakfast, Lunch, Dinner included).",
    image: ["/images/venice1.svg", "/images/venice2.svg"],
  },
  {
    day: "13",
    title: "Pisa Leaning Tower & Florence City Tour",
    description:
      "Visit Piazza dei Miracoli and the Leaning Tower of Pisa.\n" +
      "Proceed to Florence — guided walking tour covering Duomo, Campanile, Baptistery, Piazza della Signoria, Ponte Vecchio, and more.\n" +
      "Overnight in Tuscany region (Breakfast, Lunch, Dinner included).",
    image: ["/images/pisa1.svg", "/images/pisa2.svg"],
  },
  {
    day: "14",
    title: "Rome and Vatican City Adventure",
    description:
      "Guided city tour of Rome with English-speaking local guide.\n" +
      "Visit St. Peter’s Basilica and Vatican Museums including Sistine Chapel.\n" +
      "Explore Colosseum (outside view), Roman Forum, Trevi Fountain, Victor Emmanuel Monument.\n" +
      "Overnight in Rome (Breakfast, Lunch, Dinner included).",
    image: ["/images/rome1.svg", "/images/rome2.svg"],
  },
  {
    day: "15",
    title: "Farewell and Departure",
    description:
      "Check out and transfer to the airport with unforgettable memories of your European adventure.\n" +
      "Return flight to home country (Breakfast included).",
    image: ["/images/farewell.svg"],
  },
];

export default function ItineraryTimeline() {
  return (
    <div className="w-full px-2 md:px-7 py-8 md:py-5 mt-5 border-2 rounded-md shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Day Wise Itinerary
      </h2>
      <div className="flex flex-col">
        {itineraryData.map((day, index) => (
          <ItineraryCard key={index} {...day} />
        ))}
      </div>
    </div>
  );
}
