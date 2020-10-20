const fs = require('fs')
const youtubedl = require('youtube-dl')

//Parametro para coletar o argumento ao executar o script:
var url = process.argv[2];

const video = youtubedl(url,
// Optional arguments passed to youtube-dl.
  //	['--format=18'],
  // Additional options can be given for calling `child_process.execFile()`.
//	{ cwd: __dirname })
)
// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started')
  console.log('filename: ' + info._filename)
  console.log('size: ' + info.size)
//})

video.pipe(fs.createWriteStream(info._filename))
//video.pipe(fs.createWriteStream('myvideo.mp4'))
})
