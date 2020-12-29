var Ply_1 = localStorage.getItem("Player_1");
var Ply_2 = localStorage.getItem("Player_2");

var Ply1_S = 0;
var Ply2_S = 0;

document.getElementById("Py1_Name").innerHTML = Ply_1 + " : ";
document.getElementById("Py2_Name").innerHTML = Ply_2 + " : ";

document.getElementById("P1_S").innerHTML = Ply1_S;
document.getElementById("P2_S").innerHTML = Ply2_S;

document.getElementById("Ply_Q").innerHTML = "Question Turn - " + Ply_2;
document.getElementById("Ply_A").innerHTML = "Answer Turn - " + Ply_1;

function Send(){
    Get_Word = document.getElementById("Word").value;
    Get_Word = Get_Word.toLowerCase();
    console.log("Lower Case: " + Get_Word);

    charAt1 = Get_Word.charAt(1);
    console.log("CHARAT1 activated!!! : " + charAt1);

    charAt2 = Get_Word.charAt(Math.floor( Get_Word.length / 2 ));
    console.log("CHARAT2 activated!!! : " + charAt2);

    charAt3 = Get_Word.charAt(Get_Word.length - 1);
    console.log("CHARAT3 activated!!! : " + charAt3);

    R_C1 = Get_Word.replace(charAt1, "_");
    console.log(R_C1);

    R_C2 = R_C1.replace(charAt2, "_");
    console.log(R_C2);

    R_C3 = R_C2.replace(charAt3, "_");
    console.log(R_C3);

    Question = "<h4 id='Word_D'> Q. " + R_C3 + "</h4>";
    Answer = "<br>Answer: <input type='text' id='word_display'>";
    Button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
    Label= "<label id='Cheesy_Dip'>" + "</label>";

    row = Question + Answer + Button;
    document.getElementById("Output").innerHTML = row + Label;

    document.getElementById("Word").value = "";
}

var Q_Turn = "Player_2";
var A_Turn = "Player_1";

function Check(){
    Get_A = document.getElementById("word_display").value;
    console.log(Get_A);
    answer = Get_A.toLowerCase();
    if(answer == Get_Word){
        if(A_Turn=="Player_1"){
             Ply1_S = Ply1_S + 1;
             document.getElementById("P1_S").innerHTML = Ply1_S;
        }
        else{
            Ply2_S = Ply2_S + 1;
            document.getElementById("P2_S").innerHTML = Ply2_S;
        }
        Label = "<label id='Cheesy_Dip'>" + "Correct Answer!" + "</label>";
        document.getElementById("Output").innerHTML = Label;
    }
    else{
        Label = "<label id='Cheesy_Dip'>" + "Sorry, Wrong Answer! :(" + "</label>";
        document.getElementById("Output").innerHTML = Label;
    }
    if(Q_Turn=="Player_2"){
        Q_Turn = "Player_1";
        document.getElementById("Ply_Q").innerHTML = "Question Turn - " + Ply_1;
    }
    else{
        Q_Turn = "Player_2";
        document.getElementById("Ply_Q").innerHTML = "Question Turn - " + Ply_2;
    }
    if(A_Turn=="Player_1"){
        A_Turn = "Player_2";
        document.getElementById("Ply_A").innerHTML = "Answer Turn - " + Ply_2;
    }
    else{
        A_Turn = "Player_1";
        document.getElementById("Ply_A").innerHTML = "Answer Turn - " + Ply_1;
    }

    document.getElementById("Output").innerHTML = Label;
}