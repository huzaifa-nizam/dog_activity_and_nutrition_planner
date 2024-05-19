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
        "Cooked chicken with brown rice and green beans",
        "Dry kibble with a bit of wet food",
        "Ground turkey with sweet potatoes and peas"
    ],
    medium: [
        "Boiled eggs with oatmeal and carrots",
        "Dry kibble mixed with pumpkin puree",
        "Baked salmon with quinoa and broccoli"
    ],
    high: [
        "Greek yogurt with blueberries and flaxseeds",
        "Dry kibble with chicken broth",
        "Lean beef with brown rice and spinach"
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dogForm');
    form.addEventListener('submit', plan);
});

async function plan(event) {
    event.preventDefault();

    const dogName = document.getElementById('dogName').value;
    const dogBreed = document.getElementById('dogBreed').value;
    const dogAge = document.getElementById('dogAge').value;
    const dogWeight = document.getElementById('dogWeight').value;
    const energyLevel = document.getElementById('energyLevel').value;
    const dogPhoto = document.getElementById('dogPhoto').files[0];

    if (!dogName || !dogBreed || !dogAge || !dogWeight || !energyLevel || !dogPhoto) {
        alert('Please fill in all fields');
        return;
    }

    try {
        const breedResponse = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${dogBreed}`);
        const breedData = await breedResponse.json();

        if (breedData.length === 0) {
            alert('Breed not found');
            return;
        }

        const breedInfo = breedData[0];
        
        const activitiesForLevel = activities[energyLevel];
        let numberOfActivities;
        if (energyLevel === 'high') {
            numberOfActivities = 3;
        } else if (energyLevel === 'medium') {
            numberOfActivities = 2;
        } else {
            numberOfActivities = 1;
        }

        const selectedActivities = [];
        for (let i = 0; i < numberOfActivities; i++) {
            const randomIndex = Math.floor(Math.random() * activitiesForLevel.length);
            selectedActivities.push(activitiesForLevel[randomIndex]);
            activitiesForLevel.splice(randomIndex, 1); // Remove selected activity to avoid duplicates
        }

        const mealPlansForLevel = mealPlans[energyLevel];
        const randomMealPlan = mealPlansForLevel[Math.floor(Math.random() * mealPlansForLevel.length)];

        const reader = new FileReader();
        reader.onload = function(event) {
            const dogImage = event.target.result;
            const planOutput = `
                <div style="text-align: center;">
                    <h2>Plan for ${dogName} (${breedInfo.name})</h2>
                    <img src="${dogImage}" alt="${dogName}" style="max-width: 100px; border-radius: 50%;">
                    <p><strong>Age:</strong> ${dogAge} years</p>
                    <p><strong>Weight:</strong> ${dogWeight} kg</p>
                    <p><strong>Energy Level:</strong> ${energyLevel.charAt(0).toUpperCase() + energyLevel.slice(1)}</p>
                    <p><strong>Activities:</strong></p>
                    <ul style="list-style: none; text-align: centre; padding-left: 20px;">
                        ${selectedActivities.map(activity => `<li>${activity}</li>`).join('')}
                    </ul>
                    <p><strong>Meal Plan:</strong> ${randomMealPlan}</p>
                </div>
            `;
            document.getElementById('planOutput').innerHTML = planOutput;
        };
        reader.readAsDataURL(dogPhoto);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while generating the plan. Please try again later.');
    }
}
