async function plan() {
    const dogName = document.getElementById('dogName').value;
    const dogBreed = document.getElementById('dogBreed').value;
    const dogAge = document.getElementById('dogAge').value;
    const dogWeight = document.getElementById('dogWeight').value;
    const energyLevel = document.getElementById('energyLevel').value;
    const dogPhoto = document.getElementById('dogPhoto').value || 'https://via.placeholder.com/100';

    if (!dogName || !dogBreed || !dogAge || !dogWeight || !energyLevel) {
        alert('Please fill in all fields');
        return;
    }

    // Fetch breed-specific information from The Dog API
    const breedResponse = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${dogBreed}`);
    const breedData = await breedResponse.json();

    if (breedData.length === 0) {
        alert('Breed not found');
        return;
    }

    const breedInfo = breedData[0];

    // Fetch random activity suggestion from Bored API
    const activityResponse = await fetch('https://www.boredapi.com/api/activity/');
    const activityData = await activityResponse.json();

    // Generate a meal plan (dummy data for example)
    const mealPlan = `
        <h3>Meal Plan</h3>
        <p>Breakfast: Chicken and rice</p>
        <p>Lunch: Kibble with carrots</p>
        <p>Dinner: Salmon and sweet potatoes</p>
    `;

    // Create activity and meal plan output
    const planOutput = `
        <h2>Plan for ${dogName} (${breedInfo.name})</h2>
        <img src="${dogPhoto}" alt="${dogName}">
        <p>Age: ${dogAge} years</p>
        <p>Weight: ${dogWeight} kg</p>
        <p>Energy Level: ${energyLevel.charAt(0).toUpperCase() + energyLevel.slice(1)}</p>
        <table>
            <tr><th>Activity</th><td>${activityData.activity}</td></tr>
        </table>
        ${mealPlan}
    `;

    document.getElementById('planOutput').innerHTML = planOutput;
}
