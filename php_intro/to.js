//EXERCISE 1
var $variable1 = 'hello';
var $variable2 = 4;
var $variable3 = ['foo', 'bar'];

//EXERCISE 2
$variable1 = 4;
$variable1 = 'hello';

//EXERCISE 3
var $numbers = [3, 5, 16, 3, 4, 18];
var $result = $numbers[0];

for (var $i = 1; $i < $numbers.length; $i++) {
    $result += $numbers[$i];
}

console.log('Result = ' + $result);

//EXERCISE 4

console.log('This is a string' + 'This is another string');

//EXERCISE 5

var $my_float = 3.5;
var $my_int = Math.floor($my_float);
var $my_float2 = 5.3;
var $my_int2 = Math.floor($my_float2);

//EXERCISE 6

var $my_var1 = 'Hello';

if(typeof $my_var2 !== 'undefined'){
    console.log($my_var2);
}
else
{
    console.log($my_var1);
}

//EXERCISE 7

$check_var = "What time is it?";

switch($check_var){
    case 'hello':
        console.log('greetings');
        break;
    case 'bye':
        console.log('good bye');
        break;
    default:
        console.log('It\'s party time!');
        break;
}

//EXERCISE 8

var $student = {
    name: 'Skippy',
    class: 'English',
    grade: 75
};


//EXERCISE 9

var student1 ={};

function studentObj(name){
    this.name = name;
    this.class = 'English';
    this.grade = 75;
}

var student = new studentObj('Skippy');
console.log(student);

//EXERCISE 10
var $num_array = [35, 2, 14, 56, 65, 52];

function find_greatest_number_and_index(direction){

    var $greatest = $num_array[0];
    var $greatest_index = 0;
    var i = null;
    var endLoop = null;
    var incrementer = null;

    if (direction >=0){
        i = 0;
        endLoop = $num_array.length;
        incrementer = 1;
    }else{
        i = $num_array.length-1;
        endLoop = 0;
        incrementer = -1;
    }
    while (i != endLoop){
        if ($num_array[i] > $greatest) {
            $greatest = $num_array[i];
            $greatest_index = i;
        }
        i = i + incrementer;
    }
    return 'the greatest number is ' + $greatest + ' and the greatest index is ' + $greatest_index;
}

console.log(find_greatest_number_and_index(1));
