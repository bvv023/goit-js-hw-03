function slugify(title) {
    title = title.toLowerCase();
    const words = title.split(" "); // Використовуємо метод split для розділення рядка на слова
    const slug = words.join("-"); // Використовуємо метод join для з'єднання слів тире
    return slug;
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"



