'use strict'

{
  const question = document.getElementById("question");
  const choices = document.getElementById("choices");
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = shuffle( [
    {q: 'この中で、実在しない兵団は?', c: ['壁工事団', '駐屯兵団', '調査兵団']},
    {q: 'エレンは訓練兵の何期生?', c: ['104期生', '54期生', '204期生']},
    {q: 'サシャの同期からのあだ名は?', c: ['芋女', '田舎娘', 'どろぼう猫']},
    {q: 'エレンの故郷は?', c: ['シガンシナ区', 'トロスト区', 'ストヘス区']},
    {q: '845年に鎧の巨人により最初に破られた壁は?', c: ['ウォール・マリア', 'ウォール・ローゼ', 'ウォール・シーナ']},



  ]);
  let currentNum = 0;
  let isAnswered;
  let score = 0;

  

  function shuffle(arr) {
    
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
    [arr[j], arr[i]] = [arr[i], arr[j]]
    }



    return arr;
  }

  function checkAnswer(li) {
    // if (isAnswered === true) {
    if (isAnswered) {
      return;
    }

    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      // console.log('correct');
      li.classList.add('correct');
      score++;
    } else {
      // console.log('wrong');
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

  function setQuiz() {
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;

    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    // console.log(quizSet[currentNum].c);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);


  });

  if(currentNum === quizSet.length - 1) {
    btn.textContent = '得点をみる';
  }

  }
  
  setQuiz();

  btn.addEventListener('click', () => {
    if(btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');

    if(currentNum === quizSet.length - 1) {
      // console.log(`Score: ${score} / ${quizSet.length}`);
      scoreLabel.textContent = `得点: ${score} / ${quizSet.length}`;
      result.classList.remove('hidden');
    } else {
      currentNum++;
      setQuiz();
    }

});



}

///////// 中級クイズ ///////////////////////////////////////

// {
//   const question2 = document.getElementById("question2");
//   const choices2 = document.getElementById("choices2");
//   const btn2 = document.getElementById("btn2");
//   const result2 = document.getElementById("result2");
//   const scoreLabel2 = document.querySelector('#result2 > p');

//   const quizSet = shuffle( [
//     {q: 'この中で、実在しない兵団は?', c: ['壁工事団', '駐屯兵団', '調査兵団']},
//     {q: 'エレンの訓練兵の何期生?', c: ['104期生', '54期生', '204期生']},
//     {q: 'サシャの同期からのあだ名は?', c: ['芋女', '田舎娘', '肉泥棒']},



//   ]);
//   let currentNum = 0;
//   let isAnswered;
//   let score = 0;

  

//   function shuffle(arr) {
    
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//     [arr[j], arr[i]] = [arr[i], arr[j]]
//     }



//     return arr;
//   }

//   function checkAnswer(li) {
//     // if (isAnswered === true) {
//     if (isAnswered) {
//       return;
//     }

//     isAnswered = true;

//     if (li.textContent === quizSet[currentNum].c[0]) {
//       // console.log('correct');
//       li.classList.add('correct');
//       score++;
//     } else {
//       // console.log('wrong');
//       li.classList.add('wrong');
//     }

//     btn.classList.remove('disabled');
//   }

//   function setQuiz() {
//     isAnswered = false;

//     question.textContent = quizSet[currentNum].q;

//     while(choices.firstChild) {
//       choices.removeChild(choices.firstChild);
//     }

//     const shuffledChoices = shuffle([...quizSet[currentNum].c]);
//     // console.log(quizSet[currentNum].c);
//     shuffledChoices.forEach(choice => {
//       const li = document.createElement('li');
//       li.textContent = choice;
//       li.addEventListener('click', () => {
//         checkAnswer(li);
//       });
//       choices.appendChild(li);


//   });

//   if(currentNum === quizSet.length - 1) {
//     btn.textContent = 'Show Score';
//   }

//   }
  
//   setQuiz();

//   btn.addEventListener('click', () => {
//     if(btn.classList.contains('disabled')) {
//       return;
//     }
//     btn.classList.add('disabled');

//     if(currentNum === quizSet.length - 1) {
//       // console.log(`Score: ${score} / ${quizSet.length}`);
//       scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
//       result.classList.remove('hidden');
//     } else {
//       currentNum++;
//       setQuiz();
//     }

// });



// }