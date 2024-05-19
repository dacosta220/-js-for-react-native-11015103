// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage
const names = ['KWASI', 'EDMOND', 'CHAIRMAN', 'REBECCA'];
const processedNumbers = [3, 4, 9, 16]; // This should be the result of processArray
const modifiedNames = ['kwasi', 'edmond', 'chairman', 'rebecca']; // This should be the result of formatArrayStrings

const userProfiles = createUserProfiles(names, modifiedNames);

console.log(userProfiles);
// Expected output:
// [
//     { originalName: 'KWASI', modifiedName: 'kwasi', id: 1 },
//     { originalName: 'EDMOND', modifiedName: 'edmond', id: 2 },
//     { originalName: 'CHAIRMAN', modifiedName: 'chairman', id: 3 },
//     { originalName: 'REBECCA', modifiedName: 'rebecca', id: 4 }
// ]

// Export the function if you are using modules (optional)
module.exports = createUserProfiles;
