<?php
include("connectSQL.php");
include("registration.php");
$connected = False;
$alreadyUsed = False;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/connection_style.css">
    
</head>
<body>
    <header>
        header
    </header>
    <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="#" method="GET">
                <h1>Create Account</h1>
                <input type="text" placeholder="Name" name="name" required/>
                <input type="email" placeholder="Email" name="email" required/>
                <input type="password" placeholder="Password" name="password" required/>
                <input type="submit" class="button" value="Sign up"></button>
            </form>
            <?php 
            echo "<script>console.log($alreadyUsed)</script>";
				if (isset($_GET['name']) and isset($_GET['email']) and isset($_GET['password'])){ 
                    $res=get_users();
                    for ($i=0; $i<count($res); $i++){
                        if ($res[$i]['name']==$_GET['name'] {
                            echo("<br><br><i><strong><span style='color:red'>*</span> Name already taken.</strong></i>");
                            $alreadyUsed = True;
                            echo "<script>console.log($alreadyUsed)</script>";
                        }
                        if $res[$i]['email']==$_GET['email'] {
                            echo("<br><br><i><strong><span style='color:red'>*</span> Email alrdeady used.</strong></i>");
                            $alreadyUsed = True;
                            echo "<script>console.log($alreadyUsed)</script>";
                        }
                    }	
                    if (!$alreadyUsed){
                        echo "<script>console.log($alreadyUsed)</script>";
					    insert_user($_GET['name'],$_GET['email'],$_GET['password']);
                        
                    }        
				}
				?>
        </div>
        <div class="form-container sign-in-container">
            <form action="#" method="GET">
                <h1>Sign In</h1>
                <input type="text" placeholder="Email or Name" name="name2" required/>
                <input type="password" placeholder="Password" name="password2" required/>
                <input type="submit" class="button" value="Sign in" name="submit"></button>  
                <?php
                if (isset($_GET['submit'])){ 
                    if ($connected == False){
                        echo("<br><br><i><strong><span style='color:red'>*</span> Password or username incorrect</strong></i>");
                    }	
                }
                ?>
            </form> 
            <?php
			if (isset($_GET['name2']) and isset($_GET['password2'])){ 
				$res=get_users();
				for ($i=0; $i<count($res); $i++){
					if ($res[$i]['name']==$_GET['name2'] or $res[$i]['email']==$_GET['name2'] and $res[$i]['password']==$_GET['password2']){
						$connected = True;
					}
				}		
			}
			if ($connected){
				echo "<script>window.location.href='../index.html';</script>";
				exit;
			}
			?>                             
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome back !</h1>
                    <p>Please login with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, friend !</h1>
                    <p>Start journey with us !</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <a href="../index.html">Back to home</a>
    </footer>

    <script src="../js/connection_animations.js"></script>
</body>
</html>
<?php
include("disconnectSQL.php");
?>