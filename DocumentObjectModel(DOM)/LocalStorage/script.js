let user = {
    name: "Suyash",
    age: 30,
    jobDesignation: 'Front End Developer'
}

localStorage.setItem("user", "Suyash");
localStorage.setItem("user2", "Soham");

/* localStorage.getItem("user2");
 */
/* localStorage.clear("user2"); */


localStorage.removeItem('user2');

localStorage.setItem('userList', JSON.stringify(user));
localStorage.getItem('userList', JSON.parse(user));