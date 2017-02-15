<!DOCTYPE html>
<html>
<head>
    <script src="to.js"></script>
</head>
<body>
<?php
//EXERCISE 1

$variable1 = 'hello';
$variable2 = 4;
$variable3 = ['foo', 'bar'];

//EXERCISE 2

$variable1 = 4;
$variable1 = 'hello';

//EXERCISE 3

$numbers = [3, 5, 16, 3, 4, 18];
$result = $numbers[0];

for($i = 1; $i < count( $numbers); $i++)
{
    $result += $numbers[$i];
}

echo 'Result = '.$result;

//EXERCISE 4 

print('This is a string' . 'This is another string');

//EXERCISE 5

$my_float = 3.5;
$my_int = (int)$my_float;
$my_float2 = 5.3;
$my_int2 = intval($my_float2);

print("my_float {$my_float2}");
print("my_int {$my_int2}");

//EXERCISE 6

$my_var1 = 'Hello';

if(isset($my_var2)){
    echo $my_var2;
}
else
{
    echo $my_var1;
}

//EXERCISE 7

$check_var = "What time is it?";

switch($check_var){
    case 'hello':
        print('greetings');
        break;
    case 'bye':
        print('good bye');
        break;
    default:
        print('It\'s party time!');
        break;
}

//EXERCISE 8

$student = ['name'=>'Skippy', 'class'=>'English', 'grade'=>75];

//EXERCISE 9

$student = new stdClass();
$student->name = 'Skippy';
$student->class = 'English';
$student->grade = 75;

//EXERCISE 10

$num_array = [-35, -2, -14, -56, -65, -52];

function find_greatest_num_and_index($direction)
{
    global $num_array;

    $greatest = null;
    $greatest_index = null;
    if($direction >= 0)
    {
        $i = 0;
        $increment = 1;
        $end_loop = count($num_array);
    }
    else
    {
        $i = count($num_array);
        $increment = -1;
        $end_loop = 0;
    }

    while( $i != $end_loop)
    {
        if( $num_array[$i] > $greatest )
        {
            $greatest = $num_array[$i];
            $greatest_index = $i;
        }
        $i += $increment;
    }
    return ['greatest' => $greatest,
        'greatest_index' => $greatest_index
    ];
}

print_r(find_greatest_num_and_index(1));

?>
</body>
</html>
