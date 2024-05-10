// Correctly formatted import statement
import { TextGenerator } from "https://esm.run/@google/generative-ai";

// Create an instance of TextGenerator with your API key
const generator = new TextGenerator('AIzaSyBoql50jXzOG1MnIEqf0KQPvRizCOQEKYU');

// Listen for when the DOM content has fully loaded
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Define the prompt, tone, and maximum number of tokens
        const prompt = "Create Bio For social media which talks about books. Character max 160";
        const tone = "professional";
        const maxTokens = 160; // Ensure the character limit is not exceeded

        // Generate the bio using the specified parameters
        const bio = await generator.generate({
            prompt: prompt,
            tone: tone,
            maxTokens: maxTokens
        });

        // Display the generated bio on the web page
        document.getElementById('bio').textContent = bio.text || "Unable to generate bio.";
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('bio').textContent = 'Failed to generate bio. Please try again.';
    }
});
