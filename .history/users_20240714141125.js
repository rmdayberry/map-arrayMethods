const users = [
  { firstName: "Alice", lastName: "Johnson", points: 120 },
  { firstName: "Bob", lastName: "Smith", points: 99 },
  { firstName: "Charlie", lastName: "Brown", points: 180 },
];
const membership = users.map((user) => {
  return {
    fullName: `${user.firstName} ${users.lastName}`,
    membershipStatus: user.points > 100 ? "Premium" : "Standard",
  };
});

console.log(membership);
