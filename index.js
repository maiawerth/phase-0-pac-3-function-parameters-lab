function logTwoValues(name, language) {
    console.log(`The two values are ${name} and ${language}.`);
  }
  
  function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }
  
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  console.log(introductionWithLanguage("Name", "JavaScript"));
  
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  