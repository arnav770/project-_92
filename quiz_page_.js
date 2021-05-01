player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
console.log("test")
    player1_score = 0;
    player2_score = 0;

     document.getElementById("player1_name").innerHTML = player1_name + " : ";
     document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

    document.getElementById("player_question").innerHTML = "Question Turn: " +  player1_name;
    document.getElementById("player_answer").innerHTML = "Answer Turn: " +  player2_name;

    function send(){
      number1 = document.getElementById("number1");
      number2 = document.getElementById("number2");
      actual_answer = parseInt(number1) * parseInt(number2);
    }

  question_turn = "player1"
  answer_turn = "player2"

  function check(){
    get_answer = document.getElementById("check_input_box").value;
    if(get_answer == actual_answer)
    {

      if(answer_turn = "player1")
      {
        update_player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = update_player1_score;
      }
      else
      {
        update_player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = update_player2_score;
      }
    }
  }