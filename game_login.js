function AddUser(){
    Ply_1 = document.getElementById("player1_name_input").value;
    Ply_2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("Player_1", Ply_1);
    localStorage.setItem("Player_2", Ply_2);

    window.location = "Game.html";
}