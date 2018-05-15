<?php

function endsWith($haystack, $needle)
{
    $length = strlen($needle);

    return $length === 0 || 
    (substr($haystack, -$length) === $needle);
}

$files = scandir(__DIR__);

foreach ($files as $file)
{
    if (endsWith($file, '.html'))
        echo '<a href="/' . $file . '">' . $file . '</a><br>';
}

?>