module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  const [ firstName, lastName, error ] = fullName.split(' ');
  if(error) return 'Error'
  if(!firstName || !lastName) return false;
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() 
       + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
};
