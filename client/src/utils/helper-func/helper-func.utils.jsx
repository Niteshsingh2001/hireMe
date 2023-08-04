
export function truncatedText(text, wordCount) {
    if (!text) {
        return '';
    }
    const truncatedText = text.split(' ').slice(0, wordCount).join(' ');
    return truncatedText + '...';

};
export function getTitle(company, post) {
    const Constants = {
        similarWords: [
            `Similar Words for ${company} is Hiring ${post}`,
            `${company} is Recruiting ${post}s.`,
            `${company} is Looking for ${post}s to Join Their Team.`,
            `${company} is Seeking ${post}s for Employment.`,
            `${company} is Offering Job Opportunities to ${post}s.`,
            `${company} is Accepting Applications for ${post} Positions.`,
            `${company} is Hiring ${post.replace(/\b\w/g, (c) => c.toUpperCase())}.`,
            `${company} is Recruiting ${post.replace(/\b\w/g, (c) => c.toUpperCase())}s.`,
            `${company} is Looking for ${post.replace(/\b\w/g, (c) => c.toUpperCase())}s to Join Their Team.`,
            `${company} is Seeking ${post.replace(/\b\w/g, (c) => c.toUpperCase())}s for Employment.`,
            `${company} is Offering Job Opportunities to ${post.replace(/\b\w/g, (c) => c.toUpperCase())}s.`,
            `${company} is Accepting Applications for ${post.replace(/\b\w/g, (c) => c.toUpperCase())} Positions.`,
            `Job Opportunities at ${company} for ${post}s.`,
            `Join ${company} as a ${post}.`,
            `${company} Career: ${post} Positions Available.`,
        ]
    };

    // Select a random similar word title
    const randomIndex = Math.floor(Math.random() * Constants.similarWords.length);
    return Constants.similarWords[randomIndex];
}
