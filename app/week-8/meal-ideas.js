// app/week-8/meal-ideas.js
"use client";

import { useState, useEffect } from "react";

// Define the API fetching function for meal ideas outside the component
const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
};

// Define the API fetching function for meal details (ingredients) outside the component
const fetchMealDetails = async (mealId) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null; // The API returns an array, we want the first item
  } catch (error) {
    console.error("Error fetching meal details:", error);
    return null;
  }
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null); // State to hold details of the selected meal

  // Define the load function inside the component
  const loadMealIdeas = async () => {
    // Clear selected meal details when new ingredient is loaded
    setSelectedMeal(null);
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  // Function to handle meal selection and fetch its details
  const handleMealSelect = async (mealId) => {
    const details = await fetchMealDetails(mealId);
    setSelectedMeal(details);
  };

  // Use useEffect to load meal ideas when the ingredient prop changes
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    } else {
      setMeals([]); // Clear meals if no ingredient is selected
      setSelectedMeal(null); // Clear selected meal if no ingredient
    }
  }, [ingredient]);

  return (
    <div className="p-4 bg-slate-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-orange-400">Meal Ideas</h2>
      {ingredient ? (
        <>
          <p className="text-xl text-white mb-4">
            Meal ideas for: <span className="font-semibold text-orange-300 capitalize">{ingredient}</span>
          </p>
          {meals.length > 0 ? (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="bg-slate-900 p-4 rounded-lg shadow-md cursor-pointer hover:bg-orange-800 transition-colors duration-200"
                  onClick={() => handleMealSelect(meal.idMeal)}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{meal.strMeal}</h3>
                  {meal.strMealThumb && (
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="w-full h-40 object-cover rounded-md mb-2"
                      // Fallback image in case the original image fails to load
                      onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/300x200/4A5568/FFFFFF?text=No+Image`; }}
                    />
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white">No meal ideas found for {ingredient}.</p>
          )}

          {/* Display selected meal details (ingredients) */}
          {selectedMeal && (
            <div className="mt-8 p-6 bg-slate-900 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">{selectedMeal.strMeal} Ingredients:</h3>
              <ul className="list-disc list-inside text-white">
                {/* Iterate through ingredients (strIngredient1 to strIngredient20) */}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                  const ingredientName = selectedMeal[`strIngredient${i}`];
                  const measure = selectedMeal[`strMeasure${i}`];
                  if (ingredientName && ingredientName.trim() !== "") {
                    return (
                      <li key={i} className="mb-1">
                        {measure && measure.trim() !== "" ? `${measure} ` : ""}{ingredientName}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
              {selectedMeal.strYoutube && (
                <div className="mt-4">
                  <a
                    href={selectedMeal.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Watch on YouTube
                  </a>
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <p className="text-white text-lg">Select an item from your shopping list to see meal ideas.</p>
      )}
    </div>
  );
};

export default MealIdeas;
