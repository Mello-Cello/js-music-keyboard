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
  }
  // const noteD = document.getElementById("dAudio");
  
  
  $('body').keydown((event) => {
    if (event.key === 'c') {
      playC();
    }
  });
  
       
  $('.c').click(function() { 
    noteC.currentTime = 0;
    noteC.play()
  });

  $('.d').click(function() { 
    noteD.currentTime = 0;
    noteD.play()
  });

  $('.e').click(function() { 
    noteE.currentTime = 0;
    noteE.play()
  });

  $('.f').click(function() { 
    noteF.currentTime = 0;
    noteF.play()
  });

  $('.g').click(function() { 
    noteG.currentTime = 0;
    noteG.play()
  });

  $('.a').click(function() { 
    noteA.currentTime = 0;
    noteA.play()
  });

  $('.b').click(function() { 
    noteB.currentTime = 0;
    noteB.play()
  });

  



});
