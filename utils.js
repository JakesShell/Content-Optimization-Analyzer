// server/utils.js
const analyzeContent = (content) => {
    // Mock analysis results for demonstration
    const keywordDensity = calculateKeywordDensity(content);
    const readabilityScore = calculateReadability(content);

    return {
        keywordDensity,
        readabilityScore,
        suggestions: [
            "Use more headers (H1, H2, H3) to structure your content.",
            "Include more relevant keywords.",
            "Shorten sentences for better readability."
        ],
    };
};

const calculateKeywordDensity = (content) => {
    // Example implementation
    const words = content.split(/\s+/);
    const keywordCount = words.filter(word => word.toLowerCase() === 'example').length; // Using 'example' as a keyword
    return (keywordCount / words.length * 100).toFixed(2);
};

const calculateReadability = (content) => {
    // Simple readability score calculation
    const sentences = content.split(/[.!?]/).length - 1;
    const words = content.split(/\s+/).length;
    return (words / sentences).toFixed(2); // Average words per sentence
};

module.exports = { analyzeContent };
