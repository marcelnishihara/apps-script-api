function doGet(e) {
  if (!isAuthorized(e)) {
    return buildResponse('error', 'not authorized')
  } else {
    return buildResponse('success', 'authorized')
  }
}


function isAuthorized(e) {
  return 'key' in e.parameters && e.parameters.key[0] === API_KEY
}


function buildResponse(statusValue, messageValue) {
  let objMsgSuccess = { status : statusValue , message : messageValue }
  let output = JSON.stringify(objMsgSuccess)
  return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON)
}
