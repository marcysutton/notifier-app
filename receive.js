// var receiveApp = document.getElementById('receiveApp');
// My API key: ewowfemdpfbnjyvi

var peer = new Peer({key: '3j9s87q2v9yynwmi'});

peer.on('open', function(data) {
  peerId = peer.id;

  $.ajax({
    type: "POST",
    headers: {'Content-Type': 'application/json'},
    url: 'user-id.json',
    data: {
      id: peerId
    },
    success: success
  });
});

var conn, peerId;

peer.on('connection', function(connection) {
  conn = connection;
  console.log(connection);

  conn.on('data', handleMessage);
});

peer.on('error', function(err) {
  console.log(err);
});

function handleMessage(data) {
  console.log(data);
}
function success(data) {
  console.log('Success!', data);
}
