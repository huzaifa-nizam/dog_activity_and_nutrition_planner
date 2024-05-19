document.getElementById('planner-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData.entries());

    // Fetch breed-specific data using The Dog API
    const breedData = await fetchBreedData(formProps.dogBreed);

    // Generate personalized plan
    const plan = generatePlan(formProps, breedData);

    // Display the plan
    displayPlan(plan);
});

async function fetchBreedData(breed) {
    // In a real-world scenario, you would fetch breed-specific data from The Dog API
    // For the sake of this example, we'll use a placeholder object
    return {
        breed,
        size: 'medium',
        temperament: 'friendly',
        image: 'https://example.com/image.jpg',
    };
}

function generatePlan(formProps, breedData) {
    const activityLevels = {
        low: ['Short Walk', 'Play with Toys'],medium: ['Moderate Walk', 'Fetch Game'],
        high: ['Long Walk', 'Run with Owner'],
    };

    const mealPlans = {
        low: ['1 cup of dry food, twice a day'],
        medium: ['1.5 cups of dry food, twice a day'],
        high: ['2 cups of dry food, twice a day'],
    };

    const activity = activityLevels[formProps.dogEnergyLevel][
        Math.floor(Math.random() * activityLevels[formProps.dogEnergyLevel].length)
    ];

    const mealPlan = mealPlans[formProps.dogEnergyLevel][
        Math.floor(Math.random() * mealPlans[formProps.dogEnergyLevel].length)
    ];

    const additionalDetails = `Breed: ${breedData.breed}, Age: ${formProps.dogAge}, Weight: ${formProps.dogWeight}`;

    return {
        activityRecommendation: activity,
        mealPlan,
        additionalDetails,
    };
}

function displayPlan(plan) {
    document.getElementById('plan-output').classList.remove('hidden');
    document.getElementById('activity-recommendation').innerText = plan.activityRecommendation;
    document.getElementById('meal-plan').innerText = plan.mealPlan;
    document.getElementById('additional-details').innerText = plan.additionalDetails;
}
