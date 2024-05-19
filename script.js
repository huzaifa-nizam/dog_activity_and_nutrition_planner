const activities = {
    low: [
        "Short walk around the neighborhood",
        "Gentle play with toys indoors",
        "Basic obedience training",
        "Cuddle time and relaxation"
    ],
    medium: [
        "Long walk in the park",
        "Play fetch or tug-of-war",
        "Intermediate training sessions",
        "Visit to a dog-friendly café"
    ],
    high: [
        "Jogging or running",
        "Agility training or obstacle courses",
        "Play dates with other dogs",
        "Hiking adventure"
    ]
};

const mealPlans = {
    low: `
        <h3>Meal Plan</h3>
        <p>Breakfast: Cooked chicken with brown rice and green beans</p>
        <p>Lunch: Dry kibble with a bit of wet food</p>
        <p>Dinner: Ground turkey with sweet potatoes and peas</p>
    `,
    medium: `
        <h3>Meal Plan</h3>
        <p>Breakfast: Boiled eggs with oatmeal and carrots</p>
        <p>Lunch: Dry kibble mixed with pumpkin puree</p>
        <p>Dinner: Baked salmon with quinoa and broccoli</p>
    `,
    high: `
        <h3>Meal Plan</h3>
        <p>Breakfast: Greek yogurt with blueberries and flaxseeds</p>
        <p>Lunch: Dry kibble with chicken broth</p>
        <p>Dinner: Lean beef with brown rice and spinach</p>
    `
};

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

    // Select a random activity based on energy level
    const activitiesForLevel = activities[energyLevel];
    const randomActivity = activitiesForLevel[Math.floor(Math.random() * activitiesForLevel.length)];

    // Get meal plan based on energy level
    const mealPlan = mealPlans[energyLevel];

    // Create activity and meal plan output
    const planOutput = `
        <h2>Plan for ${dogName} (${breedInfo.name})</h2>
        <img src="${dogPhoto}" alt="${dogName}">
        <p>Age: ${dogAge} years</p>
        <p>Weight: ${dogWeight} kg</p>
        <p>Energy Level: ${energyLevel.charAt(0).toUpperCase() + energyLevel.slice(1)}</p>
        <table>
            <tr><th>Activity</th><td>${randomActivity}</td></tr>
        </table>
        ${mealPlan}
    `;

    document.getElementById('planOutput').innerHTML = planOutput;
}

