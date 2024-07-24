function toggleMode() {
    var body = document.body;
    var button = document.getElementById('modeToggleBtn');
    var about = document.getElementById('about');
    var proiecte = document.getElementById('proiecte');
    var contact = document.getElementById('contact');
    var vidbx = document.getElementById('vidbx');
    var vidbx1 = document.getElementById('vidbx1');
    var vidbx2 = document.getElementById('vidbx2');
    var vidbx3 = document.getElementById('vidbx3');
    var vidbx4 = document.getElementById('vidbx4');
    var moreL = document.querySelector('.moreL');
    var moreJ = document.querySelector('.moreJ');
    var moreG = document.querySelector('.moreG');
    var moreP = document.querySelector('.moreP');
    var moreW = document.querySelector('.moreW');
  
    if (body.style.backgroundColor === 'rgb(238, 238, 238)') {
      body.style.backgroundColor = '#0B0B0D';
      body.style.color = '#0B0B0D';
      about.style.backgroundColor = '#949598';
      about.style.color = '#0B0B0D';
      proiecte.style.color = '#D3D5FD';
      contact.style.backgroundColor = '#949598';
      vidbx.style.backgroundColor = '#00000090';
      vidbx.style.borderColor = "#ffffff";
      vidbx1.style.backgroundColor = '#00000090';
      vidbx1.style.borderColor = "#ffffff";
      vidbx2.style.backgroundColor = '#00000090';
      vidbx2.style.borderColor = "#ffffff";
      vidbx3.style.backgroundColor = '#00000090';
      vidbx3.style.borderColor = "#ffffff";
      vidbx4.style.backgroundColor = '#00000090';
      vidbx4.style.borderColor = "#ffffff";
      button.textContent = 'Dark Mode';
  
      moreL.style.color = 'rgb(255, 255, 255)';
      moreL.style.borderColor = '#ffffff';
      moreL.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      moreL.onmouseover = function() {
        moreL.style.color = 'rgb(0, 0, 0)';
        moreL.style.borderColor = '#000000';
        moreL.style.backgroundColor = '#ffffff';
      };
      moreL.onmouseout = function() {
        moreL.style.color = 'rgb(255, 255, 255)';
        moreL.style.borderColor = '#ffffff';
        moreL.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      };
  
      moreJ.style.color = 'rgb(255, 255, 255)';
      moreJ.style.borderColor = '#ffffff';
      moreJ.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      moreJ.onmouseover = function() {
        moreJ.style.color = 'rgb(0, 0, 0)';
        moreJ.style.borderColor = '#000000';
        moreJ.style.backgroundColor = '#ffffff';
      };
      moreJ.onmouseout = function() {
        moreJ.style.color = 'rgb(255, 255, 255)';
        moreJ.style.borderColor = '#ffffff';
        moreJ.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      };
  
      moreG.style.color = 'rgb(255, 255, 255)';
      moreG.style.borderColor = '#ffffff';
      moreG.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      moreG.onmouseover = function() {
        moreG.style.color = 'rgb(0, 0, 0)';
        moreG.style.borderColor = '#000000';
        moreG.style.backgroundColor = '#ffffff';
      };
      moreG.onmouseout = function() {
        moreG.style.color = 'rgb(255, 255, 255)';
        moreG.style.borderColor = '#ffffff';
        moreG.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      };
  
      moreP.style.color = 'rgb(255, 255, 255)';
      moreP.style.borderColor = '#ffffff';
      moreP.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      moreP.onmouseover = function() {
        moreP.style.color = 'rgb(0, 0, 0)';
        moreP.style.borderColor = '#000000';
        moreP.style.backgroundColor = '#ffffff';
      };
      moreP.onmouseout = function() {
        moreP.style.color = 'rgb(255, 255, 255)';
        moreP.style.borderColor = '#ffffff';
        moreP.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      };
  
      moreW.style.color = 'rgb(255, 255, 255)';
      moreW.style.borderColor = '#ffffff';
      moreW.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      moreW.onmouseover = function() {
        moreW.style.color = 'rgb(0, 0, 0)';
        moreW.style.borderColor = '#000000';
        moreW.style.backgroundColor = '#ffffff';
      };
      moreW.onmouseout = function() {
        moreW.style.color = 'rgb(255, 255, 255)';
        moreW.style.borderColor = '#ffffff';
        moreW.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      };
    } else {
      body.style.backgroundColor = '#EEEEEE';
      body.style.color = '#DDDDDD';
      about.style.backgroundColor = '#D3D5FD';
      proiecte.style.color = '#0B0B0D';
      contact.style.backgroundColor = '#D3D5FD';
      vidbx.style.backgroundColor = '#ffffff';
      vidbx.style.borderColor = '#474A56';
      vidbx1.style.backgroundColor = '#ffffff';
      vidbx1.style.borderColor = '#474A56';
      vidbx2.style.backgroundColor = '#ffffff';
      vidbx2.style.borderColor = '#474A56';
      vidbx3.style.backgroundColor = '#ffffff';
      vidbx3.style.borderColor = '#474A56';
      vidbx4.style.backgroundColor = '#ffffff';
      vidbx4.style.borderColor = '#474A56';
      button.textContent = 'Light Mode';

      moreL.style.color = '#000000';
      moreL.style.borderColor = '#000000';
      moreL.style.backgroundColor = '#ffffff';
      moreL.onmouseover = function() {
        moreL.style.color = 'rgb(255, 255, 255)';
        moreL.style.borderColor = '#ffffff';
        moreL.style.backgroundColor = '#000000';
      };
      moreL.onmouseout = function() {
        moreL.style.color = 'rgb(0, 0, 0)';
        moreL.style.borderColor = '#000000';
        moreL.style.backgroundColor = '#ffffff';
      };
  
      moreJ.style.color = 'rgb(0, 0, 0)';
      moreJ.style.borderColor = '#000000';
      moreJ.style.backgroundColor = '#ffffff';
      moreJ.onmouseover = function() {
        moreJ.style.color = 'rgb(255, 255, 255)';
        moreJ.style.borderColor = '#ffffff';
        moreJ.style.backgroundColor = '#000000';
      };
      moreJ.onmouseout = function() {
        moreJ.style.color = 'rgb(0, 0, 0)';
        moreJ.style.borderColor = '#000000';
        moreJ.style.backgroundColor = '#ffffff';
      };
  
      moreG.style.color = 'rgb(0, 0, 0)';
      moreG.style.borderColor = '#000000';
      moreG.style.backgroundColor = '#ffffff';
      moreG.onmouseover = function() {
        moreG.style.color = 'rgb(255, 255, 255)';
        moreG.style.borderColor = '#ffffff';
        moreG.style.backgroundColor = '#000000';
      };
      moreG.onmouseout = function() {
        moreG.style.color = 'rgb(0, 0, 0)';
        moreG.style.borderColor = '#000000';
        moreG.style.backgroundColor = '#ffffff';
      };
  
      moreP.style.color = 'rgb(0, 0, 0)';
      moreP.style.borderColor = '#000000';
      moreP.style.backgroundColor = '#ffffff';
      moreP.onmouseover = function() {
        moreP.style.color = 'rgb(255, 255, 255)';
        moreP.style.borderColor = '#ffffff';
        moreP.style.backgroundColor = '#000000';
      };
      moreP.onmouseout = function() {
        moreP.style.color = 'rgb(0, 0, 0)';
        moreP.style.borderColor = '#000000';
        moreP.style.backgroundColor = '#ffffff';
      };
  
      moreW.style.color = 'rgb(0, 0, 0)';
      moreW.style.borderColor = '#000000';
      moreW.style.backgroundColor = '#ffffff';
      moreW.onmouseover = function() {
        moreW.style.color = 'rgb(255, 255, 255)';
        moreW.style.borderColor = '#ffffff';
        moreW.style.backgroundColor = '#000000';
      };
      moreW.onmouseout = function() {
        moreW.style.color = 'rgb(0, 0, 0)';
        moreW.style.borderColor = '#000000';
        moreW.style.backgroundColor = '#ffffff';
      };
    }
  }
  

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var container = document.querySelector('.container');
    var containerTop = container.getBoundingClientRect().top;

    if (containerTop <= -180) {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById(".navbar").style.top = "0";
  } else {
    document.getElementById(".navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


document.addEventListener('DOMContentLoaded', function() {
    var navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            navbarLinks.forEach(function(navbarLink) {
                navbarLink.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
});

document.querySelectorAll("#proiecte .containervid .video").forEach(videoContainer => {
    videoContainer.addEventListener('click', () => {
        const popup = document.querySelector("#proiecte .popup");
        const videoSrc = videoContainer.querySelector("video").getAttribute("src");
        const popupVideo = popup.querySelector("video");
        if (popup && videoSrc && popupVideo) {
            popup.style.display = "block";
            popupVideo.src = videoSrc;
            document.getElementById('blur').style.filter = "blur(3px)";
            document.getElementById('containervid').style.filter = "blur(3px)";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.moreL, .moreJ, .moreG, .moreP, .moreW').forEach(button => {
      button.addEventListener('click', function() {
          document.getElementById('blur').style.filter = "blur(3px)";
          document.getElementById('containervid').style.filter = "blur(3px)";
          const targetClass = button.classList[1];
          const popup = document.querySelector(`.mult${targetClass}`);
          if (popup) {
              popup.style.display = 'block';
          }
      });
  });
});


document.querySelectorAll(".prez .popup").forEach(close => {
  close.onclick = () => {
      close.closest('.popup').style.display = "none";
      document.getElementById('blur').style.filter = "none";
      document.getElementById('containervid').style.filter = "none";
  };
});

document.querySelectorAll(".prez .multL").forEach(close => {
  close.onclick = () => {
      close.closest('.multL').style.display = "none";
      document.getElementById('blur').style.filter = "none";
      document.getElementById('containervid').style.filter = "none";
  };
});

document.addEventListener('DOMContentLoaded', function() {
  const moreLButton = document.querySelector('.moreL');
  const multLDetails = document.querySelector('.multL');

  moreLButton.addEventListener('click', function() {
      multLDetails.style.display = 'block';
      document.getElementById('blur').style.filter = "blur(3px)";
      document.getElementById('containervid').style.filter = "blur(3px)";
  });
});

document.querySelectorAll(".prez .multJ").forEach(close => {
  close.onclick = () => {
      close.closest('.multJ').style.display = "none";
      document.getElementById('blur').style.filter = "none";
      document.getElementById('containervid').style.filter = "none";
  };
});

document.addEventListener('DOMContentLoaded', function() {
  const moreLButton = document.querySelector('.moreJ');
  const multLDetails = document.querySelector('.multJ');

  moreLButton.addEventListener('click', function() {
      multLDetails.style.display = 'block';
      document.getElementById('blur').style.filter = "blur(3px)";
      document.getElementById('containervid').style.filter = "blur(3px)";
  });
});

document.querySelectorAll(".prez .multG").forEach(close => {
  close.onclick = () => {
      close.closest('.multG').style.display = "none";
      document.getElementById('blur').style.filter = "none";
      document.getElementById('containervid').style.filter = "none";
  };
});

document.addEventListener('DOMContentLoaded', function() {
  const moreLButton = document.querySelector('.moreG');
  const multLDetails = document.querySelector('.multG');

  moreLButton.addEventListener('click', function() {
      multLDetails.style.display = 'block';
      document.getElementById('blur').style.filter = "blur(3px)";
      document.getElementById('containervid').style.filter = "blur(3px)";
  });
});

document.querySelectorAll(".prez .multP").forEach(close => {
    close.onclick = () => {
        close.closest('.multP').style.display = "none";
        document.getElementById('blur').style.filter = "none";
        document.getElementById('containervid').style.filter = "none";
    };
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const moreLButton = document.querySelector('.moreP');
    const multLDetails = document.querySelector('.multP');
  
    moreLButton.addEventListener('click', function() {
        multLDetails.style.display = 'block';
        document.getElementById('blur').style.filter = "blur(3px)";
        document.getElementById('containervid').style.filter = "blur(3px)";
    });
  });

  document.querySelectorAll(".prez .multW").forEach(close => {
    close.onclick = () => {
        close.closest('.multW').style.display = "none";
        document.getElementById('blur').style.filter = "none";
        document.getElementById('containervid').style.filter = "none";
    };
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const moreLButton = document.querySelector('.moreW');
    const multLDetails = document.querySelector('.multW');
  
    moreLButton.addEventListener('click', function() {
        multLDetails.style.display = 'block';
        document.getElementById('blur').style.filter = "blur(3px)";
        document.getElementById('containervid').style.filter = "blur(3px)";
    });
  });

var buttons = document.querySelectorAll('.moreL, .moreJ, .moreG, .moreP, .moreW');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var scrollToHeight;
        if (window.matchMedia('(max-width: 768px)').matches) {
            scrollToHeight = 2930;
        } else {
            scrollToHeight = 1790;
        }
        window.scrollTo({
            top: scrollToHeight,
            behavior: 'smooth'
        });
    });
});

var buttons = document.querySelectorAll('.video');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var scrollToHeight;
        if (window.matchMedia('(max-width: 768px)').matches) {
          scrollToHeight = 3450;
          document.getElementById('closevds').style.top = "1020px";
        } else {
            scrollToHeight = 2000;
            document.getElementById('closevds').style.top = "240px";
        }
        window.scrollTo({
            top: scrollToHeight,
            behavior: 'smooth'
        });
    });
});

function toggleVisibility(id, event) {
    var paragraph = document.getElementById(id);
    var displayStyle = window.getComputedStyle(paragraph).display;
    if (displayStyle === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

function toggleVisibility(id, event) {
    event.stopPropagation();
    var paragraph = document.getElementById(id);
    var displayStyle = window.getComputedStyle(paragraph).display;
    if (displayStyle === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

document.querySelector('.mini').addEventListener('click', function() {
    var paragraphs = document.querySelectorAll('.mini p');
    paragraphs.forEach(function(paragraph) {
        paragraph.style.display = 'none';
    });
});

