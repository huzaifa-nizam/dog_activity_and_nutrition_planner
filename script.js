document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('dogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dogName = document.getElementById('dogName').value;
    const dogBreed = document.getElementById('dogBreed').value;
    const dogAge = parseInt(document.getElementById('dogAge').value);
    const dogWeight = parseFloat(document.getElementById('dogWeight').value);
    const energyLevel = document.getElementById('energyLevel').value;
    const photoURL = document.getElementById('photoURL').value;

    // Simulated data processing (replace with actual logic)
    const activity = getActivity(energyLevel);
    const mealPlan = getMealPlan(energyLevel);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
      <h2>Hi ${dogName}!</h2>
      <p>Activity: ${activity}</p>
      <p>Meal Plan: ${mealPlan}</p>
    `;
    outputDiv.style.display = 'block';
  });
});

function getActivity(energyLevel) {
  const activities = {
    low: ['Short walks', 'Gentle play sessions'],
    medium: ['Moderate walks', 'Fetch sessions'],
    high: ['Long hikes', 'Agility training'],
  };
  const randomIndex = Math.floor(Math.random() * activities[energyLevel].length);
  return activities[energyLevel][randomIndex];
}

function getMealPlan(energyLevel) {
  const mealPlans = {
    low: ['Lower calorie intake', 'More fiber-rich foods'],
    medium: ['Balanced diet with protein and carbohydrates'],
    high: ['Higher calorie intake', 'More protein-rich foods'],
  };
  const randomIndex = Math.floor(Math.random() * mealPlans[energyLevel].length);
  return mealPlans[energyLevel][randomIndex];
}
