$(document).ready( function() {
  
// event handler: click an item with a class of 'c', play file in div with class 'cAudio'

  const noteC = $('#cAudio')[0];
  const noteD = $("#dAudio")[0];
  const noteE = $("#eAudio")[0];
  const noteF = $("#fAudio")[0];
  const noteG = $("#gAudio")[0];
  const noteA = $("#aAudio")[0];
  const noteB = $("#bAudio")[0];

  const playC = () => {
    noteC.currentTime = 0;
    noteC.play()
  };

  const playD = () => {
    noteD.currentTime = 0;
    noteD.play();
  };
  
  const playE = () => {
    noteE.currentTime = 0;
    noteE.play();
  };
  
  const playF = () => {
    noteF.currentTime = 0;
    noteF.play();
  };
  
  const playG = () => {
    noteG.currentTime = 0;
    noteG.play();
  };
  
  const playA = () => {
    noteA.currentTime = 0;
    noteA.play();
  };
  
  const playB = () => {
    noteB.currentTime = 0;
    noteB.play();
  };


  // const noteD = document.getElementById("dAudio");
  
  
  $('body').keydown((event) => {
    if (event.key === 'c') {
      playC();
    } else if (event.key === 'd') {
      playD();
    } else if (event.key === 'e') {
      playE();
    } else if (event.key === 'f') {
      playF();
    } else if (event.key === 'g') {
      playG();
    } else if (event.key === 'a') {
      playA();
    } else if (event.key === 'b') {
      playB();
    }
  });
   
  $('.c').click(function() { 
    playC();
  });

  $('.d').click(function() { 
    playD()
  });

  $('.e').click(function() { 
    playE();
  });

  $('.f').click(function() { 
    playF();
  });

  $('.g').click(function() { 
    playG();
  });

  $('.a').click(function() { 
    playA();
  });

  $('.b').click(function() { 
    playB();
  });

  



});
