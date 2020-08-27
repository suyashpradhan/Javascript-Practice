let tally = ['y', 'y', 'n', 'n', 'y', 'n', 'n', 'n'];

/* for (let index = 0; index <= tally.length; index++) {
    const element = tally[index];
    console.log(element);
}
 */

//For Of
/* for (const idx of tally) {
    console.log(idx);
} */

/* let obj = {
    firstName: "Suyash",
    lastName: "Pradhan",
    age: 40,
}

for (let x in obj) {
    console.log(x, obj[x]);
} */


//ForEach
const books = [{
    title: 'The Alchemists',
    author: ['Paulho Coelho'],
    rating: 4.25,
}, {
    title: 'How Not To Die',
    author: ['Dr Michael Gregor', 'Matt Stone'],
    rating: 7.25,
}, {
    title: '5AM Club',
    author: ['Robin Sharma'],
    rating: 8,
}]

let book = books.forEach((e, idx) => {
    console.log(idx + ` Book Name Is: ` + e.title.toUpperCase() + ` 
    And Ratings Are: ` + Math.floor(e.rating));
})