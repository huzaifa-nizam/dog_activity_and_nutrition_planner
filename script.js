const activities = {
    low: [
        "Short walk around the neighborhood",
        "Gentle play with toys indoors",
        "Basic obedience training",
        "Cuddle time and relaxation",
        "Scent games with treats",
        "Puzzle toys",
        "Slow-paced fetch",
        "Grooming session",
        "Massage and stretching",
        "Leisurely stroll in the yard"
    ],
    medium: [
        "Long walk in the park",
        "Play fetch or tug-of-war",
        "Intermediate training sessions",
        "Visit to a dog-friendly café",
        "Interactive toys",
        "Hide and seek",
        "Playing with a flirt pole",
        "Swimming",
        "Playing frisbee",
        "Trail walking"
    ],
    high: [
        "Jogging or running",
        "Agility training or obstacle courses",
        "Play dates with other dogs",
        "Hiking adventure",
        "Advanced obedience training",
        "Playing with a ball launcher",
        "Dog sports like flyball",
        "Beach running",
        "Tracking exercises",
        "Bike rides with a dog leash attachment"
    ]
};

const mealPlans = {
    low: [
        `<h3>Meal Plan</h3>
         <p>Breakfast: Cooked chicken with brown rice and green beans</p>
         <p>Lunch: Dry kibble with a bit of wet food</p>
         <p>Dinner: Ground turkey with sweet potatoes and peas</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Scrambled eggs with spinach</p>
         <p>Lunch: Dry kibble mixed with chicken broth</p>
         <p>Dinner: Boiled chicken with quinoa and carrots</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Cottage cheese with apple slices</p>
         <p>Lunch: Dry kibble with pumpkin puree</p>
         <p>Dinner: Steamed fish with brown rice and green beans</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Yogurt with blueberries</p>
         <p>Lunch: Dry kibble with mixed vegetables</p>
         <p>Dinner: Beef stew with sweet potatoes and peas</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Oatmeal with peanut butter</p>
         <p>Lunch: Dry kibble with turkey slices</p>
         <p>Dinner: Chicken and rice with peas and carrots</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Boiled eggs with a slice of toast</p>
         <p>Lunch: Dry kibble with beef broth</p>
         <p>Dinner: Lamb with quinoa and green beans</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Apple slices with peanut butter</p>
         <p>Lunch: Dry kibble with salmon oil</p>
         <p>Dinner: Turkey and rice with spinach and carrots</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Blueberries with yogurt</p>
         <p>Lunch: Dry kibble with cottage cheese</p>
         <p>Dinner: Chicken with sweet potatoes and green beans</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Scrambled eggs with cheese</p>
         <p>Lunch: Dry kibble with green beans</p>
         <p>Dinner: Fish with brown rice and carrots</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Banana slices with peanut butter</p>
         <p>Lunch: Dry kibble with beef jerky</p>
         <p>Dinner: Pork with quinoa and green beans</p>`
    ],
    medium: [
        `<h3>Meal Plan</h3>
         <p>Breakfast: Boiled eggs with oatmeal and carrots</p>
         <p>Lunch: Dry kibble mixed with pumpkin puree</p>
         <p>Dinner: Baked salmon with quinoa and broccoli</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Cottage cheese with banana slices</p>
         <p>Lunch: Dry kibble with turkey and vegetables</p>
         <p>Dinner: Chicken with sweet potatoes and peas</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Greek yogurt with blueberries</p>
         <p>Lunch: Dry kibble with chicken broth</p>
         <p>Dinner: Ground beef with rice and green beans</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Scrambled eggs with spinach</p>
         <p>Lunch: Dry kibble with salmon oil</p>
         <p>Dinner: Turkey with quinoa and broccoli</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Peanut butter toast</p>
         <p>Lunch: Dry kibble with lamb and vegetables</p>
         <p>Dinner: Pork with sweet potatoes and peas</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Cottage cheese with apple slices</p>
         <p>Lunch: Dry kibble with beef jerky</p>
         <p>Dinner: Fish with rice and carrots</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Yogurt with blueberries</p>
         <p>Lunch: Dry kibble with chicken and vegetables</p>
         <p>Dinner: Beef stew with sweet potatoes and green beans</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Scrambled eggs with cheese</p>
         <p>Lunch: Dry kibble with turkey slices</p>
         <p>Dinner: Lamb with quinoa and broccoli</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Oatmeal with peanut butter</p>
         <p>Lunch: Dry kibble with salmon oil</p>
         <p>Dinner: Chicken with rice and peas</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Banana slices with yogurt</p>
         <p>Lunch: Dry kibble with beef broth</p>
         <p>Dinner: Turkey with sweet potatoes and green beans</p>`
    ],
    high: [
        `<h3>Meal Plan</h3>
         <p>Breakfast: Greek yogurt with blueberries and flaxseeds</p>
         <p>Lunch: Dry kibble with chicken broth</p>
         <p>Dinner: Lean beef with brown rice and spinach</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Cottage cheese with banana slices</p>
         <p>Lunch: Dry kibble with turkey and vegetables</p>
         <p>Dinner: Baked salmon with quinoa and broccoli</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Scrambled eggs with spinach</p>
         <p>Lunch: Dry kibble with lamb and vegetables</p>
         <p>Dinner: Chicken with sweet potatoes and peas</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Boiled eggs with oatmeal and carrots</p>
         <p>Lunch: Dry kibble with beef jerky</p>
         <p>Dinner: Fish with rice and green beans</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Peanut butter toast</p>
         <p>Lunch: Dry kibble with chicken broth</p>
         <p>Dinner: Turkey with quinoa and broccoli</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Yogurt with blueberries</p>
         <p>Lunch: Dry kibble with turkey and vegetables</p>
         <p>Dinner: Lean beef with brown rice and spinach</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Oatmeal with peanut butter</p>
         <p>Lunch: Dry kibble with lamb and vegetables</p>
         <p>Dinner: Baked salmon with sweet potatoes and peas</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Cottage cheese with apple slices</p>
         <p>Lunch: Dry kibble with chicken and vegetables</p>
         <p>Dinner: Ground turkey with rice and broccoli</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Scrambled eggs with cheese</p>
         <p>Lunch: Dry kibble with salmon oil</p>
         <p>Dinner: Pork with sweet potatoes and green beans</p>`,
        `<h3>Meal Plan</h3>
         <p>Breakfast: Banana slices with yogurt</p>
         <p>Lunch: Dry kibble with chicken broth</p>
         <p>Dinner: Turkey with quinoa and spinach</p>`
    ]
};

async function plan() {
    const dogName = document.getElementById('dogName').value;
    const dogBreed = document.getElementById('dogBreed').value;
    const dogAge = document.getElementById('dogAge').value;
    const dogWeight = document.getElementById('dogWeight').value;
    const energyLevel = document.getElementById('energyLevel').value;
    const dogPhoto = document.getElementById('dogPhoto').files[0]; // Accessing the uploaded file

    if (!dogName || !dogBreed || !dogAge || !dogWeight || !energyLevel ) {
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

    // Select a random meal plan based on energy level
    const mealPlansForLevel = mealPlans[energyLevel];
    const randomMealPlan = mealPlansForLevel[Math.floor(Math.random() * mealPlansForLevel.length)];

    // Display uploaded image
    const reader = new FileReader();
    reader.onload = function(event) {
        const dogImage = event.target.result;
        // Create activity and meal plan output
        const planOutput = `
            <h2>Plan for ${dogName} (${breedInfo.name})</h2>
            <img src="${dogImage}" alt="${dogName}">
            <p>Age: ${dogAge} years</p>
            <p>Weight: ${dogWeight} kg</p>
            <p>Energy Level: ${energyLevel.charAt(0).toUpperCase() + energyLevel.slice(1)}</p>
            <table>
                <tr><th>Activity</th><td>${randomActivity}</td></tr>
            </table>
            ${randomMealPlan}
        `;

        document.getElementById('planOutput').innerHTML = planOutput;
    };
    reader.readAsDataURL(dogPhoto); // Convert uploaded file to Data URL
}

// Observe planOutput div for changes using MutationObserver
const planOutput = document.getElementById('planOutput');
const observer = new MutationObserver(function(mutationsList, observer) {
    // Handle mutations here if needed
});
observer.observe(planOutput, { childList: true });
