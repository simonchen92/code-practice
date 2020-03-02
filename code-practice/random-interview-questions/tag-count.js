// Count the tags in the array

const developers = [
  'Language:JavaScript,Role:WebDeveloper,Hobby:Basketball',
  'Language:Python,Role:SoftwareEngineer,Hobby:Reading',
  'Language:Ruby,Role:SoftwareEngineer,Hobby:Running',
  'Language:GO,Role:AndroidDeveloper,Hobby:Basketball',
  'Language:JavaScript,Role:WebDeveloper,Hobby:Volleyball'
]

const tagCounts = skills => {
  const count = {}
  for (let i = 0; i < skills.length; i++) {
    const currLine = skills[i]
    const splitLine = currLine.split(',')
    for (let j = 0; j < splitLine.length; j++) {
      if (count[splitLine[j]]) {
        count[splitLine[j]]++
      } else {
        count[splitLine[j]] = 1
      }
    }
  }
  return count
}

console.log(tagCounts(developers))
