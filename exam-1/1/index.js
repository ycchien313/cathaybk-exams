/**  
There is an array, each item has such format: 
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx',  profession: ‘xxx’} 
lastName, note can be empty, customerID can only be a set of digital  numbers. 
profession can only have ‘student’, ‘freelancer’, ‘productOwner’,  ‘engineer’ or ‘systemAnalytics’. 
**/ 

const USERS = [
  { firstName: 'John', lastName: 'Doe', customerID: 123, note: '', profession: 'engineer' },
  { firstName: 'Jane', lastName: 'Smith', customerID: 456, note: '', profession: 'student' },
  { firstName: 'Alice', lastName: '', customerID: 789, note: '', profession: 'freelancer' },
  { firstName: 'Bob', lastName: 'Brown', customerID: 234, note: '', profession: 'productOwner' },
  { firstName: 'Charlie', lastName: 'Davis', customerID: 567, note: '', profession: 'systemAnalytics' }
];


/**  
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’)  to sort this array and print it out. 
**/ 

function sortUsers(users) {
  return users.sort((a, b) => {
    const aKey = `${a.firstName}${a.lastName}${a.customerID}`;
    const bKey = `${b.firstName}${b.lastName}${b.customerID}`;
    return aKey.localeCompare(bKey);
  });
}

const sortedUsers = sortUsers([...USERS]);
console.log(sortedUsers);


console.log('--------------------------------------------------------------------------------------------------------------------------');


/**  
Q2. Please sort by ‘profession’ to follow the principle.  (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ >  ‘student’’) 
**/
const PROFESSION_ORDER = {
  systemAnalytics: 1,
  engineer: 2,
  productOwner: 3,
  freelancer: 4,
  student: 5
};

function sortByProfession(users) {
  return users.sort((a, b) => {
    const aProfession = PROFESSION_ORDER[a.profession] || Infinity;
    const bProfession = PROFESSION_ORDER[b.profession] || Infinity;
    return aProfession - bProfession;
  });
}

const sortedByProfession = sortByProfession([...USERS]);
console.log(sortedByProfession);