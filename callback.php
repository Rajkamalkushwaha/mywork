<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide("slow" ,function(){
           alter("the paragraph is hidden");
        });
    )};
)};

</script>
</head>
<body>

<button>Hide</button>

<p>Hide the paragraph after click button.</p>

</body>
</html>