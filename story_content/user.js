function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67mx8pgXRVp":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementByld('bgSong');
audio.src="music.mp3";
audio.load();
audio.play();
audio.volume = 0.4;
}

