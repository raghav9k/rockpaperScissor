function getComputerChoice(){
    min = Math.ceil(0);
    max = Math.floor(2);
    return Math.floor(Math.random * (max-min+1)) + min;
}

console.log(getComputerChoice); 