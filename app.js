// Misal menggunakan sebuah API generatif teks yang fiktif
// Ubah ini dengan detail endpoint API nyata yang Anda gunakan
import { TextGenerator } from "https://esm.run/@google/generative-ai"";

const generator = new TextGenerator('AIzaSyBoql50jXzOG1MnIEqf0KQPvRizCOQEKYU');

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const prompt = "Create Bio For social media which talks about books. Character max 160";
        const tone = "professional";
        const maxTokens = 160; // Memastikan tidak melebihi batas karakter

        const bio = await generator.generate({
            prompt: prompt,
            tone: tone,
            maxTokens: maxTokens
        });

        // Menampilkan bio yang dihasilkan di halaman web
        document.getElementById('bio').textContent = bio.text || "Unable to generate bio.";
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('bio').textContent = 'Failed to generate bio. Please try again.';
    }
});
